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
    try {
      if (window.opener && !window.opener.closed) {
        try { window.opener.focus(); } catch (e) {}
        try { window.close(); return; } catch (e) {}
      }
    } catch (e) {}
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

  let defaultTitle = 'Nate Bush 🔥';
  try {
    if (window.opener && !window.opener.closed && window.opener.document && window.opener.document.title) {
      defaultTitle = window.opener.document.title;
    }
  } catch (e) {
  }
  document.title = defaultTitle;

  frame.src = url;

  let loaded = false;
  frame.addEventListener('load', function(){
    loaded = true;
  });

  setTimeout(function(){
    if (!loaded) {
      msg.style.display = 'block';
      msg.innerHTML = 'If the game failed to load, it may block being embedded (X-Frame-Options) or be cross-origin.\n<a href="'+encodeURI(url)+'" target="_blank">Open original</a>';
    }
  }, 1500);

})();
