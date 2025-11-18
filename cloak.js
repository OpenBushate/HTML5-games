// cloak.js - reads ?url=... and loads it into the iframe while showing a consistent header
(function(){
  function getParam(name) {
    const params = new URLSearchParams(location.search);
    return params.get(name);
  }

  const raw = getParam('url');
  const frame = document.getElementById('cloakFrame');
  const msg = document.getElementById('cloakMessage');
  const backBtn = document.getElementById('backBtn');

  backBtn.addEventListener('click', function(){
    // Try to close the tab or return to the opener if available, otherwise navigate back to index
    try {
      if (window.opener && !window.opener.closed) {
        try { window.opener.focus(); } catch (e) {}
        try { window.close(); return; } catch (e) {}
      }
    } catch (e) {}
    // fallback
    window.location.href = '/index.html';
  });

  if (!raw) {
    msg.style.display = 'block';
    msg.textContent = 'No URL specified.';
    document.title = 'Invalid';
    return;
  }

  let url;
  try { url = decodeURIComponent(raw); } catch (e) { url = raw; }

  // Keep the tab title the same as the opener (index) when possible, otherwise use a sensible default
  let defaultTitle = 'Nate Bush 🔥';
  try {
    if (window.opener && !window.opener.closed && window.opener.document && window.opener.document.title) {
      defaultTitle = window.opener.document.title;
    }
  } catch (e) {
    // cross-origin opener access may fail; ignore
  }
  document.title = defaultTitle;

  // load in iframe. Note: cross-origin pages may block embedding via X-Frame-Options.
  frame.src = url;

  // show an explanatory message if the iframe doesn't load (best-effort)
  let loaded = false;
  frame.addEventListener('load', function(){
    loaded = true;
    // We intentionally keep the tab title stable (index title). Do not override it on iframe load.
  });

  // if iframe fails to load within short time, show a note (can't reliably detect all failures)
  setTimeout(function(){
    if (!loaded) {
      msg.style.display = 'block';
      msg.innerHTML = 'If the game failed to load, it may block being embedded (X-Frame-Options) or be cross-origin.\n<a href="'+encodeURI(url)+'" target="_blank">Open original</a>';
    }
  }, 1500);

})();
