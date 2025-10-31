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
      "1v1.lol",
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
      "basket-random",
      "firewater",
      "flappy-2048",
      "flappybird",
      "friendlyfire",
      "geometry",
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
  const link = document.createElement("a");

  const currentPath = window.location.pathname;
  const baseDir = currentPath.substring(0, currentPath.lastIndexOf("/") + 1);
  link.href = `/html5${baseDir}${folder}/`;

  link.textContent = folder.replace(/-/g, " ");
  link.dataset.name = folder;
  link.className = "folder";
  link.target = "_blank";
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
          // cache timestamp
          try { localStorage.setItem(captchaKey, JSON.stringify({ts: Date.now()})); } catch (e) {}
          // fade out and remove overlay
          overlay.classList.add('clearing');
          setTimeout(() => { overlay.style.display = 'none'; }, 650);
        } else {
          result.textContent = 'Incorrect assembly, try again.';
        }
      };
    })();