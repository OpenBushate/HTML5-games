    const folders = [
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
    
folders.forEach(folder => {
  const parsed = parseFolderEntry(folder);
  const link = document.createElement("a");

  const currentPath = window.location.pathname;
  const baseDir = currentPath.substring(0, currentPath.lastIndexOf("/") + 1);
  // target page (original game folder)
  const targetUrl = `/html5${baseDir}${parsed.slug}/`;
  // open inside a cloaking wrapper so pages keep the same header when opened
  link.href = `cloak.html?url=${encodeURIComponent(targetUrl)}`;
  link.dataset.original = targetUrl;

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

const toggleButton = document.getElementById('darkModeToggle');

if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = 'Light Mode';
} else {
  toggleButton.textContent = 'Dark Mode';
}

toggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode); 
  this.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});
    (function(){
      const imageSrc = "thegloriusgoat.png";
      const rows = 3, cols = 3, pieceSize = 100;
      const captchaKey = 'jigsawCaptchaPassed';
      const captchaMaxAge = 7 * 24 * 60 * 60 * 1000; // 7 days

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

      // submit
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
      // default path and 1 year max-age
      const maxAge = opts.maxAge || 365 * 24 * 60 * 60; // seconds
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

    const exportBtn = document.getElementById('exportCacheBtn');
    const importBtn = document.getElementById('importCacheBtn');
    const importInput = document.getElementById('importFileInput');

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

    window.exportCache = exportCache;
    window.importCacheFromObject = importCacheFromObject;
  })();