// ==UserScript==
// @name         Wide Google
// @namespace    http://github.com/mryabets
// @version      1.0
// @description  Full-width Google search results
// @author       mryabets
// @match        https://www.google.com/search?*
// @exclude      https://www.google.com/search?*tbm=nws*
// @run-at       document-start
// @downloadURL  https://raw.github.com/mryabets/wide-google/main/wide-google.user.js
// @updateURL    https://raw.github.com/mryabets/wide-google/main/wide-google.user.js
// ==/UserScript==

(function () {
  const css = `
div#rcnt {
  display: block;
  margin: 0 10px;
}
div#center_col {
}
@media (min-width: 700px) {
  div#rcnt {
    width: calc(100% - 420px);
    margin: 0 auto;
    min-width: 680px;
  }
}
@media (min-width: 1100px) {
  div#rcnt {
    margin: 0 210px;
  }
}
    `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();
