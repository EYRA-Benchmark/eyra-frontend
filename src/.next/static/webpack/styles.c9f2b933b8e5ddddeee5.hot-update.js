webpackHotUpdate("styles",{

/***/ "./pages/About/About.module.css":
/*!**************************************!*\
  !*** ./pages/About/About.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"About-module__container--2ybYv","article":"About-module__article--2_HIv","bannerBackground":"About-module__bannerBackground--3BRgL","caption":"About-module__caption--3Skcr","people":"About-module__people--2WBXa","people_banner":"About-module__people_banner--1luMP"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1559899422243");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.c9f2b933b8e5ddddeee5.hot-update.js.map