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
      "xx142-b2exe"
    ];
    
    const container = document.getElementById("folders");
    const noResultsMessage = document.getElementById("noResults");
    const searchInput = document.getElementById("searchInput");
    const changelogOverlay = document.getElementById("changelogOverlay");
    const closeChangelogBtn = document.getElementById("closeChangelog");
    
    const changelogFolder = document.createElement("div");
    changelogFolder.className = "folder changelog-folder";
    changelogFolder.textContent = "changelog";
    container.appendChild(changelogFolder);

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
  container.appendChild(link);
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