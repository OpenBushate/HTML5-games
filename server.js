const express = require('express');
const path = require('path');

const http = require('http');
const { Server } = require('socket.io');
const session = require('express-session');
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3000;

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Sessions (used for admin auth)
app.use(
  session({
  secret: process.env.SESSION_SECRET || 'change_this_secret',
  resave: false,
  saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  })
);
// Admin credentials (override via environment variables in production)
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'password';
function requireAdmin(req, res, next) {
  if (req.session && req.session.isAdmin) return next();
  // If request is AJAX, return 401, otherwise redirect to login page
  if (req.xhr || req.headers.accept?.includes('application/json')) return res.status(401).json({ error: 'Unauthorized' });
  return res.redirect('/admin/login.html');
}
// Login endpoint
app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    req.session.isAdmin = true;
    return res.redirect('/admin/index.html');
  }
  return res.redirect('/admin/login.html?error=1');
});

// Logout
app.post('/admin/logout', requireAdmin, (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});
// Announcement endpoint — only for admin
app.post('/admin/announce', requireAdmin, (req, res) => {
  const { message, duration } = req.body;
  if (!message || typeof message !== 'string') return res.status(400).json({ error: 'Message required' });
  console.log('Announcement from admin:', message, 'duration=', duration);
  io.emit('announcement', { message, duration: Number(duration) || 8000 });
  return res.json({ ok: true });
});

// Guard admin GET routes so admin pages (except login) require auth
app.use('/admin', (req, res, next) => {
  // Allow the login page and the POST login route to pass through
  if (req.path === '/login.html' || req.path === '/login') return next();
  // For any other admin GET, require admin session
  if (req.method === 'GET') return requireAdmin(req, res, next);
  return next();
});

// Serve static files from project root (after admin guard)
app.use(express.static(path.join(__dirname)));
// Fallback for client-side routes: serve index.html (avoid overriding static files)
app.get('*', (req, res) => {
  const requested = req.path;
  if (path.extname(requested)) {
    return res.status(404).send('Not found');
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Socket.IO connections
io.on('connection', (socket) => {
  // currently nothing required on connect; announcements are emitted from server
  socket.on('ping', () => socket.emit('pong'));
});

server.listen(PORT, () => {
  console.log(`HTML5-games server running: http://localhost:${PORT}`);
});

