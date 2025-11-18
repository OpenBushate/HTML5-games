// Simple announcement client. Connects to Socket.IO and displays banners.
(function(){
  if (window.__announceClientInstalled) return;
  window.__announceClientInstalled = true;

  function createBanner(){
    const el = document.createElement('div');
    el.id = 'announcement-banner';
    el.style.position = 'fixed';
    el.style.top = '12px';
    el.style.left = '50%';
    el.style.transform = 'translateX(-50%)';
    el.style.zIndex = 99999;
    el.style.maxWidth = '90%';
    el.style.padding = '12px 18px';
    el.style.background = 'rgba(0,0,0,0.85)';
    el.style.color = '#fff';
    el.style.borderRadius = '8px';
    el.style.boxShadow = '0 6px 24px rgba(0,0,0,0.3)';
    el.style.fontSize = '16px';
    el.style.display = 'none';
    document.body.appendChild(el);
    return el;
  }

  function showBanner(msg, duration){
    const el = document.getElementById('announcement-banner') || createBanner();
    el.textContent = msg;
    el.style.display = 'block';
    if (el._timeout) clearTimeout(el._timeout);
    el._timeout = setTimeout(()=> el.style.display = 'none', duration || 8000);
  }

  // wait for socket.io client script to be available
  function whenIoReady(cb){
    if (window.io) return cb();
    const s = document.createElement('script');
    s.src = '/socket.io/socket.io.js';
    s.onload = cb;
    s.onerror = ()=>{ console.warn('Could not load socket.io client'); };
    document.head.appendChild(s);
  }

  whenIoReady(()=>{
    try{
      const socket = io();
      socket.on('connect', ()=>{
        console.debug('[announce-client] connected', socket.id);
      });
      socket.on('connect_error', (err)=>{
        console.warn('[announce-client] connect_error', err);
      });
      socket.on('announcement', (data)=>{
        console.debug('[announce-client] announcement', data);
        const msg = data?.message || data;
        const duration = Number(data?.duration) || 8000;
        showBanner(msg, duration);
      });
      socket.on('disconnect', (reason)=>{
        console.debug('[announce-client] disconnected', reason);
      });
    } catch(e){ console.warn('announce client error', e); }
  });
})();
