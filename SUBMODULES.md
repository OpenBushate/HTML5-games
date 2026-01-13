# Adding New Submodules

This project supports multiple game sources through git submodules. Here's how to add new ones:

## Step 1: Add the Git Submodule

Run this command in the repository root:

```bash
git submodule add <repository-url> <folder-name>
```

**Example:**
```bash
git submodule add https://github.com/ExampleUser/games-repo example-games
```

This will:
- Clone the repository into the specified folder
- Update `.gitmodules` file
- Create a reference in your git repository

## Step 2: Update the Configuration

Edit `submodules-config.js` and add your new submodule to the `gameSources` object:

```javascript
const gameSources = {
  'html5': {
    name: 'Default Games',
    path: '/html5',
    games: [ /* ... */ ]
  },
  'monkeygg2.github.io': {
    name: 'monkeygg2.github.io',
    path: '/monkeygg2.github.io/games',
    games: [ /* ... */ ]
  },
  // Add your new submodule here:
  'example-games': {
    name: 'Example Games',  // Display name in dropdown
    path: '/example-games/games',  // Path to games folder
    games: [
      "game-1",
      "game-2",
      "game-3"
      // List all game folders here
    ]
  }
};
```

### Configuration Properties:

- **Key** (e.g., `'example-games'`): Must match the submodule folder name
- **name**: Display name shown in the dropdown menu
- **path**: Path structure to the games folder within the submodule
- **games**: Array of game folder names (just the folder names, not full paths)

## Step 3: Get the Game List

To get the list of games from a submodule, run:

```bash
ls <submodule-folder>/games/
```

Or to format it for the config:

```bash
ls <submodule-folder>/games/ | sed 's/^/"/' | sed 's/$/",/' | tr '\n' ' '
```

## Step 4: Commit and Push

```bash
git add .gitmodules <submodule-folder> submodules-config.js
git commit -m "Add new game source: <submodule-name>"
git push
```

## Notes

- The dropdown will automatically populate with all sources defined in `submodules-config.js`
- User's source selection is saved to localStorage
- If a saved source is no longer available, it falls back to 'html5'
- Path structure can vary by submodule - adjust the `path` property accordingly

## Example: Path Structure Variations

If games are at the root:
```javascript
path: '/example-games'
```

If games are in a subdirectory:
```javascript
path: '/example-games/games'
```

If games are in a nested structure:
```javascript
path: '/example-games/public/games'
```
