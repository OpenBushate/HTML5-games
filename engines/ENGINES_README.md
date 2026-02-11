This folder groups engine and runtime assets.

Moved here:
- scram/    — formerly at repository root; still served at URL prefix `/scram/`.

Notes:
- Server static mounts in `server.js` were updated to serve `engines/scram` at `/scram/`.
- If you want other runtime folders (e.g., `baremux`, `epoxy`, `libcurl`) moved here as well, confirm and I will move them and update `server.js` accordingly.
- After pulling these changes in a browser, unregister service workers for this origin and reload to avoid cached SW intercepting routes.
