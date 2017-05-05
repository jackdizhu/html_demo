/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	(function () {
	    'use strict';

	    __webpack_require__(1);
	    __webpack_require__(5);

	    var picker = __webpack_require__(6);

	    // <button class="button button-link pull-right close-picker">确定</button>\
	    // <h1 class="title">选择品牌</h1>\
	    var params = {
	        toolbarTemplate: '<header class="bar bar-nav">\
	              </header>',
	        cssClass: 'pickerCol01',
	        cols: [{
	            textAlign: 'center',
	            values: [1, 2, 3, 4, 5, 6, 7, 8],
	            displayValues: [11, 12, 13, 14, 15, 16, 17, 18]
	        }],
	        formatValue: function formatValue(picker, value, displayValue) {
	            console.log(value);
	            return displayValue;
	        }
	    };

	    var p = $("#picker")[0];

	    picker(params, p);

	    $("#picker")[0].open();
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!./index_picker.css", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!./index_picker.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset 'utf-8';.modal{width:13.5rem;position:absolute;z-index:11000;left:50%;margin-left:-6.75rem;margin-top:0;top:50%;text-align:center;border-radius:.35rem;opacity:0;-webkit-transform:translate3d(0,0,0) scale(1.185);transform:translate3d(0,0,0) scale(1.185);-webkit-transition-property:-webkit-transform,opacity;transition-property:transform,opacity;color:#3d4145;display:none}.modal-in{opacity:1;-webkit-transition-duration:.4s;transition-duration:.4s;-webkit-transform:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1)}.modal-out{opacity:0;z-index:10999;-webkit-transition-duration:.4s;transition-duration:.4s;-webkit-transform:translate3d(0,0,0) scale(.815);transform:translate3d(0,0,0) scale(.815)}.modal-inner{padding:.75rem;border-radius:.35rem .35rem 0 0;position:relative;background:#e8e8e8}.modal-inner:after{content:'';position:absolute;left:0;bottom:0;right:auto;top:auto;height:1px;width:100%;background-color:#b5b5b5;display:block;z-index:15;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.picker-item,.picker-items-col{position:relative;overflow:hidden}.picker-columns{width:100%;height:13rem;z-index:11500}.picker-columns.picker-modal-inline{height:10rem}@media (orientation:landscape) and (max-height:415px){.picker-columns:not(.picker-modal-inline){height:10rem}}.picker-items{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;text-align:right;font-size:1.2rem;-webkit-mask-box-image:-webkit-linear-gradient(bottom,transparent,transparent 5%,#fff 20%,#fff 80%,transparent 95%,transparent);-webkit-mask-box-image:linear-gradient(to top,transparent,transparent 5%,#fff 20%,#fff 80%,transparent 95%,transparent)}.bar+.picker-items{height:10.8rem}.picker-items-col{max-height:100%}.picker-items-col.picker-items-col-left{text-align:left}.picker-items-col.picker-items-col-center{text-align:center}.picker-items-col.picker-items-col-right{text-align:right}.picker-items-col.picker-items-col-divider{color:#3d4145;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.picker-items-col-normal{width:100%}.picker-items-col-wrapper{-webkit-transition:.3s;transition:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.picker-item{height:36px;line-height:36px;padding:0 10px;white-space:nowrap;text-overflow:ellipsis;color:#999;left:0;top:0;width:100%;box-sizing:border-box;-webkit-transition:.3s;transition:.3s}.picker-items-col-absolute .picker-item{position:absolute}.picker-item.picker-item-far{pointer-events:none}.picker-item.picker-selected{color:#3d4145;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transform:rotateX(0);transform:rotateX(0)}.picker-center-highlight{height:36px;box-sizing:border-box;position:absolute;left:0;width:100%;top:50%;margin-top:-18px;pointer-events:none}.picker-center-highlight:after,.picker-center-highlight:before{content:'';position:absolute;left:0;right:auto;height:1px;width:100%;background-color:#a8abb0;display:block;z-index:15}.picker-center-highlight:before{top:0;bottom:auto;-webkit-transform-origin:50% 0;transform-origin:50% 0}@media only screen and (-webkit-min-device-pixel-ratio:2){.picker-center-highlight:before{-webkit-transform:scaleY(.5);transform:scaleY(.5)}}@media only screen and (-webkit-min-device-pixel-ratio:3){.picker-center-highlight:before{-webkit-transform:scaleY(.33);transform:scaleY(.33)}}.picker-center-highlight:after{bottom:0;top:auto;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}@media only screen and (-webkit-min-device-pixel-ratio:2){.picker-center-highlight:after{-webkit-transform:scaleY(.5);transform:scaleY(.5)}}@media only screen and (-webkit-min-device-pixel-ratio:3){.picker-center-highlight:after{-webkit-transform:scaleY(.33);transform:scaleY(.33)}}.picker-3d .picker-items{overflow:hidden;-webkit-perspective:1200px;perspective:1200px}.picker-3d .picker-item,.picker-3d .picker-items-col,.picker-3d .picker-items-col-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-3d .picker-items-col{overflow:visible}.picker-3d .picker-item{-webkit-transform-origin:center center -110px;transform-origin:center center -110px;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.picker-modal .bar{position:relative;top:0}.picker-modal .bar:after,.picker-modal .bar:before{position:absolute;height:1px;width:100%;background-color:#a8abb0;display:block;z-index:15;content:'';left:0;right:auto}.picker-modal .bar:before{top:0;bottom:auto;-webkit-transform-origin:50% 0;transform-origin:50% 0}@media only screen and (-webkit-min-device-pixel-ratio:2){.picker-modal .bar:before{-webkit-transform:scaleY(.5);transform:scaleY(.5)}}@media only screen and (-webkit-min-device-pixel-ratio:3){.picker-modal .bar:before{-webkit-transform:scaleY(.33);transform:scaleY(.33)}}.picker-modal .bar:after{bottom:0;top:auto;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}@media only screen and (-webkit-min-device-pixel-ratio:2){.picker-modal .bar:after{-webkit-transform:scaleY(.5);transform:scaleY(.5)}}@media only screen and (-webkit-min-device-pixel-ratio:3){.picker-modal .bar:after{-webkit-transform:scaleY(.33);transform:scaleY(.33)}}.picker-modal .bar .title{color:#5f646e;font-weight:400}.city-picker .col-province{width:5rem}.city-picker .col-city{width:6rem}.city-picker .col-district{width:5rem}.picker-modal{position:fixed;left:0;bottom:0;width:100%;height:13rem;z-index:11500;display:none;-webkit-transition-property:-webkit-transform;transition-property:transform;background:#cfd5da;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.picker-modal.modal-in,.picker-modal.modal-out{-webkit-transition-duration:.4s;transition-duration:.4s}.picker-modal.modal-in{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.picker-modal.modal-out{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.picker-modal .picker-modal-inner{height:100%;position:relative}.picker-modal .toolbar{position:relative;width:100%}.picker-modal .toolbar:before{content:'';position:absolute;left:0;top:0;bottom:auto;right:auto;height:1px;width:100%;background-color:#999;display:block;z-index:15;-webkit-transform-origin:50% 0;transform-origin:50% 0}@media only screen and (-webkit-min-device-pixel-ratio:2){.picker-modal .toolbar:before{-webkit-transform:scaleY(.5);transform:scaleY(.5)}}@media only screen and (-webkit-min-device-pixel-ratio:3){.picker-modal .toolbar:before{-webkit-transform:scaleY(.33);transform:scaleY(.33)}}.picker-modal .toolbar+.picker-modal-inner{height:-webkit-calc(97.8%);height:calc(97.8%)}.picker-modal.picker-modal-inline{display:block;position:relative;background:0 0;z-index:inherit;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.picker-modal.picker-modal-inline .toolbar:before{display:none}.picker-modal.picker-modal-inline .toolbar:after{content:'';position:absolute;left:0;bottom:0;right:auto;top:auto;height:1px;width:100%;background-color:#999;display:block;z-index:15;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}@media only screen and (-webkit-min-device-pixel-ratio:2){.picker-modal.picker-modal-inline .toolbar:after{-webkit-transform:scaleY(.5);transform:scaleY(.5)}}@media only screen and (-webkit-min-device-pixel-ratio:3){.picker-modal.picker-modal-inline .toolbar:after{-webkit-transform:scaleY(.33);transform:scaleY(.33)}}.toast{background:rgba(0,0,0,.8);border-radius:1rem;color:#fff;padding:0 .8rem;height:2rem;line-height:2rem;font-size:.8rem;width:auto}.pickerCol01 .picker-items-col,.pickerCol01 .picker-items-col-wrapper{width:100%}#picker{display:block;margin:10px auto 0;width:90%;height:40px;border:1px solid #d6d6d6;border-radius:5px;padding:4px 3px;outline:0;text-align:center;line-height:30px}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
	(function (global, factory) {
	  if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return factory(global);
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else factory(global);
	})(undefined, function () {
	  var Zepto = function () {
	    var undefined,
	        key,
	        $,
	        classList,
	        emptyArray = [],
	        _concat = emptyArray.concat,
	        _filter = emptyArray.filter,
	        _slice = emptyArray.slice,
	        document = window.document,
	        elementDisplay = {},
	        classCache = {},
	        cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1, 'opacity': 1, 'z-index': 1, 'zoom': 1 },
	        fragmentRE = /^\s*<(\w+|!)[^>]*>/,
	        singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	        tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	        rootNodeRE = /^(?:body|html)$/i,
	        capitalRE = /([A-Z])/g,


	    // special attributes that should be get/set via method calls
	    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
	        adjacencyOperators = ['after', 'prepend', 'before', 'append'],
	        table = document.createElement('table'),
	        tableRow = document.createElement('tr'),
	        containers = {
	      'tr': document.createElement('tbody'),
	      'tbody': table, 'thead': table, 'tfoot': table,
	      'td': tableRow, 'th': tableRow,
	      '*': document.createElement('div')
	    },
	        readyRE = /complete|loaded|interactive/,
	        simpleSelectorRE = /^[\w-]*$/,
	        class2type = {},
	        toString = class2type.toString,
	        zepto = {},
	        camelize,
	        uniq,
	        tempParent = document.createElement('div'),
	        propMap = {
	      'tabindex': 'tabIndex',
	      'readonly': 'readOnly',
	      'for': 'htmlFor',
	      'class': 'className',
	      'maxlength': 'maxLength',
	      'cellspacing': 'cellSpacing',
	      'cellpadding': 'cellPadding',
	      'rowspan': 'rowSpan',
	      'colspan': 'colSpan',
	      'usemap': 'useMap',
	      'frameborder': 'frameBorder',
	      'contenteditable': 'contentEditable'
	    },
	        isArray = Array.isArray || function (object) {
	      return object instanceof Array;
	    };

	    zepto.matches = function (element, selector) {
	      if (!selector || !element || element.nodeType !== 1) return false;
	      var matchesSelector = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector;
	      if (matchesSelector) return matchesSelector.call(element, selector);
	      // fall back to performing a selector:
	      var match,
	          parent = element.parentNode,
	          temp = !parent;
	      if (temp) (parent = tempParent).appendChild(element);
	      match = ~zepto.qsa(parent, selector).indexOf(element);
	      temp && tempParent.removeChild(element);
	      return match;
	    };

	    function type(obj) {
	      return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
	    }

	    function isFunction(value) {
	      return type(value) == "function";
	    }
	    function isWindow(obj) {
	      return obj != null && obj == obj.window;
	    }
	    function isDocument(obj) {
	      return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
	    }
	    function isObject(obj) {
	      return type(obj) == "object";
	    }
	    function isPlainObject(obj) {
	      return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
	    }

	    function likeArray(obj) {
	      var length = !!obj && 'length' in obj && obj.length,
	          type = $.type(obj);

	      return 'function' != type && !isWindow(obj) && ('array' == type || length === 0 || typeof length == 'number' && length > 0 && length - 1 in obj);
	    }

	    function compact(array) {
	      return _filter.call(array, function (item) {
	        return item != null;
	      });
	    }
	    function flatten(array) {
	      return array.length > 0 ? $.fn.concat.apply([], array) : array;
	    }
	    camelize = function camelize(str) {
	      return str.replace(/-+(.)?/g, function (match, chr) {
	        return chr ? chr.toUpperCase() : '';
	      });
	    };
	    function dasherize(str) {
	      return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
	    }
	    uniq = function uniq(array) {
	      return _filter.call(array, function (item, idx) {
	        return array.indexOf(item) == idx;
	      });
	    };

	    function classRE(name) {
	      return name in classCache ? classCache[name] : classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)');
	    }

	    function maybeAddPx(name, value) {
	      return typeof value == "number" && !cssNumber[dasherize(name)] ? value + "px" : value;
	    }

	    function defaultDisplay(nodeName) {
	      var element, display;
	      if (!elementDisplay[nodeName]) {
	        element = document.createElement(nodeName);
	        document.body.appendChild(element);
	        display = getComputedStyle(element, '').getPropertyValue("display");
	        element.parentNode.removeChild(element);
	        display == "none" && (display = "block");
	        elementDisplay[nodeName] = display;
	      }
	      return elementDisplay[nodeName];
	    }

	    function _children(element) {
	      return 'children' in element ? _slice.call(element.children) : $.map(element.childNodes, function (node) {
	        if (node.nodeType == 1) return node;
	      });
	    }

	    function Z(dom, selector) {
	      var i,
	          len = dom ? dom.length : 0;
	      for (i = 0; i < len; i++) {
	        this[i] = dom[i];
	      }this.length = len;
	      this.selector = selector || '';
	    }

	    // `$.zepto.fragment` takes a html string and an optional tag name
	    // to generate DOM nodes from the given html string.
	    // The generated DOM nodes are returned as an array.
	    // This function can be overridden in plugins for example to make
	    // it compatible with browsers that don't support the DOM fully.
	    zepto.fragment = function (html, name, properties) {
	      var dom, nodes, container;

	      // A special case optimization for a single tag
	      if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1));

	      if (!dom) {
	        if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>");
	        if (name === undefined) name = fragmentRE.test(html) && RegExp.$1;
	        if (!(name in containers)) name = '*';

	        container = containers[name];
	        container.innerHTML = '' + html;
	        dom = $.each(_slice.call(container.childNodes), function () {
	          container.removeChild(this);
	        });
	      }

	      if (isPlainObject(properties)) {
	        nodes = $(dom);
	        $.each(properties, function (key, value) {
	          if (methodAttributes.indexOf(key) > -1) nodes[key](value);else nodes.attr(key, value);
	        });
	      }

	      return dom;
	    };

	    // `$.zepto.Z` swaps out the prototype of the given `dom` array
	    // of nodes with `$.fn` and thus supplying all the Zepto functions
	    // to the array. This method can be overridden in plugins.
	    zepto.Z = function (dom, selector) {
	      return new Z(dom, selector);
	    };

	    // `$.zepto.isZ` should return `true` if the given object is a Zepto
	    // collection. This method can be overridden in plugins.
	    zepto.isZ = function (object) {
	      return object instanceof zepto.Z;
	    };

	    // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
	    // takes a CSS selector and an optional context (and handles various
	    // special cases).
	    // This method can be overridden in plugins.
	    zepto.init = function (selector, context) {
	      var dom;
	      // If nothing given, return an empty Zepto collection
	      if (!selector) return zepto.Z();
	      // Optimize for string selectors
	      else if (typeof selector == 'string') {
	          selector = selector.trim();
	          // If it's a html fragment, create nodes from it
	          // Note: In both Chrome 21 and Firefox 15, DOM error 12
	          // is thrown if the fragment doesn't begin with <
	          if (selector[0] == '<' && fragmentRE.test(selector)) dom = zepto.fragment(selector, RegExp.$1, context), selector = null;
	          // If there's a context, create a collection on that context first, and select
	          // nodes from there
	          else if (context !== undefined) return $(context).find(selector);
	            // If it's a CSS selector, use it to select nodes.
	            else dom = zepto.qsa(document, selector);
	        }
	        // If a function is given, call it when the DOM is ready
	        else if (isFunction(selector)) return $(document).ready(selector);
	          // If a Zepto collection is given, just return it
	          else if (zepto.isZ(selector)) return selector;else {
	              // normalize array if an array of nodes is given
	              if (isArray(selector)) dom = compact(selector);
	              // Wrap DOM nodes.
	              else if (isObject(selector)) dom = [selector], selector = null;
	                // If it's a html fragment, create nodes from it
	                else if (fragmentRE.test(selector)) dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null;
	                  // If there's a context, create a collection on that context first, and select
	                  // nodes from there
	                  else if (context !== undefined) return $(context).find(selector);
	                    // And last but no least, if it's a CSS selector, use it to select nodes.
	                    else dom = zepto.qsa(document, selector);
	            }
	      // create a new Zepto collection from the nodes found
	      return zepto.Z(dom, selector);
	    };

	    // `$` will be the base `Zepto` object. When calling this
	    // function just call `$.zepto.init, which makes the implementation
	    // details of selecting nodes and creating Zepto collections
	    // patchable in plugins.
	    $ = function $(selector, context) {
	      return zepto.init(selector, context);
	    };

	    function extend(target, source, deep) {
	      for (key in source) {
	        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	          if (isPlainObject(source[key]) && !isPlainObject(target[key])) target[key] = {};
	          if (isArray(source[key]) && !isArray(target[key])) target[key] = [];
	          extend(target[key], source[key], deep);
	        } else if (source[key] !== undefined) target[key] = source[key];
	      }
	    }

	    // Copy all but undefined properties from one or more
	    // objects to the `target` object.
	    $.extend = function (target) {
	      var deep,
	          args = _slice.call(arguments, 1);
	      if (typeof target == 'boolean') {
	        deep = target;
	        target = args.shift();
	      }
	      args.forEach(function (arg) {
	        extend(target, arg, deep);
	      });
	      return target;
	    };

	    // `$.zepto.qsa` is Zepto's CSS selector implementation which
	    // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
	    // This method can be overridden in plugins.
	    zepto.qsa = function (element, selector) {
	      var found,
	          maybeID = selector[0] == '#',
	          maybeClass = !maybeID && selector[0] == '.',
	          nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
	          // Ensure that a 1 char tag name still gets checked
	      isSimple = simpleSelectorRE.test(nameOnly);
	      return element.getElementById && isSimple && maybeID ? // Safari DocumentFragment doesn't have getElementById
	      (found = element.getElementById(nameOnly)) ? [found] : [] : element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11 ? [] : _slice.call(isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName
	      maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
	      element.getElementsByTagName(selector) : // Or a tag
	      element.querySelectorAll(selector) // Or it's not simple, and we need to query all
	      );
	    };

	    function filtered(nodes, selector) {
	      return selector == null ? $(nodes) : $(nodes).filter(selector);
	    }

	    $.contains = document.documentElement.contains ? function (parent, node) {
	      return parent !== node && parent.contains(node);
	    } : function (parent, node) {
	      while (node && (node = node.parentNode)) {
	        if (node === parent) return true;
	      }return false;
	    };

	    function funcArg(context, arg, idx, payload) {
	      return isFunction(arg) ? arg.call(context, idx, payload) : arg;
	    }

	    function setAttribute(node, name, value) {
	      value == null ? node.removeAttribute(name) : node.setAttribute(name, value);
	    }

	    // access className property while respecting SVGAnimatedString
	    function className(node, value) {
	      var klass = node.className || '',
	          svg = klass && klass.baseVal !== undefined;

	      if (value === undefined) return svg ? klass.baseVal : klass;
	      svg ? klass.baseVal = value : node.className = value;
	    }

	    // "true"  => true
	    // "false" => false
	    // "null"  => null
	    // "42"    => 42
	    // "42.5"  => 42.5
	    // "08"    => "08"
	    // JSON    => parse if valid
	    // String  => self
	    function deserializeValue(value) {
	      try {
	        return value ? value == "true" || (value == "false" ? false : value == "null" ? null : +value + "" == value ? +value : /^[\[\{]/.test(value) ? $.parseJSON(value) : value) : value;
	      } catch (e) {
	        return value;
	      }
	    }

	    $.type = type;
	    $.isFunction = isFunction;
	    $.isWindow = isWindow;
	    $.isArray = isArray;
	    $.isPlainObject = isPlainObject;

	    $.isEmptyObject = function (obj) {
	      var name;
	      for (name in obj) {
	        return false;
	      }return true;
	    };

	    $.isNumeric = function (val) {
	      var num = Number(val),
	          type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
	      return val != null && type != 'boolean' && (type != 'string' || val.length) && !isNaN(num) && isFinite(num) || false;
	    };

	    $.inArray = function (elem, array, i) {
	      return emptyArray.indexOf.call(array, elem, i);
	    };

	    $.camelCase = camelize;
	    $.trim = function (str) {
	      return str == null ? "" : String.prototype.trim.call(str);
	    };

	    // plugin compatibility
	    $.uuid = 0;
	    $.support = {};
	    $.expr = {};
	    $.noop = function () {};

	    $.map = function (elements, callback) {
	      var value,
	          values = [],
	          i,
	          key;
	      if (likeArray(elements)) for (i = 0; i < elements.length; i++) {
	        value = callback(elements[i], i);
	        if (value != null) values.push(value);
	      } else for (key in elements) {
	        value = callback(elements[key], key);
	        if (value != null) values.push(value);
	      }
	      return flatten(values);
	    };

	    $.each = function (elements, callback) {
	      var i, key;
	      if (likeArray(elements)) {
	        for (i = 0; i < elements.length; i++) {
	          if (callback.call(elements[i], i, elements[i]) === false) return elements;
	        }
	      } else {
	        for (key in elements) {
	          if (callback.call(elements[key], key, elements[key]) === false) return elements;
	        }
	      }

	      return elements;
	    };

	    $.grep = function (elements, callback) {
	      return _filter.call(elements, callback);
	    };

	    if (window.JSON) $.parseJSON = JSON.parse;

	    // Populate the class2type map
	    $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
	      class2type["[object " + name + "]"] = name.toLowerCase();
	    });

	    // Define methods that will be available on all
	    // Zepto collections
	    $.fn = {
	      constructor: zepto.Z,
	      length: 0,

	      // Because a collection acts like an array
	      // copy over these useful array functions.
	      forEach: emptyArray.forEach,
	      reduce: emptyArray.reduce,
	      push: emptyArray.push,
	      sort: emptyArray.sort,
	      splice: emptyArray.splice,
	      indexOf: emptyArray.indexOf,
	      concat: function concat() {
	        var i,
	            value,
	            args = [];
	        for (i = 0; i < arguments.length; i++) {
	          value = arguments[i];
	          args[i] = zepto.isZ(value) ? value.toArray() : value;
	        }
	        return _concat.apply(zepto.isZ(this) ? this.toArray() : this, args);
	      },

	      // `map` and `slice` in the jQuery API work differently
	      // from their array counterparts
	      map: function map(fn) {
	        return $($.map(this, function (el, i) {
	          return fn.call(el, i, el);
	        }));
	      },
	      slice: function slice() {
	        return $(_slice.apply(this, arguments));
	      },

	      ready: function ready(callback) {
	        // need to check if document.body exists for IE as that browser reports
	        // document ready when it hasn't yet created the body element
	        if (readyRE.test(document.readyState) && document.body) callback($);else document.addEventListener('DOMContentLoaded', function () {
	          callback($);
	        }, false);
	        return this;
	      },
	      get: function get(idx) {
	        return idx === undefined ? _slice.call(this) : this[idx >= 0 ? idx : idx + this.length];
	      },
	      toArray: function toArray() {
	        return this.get();
	      },
	      size: function size() {
	        return this.length;
	      },
	      remove: function remove() {
	        return this.each(function () {
	          if (this.parentNode != null) this.parentNode.removeChild(this);
	        });
	      },
	      each: function each(callback) {
	        emptyArray.every.call(this, function (el, idx) {
	          return callback.call(el, idx, el) !== false;
	        });
	        return this;
	      },
	      filter: function filter(selector) {
	        if (isFunction(selector)) return this.not(this.not(selector));
	        return $(_filter.call(this, function (element) {
	          return zepto.matches(element, selector);
	        }));
	      },
	      add: function add(selector, context) {
	        return $(uniq(this.concat($(selector, context))));
	      },
	      is: function is(selector) {
	        return this.length > 0 && zepto.matches(this[0], selector);
	      },
	      not: function not(selector) {
	        var nodes = [];
	        if (isFunction(selector) && selector.call !== undefined) this.each(function (idx) {
	          if (!selector.call(this, idx)) nodes.push(this);
	        });else {
	          var excludes = typeof selector == 'string' ? this.filter(selector) : likeArray(selector) && isFunction(selector.item) ? _slice.call(selector) : $(selector);
	          this.forEach(function (el) {
	            if (excludes.indexOf(el) < 0) nodes.push(el);
	          });
	        }
	        return $(nodes);
	      },
	      has: function has(selector) {
	        return this.filter(function () {
	          return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
	        });
	      },
	      eq: function eq(idx) {
	        return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1);
	      },
	      first: function first() {
	        var el = this[0];
	        return el && !isObject(el) ? el : $(el);
	      },
	      last: function last() {
	        var el = this[this.length - 1];
	        return el && !isObject(el) ? el : $(el);
	      },
	      find: function find(selector) {
	        var result,
	            $this = this;
	        if (!selector) result = $();else if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') result = $(selector).filter(function () {
	          var node = this;
	          return emptyArray.some.call($this, function (parent) {
	            return $.contains(parent, node);
	          });
	        });else if (this.length == 1) result = $(zepto.qsa(this[0], selector));else result = this.map(function () {
	          return zepto.qsa(this, selector);
	        });
	        return result;
	      },
	      closest: function closest(selector, context) {
	        var nodes = [],
	            collection = (typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object' && $(selector);
	        this.each(function (_, node) {
	          while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector))) {
	            node = node !== context && !isDocument(node) && node.parentNode;
	          }if (node && nodes.indexOf(node) < 0) nodes.push(node);
	        });
	        return $(nodes);
	      },
	      parents: function parents(selector) {
	        var ancestors = [],
	            nodes = this;
	        while (nodes.length > 0) {
	          nodes = $.map(nodes, function (node) {
	            if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
	              ancestors.push(node);
	              return node;
	            }
	          });
	        }return filtered(ancestors, selector);
	      },
	      parent: function parent(selector) {
	        return filtered(uniq(this.pluck('parentNode')), selector);
	      },
	      children: function children(selector) {
	        return filtered(this.map(function () {
	          return _children(this);
	        }), selector);
	      },
	      contents: function contents() {
	        return this.map(function () {
	          return this.contentDocument || _slice.call(this.childNodes);
	        });
	      },
	      siblings: function siblings(selector) {
	        return filtered(this.map(function (i, el) {
	          return _filter.call(_children(el.parentNode), function (child) {
	            return child !== el;
	          });
	        }), selector);
	      },
	      empty: function empty() {
	        return this.each(function () {
	          this.innerHTML = '';
	        });
	      },
	      // `pluck` is borrowed from Prototype.js
	      pluck: function pluck(property) {
	        return $.map(this, function (el) {
	          return el[property];
	        });
	      },
	      show: function show() {
	        return this.each(function () {
	          this.style.display == "none" && (this.style.display = '');
	          if (getComputedStyle(this, '').getPropertyValue("display") == "none") this.style.display = defaultDisplay(this.nodeName);
	        });
	      },
	      replaceWith: function replaceWith(newContent) {
	        return this.before(newContent).remove();
	      },
	      wrap: function wrap(structure) {
	        var func = isFunction(structure);
	        if (this[0] && !func) var dom = $(structure).get(0),
	            clone = dom.parentNode || this.length > 1;

	        return this.each(function (index) {
	          $(this).wrapAll(func ? structure.call(this, index) : clone ? dom.cloneNode(true) : dom);
	        });
	      },
	      wrapAll: function wrapAll(structure) {
	        if (this[0]) {
	          $(this[0]).before(structure = $(structure));
	          var children;
	          // drill down to the inmost element
	          while ((children = structure.children()).length) {
	            structure = children.first();
	          }$(structure).append(this);
	        }
	        return this;
	      },
	      wrapInner: function wrapInner(structure) {
	        var func = isFunction(structure);
	        return this.each(function (index) {
	          var self = $(this),
	              contents = self.contents(),
	              dom = func ? structure.call(this, index) : structure;
	          contents.length ? contents.wrapAll(dom) : self.append(dom);
	        });
	      },
	      unwrap: function unwrap() {
	        this.parent().each(function () {
	          $(this).replaceWith($(this).children());
	        });
	        return this;
	      },
	      clone: function clone() {
	        return this.map(function () {
	          return this.cloneNode(true);
	        });
	      },
	      hide: function hide() {
	        return this.css("display", "none");
	      },
	      toggle: function toggle(setting) {
	        return this.each(function () {
	          var el = $(this);(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide();
	        });
	      },
	      prev: function prev(selector) {
	        return $(this.pluck('previousElementSibling')).filter(selector || '*');
	      },
	      next: function next(selector) {
	        return $(this.pluck('nextElementSibling')).filter(selector || '*');
	      },
	      html: function html(_html) {
	        return 0 in arguments ? this.each(function (idx) {
	          var originHtml = this.innerHTML;
	          $(this).empty().append(funcArg(this, _html, idx, originHtml));
	        }) : 0 in this ? this[0].innerHTML : null;
	      },
	      text: function text(_text) {
	        return 0 in arguments ? this.each(function (idx) {
	          var newText = funcArg(this, _text, idx, this.textContent);
	          this.textContent = newText == null ? '' : '' + newText;
	        }) : 0 in this ? this.pluck('textContent').join("") : null;
	      },
	      attr: function attr(name, value) {
	        var result;
	        return typeof name == 'string' && !(1 in arguments) ? 0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined : this.each(function (idx) {
	          if (this.nodeType !== 1) return;
	          if (isObject(name)) for (key in name) {
	            setAttribute(this, key, name[key]);
	          } else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)));
	        });
	      },
	      removeAttr: function removeAttr(name) {
	        return this.each(function () {
	          this.nodeType === 1 && name.split(' ').forEach(function (attribute) {
	            setAttribute(this, attribute);
	          }, this);
	        });
	      },
	      prop: function prop(name, value) {
	        name = propMap[name] || name;
	        return 1 in arguments ? this.each(function (idx) {
	          this[name] = funcArg(this, value, idx, this[name]);
	        }) : this[0] && this[0][name];
	      },
	      removeProp: function removeProp(name) {
	        name = propMap[name] || name;
	        return this.each(function () {
	          delete this[name];
	        });
	      },
	      data: function data(name, value) {
	        var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase();

	        var data = 1 in arguments ? this.attr(attrName, value) : this.attr(attrName);

	        return data !== null ? deserializeValue(data) : undefined;
	      },
	      val: function val(value) {
	        if (0 in arguments) {
	          if (value == null) value = "";
	          return this.each(function (idx) {
	            this.value = funcArg(this, value, idx, this.value);
	          });
	        } else {
	          return this[0] && (this[0].multiple ? $(this[0]).find('option').filter(function () {
	            return this.selected;
	          }).pluck('value') : this[0].value);
	        }
	      },
	      offset: function offset(coordinates) {
	        if (coordinates) return this.each(function (index) {
	          var $this = $(this),
	              coords = funcArg(this, coordinates, index, $this.offset()),
	              parentOffset = $this.offsetParent().offset(),
	              props = {
	            top: coords.top - parentOffset.top,
	            left: coords.left - parentOffset.left
	          };

	          if ($this.css('position') == 'static') props['position'] = 'relative';
	          $this.css(props);
	        });
	        if (!this.length) return null;
	        if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0])) return { top: 0, left: 0 };
	        var obj = this[0].getBoundingClientRect();
	        return {
	          left: obj.left + window.pageXOffset,
	          top: obj.top + window.pageYOffset,
	          width: Math.round(obj.width),
	          height: Math.round(obj.height)
	        };
	      },
	      css: function css(property, value) {
	        if (arguments.length < 2) {
	          var element = this[0];
	          if (typeof property == 'string') {
	            if (!element) return;
	            return element.style[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property);
	          } else if (isArray(property)) {
	            if (!element) return;
	            var props = {};
	            var computedStyle = getComputedStyle(element, '');
	            $.each(property, function (_, prop) {
	              props[prop] = element.style[camelize(prop)] || computedStyle.getPropertyValue(prop);
	            });
	            return props;
	          }
	        }

	        var css = '';
	        if (type(property) == 'string') {
	          if (!value && value !== 0) this.each(function () {
	            this.style.removeProperty(dasherize(property));
	          });else css = dasherize(property) + ":" + maybeAddPx(property, value);
	        } else {
	          for (key in property) {
	            if (!property[key] && property[key] !== 0) this.each(function () {
	              this.style.removeProperty(dasherize(key));
	            });else css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';';
	          }
	        }

	        return this.each(function () {
	          this.style.cssText += ';' + css;
	        });
	      },
	      index: function index(element) {
	        return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0]);
	      },
	      hasClass: function hasClass(name) {
	        if (!name) return false;
	        return emptyArray.some.call(this, function (el) {
	          return this.test(className(el));
	        }, classRE(name));
	      },
	      addClass: function addClass(name) {
	        if (!name) return this;
	        return this.each(function (idx) {
	          if (!('className' in this)) return;
	          classList = [];
	          var cls = className(this),
	              newName = funcArg(this, name, idx, cls);
	          newName.split(/\s+/g).forEach(function (klass) {
	            if (!$(this).hasClass(klass)) classList.push(klass);
	          }, this);
	          classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "));
	        });
	      },
	      removeClass: function removeClass(name) {
	        return this.each(function (idx) {
	          if (!('className' in this)) return;
	          if (name === undefined) return className(this, '');
	          classList = className(this);
	          funcArg(this, name, idx, classList).split(/\s+/g).forEach(function (klass) {
	            classList = classList.replace(classRE(klass), " ");
	          });
	          className(this, classList.trim());
	        });
	      },
	      toggleClass: function toggleClass(name, when) {
	        if (!name) return this;
	        return this.each(function (idx) {
	          var $this = $(this),
	              names = funcArg(this, name, idx, className(this));
	          names.split(/\s+/g).forEach(function (klass) {
	            (when === undefined ? !$this.hasClass(klass) : when) ? $this.addClass(klass) : $this.removeClass(klass);
	          });
	        });
	      },
	      scrollTop: function scrollTop(value) {
	        if (!this.length) return;
	        var hasScrollTop = 'scrollTop' in this[0];
	        if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;
	        return this.each(hasScrollTop ? function () {
	          this.scrollTop = value;
	        } : function () {
	          this.scrollTo(this.scrollX, value);
	        });
	      },
	      scrollLeft: function scrollLeft(value) {
	        if (!this.length) return;
	        var hasScrollLeft = 'scrollLeft' in this[0];
	        if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset;
	        return this.each(hasScrollLeft ? function () {
	          this.scrollLeft = value;
	        } : function () {
	          this.scrollTo(value, this.scrollY);
	        });
	      },
	      position: function position() {
	        if (!this.length) return;

	        var elem = this[0],

	        // Get *real* offsetParent
	        offsetParent = this.offsetParent(),

	        // Get correct offsets
	        offset = this.offset(),
	            parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

	        // Subtract element margins
	        // note: when an element has margin: auto the offsetLeft and marginLeft
	        // are the same in Safari causing offset.left to incorrectly be 0
	        offset.top -= parseFloat($(elem).css('margin-top')) || 0;
	        offset.left -= parseFloat($(elem).css('margin-left')) || 0;

	        // Add offsetParent borders
	        parentOffset.top += parseFloat($(offsetParent[0]).css('border-top-width')) || 0;
	        parentOffset.left += parseFloat($(offsetParent[0]).css('border-left-width')) || 0;

	        // Subtract the two offsets
	        return {
	          top: offset.top - parentOffset.top,
	          left: offset.left - parentOffset.left
	        };
	      },
	      offsetParent: function offsetParent() {
	        return this.map(function () {
	          var parent = this.offsetParent || document.body;
	          while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static") {
	            parent = parent.offsetParent;
	          }return parent;
	        });
	      }
	    };

	    // for now
	    $.fn.detach = $.fn.remove

	    // Generate the `width` and `height` functions
	    ;['width', 'height'].forEach(function (dimension) {
	      var dimensionProperty = dimension.replace(/./, function (m) {
	        return m[0].toUpperCase();
	      });

	      $.fn[dimension] = function (value) {
	        var offset,
	            el = this[0];
	        if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] : isDocument(el) ? el.documentElement['scroll' + dimensionProperty] : (offset = this.offset()) && offset[dimension];else return this.each(function (idx) {
	          el = $(this);
	          el.css(dimension, funcArg(this, value, idx, el[dimension]()));
	        });
	      };
	    });

	    function traverseNode(node, fun) {
	      fun(node);
	      for (var i = 0, len = node.childNodes.length; i < len; i++) {
	        traverseNode(node.childNodes[i], fun);
	      }
	    }

	    // Generate the `after`, `prepend`, `before`, `append`,
	    // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
	    adjacencyOperators.forEach(function (operator, operatorIndex) {
	      var inside = operatorIndex % 2; //=> prepend, append

	      $.fn[operator] = function () {
	        // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
	        var argType,
	            nodes = $.map(arguments, function (arg) {
	          var arr = [];
	          argType = type(arg);
	          if (argType == "array") {
	            arg.forEach(function (el) {
	              if (el.nodeType !== undefined) return arr.push(el);else if ($.zepto.isZ(el)) return arr = arr.concat(el.get());
	              arr = arr.concat(zepto.fragment(el));
	            });
	            return arr;
	          }
	          return argType == "object" || arg == null ? arg : zepto.fragment(arg);
	        }),
	            parent,
	            copyByClone = this.length > 1;
	        if (nodes.length < 1) return this;

	        return this.each(function (_, target) {
	          parent = inside ? target : target.parentNode;

	          // convert all methods to a "before" operation
	          target = operatorIndex == 0 ? target.nextSibling : operatorIndex == 1 ? target.firstChild : operatorIndex == 2 ? target : null;

	          var parentInDocument = $.contains(document.documentElement, parent);

	          nodes.forEach(function (node) {
	            if (copyByClone) node = node.cloneNode(true);else if (!parent) return $(node).remove();

	            parent.insertBefore(node, target);
	            if (parentInDocument) traverseNode(node, function (el) {
	              if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' && (!el.type || el.type === 'text/javascript') && !el.src) {
	                var target = el.ownerDocument ? el.ownerDocument.defaultView : window;
	                target['eval'].call(target, el.innerHTML);
	              }
	            });
	          });
	        });
	      };

	      // after    => insertAfter
	      // prepend  => prependTo
	      // before   => insertBefore
	      // append   => appendTo
	      $.fn[inside ? operator + 'To' : 'insert' + (operatorIndex ? 'Before' : 'After')] = function (html) {
	        $(html)[operator](this);
	        return this;
	      };
	    });

	    zepto.Z.prototype = Z.prototype = $.fn;

	    // Export internal API functions in the `$.zepto` namespace
	    zepto.uniq = uniq;
	    zepto.deserializeValue = deserializeValue;
	    $.zepto = zepto;

	    return $;
	  }();

	  window.Zepto = Zepto;
	  window.$ === undefined && (window.$ = Zepto);(function ($) {
	    var _zid = 1,
	        undefined,
	        slice = Array.prototype.slice,
	        isFunction = $.isFunction,
	        isString = function isString(obj) {
	      return typeof obj == 'string';
	    },
	        handlers = {},
	        specialEvents = {},
	        focusinSupported = 'onfocusin' in window,
	        focus = { focus: 'focusin', blur: 'focusout' },
	        hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' };

	    specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents';

	    function zid(element) {
	      return element._zid || (element._zid = _zid++);
	    }
	    function findHandlers(element, event, fn, selector) {
	      event = parse(event);
	      if (event.ns) var matcher = matcherFor(event.ns);
	      return (handlers[zid(element)] || []).filter(function (handler) {
	        return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector);
	      });
	    }
	    function parse(event) {
	      var parts = ('' + event).split('.');
	      return { e: parts[0], ns: parts.slice(1).sort().join(' ') };
	    }
	    function matcherFor(ns) {
	      return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)');
	    }

	    function eventCapture(handler, captureSetting) {
	      return handler.del && !focusinSupported && handler.e in focus || !!captureSetting;
	    }

	    function realEvent(type) {
	      return hover[type] || focusinSupported && focus[type] || type;
	    }

	    function add(element, events, fn, data, selector, delegator, capture) {
	      var id = zid(element),
	          set = handlers[id] || (handlers[id] = []);
	      events.split(/\s/).forEach(function (event) {
	        if (event == 'ready') return $(document).ready(fn);
	        var handler = parse(event);
	        handler.fn = fn;
	        handler.sel = selector;
	        // emulate mouseenter, mouseleave
	        if (handler.e in hover) fn = function fn(e) {
	          var related = e.relatedTarget;
	          if (!related || related !== this && !$.contains(this, related)) return handler.fn.apply(this, arguments);
	        };
	        handler.del = delegator;
	        var callback = delegator || fn;
	        handler.proxy = function (e) {
	          e = compatible(e);
	          if (e.isImmediatePropagationStopped()) return;
	          e.data = data;
	          var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args));
	          if (result === false) e.preventDefault(), e.stopPropagation();
	          return result;
	        };
	        handler.i = set.length;
	        set.push(handler);
	        if ('addEventListener' in element) element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
	      });
	    }
	    function remove(element, events, fn, selector, capture) {
	      var id = zid(element);(events || '').split(/\s/).forEach(function (event) {
	        findHandlers(element, event, fn, selector).forEach(function (handler) {
	          delete handlers[id][handler.i];
	          if ('removeEventListener' in element) element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
	        });
	      });
	    }

	    $.event = { add: add, remove: remove };

	    $.proxy = function (fn, context) {
	      var args = 2 in arguments && slice.call(arguments, 2);
	      if (isFunction(fn)) {
	        var proxyFn = function proxyFn() {
	          return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments);
	        };
	        proxyFn._zid = zid(fn);
	        return proxyFn;
	      } else if (isString(context)) {
	        if (args) {
	          args.unshift(fn[context], fn);
	          return $.proxy.apply(null, args);
	        } else {
	          return $.proxy(fn[context], fn);
	        }
	      } else {
	        throw new TypeError("expected function");
	      }
	    };

	    $.fn.bind = function (event, data, callback) {
	      return this.on(event, data, callback);
	    };
	    $.fn.unbind = function (event, callback) {
	      return this.off(event, callback);
	    };
	    $.fn.one = function (event, selector, data, callback) {
	      return this.on(event, selector, data, callback, 1);
	    };

	    var returnTrue = function returnTrue() {
	      return true;
	    },
	        returnFalse = function returnFalse() {
	      return false;
	    },
	        ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
	        eventMethods = {
	      preventDefault: 'isDefaultPrevented',
	      stopImmediatePropagation: 'isImmediatePropagationStopped',
	      stopPropagation: 'isPropagationStopped'
	    };

	    function compatible(event, source) {
	      if (source || !event.isDefaultPrevented) {
	        source || (source = event);

	        $.each(eventMethods, function (name, predicate) {
	          var sourceMethod = source[name];
	          event[name] = function () {
	            this[predicate] = returnTrue;
	            return sourceMethod && sourceMethod.apply(source, arguments);
	          };
	          event[predicate] = returnFalse;
	        });

	        event.timeStamp || (event.timeStamp = Date.now());

	        if (source.defaultPrevented !== undefined ? source.defaultPrevented : 'returnValue' in source ? source.returnValue === false : source.getPreventDefault && source.getPreventDefault()) event.isDefaultPrevented = returnTrue;
	      }
	      return event;
	    }

	    function createProxy(event) {
	      var key,
	          proxy = { originalEvent: event };
	      for (key in event) {
	        if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key];
	      }return compatible(proxy, event);
	    }

	    $.fn.delegate = function (selector, event, callback) {
	      return this.on(event, selector, callback);
	    };
	    $.fn.undelegate = function (selector, event, callback) {
	      return this.off(event, selector, callback);
	    };

	    $.fn.live = function (event, callback) {
	      $(document.body).delegate(this.selector, event, callback);
	      return this;
	    };
	    $.fn.die = function (event, callback) {
	      $(document.body).undelegate(this.selector, event, callback);
	      return this;
	    };

	    $.fn.on = function (event, selector, data, callback, one) {
	      var autoRemove,
	          delegator,
	          $this = this;
	      if (event && !isString(event)) {
	        $.each(event, function (type, fn) {
	          $this.on(type, selector, data, fn, one);
	        });
	        return $this;
	      }

	      if (!isString(selector) && !isFunction(callback) && callback !== false) callback = data, data = selector, selector = undefined;
	      if (callback === undefined || data === false) callback = data, data = undefined;

	      if (callback === false) callback = returnFalse;

	      return $this.each(function (_, element) {
	        if (one) autoRemove = function autoRemove(e) {
	          remove(element, e.type, callback);
	          return callback.apply(this, arguments);
	        };

	        if (selector) delegator = function delegator(e) {
	          var evt,
	              match = $(e.target).closest(selector, element).get(0);
	          if (match && match !== element) {
	            evt = $.extend(createProxy(e), { currentTarget: match, liveFired: element });
	            return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)));
	          }
	        };

	        add(element, event, callback, data, selector, delegator || autoRemove);
	      });
	    };
	    $.fn.off = function (event, selector, callback) {
	      var $this = this;
	      if (event && !isString(event)) {
	        $.each(event, function (type, fn) {
	          $this.off(type, selector, fn);
	        });
	        return $this;
	      }

	      if (!isString(selector) && !isFunction(callback) && callback !== false) callback = selector, selector = undefined;

	      if (callback === false) callback = returnFalse;

	      return $this.each(function () {
	        remove(this, event, callback, selector);
	      });
	    };

	    $.fn.trigger = function (event, args) {
	      event = isString(event) || $.isPlainObject(event) ? $.Event(event) : compatible(event);
	      event._args = args;
	      return this.each(function () {
	        // handle focus(), blur() by calling them directly
	        if (event.type in focus && typeof this[event.type] == "function") this[event.type]();
	        // items in the collection might not be DOM elements
	        else if ('dispatchEvent' in this) this.dispatchEvent(event);else $(this).triggerHandler(event, args);
	      });
	    };

	    // triggers event handlers on current element just as if an event occurred,
	    // doesn't trigger an actual event, doesn't bubble
	    $.fn.triggerHandler = function (event, args) {
	      var e, result;
	      this.each(function (i, element) {
	        e = createProxy(isString(event) ? $.Event(event) : event);
	        e._args = args;
	        e.target = element;
	        $.each(findHandlers(element, event.type || event), function (i, handler) {
	          result = handler.proxy(e);
	          if (e.isImmediatePropagationStopped()) return false;
	        });
	      });
	      return result;
	    }

	    // shortcut methods for `.bind(event, fn)` for each event type
	    ;('focusin focusout focus blur load resize scroll unload click dblclick ' + 'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' + 'change select keydown keypress keyup error').split(' ').forEach(function (event) {
	      $.fn[event] = function (callback) {
	        return 0 in arguments ? this.bind(event, callback) : this.trigger(event);
	      };
	    });

	    $.Event = function (type, props) {
	      if (!isString(type)) props = type, type = props.type;
	      var event = document.createEvent(specialEvents[type] || 'Events'),
	          bubbles = true;
	      if (props) for (var name in props) {
	        name == 'bubbles' ? bubbles = !!props[name] : event[name] = props[name];
	      }event.initEvent(type, bubbles, true);
	      return compatible(event);
	    };
	  })(Zepto);(function ($) {
	    var jsonpID = +new Date(),
	        document = window.document,
	        key,
	        name,
	        rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	        scriptTypeRE = /^(?:text|application)\/javascript/i,
	        xmlTypeRE = /^(?:text|application)\/xml/i,
	        jsonType = 'application/json',
	        htmlType = 'text/html',
	        blankRE = /^\s*$/,
	        originAnchor = document.createElement('a');

	    originAnchor.href = window.location.href;

	    // trigger a custom event and return false if it was cancelled
	    function triggerAndReturn(context, eventName, data) {
	      var event = $.Event(eventName);
	      $(context).trigger(event, data);
	      return !event.isDefaultPrevented();
	    }

	    // trigger an Ajax "global" event
	    function triggerGlobal(settings, context, eventName, data) {
	      if (settings.global) return triggerAndReturn(context || document, eventName, data);
	    }

	    // Number of active Ajax requests
	    $.active = 0;

	    function ajaxStart(settings) {
	      if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart');
	    }
	    function ajaxStop(settings) {
	      if (settings.global && ! --$.active) triggerGlobal(settings, null, 'ajaxStop');
	    }

	    // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
	    function ajaxBeforeSend(xhr, settings) {
	      var context = settings.context;
	      if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false) return false;

	      triggerGlobal(settings, context, 'ajaxSend', [xhr, settings]);
	    }
	    function ajaxSuccess(data, xhr, settings, deferred) {
	      var context = settings.context,
	          status = 'success';
	      settings.success.call(context, data, status, xhr);
	      if (deferred) deferred.resolveWith(context, [data, status, xhr]);
	      triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data]);
	      ajaxComplete(status, xhr, settings);
	    }
	    // type: "timeout", "error", "abort", "parsererror"
	    function ajaxError(error, type, xhr, settings, deferred) {
	      var context = settings.context;
	      settings.error.call(context, xhr, type, error);
	      if (deferred) deferred.rejectWith(context, [xhr, type, error]);
	      triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type]);
	      ajaxComplete(type, xhr, settings);
	    }
	    // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
	    function ajaxComplete(status, xhr, settings) {
	      var context = settings.context;
	      settings.complete.call(context, xhr, status);
	      triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings]);
	      ajaxStop(settings);
	    }

	    function ajaxDataFilter(data, type, settings) {
	      if (settings.dataFilter == empty) return data;
	      var context = settings.context;
	      return settings.dataFilter.call(context, data, type);
	    }

	    // Empty function, used as default callback
	    function empty() {}

	    $.ajaxJSONP = function (options, deferred) {
	      if (!('type' in options)) return $.ajax(options);

	      var _callbackName = options.jsonpCallback,
	          callbackName = ($.isFunction(_callbackName) ? _callbackName() : _callbackName) || 'Zepto' + jsonpID++,
	          script = document.createElement('script'),
	          originalCallback = window[callbackName],
	          responseData,
	          abort = function abort(errorType) {
	        $(script).triggerHandler('error', errorType || 'abort');
	      },
	          xhr = { abort: abort },
	          abortTimeout;

	      if (deferred) deferred.promise(xhr);

	      $(script).on('load error', function (e, errorType) {
	        clearTimeout(abortTimeout);
	        $(script).off().remove();

	        if (e.type == 'error' || !responseData) {
	          ajaxError(null, errorType || 'error', xhr, options, deferred);
	        } else {
	          ajaxSuccess(responseData[0], xhr, options, deferred);
	        }

	        window[callbackName] = originalCallback;
	        if (responseData && $.isFunction(originalCallback)) originalCallback(responseData[0]);

	        originalCallback = responseData = undefined;
	      });

	      if (ajaxBeforeSend(xhr, options) === false) {
	        abort('abort');
	        return xhr;
	      }

	      window[callbackName] = function () {
	        responseData = arguments;
	      };

	      script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName);
	      document.head.appendChild(script);

	      if (options.timeout > 0) abortTimeout = setTimeout(function () {
	        abort('timeout');
	      }, options.timeout);

	      return xhr;
	    };

	    $.ajaxSettings = {
	      // Default type of request
	      type: 'GET',
	      // Callback that is executed before request
	      beforeSend: empty,
	      // Callback that is executed if the request succeeds
	      success: empty,
	      // Callback that is executed the the server drops error
	      error: empty,
	      // Callback that is executed on request complete (both: error and success)
	      complete: empty,
	      // The context for the callbacks
	      context: null,
	      // Whether to trigger "global" Ajax events
	      global: true,
	      // Transport
	      xhr: function xhr() {
	        return new window.XMLHttpRequest();
	      },
	      // MIME types mapping
	      // IIS returns Javascript as "application/x-javascript"
	      accepts: {
	        script: 'text/javascript, application/javascript, application/x-javascript',
	        json: jsonType,
	        xml: 'application/xml, text/xml',
	        html: htmlType,
	        text: 'text/plain'
	      },
	      // Whether the request is to another domain
	      crossDomain: false,
	      // Default timeout
	      timeout: 0,
	      // Whether data should be serialized to string
	      processData: true,
	      // Whether the browser should be allowed to cache GET responses
	      cache: true,
	      //Used to handle the raw response data of XMLHttpRequest.
	      //This is a pre-filtering function to sanitize the response.
	      //The sanitized response should be returned
	      dataFilter: empty
	    };

	    function mimeToDataType(mime) {
	      if (mime) mime = mime.split(';', 2)[0];
	      return mime && (mime == htmlType ? 'html' : mime == jsonType ? 'json' : scriptTypeRE.test(mime) ? 'script' : xmlTypeRE.test(mime) && 'xml') || 'text';
	    }

	    function appendQuery(url, query) {
	      if (query == '') return url;
	      return (url + '&' + query).replace(/[&?]{1,2}/, '?');
	    }

	    // serialize payload and append it to the URL for GET requests
	    function serializeData(options) {
	      if (options.processData && options.data && $.type(options.data) != "string") options.data = $.param(options.data, options.traditional);
	      if (options.data && (!options.type || options.type.toUpperCase() == 'GET' || 'jsonp' == options.dataType)) options.url = appendQuery(options.url, options.data), options.data = undefined;
	    }

	    $.ajax = function (options) {
	      var settings = $.extend({}, options || {}),
	          deferred = $.Deferred && $.Deferred(),
	          urlAnchor,
	          hashIndex;
	      for (key in $.ajaxSettings) {
	        if (settings[key] === undefined) settings[key] = $.ajaxSettings[key];
	      }ajaxStart(settings);

	      if (!settings.crossDomain) {
	        urlAnchor = document.createElement('a');
	        urlAnchor.href = settings.url;
	        // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049
	        urlAnchor.href = urlAnchor.href;
	        settings.crossDomain = originAnchor.protocol + '//' + originAnchor.host !== urlAnchor.protocol + '//' + urlAnchor.host;
	      }

	      if (!settings.url) settings.url = window.location.toString();
	      if ((hashIndex = settings.url.indexOf('#')) > -1) settings.url = settings.url.slice(0, hashIndex);
	      serializeData(settings);

	      var dataType = settings.dataType,
	          hasPlaceholder = /\?.+=\?/.test(settings.url);
	      if (hasPlaceholder) dataType = 'jsonp';

	      if (settings.cache === false || (!options || options.cache !== true) && ('script' == dataType || 'jsonp' == dataType)) settings.url = appendQuery(settings.url, '_=' + Date.now());

	      if ('jsonp' == dataType) {
	        if (!hasPlaceholder) settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + '=?' : settings.jsonp === false ? '' : 'callback=?');
	        return $.ajaxJSONP(settings, deferred);
	      }

	      var mime = settings.accepts[dataType],
	          headers = {},
	          setHeader = function setHeader(name, value) {
	        headers[name.toLowerCase()] = [name, value];
	      },
	          protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
	          xhr = settings.xhr(),
	          nativeSetHeader = xhr.setRequestHeader,
	          abortTimeout;

	      if (deferred) deferred.promise(xhr);

	      if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest');
	      setHeader('Accept', mime || '*/*');
	      if (mime = settings.mimeType || mime) {
	        if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0];
	        xhr.overrideMimeType && xhr.overrideMimeType(mime);
	      }
	      if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET') setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded');

	      if (settings.headers) for (name in settings.headers) {
	        setHeader(name, settings.headers[name]);
	      }xhr.setRequestHeader = setHeader;

	      xhr.onreadystatechange = function () {
	        if (xhr.readyState == 4) {
	          xhr.onreadystatechange = empty;
	          clearTimeout(abortTimeout);
	          var result,
	              error = false;
	          if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == 'file:') {
	            dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'));

	            if (xhr.responseType == 'arraybuffer' || xhr.responseType == 'blob') result = xhr.response;else {
	              result = xhr.responseText;

	              try {
	                // http://perfectionkills.com/global-eval-what-are-the-options/
	                // sanitize response accordingly if data filter callback provided
	                result = ajaxDataFilter(result, dataType, settings);
	                if (dataType == 'script') (1, eval)(result);else if (dataType == 'xml') result = xhr.responseXML;else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result);
	              } catch (e) {
	                error = e;
	              }

	              if (error) return ajaxError(error, 'parsererror', xhr, settings, deferred);
	            }

	            ajaxSuccess(result, xhr, settings, deferred);
	          } else {
	            ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred);
	          }
	        }
	      };

	      if (ajaxBeforeSend(xhr, settings) === false) {
	        xhr.abort();
	        ajaxError(null, 'abort', xhr, settings, deferred);
	        return xhr;
	      }

	      var async = 'async' in settings ? settings.async : true;
	      xhr.open(settings.type, settings.url, async, settings.username, settings.password);

	      if (settings.xhrFields) for (name in settings.xhrFields) {
	        xhr[name] = settings.xhrFields[name];
	      }for (name in headers) {
	        nativeSetHeader.apply(xhr, headers[name]);
	      }if (settings.timeout > 0) abortTimeout = setTimeout(function () {
	        xhr.onreadystatechange = empty;
	        xhr.abort();
	        ajaxError(null, 'timeout', xhr, settings, deferred);
	      }, settings.timeout);

	      // avoid sending empty string (#319)
	      xhr.send(settings.data ? settings.data : null);
	      return xhr;
	    };

	    // handle optional data/success arguments
	    function parseArguments(url, data, success, dataType) {
	      if ($.isFunction(data)) dataType = success, success = data, data = undefined;
	      if (!$.isFunction(success)) dataType = success, success = undefined;
	      return {
	        url: url,
	        data: data,
	        success: success,
	        dataType: dataType
	      };
	    }

	    $.get = function () /* url, data, success, dataType */{
	      return $.ajax(parseArguments.apply(null, arguments));
	    };

	    $.post = function () /* url, data, success, dataType */{
	      var options = parseArguments.apply(null, arguments);
	      options.type = 'POST';
	      return $.ajax(options);
	    };

	    $.getJSON = function () /* url, data, success */{
	      var options = parseArguments.apply(null, arguments);
	      options.dataType = 'json';
	      return $.ajax(options);
	    };

	    $.fn.load = function (url, data, success) {
	      if (!this.length) return this;
	      var self = this,
	          parts = url.split(/\s/),
	          selector,
	          options = parseArguments(url, data, success),
	          callback = options.success;
	      if (parts.length > 1) options.url = parts[0], selector = parts[1];
	      options.success = function (response) {
	        self.html(selector ? $('<div>').html(response.replace(rscript, "")).find(selector) : response);
	        callback && callback.apply(self, arguments);
	      };
	      $.ajax(options);
	      return this;
	    };

	    var escape = encodeURIComponent;

	    function serialize(params, obj, traditional, scope) {
	      var type,
	          array = $.isArray(obj),
	          hash = $.isPlainObject(obj);
	      $.each(obj, function (key, value) {
	        type = $.type(value);
	        if (scope) key = traditional ? scope : scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']';
	        // handle data in serializeArray() format
	        if (!scope && array) params.add(value.name, value.value);
	        // recurse into nested objects
	        else if (type == "array" || !traditional && type == "object") serialize(params, value, traditional, key);else params.add(key, value);
	      });
	    }

	    $.param = function (obj, traditional) {
	      var params = [];
	      params.add = function (key, value) {
	        if ($.isFunction(value)) value = value();
	        if (value == null) value = "";
	        this.push(escape(key) + '=' + escape(value));
	      };
	      serialize(params, obj, traditional);
	      return params.join('&').replace(/%20/g, '+');
	    };
	  })(Zepto);(function ($) {
	    $.fn.serializeArray = function () {
	      var name,
	          type,
	          result = [],
	          add = function add(value) {
	        if (value.forEach) return value.forEach(add);
	        result.push({ name: name, value: value });
	      };
	      if (this[0]) $.each(this[0].elements, function (_, field) {
	        type = field.type, name = field.name;
	        if (name && field.nodeName.toLowerCase() != 'fieldset' && !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' && (type != 'radio' && type != 'checkbox' || field.checked)) add($(field).val());
	      });
	      return result;
	    };

	    $.fn.serialize = function () {
	      var result = [];
	      this.serializeArray().forEach(function (elm) {
	        result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value));
	      });
	      return result.join('&');
	    };

	    $.fn.submit = function (callback) {
	      if (0 in arguments) this.bind('submit', callback);else if (this.length) {
	        var event = $.Event('submit');
	        this.eq(0).trigger(event);
	        if (!event.isDefaultPrevented()) this.get(0).submit();
	      }
	      return this;
	    };
	  })(Zepto);(function () {
	    // getComputedStyle shouldn't freak out when called
	    // without a valid element as argument
	    try {
	      getComputedStyle(undefined);
	    } catch (e) {
	      var nativeGetComputedStyle = getComputedStyle;
	      window.getComputedStyle = function (element, pseudoElement) {
	        try {
	          return nativeGetComputedStyle(element, pseudoElement);
	        } catch (e) {
	          return null;
	        }
	      };
	    }
	  })();
	  module.exports = Zepto;
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	(function () {
	    "use strict";

	    var $ = __webpack_require__(5);

	    var _modalTemplateTempDiv = document.createElement('div');

	    $.modalStack = [];

	    $.modalStackClearQueue = function () {
	        if ($.modalStack.length) {
	            $.modalStack.shift()();
	        }
	    };
	    $.modal = function (params) {
	        params = params || {};
	        var modalHTML = '';
	        var buttonsHTML = '';
	        if (params.buttons && params.buttons.length > 0) {
	            for (var i = 0; i < params.buttons.length; i++) {
	                buttonsHTML += '<span class="modal-button' + (params.buttons[i].bold ? ' modal-button-bold' : '') + '">' + params.buttons[i].text + '</span>';
	            }
	        }
	        var extraClass = params.extraClass || '';
	        var titleHTML = params.title ? '<div class="modal-title">' + params.title + '</div>' : '';
	        var textHTML = params.text ? '<div class="modal-text">' + params.text + '</div>' : '';
	        var afterTextHTML = params.afterText ? params.afterText : '';
	        var noButtons = !params.buttons || params.buttons.length === 0 ? 'modal-no-buttons' : '';
	        var verticalButtons = params.verticalButtons ? 'modal-buttons-vertical' : '';
	        modalHTML = '<div class="modal ' + extraClass + ' ' + noButtons + '"><div class="modal-inner">' + (titleHTML + textHTML + afterTextHTML) + '</div><div class="modal-buttons ' + verticalButtons + '">' + buttonsHTML + '</div></div>';

	        _modalTemplateTempDiv.innerHTML = modalHTML;

	        var modal = $(_modalTemplateTempDiv).children();

	        $(defaults.modalContainer).append(modal[0]);

	        // Add events on buttons
	        modal.find('.modal-button').each(function (index, el) {
	            $(el).on('click', function (e) {
	                if (params.buttons[index].close !== false) $.closeModal(modal);
	                if (params.buttons[index].onClick) params.buttons[index].onClick(modal, e);
	                if (params.onClick) params.onClick(modal, index);
	            });
	        });
	        $.openModal(modal);
	        return modal[0];
	    };
	    $.pickerModal = function (pickerModal, removeOnClose) {
	        if (typeof removeOnClose === 'undefined') removeOnClose = true;
	        if (typeof pickerModal === 'string' && pickerModal.indexOf('<') >= 0) {
	            pickerModal = $(pickerModal);
	            if (pickerModal.length > 0) {
	                if (removeOnClose) pickerModal.addClass('remove-on-close');
	                $(defaults.modalContainer).append(pickerModal[0]);
	            } else return false; //nothing found
	        }
	        pickerModal = $(pickerModal);
	        if (pickerModal.length === 0) return false;
	        pickerModal.show();
	        $.openModal(pickerModal);
	        return pickerModal[0];
	    };

	    $.openModal = function (modal, cb) {
	        modal = $(modal);
	        var isModal = modal.hasClass('modal'),
	            isNotToast = !modal.hasClass('toast');
	        if ($('.modal.modal-in:not(.modal-out)').length && defaults.modalStack && isModal && isNotToast) {
	            $.modalStack.push(function () {
	                $.openModal(modal, cb);
	            });
	            return;
	        }
	        var isPopup = modal.hasClass('popup');
	        var isLoginScreen = modal.hasClass('login-screen');
	        var isPickerModal = modal.hasClass('picker-modal');
	        var isToast = modal.hasClass('toast');
	        if (isModal) {
	            modal.show();
	            modal.css({
	                marginTop: -Math.round(modal.outerHeight() / 2) + 'px'
	            });
	        }
	        if (isToast) {
	            modal.css({
	                marginLeft: -Math.round(modal.outerWidth() / 2 / 1.185) + 'px' //1.185 是初始化时候的放大效果
	            });
	        }

	        var overlay;
	        if (!isLoginScreen && !isPickerModal && !isToast) {
	            if ($('.modal-overlay').length === 0 && !isPopup) {
	                $(defaults.modalContainer).append('<div class="modal-overlay"></div>');
	            }
	            if ($('.popup-overlay').length === 0 && isPopup) {
	                $(defaults.modalContainer).append('<div class="popup-overlay"></div>');
	            }
	            overlay = isPopup ? $('.popup-overlay') : $('.modal-overlay');
	        }

	        //Make sure that styles are applied, trigger relayout;
	        var clientLeft = modal[0].clientLeft;

	        // Trugger open event
	        modal.trigger('open');

	        // Picker modal body class
	        if (isPickerModal) {
	            $(defaults.modalContainer).addClass('with-picker-modal');
	        }

	        // Classes for transition in
	        if (!isLoginScreen && !isPickerModal && !isToast) overlay.addClass('modal-overlay-visible');
	        modal.removeClass('modal-out').addClass('modal-in');

	        setTimeout(function (e) {
	            if (modal.hasClass('modal-out')) modal.trigger('closed');else modal.trigger('opened');
	        }, 400);
	        // excute callback
	        if (typeof cb === 'function') {
	            cb.call(this);
	        }
	        return true;
	    };
	    $.closeModal = function (modal) {
	        modal = $(modal || '.modal-in');
	        if (typeof modal !== 'undefined' && modal.length === 0) {
	            return;
	        }
	        var isModal = modal.hasClass('modal'),
	            isPopup = modal.hasClass('popup'),
	            isToast = modal.hasClass('toast'),
	            isLoginScreen = modal.hasClass('login-screen'),
	            isPickerModal = modal.hasClass('picker-modal'),
	            removeOnClose = modal.hasClass('remove-on-close'),
	            overlay = isPopup ? $('.popup-overlay') : $('.modal-overlay');
	        if (isPopup) {
	            if (modal.length === $('.popup.modal-in').length) {
	                overlay.removeClass('modal-overlay-visible');
	            }
	        } else if (!(isPickerModal || isToast)) {
	            overlay.removeClass('modal-overlay-visible');
	        }

	        modal.trigger('close');

	        // Picker modal body class
	        if (isPickerModal) {
	            $(defaults.modalContainer).removeClass('with-picker-modal');
	            $(defaults.modalContainer).addClass('picker-modal-closing');
	        }

	        modal.removeClass('modal-in').addClass('modal-out');

	        setTimeout(function (e) {
	            if (modal.hasClass('modal-out')) modal.trigger('closed');else modal.trigger('opened');

	            if (isPickerModal) {
	                $(defaults.modalContainer).removeClass('picker-modal-closing');
	            }
	            if (isPopup || isLoginScreen || isPickerModal) {
	                modal.removeClass('modal-out').hide();
	                if (removeOnClose && modal.length > 0) {
	                    modal.remove();
	                }
	            } else {
	                modal.remove();
	            }
	        }, 400);
	        if (isModal && defaults.modalStack) {
	            $.modalStackClearQueue();
	        }

	        return true;
	    };

	    function handleClicks(e) {
	        /*jshint validthis:true */
	        var clicked = $(this);
	        var url = clicked.attr('href');

	        //Collect Clicked data- attributes
	        var clickedData = clicked.dataset();

	        // Popup
	        var popup;
	        if (clicked.hasClass('open-popup')) {
	            if (clickedData.popup) {
	                popup = clickedData.popup;
	            } else popup = '.popup';
	            $.popup(popup);
	        }
	        if (clicked.hasClass('close-popup')) {
	            if (clickedData.popup) {
	                popup = clickedData.popup;
	            } else popup = '.popup.modal-in';
	            $.closeModal(popup);
	        }

	        // Close Modal
	        if (clicked.hasClass('modal-overlay')) {
	            if ($('.modal.modal-in').length > 0 && defaults.modalCloseByOutside) $.closeModal('.modal.modal-in');
	            if ($('.actions-modal.modal-in').length > 0 && defaults.actionsCloseByOutside) $.closeModal('.actions-modal.modal-in');
	        }
	        if (clicked.hasClass('popup-overlay')) {
	            if ($('.popup.modal-in').length > 0 && defaults.popupCloseByOutside) $.closeModal('.popup.modal-in');
	        }
	    }

	    var defaults = $.modal.prototype.defaults = {
	        modalStack: true,
	        modalButtonOk: '确定',
	        modalButtonCancel: '取消',
	        modalPreloaderTitle: '加载中',
	        modalContainer: document.body ? document.body : 'body'
	    };
	})();

	(function () {
	    "use strict";

	    var $ = __webpack_require__(5);

	    $.touchEvents = {
	        start: true ? 'touchstart' : 'mousedown',
	        move: true ? 'touchmove' : 'mousemove',
	        end: true ? 'touchend' : 'mouseup'
	    };
	    $.cancelAnimationFrame = function (id) {
	        if (window.cancelAnimationFrame) return window.cancelAnimationFrame(id);else if (window.webkitCancelAnimationFrame) return window.webkitCancelAnimationFrame(id);else if (window.mozCancelAnimationFrame) return window.mozCancelAnimationFrame(id);else {
	            return window.clearTimeout(id);
	        }
	    };
	    $.getTranslate = function (el, axis) {
	        var matrix, curTransform, curStyle, transformMatrix;

	        // automatic axis detection
	        if (typeof axis === 'undefined') {
	            axis = 'x';
	        }

	        curStyle = window.getComputedStyle(el, null);
	        if (window.WebKitCSSMatrix) {
	            // Some old versions of Webkit choke when 'none' is passed; pass
	            // empty string instead in this case
	            transformMatrix = new WebKitCSSMatrix(curStyle.webkitTransform === 'none' ? '' : curStyle.webkitTransform);
	        } else {
	            transformMatrix = curStyle.MozTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
	            matrix = transformMatrix.toString().split(',');
	        }

	        if (axis === 'x') {
	            //Latest Chrome and webkits Fix
	            if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
	            //Crazy IE10 Matrix
	            else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
	                //Normal Browsers
	                else curTransform = parseFloat(matrix[4]);
	        }
	        if (axis === 'y') {
	            //Latest Chrome and webkits Fix
	            if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
	            //Crazy IE10 Matrix
	            else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
	                //Normal Browsers
	                else curTransform = parseFloat(matrix[5]);
	        }

	        return curTransform || 0;
	    };
	    $.fn.transition = function (duration) {
	        if (typeof duration !== 'string') {
	            duration = duration + 'ms';
	        }
	        for (var i = 0; i < this.length; i++) {
	            var elStyle = this[i].style;
	            elStyle.webkitTransitionDuration = elStyle.MozTransitionDuration = elStyle.transitionDuration = duration;
	        }
	        return this;
	    };
	    $.fn.transform = function (transform) {
	        for (var i = 0; i < this.length; i++) {
	            var elStyle = this[i].style;
	            elStyle.webkitTransform = elStyle.MozTransform = elStyle.transform = transform;
	        }
	        return this;
	    };

	    var Picker = function Picker(params, p) {
	        // var p = Obj;
	        var defaults = {
	            updateValuesOnMomentum: false,
	            updateValuesOnTouchmove: true,
	            rotateEffect: false,
	            momentumRatio: 7,
	            freeMode: false,
	            // Common settings
	            scrollToInput: true,
	            inputReadOnly: true,
	            toolbar: true,
	            toolbarCloseText: '确定',
	            toolbarTemplate: '<header class="bar bar-nav">\
	                <button class="button button-link pull-right close-picker">确定</button>\
	                <h1 class="title">请选择</h1>\
	                </header>'
	        };
	        params = params || {};
	        for (var def in defaults) {
	            if (typeof params[def] === 'undefined') {
	                params[def] = defaults[def];
	            }
	        }
	        p.params = params;
	        p.cols = [];
	        p.initialized = false;

	        // Inline flag
	        p.inline = p.params.container ? true : false;

	        // 3D Transforms origin bug, only on safari
	        var originBug = navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') < 0;

	        // Value
	        p.setValue = function (arrValues, transition) {
	            var valueIndex = 0;
	            for (var i = 0; i < p.cols.length; i++) {
	                if (p.cols[i] && !p.cols[i].divider) {
	                    p.cols[i].setValue(arrValues[valueIndex], transition);
	                    valueIndex++;
	                }
	            }
	        };
	        p.updateValue = function () {
	            var newValue = [];
	            var newDisplayValue = [];
	            for (var i = 0; i < p.cols.length; i++) {
	                if (!p.cols[i].divider) {
	                    newValue.push(p.cols[i].value);
	                    newDisplayValue.push(p.cols[i].displayValue);
	                }
	            }
	            if (newValue.indexOf(undefined) >= 0) {
	                return;
	            }
	            p.value = newValue;
	            p.displayValue = newDisplayValue;
	            if (p.params.onChange) {
	                p.params.onChange(p, p.value, p.displayValue);
	            }
	            if (p.input && p.input.length > 0) {
	                $(p.input).val(p.params.formatValue ? p.params.formatValue(p, p.value, p.displayValue) : p.value.join(' '));
	                $(p.input).trigger('change');
	            }
	        };
	        // Columns Handlers
	        p.initPickerCol = function (colElement, updateItems) {
	            var colContainer = $(colElement);
	            var colIndex = colContainer.index();
	            var col = p.cols[colIndex];
	            if (col.divider) return;
	            col.container = colContainer;
	            col.wrapper = col.container.find('.picker-items-col-wrapper');
	            col.items = col.wrapper.find('.picker-item');

	            var i, j;
	            var wrapperHeight, itemHeight, itemsHeight, minTranslate, maxTranslate;
	            col.replaceValues = function (values, displayValues) {
	                col.destroyEvents();
	                col.values = values;
	                col.displayValues = displayValues;
	                var newItemsHTML = p.columnHTML(col, true);
	                col.wrapper.html(newItemsHTML);
	                col.items = col.wrapper.find('.picker-item');
	                col.calcSize();
	                col.setValue(col.values[0], 0, true);
	                col.initEvents();
	            };
	            col.calcSize = function () {
	                if (p.params.rotateEffect) {
	                    col.container.removeClass('picker-items-col-absolute');
	                    if (!col.width) col.container.css({ width: '' });
	                }
	                var colWidth, colHeight;
	                colWidth = 0;
	                colHeight = col.container[0].offsetHeight;
	                wrapperHeight = col.wrapper[0].offsetHeight;
	                itemHeight = col.items[0].offsetHeight;
	                itemsHeight = itemHeight * col.items.length;
	                minTranslate = colHeight / 2 - itemsHeight + itemHeight / 2;
	                maxTranslate = colHeight / 2 - itemHeight / 2;
	                if (col.width) {
	                    colWidth = col.width;
	                    if (parseInt(colWidth, 10) === colWidth) colWidth = colWidth + 'px';
	                    col.container.css({ width: colWidth });
	                }
	                if (p.params.rotateEffect) {
	                    if (!col.width) {
	                        col.items.each(function () {
	                            var item = $(this);
	                            item.css({ width: 'auto' });
	                            colWidth = Math.max(colWidth, item[0].offsetWidth);
	                            item.css({ width: '' });
	                        });
	                        col.container.css({ width: colWidth + 2 + 'px' });
	                    }
	                    col.container.addClass('picker-items-col-absolute');
	                }
	            };
	            col.calcSize();

	            // col.wrapper.transform('translate3d(0,' + maxTranslate + 'px,0)').transition(0);


	            var activeIndex = 0;
	            var animationFrameId;

	            // Set Value Function
	            col.setValue = function (newValue, transition, valueCallbacks) {
	                if (typeof transition === 'undefined') transition = '';
	                var newActiveIndex = col.wrapper.find('.picker-item[data-picker-value="' + newValue + '"]').index();
	                if (typeof newActiveIndex === 'undefined' || newActiveIndex === -1) {
	                    return;
	                }
	                var newTranslate = -newActiveIndex * itemHeight + maxTranslate;
	                // Update wrapper
	                col.wrapper.transition(transition);
	                col.wrapper.transform('translate3d(0,' + newTranslate + 'px,0)');

	                // Watch items
	                if (p.params.updateValuesOnMomentum && col.activeIndex && col.activeIndex !== newActiveIndex) {
	                    $.cancelAnimationFrame(animationFrameId);
	                    col.wrapper.transitionEnd(function () {
	                        $.cancelAnimationFrame(animationFrameId);
	                    });
	                    updateDuringScroll();
	                }

	                // Update items
	                col.updateItems(newActiveIndex, newTranslate, transition, valueCallbacks);
	            };

	            col.updateItems = function (activeIndex, translate, transition, valueCallbacks) {
	                if (typeof translate === 'undefined') {
	                    translate = $.getTranslate(col.wrapper[0], 'y');
	                }
	                if (typeof activeIndex === 'undefined') activeIndex = -Math.round((translate - maxTranslate) / itemHeight);
	                if (activeIndex < 0) activeIndex = 0;
	                if (activeIndex >= col.items.length) activeIndex = col.items.length - 1;
	                var previousActiveIndex = col.activeIndex;
	                col.activeIndex = activeIndex;
	                /*
	                   col.wrapper.find('.picker-selected, .picker-after-selected, .picker-before-selected').removeClass('picker-selected picker-after-selected picker-before-selected');
	                    col.items.transition(transition);
	                   var selectedItem = col.items.eq(activeIndex).addClass('picker-selected').transform('');
	                   var prevItems = selectedItem.prevAll().addClass('picker-before-selected');
	                   var nextItems = selectedItem.nextAll().addClass('picker-after-selected');
	                   */
	                //去掉 .picker-after-selected, .picker-before-selected 以提高性能
	                col.wrapper.find('.picker-selected').removeClass('picker-selected');
	                if (p.params.rotateEffect) {
	                    col.items.transition(transition);
	                }
	                var selectedItem = col.items.eq(activeIndex).addClass('picker-selected');

	                if (valueCallbacks || typeof valueCallbacks === 'undefined') {
	                    // Update values
	                    col.value = selectedItem.attr('data-picker-value');
	                    col.displayValue = col.displayValues ? col.displayValues[activeIndex] : col.value;
	                    // On change callback
	                    if (previousActiveIndex !== activeIndex) {
	                        if (col.onChange) {
	                            col.onChange(p, col.value, col.displayValue);
	                        }
	                        p.updateValue();
	                    }
	                }

	                // Set 3D rotate effect
	                if (!p.params.rotateEffect) {
	                    return;
	                }
	                var percentage = (translate - (Math.floor((translate - maxTranslate) / itemHeight) * itemHeight + maxTranslate)) / itemHeight;

	                col.items.each(function () {
	                    var item = $(this);
	                    var itemOffsetTop = item.index() * itemHeight;
	                    var translateOffset = maxTranslate - translate;
	                    var itemOffset = itemOffsetTop - translateOffset;
	                    var percentage = itemOffset / itemHeight;

	                    var itemsFit = Math.ceil(col.height / itemHeight / 2) + 1;

	                    var angle = -18 * percentage;
	                    if (angle > 180) angle = 180;
	                    if (angle < -180) angle = -180;
	                    // Far class
	                    if (Math.abs(percentage) > itemsFit) item.addClass('picker-item-far');else item.removeClass('picker-item-far');
	                    // Set transform
	                    item.transform('translate3d(0, ' + (-translate + maxTranslate) + 'px, ' + (originBug ? -110 : 0) + 'px) rotateX(' + angle + 'deg)');
	                });
	            };

	            // Update items on init
	            if (updateItems) col.updateItems(0, maxTranslate, 0);

	            var allowItemClick = true;
	            var isTouched, isMoved, touchStartY, touchCurrentY, touchStartTime, touchEndTime, startTranslate, returnTo, currentTranslate, prevTranslate, velocityTranslate, velocityTime;
	            function handleTouchStart(e) {
	                if (isMoved || isTouched) return;
	                e.preventDefault();
	                isTouched = true;
	                touchStartY = touchCurrentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	                touchStartTime = new Date().getTime();

	                allowItemClick = true;
	                startTranslate = currentTranslate = $.getTranslate(col.wrapper[0], 'y');
	            }
	            function handleTouchMove(e) {
	                if (!isTouched) return;
	                e.preventDefault();
	                allowItemClick = false;
	                touchCurrentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	                if (!isMoved) {
	                    // First move
	                    $.cancelAnimationFrame(animationFrameId);
	                    isMoved = true;
	                    startTranslate = currentTranslate = $.getTranslate(col.wrapper[0], 'y');
	                    col.wrapper.transition(0);
	                }
	                e.preventDefault();

	                var diff = touchCurrentY - touchStartY;
	                currentTranslate = startTranslate + diff;
	                returnTo = undefined;

	                // Normalize translate
	                if (currentTranslate < minTranslate) {
	                    currentTranslate = minTranslate - Math.pow(minTranslate - currentTranslate, 0.8);
	                    returnTo = 'min';
	                }
	                if (currentTranslate > maxTranslate) {
	                    currentTranslate = maxTranslate + Math.pow(currentTranslate - maxTranslate, 0.8);
	                    returnTo = 'max';
	                }
	                // Transform wrapper
	                col.wrapper.transform('translate3d(0,' + currentTranslate + 'px,0)');

	                // Update items
	                col.updateItems(undefined, currentTranslate, 0, p.params.updateValuesOnTouchmove);

	                // Calc velocity
	                velocityTranslate = currentTranslate - prevTranslate || currentTranslate;
	                velocityTime = new Date().getTime();
	                prevTranslate = currentTranslate;
	            }
	            function handleTouchEnd(e) {
	                if (!isTouched || !isMoved) {
	                    isTouched = isMoved = false;
	                    return;
	                }
	                isTouched = isMoved = false;
	                col.wrapper.transition('');
	                if (returnTo) {
	                    if (returnTo === 'min') {
	                        col.wrapper.transform('translate3d(0,' + minTranslate + 'px,0)');
	                    } else col.wrapper.transform('translate3d(0,' + maxTranslate + 'px,0)');
	                }
	                touchEndTime = new Date().getTime();
	                var velocity, newTranslate;
	                if (touchEndTime - touchStartTime > 300) {
	                    newTranslate = currentTranslate;
	                } else {
	                    velocity = Math.abs(velocityTranslate / (touchEndTime - velocityTime));
	                    newTranslate = currentTranslate + velocityTranslate * p.params.momentumRatio;
	                }

	                newTranslate = Math.max(Math.min(newTranslate, maxTranslate), minTranslate);

	                // Active Index
	                var activeIndex = -Math.floor((newTranslate - maxTranslate) / itemHeight);

	                // Normalize translate
	                if (!p.params.freeMode) newTranslate = -activeIndex * itemHeight + maxTranslate;

	                // Transform wrapper
	                col.wrapper.transform('translate3d(0,' + parseInt(newTranslate, 10) + 'px,0)');

	                // Update items
	                col.updateItems(activeIndex, newTranslate, '', true);
	            }

	            col.initEvents = function (detach) {
	                var method = detach ? 'off' : 'on';
	                console.log(col.container);
	                col.container[method]($.touchEvents.start, handleTouchStart);
	                col.container[method]($.touchEvents.move, handleTouchMove);
	                col.container[method]($.touchEvents.end, handleTouchEnd);
	            };
	            col.destroyEvents = function () {
	                col.initEvents(true);
	            };

	            col.initEvents();
	        };

	        // HTML Layout
	        p.columnHTML = function (col, onlyItems) {
	            var columnItemsHTML = '';
	            var columnHTML = '';
	            if (col.divider) {
	                columnHTML += '<div class="picker-items-col picker-items-col-divider ' + (col.textAlign ? 'picker-items-col-' + col.textAlign : '') + ' ' + (col.cssClass || '') + '">' + col.content + '</div>';
	            } else {
	                for (var j = 0; j < col.values.length; j++) {
	                    columnItemsHTML += '<div class="picker-item" data-picker-value="' + col.values[j] + '">' + (col.displayValues ? col.displayValues[j] : col.values[j]) + '</div>';
	                }

	                columnHTML += '<div class="picker-items-col ' + (col.textAlign ? 'picker-items-col-' + col.textAlign : '') + ' ' + (col.cssClass || '') + '"><div class="picker-items-col-wrapper">' + columnItemsHTML + '</div></div>';
	            }
	            return onlyItems ? columnItemsHTML : columnHTML;
	        };
	        p.layout = function () {
	            var pickerHTML = '';
	            var pickerClass = '';
	            var i;
	            p.cols = [];
	            var colsHTML = '';
	            for (i = 0; i < p.params.cols.length; i++) {
	                var col = p.params.cols[i];
	                colsHTML += p.columnHTML(p.params.cols[i]);
	                p.cols.push(col);
	            }
	            pickerClass = 'picker-modal picker-columns ' + (p.params.cssClass || '') + (p.params.rotateEffect ? ' picker-3d' : '');
	            pickerHTML = '<div class="' + pickerClass + '">' + (p.params.toolbar ? p.params.toolbarTemplate.replace(/{{closeText}}/g, p.params.toolbarCloseText) : '') + '<div class="picker-modal-inner picker-items">' + colsHTML + '<div class="picker-center-highlight"></div>' + '</div>' + '</div>';

	            p.pickerHTML = pickerHTML;
	        };

	        p.opened = false;
	        p.open = function () {

	            if (!p.opened) {

	                // Layout
	                p.layout();
	                p.opened = true;
	                // Append
	                if (p.inline) {
	                    p.container = $(p.pickerHTML);
	                    p.container.addClass('picker-modal-inline');
	                    $(p.params.container).append(p.container);
	                } else {

	                    p.container = $($.pickerModal(p.pickerHTML));

	                    $(p.container).on('close', function () {
	                        onPickerClose();
	                    });
	                }

	                // Store picker instance
	                p.container[0].f7Picker = p;

	                // Init Events
	                p.container.find('.picker-items-col').each(function () {
	                    var updateItems = true;
	                    if (!p.initialized && p.params.value || p.initialized && p.value) updateItems = false;
	                    p.initPickerCol(this, updateItems);
	                });

	                // Set value
	                if (!p.initialized) {
	                    if (p.params.value) {
	                        p.setValue(p.params.value, 0);
	                    }
	                } else {
	                    if (p.value) p.setValue(p.value, 0);
	                }
	            }

	            // Set flag
	            p.initialized = true;

	            if (p.params.onOpen) p.params.onOpen(p);
	        };

	        // Close
	        p.close = function () {
	            if (!p.opened || p.inline) return;
	            $.closeModal(p.container);
	            return;
	        };

	        return p;
	    };

	    module.exports = Picker;
	})();

/***/ }
/******/ ]);