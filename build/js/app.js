/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(2);\n\n__webpack_require__(4);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2NvbW1vbic7XG5pbXBvcnQgJy4vY29tcG9uZW50cyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _constants = __webpack_require__(3);\n\n!('ontouchstart' in window) && _constants.BODY.classList.add(_constants.NO_TOUCH);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvY29tbW9uLmpzP2JjNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCT0RZLCBOT19UT1VDSH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4hKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgJiYgQk9EWS5jbGFzc0xpc3QuYWRkKE5PX1RPVUNIKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tbW9uLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar NO_TOUCH = exports.NO_TOUCH = 'no-touch';\n\nvar BODY = exports.BODY = document.querySelector('body');\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvY29uc3RhbnRzLmpzPzZhNzIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IE5PX1RPVUNIID0gJ25vLXRvdWNoJztcblxuZXhwb3J0IGNvbnN0IEJPRFkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbnN0YW50cy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(5);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9pbmRleC5qcz8xZGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9yaXBwbGUnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function (ELEMENT) {\n  ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;\n  ELEMENT.closest = ELEMENT.closest || function closest(selector) {\n    if (!this) return null;\n    if (this.matches(selector)) return this;\n    if (!this.parentElement) {\n      return null;\n    } else return this.parentElement.closest(selector);\n  };\n})(Element.prototype);\n\nvar isTouch = function isTouch() {\n  return 'touchstart' in window;\n};\nvar eventName = isTouch() ? 'touchstart' : 'mousedown';\nvar properties = ['animationDuration', 'webkitAnimationDuration', 'msAnimationDuration', 'mozAnimationDuration', 'oAnimationDuration'];\nvar getDuration = function getDuration(el) {\n  var style = window.getComputedStyle(el),\n      duration = style.webkitTransitionDuration;\n\n  for (var i = 0; i <= properties.length; i++) {\n    var property = style[properties[i]];\n\n    if (!property) continue;\n\n    duration = property;\n    break;\n  }\n\n  // fix miliseconds vs seconds\n  duration = duration.indexOf('ms') > -1 ? parseFloat(duration) : parseFloat(duration) * 1000;\n\n  return duration;\n};\n\nvar animation = function animation(e, target) {\n  var width = target.offsetWidth;\n  var height = target.offsetHeight;\n  var size = width >= height ? width : height;\n  var offset = target.getBoundingClientRect();\n  var pageX = e.type !== 'touchstart' ? e.pageX : e.touches[0].clientX;\n  var pageY = e.type !== 'touchstart' ? e.pageY : e.touches[0].clientY;\n  var x = pageX - offset.left;\n  var y = pageY - offset.top;\n\n  var circle = document.createElement('span');\n\n  circle.classList.add('ripple-circle');\n  circle.style.top = y - size / 2 + 'px';\n  circle.style.left = x - size / 2 + 'px';\n  circle.style.width = size + 'px';\n  circle.style.height = size + 'px';\n  target.appendChild(circle);\n\n  var duration = getDuration(circle);\n\n  var deleteCircle = setTimeout(function () {\n    return target.removeChild(circle);\n  }, duration + 50);\n  var animationEnd = function animationEnd(e) {\n    target.removeChild(circle);\n    clearTimeout(deleteCircle);\n  };\n\n  circle.addEventListener('animationend', animationEnd, false);\n  circle.addEventListener('webkitAnimationEnd', animationEnd, false);\n};\n\ndocument.addEventListener(eventName, function (e) {\n  var target = e.target.closest('[data-animation*=\"ripple\"]');\n  if (target) animation(e, target);\n}, false);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9yaXBwbGUuanM/YjkyZCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oRUxFTUVOVCkge1xuICBFTEVNRU5ULm1hdGNoZXMgPSBFTEVNRU5ULm1hdGNoZXMgfHwgRUxFTUVOVC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgRUxFTUVOVC5tc01hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULm9NYXRjaGVzU2VsZWN0b3IgfHwgRUxFTUVOVC53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG4gIEVMRU1FTlQuY2xvc2VzdCA9IEVMRU1FTlQuY2xvc2VzdCB8fCBmdW5jdGlvbiBjbG9zZXN0KHNlbGVjdG9yKSB7XG4gICAgaWYgKCF0aGlzKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodGhpcy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHRoaXM7XG4gICAgaWYgKCF0aGlzLnBhcmVudEVsZW1lbnQpIHtyZXR1cm4gbnVsbDt9XG4gICAgZWxzZSByZXR1cm4gdGhpcy5wYXJlbnRFbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICB9O1xufShFbGVtZW50LnByb3RvdHlwZSkpO1xuXG5cbmNvbnN0IGlzVG91Y2ggPSAoKSA9PiAndG91Y2hzdGFydCcgaW4gd2luZG93O1xuY29uc3QgZXZlbnROYW1lID0gaXNUb3VjaCgpID8gJ3RvdWNoc3RhcnQnIDogJ21vdXNlZG93bic7XG5jb25zdCBwcm9wZXJ0aWVzID0gW1xuICAnYW5pbWF0aW9uRHVyYXRpb24nLFxuICAnd2Via2l0QW5pbWF0aW9uRHVyYXRpb24nLFxuICAnbXNBbmltYXRpb25EdXJhdGlvbicsXG4gICdtb3pBbmltYXRpb25EdXJhdGlvbicsXG4gICdvQW5pbWF0aW9uRHVyYXRpb24nXG5dO1xuY29uc3QgZ2V0RHVyYXRpb24gPSAoZWwpID0+IHtcbiAgbGV0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLFxuICAgIGR1cmF0aW9uID0gc3R5bGUud2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uOyBcblxuICBmb3IgKGxldCBpID0gMDsgaSA8PSBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHByb3BlcnR5ID0gc3R5bGVbcHJvcGVydGllc1tpXV07XG5cbiAgICBpZiAoIXByb3BlcnR5KSBjb250aW51ZTtcblxuICAgIGR1cmF0aW9uID0gcHJvcGVydHk7XG4gICAgYnJlYWs7XG4gIH1cblxuICAvLyBmaXggbWlsaXNlY29uZHMgdnMgc2Vjb25kc1xuICBkdXJhdGlvbiA9IChkdXJhdGlvbi5pbmRleE9mKCdtcycpPi0xKSA/IHBhcnNlRmxvYXQoZHVyYXRpb24pIDogcGFyc2VGbG9hdChkdXJhdGlvbikqMTAwMDtcblxuXG4gIHJldHVybiBkdXJhdGlvbjtcbn07XG5cbmNvbnN0IGFuaW1hdGlvbiA9IChlLCB0YXJnZXQpID0+IHtcbiAgY29uc3Qgd2lkdGggPSB0YXJnZXQub2Zmc2V0V2lkdGg7XG4gIGNvbnN0IGhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gIGNvbnN0IHNpemUgPSB3aWR0aCA+PSBoZWlnaHQgPyB3aWR0aCA6IGhlaWdodDtcbiAgY29uc3Qgb2Zmc2V0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBwYWdlWCA9IGUudHlwZSAhPT0gJ3RvdWNoc3RhcnQnID8gZS5wYWdlWCA6IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICBjb25zdCBwYWdlWSA9IGUudHlwZSAhPT0gJ3RvdWNoc3RhcnQnID8gZS5wYWdlWSA6IGUudG91Y2hlc1swXS5jbGllbnRZO1xuICBjb25zdCB4ID0gcGFnZVggLSBvZmZzZXQubGVmdDtcbiAgY29uc3QgeSA9IHBhZ2VZIC0gb2Zmc2V0LnRvcDtcbiAgICBcbiAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIFxuICBjaXJjbGUuY2xhc3NMaXN0LmFkZCgncmlwcGxlLWNpcmNsZScpO1xuICBjaXJjbGUuc3R5bGUudG9wID0gYCR7eSAtIHNpemUvMn1weGA7XG4gIGNpcmNsZS5zdHlsZS5sZWZ0ID0gYCR7eCAtIHNpemUvMn1weGA7XG4gIGNpcmNsZS5zdHlsZS53aWR0aCA9IGAke3NpemV9cHhgO1xuICBjaXJjbGUuc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XG4gIHRhcmdldC5hcHBlbmRDaGlsZChjaXJjbGUpO1xuXG4gIGNvbnN0IGR1cmF0aW9uID0gZ2V0RHVyYXRpb24oY2lyY2xlKTtcblxuICBjb25zdCBkZWxldGVDaXJjbGUgPSBzZXRUaW1lb3V0KCgpID0+IHRhcmdldC5yZW1vdmVDaGlsZChjaXJjbGUpLCBkdXJhdGlvbiArIDUwKTtcbiAgY29uc3QgYW5pbWF0aW9uRW5kID0gZSA9PiB7XG4gICAgdGFyZ2V0LnJlbW92ZUNoaWxkKGNpcmNsZSk7XG4gICAgY2xlYXJUaW1lb3V0KGRlbGV0ZUNpcmNsZSk7XG4gIH07XG5cbiAgY2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGFuaW1hdGlvbkVuZCwgZmFsc2UpO1xuICBjaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0QW5pbWF0aW9uRW5kJywgYW5pbWF0aW9uRW5kLCBmYWxzZSk7XG5cbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmdW5jdGlvbihlKSB7IFxuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1hbmltYXRpb24qPVwicmlwcGxlXCJdJyk7XG4gIGlmICh0YXJnZXQpIGFuaW1hdGlvbihlLCB0YXJnZXQpO1xufSwgZmFsc2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3JpcHBsZS5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ })
/******/ ]);