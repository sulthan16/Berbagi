function loadScript(id, scripts) {
  const inHtml = document.getElementById(id);
  while (inHtml.childNodes.length > 0) {
    inHtml.removeChild(inHtml.childNodes[0]);
  }
  scripts.forEach(element => {
    const scriptNode = document.createElement('script');
    scriptNode.setAttribute('src', element);
    scriptNode.setAttribute('type', 'text/javascript');
    inHtml.appendChild(scriptNode);
  });
}

function addCoreScript() {
  const baseUrl = window.location.protocol + '//' + window.location.hostname + (window.location.port && ':' + window.location.port);
  loadScript('scripts', [
    `${baseUrl}/assets/js/custom.js`
  ]);
}

export { loadScript, addCoreScript };
