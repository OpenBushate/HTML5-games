    function initBenMode() {
      function replaceTextInElement(element, skipHead = false) {
        if (element.nodeType === Node.TEXT_NODE) {
          element.textContent = element.textContent.replace(/Nate Bush/g, 'Ben Fleckser')
                                                     .replace(/natebush/gi, 'benfleckser')
                                                     .replace(/nate/gi, 'ben');
        } else {
          // Skip favicon in head to avoid 404 errors
          if (!(skipHead && element.tagName === 'LINK' && element.rel === 'icon')) {
            Array.from(element.attributes || []).forEach(attr => {
              attr.value = attr.value.replace(/Nate Bush/g, 'Ben Fleckser')
                                      .replace(/natebush/gi, 'benfleckser')
                                      .replace(/nate/gi, 'ben');
            });
          }
          Array.from(element.childNodes).forEach(child => replaceTextInElement(child, skipHead));
        }
      }
      
      function applyBenMode() {
        replaceTextInElement(document.documentElement, true);
        document.title = document.title.replace(/Nate Bush/g, 'Ben Fleckser')
                                       .replace(/natebush/gi, 'benfleckser')
                                       .replace(/nate/gi, 'ben');
        
        // Update favicon
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) {
          favicon.href = favicon.href.replace(/thegloriusgoat\.png/gi, 'thegloriusgoat_2.png');
        }
      }
      
      const benModeByHost = window.location.hostname === 'ben.natebush.tech';
      const shouldActivate = benModeByHost || localStorage.getItem('benMode') === 'true';
      if (shouldActivate) {
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', applyBenMode);
        } else {
          applyBenMode();
        }
      }
    }
    
    initBenMode();
    
    const sources = typeof gameSources !== 'undefined' ? gameSources : {};
    
    
    const sourceSelector = document.getElementById('sourceSelector');
    Object.keys(sources).forEach(key => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = sources[key].name;
      sourceSelector.appendChild(option);
    });
    
    
    const foldersHtml5 = sources['html5']?.games || [
      "cuttheropetimetravel",
      "dinosaur",
      "doctor-acorn2",
      "doctor-acorn3",
      "doge2048",
      "dogeminer",
      "smashkarts",
      "doodle-jump",
      "driftboss",
      "openfront",
      "1v1.lol (15)",
      "a-small-world-cup",
      "among-us",
      "ducklife",
      "ducklife2",
      "ducklife3",
      "ducklife4",
      "ducklife5",
      "tunnel-rush",
      "ducklife",
      "temple-run-2",
      "subway-surfers-unity",
      "stickman-hook",
      "retro-bowl-college",
      "edgenotfound",
      "sandboxels",
      "elasticmorty",
      "poker",
      "evilglitch",
      "factoryballsforever",
      "bloons-td",
      "bloons-td-2",
      "bloons-td-3",
      "bloons-td-4",
      "minesweeper",
      "fireboy-and-watergirl-1",
      "fireboy-and-watergirl-2",
      "fireboy-and-watergirl-3",
      "fireboy-and-watergirl-4",
      "madalin-stunt-cars-2",
      "madalin-stunt-cars-3",
      "little-alchemy",
      "google-feud",
      "super-mario-bros-3",
      "fruit-ninja",
      "drift-hunters",
      "cookie-clicker",
      "cookie-clicker-2",
      "circlo",
      "blackjack",
      "bitlife",
      "basket-random (20)",
      "firewater",
      "flappy-2048",
      "flappybird",
      "friendlyfire",
      "geometry",
      "getawayshootout",
      "geometrydash",
      "gopher",
      "hextris",
      "icypurplehead2",
      "icypurplehead3",
      "konnekt",
      "mc1.5.2",
      "mcbeta0.30",
      "mcbeta1.3",
      "minecraft",
      "mc1.12",
      "motox3m",
      "ninjavsevilcorp",
      "packabunchas",
      "pacman",
      "paperio",
      "particleclicker",
      "physicsplayground",
      "pushback",
      "q1k3",
      "rabbit-samurai",
      "rabbit-samurai2",
      "racer",
      "radiusraid",
      "retrobowl",
      "retrohaunt",
      "roadblocks",
      "rooftopsniper",
      "run3",
      "shuttledeck",
      "sleepingbeauty",
      "slope",
      "sm63",
      "sm64",
      "snake",
      "spacecompany",
      "spacegarden",
      "spacehuggers",
      "spaceinvaders",
      "stack",
      "stacktower",
      "tetris",
      "towermaster",
      "underrun",
      "vex3",
      "vex4",
      "vex5",
      "vex6",
      "webretro",
      "learntofly",
      "learntofly2",
      "xx142-b2exe"
    ];

    const foldersSubmodule = sources['monkeygg2.github.io']?.games || [
      "10-minutes-till-dawn",
      "1v1-lol",
      "2048",
      "a-dark-room",
      "abandoned",
      "abandoned-2",
      "ages-of-conflict",
      "aground",
      "amidst-the-sky",
      "ampler-launcher",
      "another-gentlemans-adventure",
      "awesome-tanks",
      "awesome-tanks-2",
      "babel-tower",
      "basket-random",
      "basketball-stars",
      "bit-life",
      "boxing-random",
      "brawl-stars-project-laser",
      "breaklock",
      "chrome-dino",
      "clicker-heroes",
      "clicker-heroes-updated",
      "conways-game-of-life",
      "cookie-clicker",
      "core-ball",
      "crossy-road",
      "cut-the-rope",
      "doge-miner",
      "doodle-jump",
      "drift-boss",
      "drive-mad",
      "drive-mad-s",
      "duck-life-4",
      "dune",
      "eggy-car",
      "evowars",
      "family-feud",
      "fireboy-and-watergirl",
      "fireboy-and-watergirl-2",
      "fireboy-and-watergirl-3",
      "fireboy-and-watergirl-4",
      "flappy-bird",
      "flash",
      "friday-night-funkin",
      "geometry-dash-lite",
      "geometry-dash-remastered",
      "geometry-vibes",
      "geometry-vibes-monster",
      "geometry-vibes-x-ball",
      "getaway-shootout",
      "gons-io",
      "gunspin",
      "hextris",
      "idle-breakout",
      "incremancer",
      "lion-soldiers-vengeance",
      "maptroid",
      "mario-game",
      "monkey-mart",
      "motox3m",
      "n-gon",
      "n-step-steve-part-1",
      "n-step-steve-part-2",
      "ovo",
      "particle-clicker",
      "pcraft",
      "planet-life",
      "progress-knight-quest",
      "progress-knight-reborn",
      "pull-of-war",
      "reach-the-core",
      "restless-wing-syndrome",
      "retro-bowl",
      "retro-bowl-old",
      "rift-shift",
      "rocket-league-2d",
      "rooftop-snipers",
      "rookie-bowman",
      "run-3",
      "run-3-beta",
      "sabercut",
      "sandspiel",
      "scuba-bear",
      "shadow-fight",
      "slice-master",
      "slope",
      "smart-ball",
      "smash-karts",
      "soccer-random",
      "station-saturn",
      "stickman-hook",
      "subway-surfers",
      "subway-surfers-ny",
      "tanuki-sunset",
      "temple-run-2",
      "the-final-earth",
      "the-treasure",
      "there-is-no-game",
      "tic-tac-what",
      "time-shooter",
      "time-shooter-3",
      "tiny-fishing",
      "trace",
      "tunnel-rush",
      "two-ball-3d",
      "vex-3",
      "vex-4",
      "vex-5",
      "vex-6",
      "vex-7",
      "volley-random",
      "web-osu",
      "where-is-the-water",
      "x-trench-run",
      "yohoho"
    ];

    let currentSource = 'html5'; 
    let folders = foldersHtml5; 
    const EXTERNAL_SOURCE_TYPE = 'external-proxy';
    const externalCache = {};

    async function loadExternalGames(sourceKey) {
      if (!externalCache[sourceKey]) externalCache[sourceKey] = { loaded: false, data: [] };
      if (externalCache[sourceKey].loaded) return externalCache[sourceKey].data;
      externalCache[sourceKey].loaded = true;
      const source = sources[sourceKey] || {};
      const dataUrl = source.dataUrl || '/games-proxy.json';
      try {
        const res = await fetch(dataUrl, { cache: 'no-store' });
        if (!res.ok) throw new Error(`Failed to load external games (${res.status})`);
        const data = await res.json();

        let out = [];
        if (Array.isArray(data)) {
          out = data;
        } else if (data && typeof data === 'object') {
          // support { games: { "Name": { path: "..." } } } format (monkeygg2.json)
          if (Array.isArray(data.games)) {
            out = data.games;
          } else if (data.games && typeof data.games === 'object') {
            const basePath = source.path || `/${sourceKey}/games`;
            out = Object.keys(data.games).map(name => {
              const info = data.games[name] || {};
              const urlPath = String(info.path || '').trim();
              let url;
              if (/^(?:https?:)?\/\//.test(urlPath) || urlPath.startsWith('/')) {
                url = urlPath;
              } else {
                const base = basePath.endsWith('/') ? basePath : basePath + '/';
                url = base + urlPath + (urlPath.endsWith('/') ? '' : '/');
              }
              return { name, url };
            });
          }
        }

        externalCache[sourceKey].data = out;
      } catch (e) {
        externalCache[sourceKey].data = [];
      }
      return externalCache[sourceKey].data;
    }

    async function getFoldersForSource(sourceKey) {
      const source = sources[sourceKey] || {};
      // If a source provides a dataUrl, load it (supports both array and
      // object formats like monkeygg2.json). Previously we only loaded when
      // `type` was set to external-proxy which caused monkeygg2 to fall back
      // to the default `html5` list.
      if (source.dataUrl) {
        return await loadExternalGames(sourceKey);
      }
      if (source.type === EXTERNAL_SOURCE_TYPE) {
        return await loadExternalGames(sourceKey);
      }
      return source.games || foldersHtml5;
    }

    async function setSource(sourceKey, persist) {
      currentSource = sourceKey;
      folders = await getFoldersForSource(sourceKey);
      renderFolders();
      if (persist) {
        try { localStorage.setItem('gameSource', sourceKey); } catch (e) {}
      }
    }

    
    try {
      const savedSource = localStorage.getItem('gameSource');

      if (savedSource && sources[savedSource]) {
        // If the user previously saved the default 'html5' but this install
        // includes `monkeygg2.github.io`, prefer that source so users see
        // MonkeyGG2 content instead of the generic html5 list.
        if (savedSource === 'html5' && sources['monkeygg2.github.io']) {
          currentSource = 'monkeygg2.github.io';
        } else {
          currentSource = savedSource;
        }
      }
    } catch (e) {}

  const foldersContainer = document.getElementById("folders");
    const noResultsMessage = document.getElementById("noResults");
    const searchInput = document.getElementById("searchInput");
    const changelogOverlay = document.getElementById("changelogOverlay");
    const closeChangelogBtn = document.getElementById("closeChangelog");
    
    const changelogFolder = document.createElement("div");
    changelogFolder.className = "folder changelog-folder";
    changelogFolder.textContent = "changelog";
  foldersContainer.appendChild(changelogFolder);

    changelogFolder.addEventListener("click", function() {
      changelogOverlay.classList.add("show");
    });
    
    function parseFolderEntry(entry) {
        if (entry && typeof entry === 'object') {
          const name = String(entry.name || entry.title || entry.slug || '').trim();
          const url = String(entry.url || '').trim();
          const display = name || url || 'Untitled';
          const slug = (name || display).toLowerCase().replace(/\s+/g, '-');
          const cost = Math.max(5, Math.floor(display.length / 2));
          return { slug, display, cost, url };
        }
        const str = String(entry || '').trim();
        const m = str.match(/^(.*)\s*\((\d+)\)\s*$/);
        if (m) {
          const slug = m[1].trim();
          const cost = Number(m[2]) || 0;
          const display = slug.replace(/-/g, ' ');
          return { slug, display, cost };
        }
        const slug = str;
        const cost = Math.max(5, Math.floor(slug.length / 2));
        const display = slug.replace(/-/g, ' ');
        return { slug, display, cost };
      }
    
    
    closeChangelogBtn.addEventListener("click", function() {
      changelogOverlay.classList.remove("show");
    });
    
    changelogOverlay.addEventListener("click", function(event) {
      if (event.target === changelogOverlay) {
        changelogOverlay.classList.remove("show");
      }
    });
    
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape" && changelogOverlay.classList.contains("show")) {
        changelogOverlay.classList.remove("show");
        return;
      }
      
      if (event.key === "Escape" && !changelogOverlay.classList.contains("show")) {
        searchInput.value = "";
        searchInput.dispatchEvent(new Event("input"));
        searchInput.focus();
      }
    });
    
    const folderElements = [];
    
function renderFolders() {
  folderElements.forEach(el => el.remove());
  folderElements.length = 0;
  
  folders.forEach(folder => {
    const parsed = parseFolderEntry(folder);
    const link = document.createElement("a");

    const currentPath = window.location.pathname;
    const baseDir = currentPath.substring(0, currentPath.lastIndexOf("/") + 1);
    const source = sources[currentSource] || {};
    const isExternal = source.type === EXTERNAL_SOURCE_TYPE;


    let targetUrl;
    // If the folder entry provides an explicit URL, use it directly (no proxy)
    if (parsed.url) {
      targetUrl = parsed.url;
      if (isExternal) {
        link.href = `proxy.html?url=${encodeURIComponent(targetUrl)}`;
      } else {
        link.href = `cloak.html?url=${encodeURIComponent(targetUrl)}`;
      }
      link.dataset.original = targetUrl;
    } else if (isExternal) {
      // external entry without explicit URL - nothing we can do
      return;
    } else if (source.path) {
      const basePath = source.path;
      if (currentSource === 'html5') {
        targetUrl = `${basePath}${baseDir}${parsed.slug}/`;
      } else {
        targetUrl = `${basePath}/${parsed.slug}/`;
      }
      link.href = `cloak.html?url=${encodeURIComponent(targetUrl)}`;
      link.dataset.original = targetUrl;
    } else {
      
      if (currentSource === 'html5') {
        targetUrl = `/html5${baseDir}${parsed.slug}/`;
      } else {
        targetUrl = `/${currentSource}/games/${parsed.slug}/`;
      }
      link.href = `cloak.html?url=${encodeURIComponent(targetUrl)}`;
      link.dataset.original = targetUrl;
    }

    const cost = parsed.cost;
    link.dataset.cost = String(cost);

    link.textContent = parsed.display;
    link.dataset.name = parsed.slug;
    link.className = "folder";
    link.target = "_blank";

    link.addEventListener('click', function(e) {
      e.preventDefault();
      window.open(this.href, '_blank');
    });

    foldersContainer.appendChild(link);
    folderElements.push(link);
  });
}

async function initializeSource() {
  await setSource(currentSource, false);
  if (sourceSelector) sourceSelector.value = currentSource;
}

initializeSource();

sourceSelector.addEventListener('change', async function() {
  const newSource = this.value;
  if (currentSource !== newSource) {
    await setSource(newSource, true);
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
  }
});

searchInput.addEventListener("input", function() {
  const searchTerm = this.value.toLowerCase().trim();
  let visibleCount = 0;
  
  folderElements.forEach(folderElement => {
    const folderName = folderElement.textContent.toLowerCase();
    if (folderName.includes(searchTerm)) {
      folderElement.classList.remove("hidden");
      visibleCount++;
    } else {
      folderElement.classList.add("hidden");
    }
  });

  if (visibleCount === 0 && searchTerm !== "") {
    noResultsMessage.style.display = "block";
  } else {
    noResultsMessage.style.display = "none";
  }

  if (visibleCount === 0 || searchTerm === "") {
    changelogFolder.classList.remove("hidden");
  } else {
    changelogFolder.classList.add("hidden");
  }
});

const settingsBtn = document.getElementById('settingsBtn');
const settingsOverlay = document.getElementById('settingsOverlay');
const closeSettingsBtn = document.getElementById('closeSettings');
const darkModeCheckbox = document.getElementById('settingsDarkModeCheckbox');
const benModeCheckbox = document.getElementById('settingsBenModeCheckbox');

function applyDarkMode(enabled) {
  if (enabled) document.body.classList.add('dark-mode');
  else document.body.classList.remove('dark-mode');
  try { localStorage.setItem('darkMode', !!enabled); } catch (e) {}
}

function applyBenModeToggle(enabled) {
  try { 
    localStorage.setItem('benMode', !!enabled);
    localStorage.removeItem('jigsawCaptchaPassed');
  } catch (e) {}
  location.reload();
}

const savedDark = localStorage.getItem('darkMode') === 'true';
applyDarkMode(savedDark);
if (darkModeCheckbox) darkModeCheckbox.checked = savedDark;

const benModeByHost = window.location.hostname === 'ben.natebush.tech';
const savedBenMode = benModeByHost || localStorage.getItem('benMode') === 'true';
if (benModeCheckbox) benModeCheckbox.checked = savedBenMode;

if (darkModeCheckbox) darkModeCheckbox.addEventListener('change', function() {
  applyDarkMode(!!this.checked);
});

if (benModeCheckbox) benModeCheckbox.addEventListener('change', function() {
  applyBenModeToggle(!!this.checked);
});

if (settingsBtn && settingsOverlay) {
  settingsBtn.addEventListener('click', () => settingsOverlay.classList.add('show'));
  closeSettingsBtn.addEventListener('click', () => settingsOverlay.classList.remove('show'));
  settingsOverlay.addEventListener('click', (e) => { if (e.target === settingsOverlay) settingsOverlay.classList.remove('show'); });
}
    (function(){
      const benModeByHost = window.location.hostname === 'ben.natebush.tech';
      const isBenMode = benModeByHost || localStorage.getItem('benMode') === 'true';
      const imageSrc = isBenMode ? "thegloriusgoat_2.png" : "thegloriusgoat.png";
      const rows = 3, cols = 3, pieceSize = 100;
      const captchaKey = 'jigsawCaptchaPassed';
      const captchaMaxAge = 7 * 24 * 60 * 60 * 1000; 

      function captchaStillValid() {
        try {
          const raw = localStorage.getItem(captchaKey);
          if (!raw) return false;
          const obj = JSON.parse(raw);
          if (!obj || !obj.ts) return false;
          return (Date.now() - obj.ts) < captchaMaxAge;
        } catch (e) {
          return false;
        }
      }

      const overlay = document.getElementById('jigsawCaptchaOverlay');
      if (captchaStillValid()) {
        overlay.classList.add('clearing');
        setTimeout(() => { overlay.style.display = 'none'; }, 650);
        return;
      }

      let pieces = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          pieces.push({x, y, index: y * cols + x});
        }
      }
      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      shuffle(pieces);

      const puzzleContainer = document.getElementById('puzzleContainer');
      pieces.forEach((piece) => {
        const div = document.createElement('div');
        div.classList.add('piece');
        div.draggable = true;
        div.style.backgroundImage = `url('${imageSrc}')`;
        div.style.backgroundPosition = `-${piece.x * pieceSize}px -${piece.y * pieceSize}px`;
        div.dataset.index = piece.index;
        puzzleContainer.appendChild(div);
      });

      let dragSrcEl = null;
      puzzleContainer.addEventListener('dragstart', function(e) {
        if (e.target.classList.contains('piece')) {
          dragSrcEl = e.target;
          e.target.classList.add('dragging');
          e.dataTransfer.effectAllowed = 'move';
        }
      });
      puzzleContainer.addEventListener('dragend', function(e) {
        if (e.target.classList.contains('piece')) {
          e.target.classList.remove('dragging');
          puzzleContainer.querySelectorAll('.piece.over').forEach(el => el.classList.remove('over'));
        }
      });
      puzzleContainer.addEventListener('dragover', function(e) {
        e.preventDefault();
        if (e.target.classList.contains('piece')) e.target.classList.add('over');
      });
      puzzleContainer.addEventListener('dragleave', function(e) {
        if (e.target.classList.contains('piece')) e.target.classList.remove('over');
      });
      puzzleContainer.addEventListener('drop', function(e) {
        e.preventDefault();
        if (e.target.classList.contains('piece') && dragSrcEl && e.target !== dragSrcEl) {
          const nodes = Array.from(puzzleContainer.children);
          const srcIdx = nodes.indexOf(dragSrcEl);
          const tgtIdx = nodes.indexOf(e.target);
          if (srcIdx > -1 && tgtIdx > -1) {
            if (srcIdx < tgtIdx) puzzleContainer.insertBefore(dragSrcEl, e.target.nextSibling);
            else puzzleContainer.insertBefore(dragSrcEl, e.target);
            puzzleContainer.insertBefore(e.target, puzzleContainer.children[srcIdx]);
          }
        }
        puzzleContainer.querySelectorAll('.piece.over').forEach(el => el.classList.remove('over'));
        dragSrcEl = null;
      });

      
      document.getElementById('captchaSubmitBtn').onclick = function() {
        let solved = true;
        Array.from(puzzleContainer.children).forEach((piece, idx) => {
          if (parseInt(piece.dataset.index) !== idx) solved = false;
        });
        const result = document.getElementById('captchaResult');
        if (solved) {
          result.textContent = 'CAPTCHA Passed!';

          try { localStorage.setItem(captchaKey, JSON.stringify({ts: Date.now()})); } catch (e) {}
          overlay.classList.add('clearing');
          setTimeout(() => { overlay.style.display = 'none'; }, 650);
        } else {
          result.textContent = 'Incorrect assembly, try again.';
        }
      };
    })();

  (function() {
    function readCookies() {
      const raw = document.cookie || "";
      if (!raw) return {};
      return raw.split('; ').reduce((acc, pair) => {
        const eq = pair.indexOf('=');
        if (eq === -1) return acc;
        const name = decodeURIComponent(pair.substring(0, eq));
        const value = decodeURIComponent(pair.substring(eq + 1));
        acc[name] = value;
        return acc;
      }, {});
    }

    function readStorage(storage) {
      const out = {};
      try {
        for (let i = 0; i < storage.length; i++) {
          const key = storage.key(i);
          out[key] = storage.getItem(key);
        }
      } catch (e) {
      }
      return out;
    }

    function downloadJSON(obj, filename) {
      const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    }

    function setCookie(name, value, opts = {}) {
      let cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
      
      const maxAge = opts.maxAge || 365 * 24 * 60 * 60; 
      cookie += '; path=' + (opts.path || '/');
      if (maxAge) cookie += '; max-age=' + String(maxAge);
      if (opts.secure) cookie += '; secure';
      if (opts.sameSite) cookie += '; samesite=' + opts.sameSite;
      document.cookie = cookie;
    }

    function exportCache() {
      const data = {
        meta: {
          origin: location.origin,
          generated: new Date().toISOString()
        },
        cookies: readCookies(),
        localStorage: readStorage(localStorage),
        sessionStorage: readStorage(sessionStorage)
      };
      const filename = `html5games-cache-${Date.now()}.json`;
      downloadJSON(data, filename);
    }

    function importCacheFromObject(data, override = true) {
      if (!data || typeof data !== 'object') throw new Error('Invalid file format');

      if (override) {
        try { localStorage.clear(); } catch (e) {}
        try { sessionStorage.clear(); } catch (e) {}
      }

      if (data.localStorage && typeof data.localStorage === 'object') {
        Object.keys(data.localStorage).forEach(key => {
          try { localStorage.setItem(key, data.localStorage[key]); } catch (e) {}
        });
      }

      if (data.sessionStorage && typeof data.sessionStorage === 'object') {
        Object.keys(data.sessionStorage).forEach(key => {
          try { sessionStorage.setItem(key, data.sessionStorage[key]); } catch (e) {}
        });
      }

      if (data.cookies && typeof data.cookies === 'object') {
        Object.keys(data.cookies).forEach(name => {
          try { setCookie(name, data.cookies[name], { path: '/', maxAge: 365*24*60*60 }); } catch (e) {}
        });
      }
    }

    const exportBtn = document.getElementById('settingsExportCacheBtn');
    const importBtn = document.getElementById('settingsImportCacheBtn');
    const importInput = document.getElementById('settingsImportFileInput');
    const clearBtn = document.getElementById('settingsClearCacheBtn');

    if (exportBtn) exportBtn.addEventListener('click', () => {
      try {
        exportCache();
      } catch (e) {
        alert('Export failed: ' + (e && e.message));
      }
    });

    if (importBtn && importInput) importBtn.addEventListener('click', () => importInput.click());

    if (importInput) importInput.addEventListener('change', function(e) {
      const file = this.files && this.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(ev) {
        try {
          const obj = JSON.parse(String(ev.target.result));
          const proceed = confirm('This will overwrite current localStorage, sessionStorage and set cookies from the file. Continue?');
          if (!proceed) return;
          importCacheFromObject(obj, true);
          alert('Import complete. You may need to reload the page for changes to take full effect.');
        } catch (err) {
          alert('Failed to import file: ' + (err && err.message));
        }
      };
      reader.readAsText(file);
      this.value = '';
    });

    if (clearBtn) clearBtn.addEventListener('click', function() {
      const ok = confirm('This will clear localStorage, sessionStorage and delete cookies for this origin. Continue?');
      if (!ok) return;
      try {
        try { localStorage.clear(); } catch (e) {}
        try { sessionStorage.clear(); } catch (e) {}
        const cookies = readCookies();
        Object.keys(cookies).forEach(name => {
          try { setCookie(name, '', { path: '/', maxAge: 0 }); } catch (e) {}
        });
        alert('Cache cleared. You may need to reload the page for changes to take full effect.');
      } catch (err) {
        alert('Failed to clear cache: ' + (err && err.message));
      }
    });

    window.exportCache = exportCache;
    window.importCacheFromObject = importCacheFromObject;
  })();
