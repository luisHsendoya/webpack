/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/componente.js":
/*!***************************!*\
  !*** ./src/componente.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "greeting": () => (/* binding */ greeting)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _assets_freedom_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/freedom.jpg */ "./src/assets/freedom.jpg");
/* harmony import */ var _assets_mujica_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/mujica.jpg */ "./src/assets/mujica.jpg");



function greeting(name, age) {
  var elemen = document.createElement('h1');
  elemen.innerText = "hello, ".concat(name, "!!!");
  document.body.append(elemen);
  elemen.classList.add('great'); //agregamos un elemento al documento y un style

  var h2 = document.createElement('h2');
  var div1 = document.createElement('div');
  div1.innerText = "I am ".concat(age, " years old");
  document.body.appendChild(h2);
  h2.appendChild(div1);
  div1.classList.add('age'); //agregamos una imagen

  var image = new Image();
  image.src = _assets_freedom_jpg__WEBPACK_IMPORTED_MODULE_1__;
  document.body.appendChild(image); //agregamos una nueva imageRendering

  var image2 = new Image();
  image2.src = _assets_mujica_jpg__WEBPACK_IMPORTED_MODULE_2__;
  document.body.appendChild(image2);
}

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printMe": () => (/* binding */ printMe)
/* harmony export */ });
function printMe(func) {
  var btn = document.createElement('button');
  btn.innerText = "'Click me and check the console!";
  btn.onclick = func();
  document.body.appendChild(btn);
}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/freedom.jpg":
/*!********************************!*\
  !*** ./src/assets/freedom.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2f573ea8cdb1ee01e3b.jpg";

/***/ }),

/***/ "./src/assets/mujica.jpg":
/*!*******************************!*\
  !*** ./src/assets/mujica.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84ffb371d25f0fd687da.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _componente__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componente */ "./src/componente.js");
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./src/print.js");


(0,_componente__WEBPACK_IMPORTED_MODULE_0__.greeting)("luis", 25);
(0,_print_js__WEBPACK_IMPORTED_MODULE_1__.printMe)(function () {
  console.log('I get called from print.js!');
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9wcmludC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2luZGV4LmNzcz9jNDBkIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgSW1nIGZyb20gJy4vYXNzZXRzL2ZyZWVkb20uanBnJ1xyXG5pbXBvcnQgSW1nMiBmcm9tIFwiLi9hc3NldHMvbXVqaWNhLmpwZ1wiXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdyZWV0aW5nKG5hbWUsIGFnZSkge1xyXG4gICAgY29uc3QgZWxlbWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGVsZW1lbi5pbm5lclRleHQgPSBgaGVsbG8sICR7bmFtZX0hISFgO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZWxlbWVuKTtcclxuICAgIGVsZW1lbi5jbGFzc0xpc3QuYWRkKCdncmVhdCcpXHJcblxyXG4gICAgLy9hZ3JlZ2Ftb3MgdW4gZWxlbWVudG8gYWwgZG9jdW1lbnRvIHkgdW4gc3R5bGVcclxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2MS5pbm5lclRleHQgPSBgSSBhbSAke2FnZX0geWVhcnMgb2xkYFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoMik7XHJcbiAgICBoMi5hcHBlbmRDaGlsZChkaXYxKTtcclxuICAgIGRpdjEuY2xhc3NMaXN0LmFkZCgnYWdlJyk7XHJcblxyXG4gICAgLy9hZ3JlZ2Ftb3MgdW5hIGltYWdlblxyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLnNyYyA9IEltZztcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgIC8vYWdyZWdhbW9zIHVuYSBudWV2YSBpbWFnZVJlbmRlcmluZ1xyXG4gICAgY29uc3QgaW1hZ2UyID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZTIuc3JjID0gSW1nMjtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1hZ2UyKTtcclxuXHJcblxyXG5cclxufSIsImV4cG9ydCBmdW5jdGlvbiBwcmludE1lKGZ1bmMpIHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnRuLmlubmVyVGV4dCA9IFwiJ0NsaWNrIG1lIGFuZCBjaGVjayB0aGUgY29uc29sZSFcIjtcclxuICAgIGJ0bi5vbmNsaWNrID0gZnVuYygpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChidG4pO1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgZ3JlZXRpbmcgfSBmcm9tIFwiLi9jb21wb25lbnRlXCJcclxuaW1wb3J0IHsgcHJpbnRNZSB9IGZyb20gXCIuL3ByaW50LmpzXCJcclxuXHJcbmdyZWV0aW5nKFwibHVpc1wiLCAyNSk7XHJcbnByaW50TWUoKCkgPT4geyBjb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhJyk7IH0pIl0sIm5hbWVzIjpbIkltZyIsIkltZzIiLCJncmVldGluZyIsIm5hbWUiLCJhZ2UiLCJlbGVtZW4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJib2R5IiwiYXBwZW5kIiwiY2xhc3NMaXN0IiwiYWRkIiwiaDIiLCJkaXYxIiwiYXBwZW5kQ2hpbGQiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiaW1hZ2UyIiwicHJpbnRNZSIsImZ1bmMiLCJidG4iLCJvbmNsaWNrIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=