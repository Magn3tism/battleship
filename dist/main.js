/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font-family:  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  border-collapse: collapse;\n}\n\n.title-text {\n  font-size: 27px;\n  margin: 7px 15px;\n  text-decoration: underline;\n}\n\nmain {\n  width: 100%;\n  justify-content: center;\n  gap: 40px;\n  text-align: center;\n  display: flex;\n}\n\n.board-container {\n  font-size: 18px;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  margin-top: 10px;\n  position: relative;\n  box-shadow: 0 0.2rem 0.6rem #00000080;\n  user-select: none;\n}\n\n.box {\n  box-sizing: border-box;\n  display: table-cell;\n  height: 40px;\n  width: 40px;\n  border-right: 1px solid #db5061;\n  border-bottom: 1px solid #db5061;\n  background-color: #fff7f7;\n  outline: none;\n}\n\n.box:active {\n  border: none;\n  outline: none;\n  border-right: 1px solid #db5061;\n  border-bottom: 1px solid #db5061;\n  transform: none;\n}\n\n.box-right {\n  border-right: none;\n}\n\n.box-right:active {\n  border: none;\n  outline: none;\n  border-bottom: 1px solid #db5061;\n  transform: none;\n}\n\n\n.box-bottom {\n  border-bottom: none;\n}\n\n.box-bottom:active {\n  border: none;\n  outline: none;\n  border-right: 1px solid #db5061;\n  transform: none;\n}\n\n.p2 {\n  filter: blur(2px);\n}\n\n.start {\n  position: absolute;\n  filter: none;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 10px;\n  border: none;\n  background-color: #f2f2f2;\n  color: #27276f;\n  box-shadow: 0 0.2rem 0.3rem #00000080;\n  transition: transform 100ms;\n}\n\n.start:hover {\n  cursor: pointer;\n  transform: scale(1.1) translate(-50%, -50%);\n}\n\n.placed {\n  border-top: 2px solid red;\n  border-bottom: 3px solid red;\n  border-right: 1px solid #d08f96;\n  box-sizing: border-box;\n  background-color: #f4f4f4;\n}\n\n.placed-left {\n  border-left: 2px solid red;\n}\n\n.placed-right {\n  border-right: 2px solid red;\n}\n\n.attacked {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 35px;\n}\n\n.hit-ship {\n  color: red;\n}\n\n.sunk {\n  background-color: red;\n  color: white;\n}\n\nbutton {\n  all: unset;\n}\n\n#message {\n  margin: 30px ;\n  font-size: 30px;\n  text-align: center;\n  text-shadow: -2px -1px 50px rgba(0,0,0,1);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,oJAAoJ;EACpJ,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,SAAS;EACT,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,gBAAgB;EAChB,kBAAkB;EAClB,qCAAqC;EACrC,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,+BAA+B;EAC/B,gCAAgC;EAChC,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,+BAA+B;EAC/B,gCAAgC;EAChC,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gCAAgC;EAChC,eAAe;AACjB;;;AAGA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,+BAA+B;EAC/B,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,QAAQ;EACR,SAAS;EACT,gCAAgC;;EAEhC,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;EACzB,cAAc;EACd,qCAAqC;EACrC,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,2CAA2C;AAC7C;;AAEA;EACE,yBAAyB;EACzB,4BAA4B;EAC5B,+BAA+B;EAC/B,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,yCAAyC;AAC3C","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  font-family:  system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  border-collapse: collapse;\n}\n\n.title-text {\n  font-size: 27px;\n  margin: 7px 15px;\n  text-decoration: underline;\n}\n\nmain {\n  width: 100%;\n  justify-content: center;\n  gap: 40px;\n  text-align: center;\n  display: flex;\n}\n\n.board-container {\n  font-size: 18px;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  margin-top: 10px;\n  position: relative;\n  box-shadow: 0 0.2rem 0.6rem #00000080;\n  user-select: none;\n}\n\n.box {\n  box-sizing: border-box;\n  display: table-cell;\n  height: 40px;\n  width: 40px;\n  border-right: 1px solid #db5061;\n  border-bottom: 1px solid #db5061;\n  background-color: #fff7f7;\n  outline: none;\n}\n\n.box:active {\n  border: none;\n  outline: none;\n  border-right: 1px solid #db5061;\n  border-bottom: 1px solid #db5061;\n  transform: none;\n}\n\n.box-right {\n  border-right: none;\n}\n\n.box-right:active {\n  border: none;\n  outline: none;\n  border-bottom: 1px solid #db5061;\n  transform: none;\n}\n\n\n.box-bottom {\n  border-bottom: none;\n}\n\n.box-bottom:active {\n  border: none;\n  outline: none;\n  border-right: 1px solid #db5061;\n  transform: none;\n}\n\n.p2 {\n  filter: blur(2px);\n}\n\n.start {\n  position: absolute;\n  filter: none;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  padding: 6px;\n  font-size: 17px;\n  border-radius: 10px;\n  border: none;\n  background-color: #f2f2f2;\n  color: #27276f;\n  box-shadow: 0 0.2rem 0.3rem #00000080;\n  transition: transform 100ms;\n}\n\n.start:hover {\n  cursor: pointer;\n  transform: scale(1.1) translate(-50%, -50%);\n}\n\n.placed {\n  border-top: 2px solid red;\n  border-bottom: 3px solid red;\n  border-right: 1px solid #d08f96;\n  box-sizing: border-box;\n  background-color: #f4f4f4;\n}\n\n.placed-left {\n  border-left: 2px solid red;\n}\n\n.placed-right {\n  border-right: 2px solid red;\n}\n\n.attacked {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 35px;\n}\n\n.hit-ship {\n  color: red;\n}\n\n.sunk {\n  background-color: red;\n  color: white;\n}\n\nbutton {\n  all: unset;\n}\n\n#message {\n  margin: 30px ;\n  font-size: 30px;\n  text-align: center;\n  text-shadow: -2px -1px 50px rgba(0,0,0,1);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/body.js":
/*!*****************************!*\
  !*** ./src/scripts/body.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Body)
/* harmony export */ });
function Body() {
  const mainBody = document.createElement("main");

  mainBody.appendChild(gameBoard("Your Board", "p1"));
  mainBody.appendChild(gameBoard("Enemy's Board", "p2"));

  return mainBody;
}

function gameBoard(text, player) {
  const boardContainer = document.createElement("div");

  const title = document.createElement("span");
  title.textContent = text;

  const board = document.createElement("div");

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let box = document.createElement("button");
      // let box = document.createElement("div");
      box.classList.add("box");
      // if (player === "p2") box.classList.add("p2");

      board.appendChild(box);

      if (i % 9 === 0 && i !== 0) box.classList.add("box-bottom");
      if (j % 9 === 0 && j !== 0) box.classList.add("box-right");
    }
  }
  board.classList.add("board");
  board.id = player;

  // if (player === "p2") {
  //   const start = document.createElement("button");
  //   start.textContent = "Start";
  //   start.classList.add("start");
  //   board.appendChild(start);
  // }

  boardContainer.appendChild(title);
  boardContainer.appendChild(board);
  boardContainer.classList.add("board-container");

  return boardContainer;
}


/***/ }),

/***/ "./src/scripts/domEffects.js":
/*!***********************************!*\
  !*** ./src/scripts/domEffects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onHit": () => (/* binding */ onHit),
/* harmony export */   "onMiss": () => (/* binding */ onMiss),
/* harmony export */   "onPlace": () => (/* binding */ onPlace),
/* harmony export */   "turnMessage": () => (/* binding */ turnMessage),
/* harmony export */   "winMessage": () => (/* binding */ winMessage)
/* harmony export */ });
function onPlace(player) {
  const domBoard = document.getElementById(player.name);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (player.board.board[i][j].ship) {
        {
          if (player.board.board[i][j].position === 1)
            domBoard.children[i * 10 + j].classList.add("placed-left");

          if (
            player.board.board[i][j].value.length ===
            player.board.board[i][j].position
          )
            domBoard.children[i * 10 + j].classList.add("placed-right");

          domBoard.children[i * 10 + j].classList.add("placed");
        }
      }
    }
  }
}

function onHit(node) {
  node.textContent = "×";
  node.classList.add("attacked");
  node.classList.add("hit-ship");
}

function onMiss(node) {
  node.textContent = "•";
  node.classList.add("attacked");
}

function winMessage(player) {
  const message = document.getElementById("message");

  message.textContent = `${player} Wins!`;
}

function turnMessage(player) {
  const message = document.getElementById("message");

  message.textContent = `${player}'s turn`;
}




/***/ }),

/***/ "./src/scripts/gameBoard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/scripts/ship.js");


class GameBoard {
  #board;
  #ships;
  #allShips;

  constructor() {
    this.#board = [[], [], [], [], [], [], [], [], [], []];
    this.#ships = 0;
    this.#allShips = [];

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.#board[i][j] = {
          ship: null,
          position: null,
          value: 0,
          hit: false,
        };
      }
    }
  }

  get board() {
    return this.#board;
  }

  place(x, y, size = 1) {
    if (this.#board[x][y].value !== 0) return "Ship already exists";
    if (y + size > 10) return "Cannot place";

    const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](size);
    let length = ship.length;
    this.#ships++;

    let pos = 1;
    for (let i = 0; i < length; i++) {
      this.#board[x][y + i] = {
        ship: this.#ships,
        position: pos,
        value: ship,
        hit: false,
      };
      pos++;
    }

    this.#allShips.push(ship);
  }

  recieveAttack(x, y) {
    if (this.#board[x][y].hit) return false;

    this.#board[x][y].hit = true;

    if (this.#board[x][y].value === 0) return "Miss";

    this.#board[x][y].value.hit(this.#board[x][y].position - 1);

    return "Hit";
  }

  checkAllSunk() {
    let sunk = 0;

    this.#allShips.forEach((ship) => (sunk += !ship.isSunk));

    return !sunk;
  }

  get allShips() {
    return this.#allShips;
  }
}


/***/ }),

/***/ "./src/scripts/gameLoop.js":
/*!*********************************!*\
  !*** ./src/scripts/gameLoop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/scripts/player.js");
/* harmony import */ var _domEffects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domEffects */ "./src/scripts/domEffects.js");



function gameLoop() {
  const p1 = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]("p1", "h");
  const p2 = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]("p2", "b");

  p1.board.place(2, 3, 1);
  (0,_domEffects__WEBPACK_IMPORTED_MODULE_1__.onPlace)(p1);

  p2.board.place(3, 2, 3);
  p2.board.place(5, 4, 3);

  const p1Board = document.getElementById("p1");
  const p2Board = document.getElementById("p2");

  let attack = true;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      p2Board.children[i * 10 + j].addEventListener("click", () => {
        if (!p2Board.children[i * 10 + j].textContent) {
          if (p2.board.board[i][j].ship) {
            (0,_domEffects__WEBPACK_IMPORTED_MODULE_1__.onHit)(p2Board.children[i * 10 + j]);
            p2.board.recieveAttack(i, j);

            for (let i = 0; i < 10; i++) {
              for (let j = 0; j < 10; j++) {
                let ship = p2.board.board[i][j].value;
                if (ship && ship.isSunk)
                  p2Board.children[i * 10 + j].classList.add("sunk");

                if (p2.board.checkAllSunk()) {
                  let buttons = document.getElementsByTagName("button");
                  Array.from(buttons).forEach(
                    (btn) => (btn.disabled = "disabled")
                  );
                  attack = false;
                  (0,_domEffects__WEBPACK_IMPORTED_MODULE_1__.winMessage)("Player");
                }
              }
            }
          } else {
            (0,_domEffects__WEBPACK_IMPORTED_MODULE_1__.onMiss)(p2Board.children[i * 10 + j]);
          }
          let r1 = Math.floor(Math.random() * 10);
          let r2 = Math.floor(Math.random() * 10);

          while (1) {
            if (!p1Board.children[r1 * 10 + r2].textContent) {
              break;
            }
            r1 = Math.floor(Math.random() * 10);
            r2 = Math.floor(Math.random() * 10);
          }

          if (attack) {
            (0,_domEffects__WEBPACK_IMPORTED_MODULE_1__.turnMessage)("Bot");
            computerAttack(p1Board, p1, r1, r2);
          }
        }
      });
    }
  }
}

function computerAttack(board, player, r1, r2) {
  if (player.board.board[r1][r2].ship) {
    (0,_domEffects__WEBPACK_IMPORTED_MODULE_1__.onHit)(board.children[r1 * 10 + r2]);
    player.board.recieveAttack(r1, r2);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let ship = player.board.board[i][j].value;
        if (ship && ship.isSunk)
          board.children[i * 10 + j].classList.add("sunk");
      }
    }
    if (player.board.checkAllSunk()) {
      if (player.board.checkAllSunk()) {
        let buttons = document.getElementsByTagName("button");
        Array.from(buttons).forEach((btn) => (btn.disabled = "disabled"));
      }
      (0,_domEffects__WEBPACK_IMPORTED_MODULE_1__.winMessage)("Bot");
    }
  } else {
    (0,_domEffects__WEBPACK_IMPORTED_MODULE_1__.onMiss)(board.children[r1 * 10 + r2]);
  }
  (0,_domEffects__WEBPACK_IMPORTED_MODULE_1__.turnMessage)("Player");
}


/***/ }),

/***/ "./src/scripts/message.js":
/*!********************************!*\
  !*** ./src/scripts/message.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ message)
/* harmony export */ });
function message() {
  const messageContainer = document.createElement("div");

  messageContainer.id = "message";
  messageContainer.textContent = "Click Start!";

  return messageContainer;
}


/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/scripts/gameBoard.js");


class Player {
  #type;

  constructor(name, type) {
    this.name = name;
    this.#type = type;
    this.board = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
}


/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  #length;
  #hits;

  constructor(length = 1) {
    this.#length = length;
    this.#hits = [];

    for (let i = 0; i < this.#length; i++) {
      this.#hits[i] = i + 1;
    }
  }

  get length() {
    return this.#length;
  }

  get hits() {
    return this.#hits;
  }

  hit(index) {
    for (let i = 0; i < this.#hits.length; i++) {
      if (index === i) {
        this.#hits[i] *= -1;
        break;
      }
    }

    return this.#hits;
  }

  get isSunk() {
    let sunk = 0;
    this.#hits.forEach((element) => {
      sunk += element > 0;
    });

    return !sunk;
  }
}


/***/ }),

/***/ "./src/scripts/topBar.js":
/*!*******************************!*\
  !*** ./src/scripts/topBar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TopBar)
/* harmony export */ });
function TopBar() {
  const bar = document.createElement("div");
  bar.classList.add("title-text");

  bar.textContent = "BattleShip";

  return bar;
}


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _scripts_topBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/topBar */ "./src/scripts/topBar.js");
/* harmony import */ var _scripts_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/body */ "./src/scripts/body.js");
/* harmony import */ var _scripts_gameLoop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/gameLoop */ "./src/scripts/gameLoop.js");
/* harmony import */ var _scripts_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/message */ "./src/scripts/message.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







const content = document.getElementById("content");

content.appendChild((0,_scripts_topBar__WEBPACK_IMPORTED_MODULE_0__["default"])());
content.appendChild((0,_scripts_body__WEBPACK_IMPORTED_MODULE_1__["default"])());
content.appendChild((0,_scripts_message__WEBPACK_IMPORTED_MODULE_3__["default"])());

(0,_scripts_gameLoop__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeENlO0FBQ2Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O1VDUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0M7QUFDSjtBQUNRO0FBQ0Y7O0FBRW5COztBQUVyQjs7QUFFQSxvQkFBb0IsMkRBQU07QUFDMUIsb0JBQW9CLHlEQUFJO0FBQ3hCLG9CQUFvQiw0REFBTzs7QUFFM0IsNkRBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9ib2R5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kb21FZmZlY3RzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVMb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9tZXNzYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3RvcEJhci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi50aXRsZS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMjdweDtcXG4gIG1hcmdpbjogN3B4IDE1cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxubWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNoYWRvdzogMCAwLjJyZW0gMC42cmVtICMwMDAwMDA4MDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYm94IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGI1MDYxO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYjUwNjE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmN2Y3O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmJveDphY3RpdmUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkYjUwNjE7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiNTA2MTtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLmJveC1yaWdodCB7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcblxcbi5ib3gtcmlnaHQ6YWN0aXZlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiNTA2MTtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuXFxuLmJveC1ib3R0b20ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLmJveC1ib3R0b206YWN0aXZlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGI1MDYxO1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4ucDIge1xcbiAgZmlsdGVyOiBibHVyKDJweCk7XFxufVxcblxcbi5zdGFydCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmaWx0ZXI6IG5vbmU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcbiAgcGFkZGluZzogNnB4O1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICBjb2xvcjogIzI3Mjc2ZjtcXG4gIGJveC1zaGFkb3c6IDAgMC4ycmVtIDAuM3JlbSAjMDAwMDAwODA7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXM7XFxufVxcblxcbi5zdGFydDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4ucGxhY2VkIHtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZWQ7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmVkO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QwOGY5NjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcbn1cXG5cXG4ucGxhY2VkLWxlZnQge1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcbi5wbGFjZWQtcmlnaHQge1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmVkO1xcbn1cXG5cXG4uYXR0YWNrZWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG59XFxuXFxuLmhpdC1zaGlwIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGFsbDogdW5zZXQ7XFxufVxcblxcbiNtZXNzYWdlIHtcXG4gIG1hcmdpbjogMzBweCA7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogLTJweCAtMXB4IDUwcHggcmdiYSgwLDAsMCwxKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysb0pBQW9KO0VBQ3BKLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7OztBQUdBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7O0VBRWhDLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsY0FBYztFQUNkLHFDQUFxQztFQUNyQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUNBQXlDO0FBQzNDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG4udGl0bGUtdGV4dCB7XFxuICBmb250LXNpemU6IDI3cHg7XFxuICBtYXJnaW46IDdweCAxNXB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6IDAgMC4ycmVtIDAuNnJlbSAjMDAwMDAwODA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmJveCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RiNTA2MTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGI1MDYxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjdmNztcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5ib3g6YWN0aXZlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGI1MDYxO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYjUwNjE7XFxuICB0cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi5ib3gtcmlnaHQge1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG5cXG4uYm94LXJpZ2h0OmFjdGl2ZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYjUwNjE7XFxuICB0cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcblxcbi5ib3gtYm90dG9tIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5ib3gtYm90dG9tOmFjdGl2ZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RiNTA2MTtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLnAyIHtcXG4gIGZpbHRlcjogYmx1cigycHgpO1xcbn1cXG5cXG4uc3RhcnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZmlsdGVyOiBub25lO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXG4gIHBhZGRpbmc6IDZweDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgY29sb3I6ICMyNzI3NmY7XFxuICBib3gtc2hhZG93OiAwIDAuMnJlbSAwLjNyZW0gIzAwMDAwMDgwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zO1xcbn1cXG5cXG4uc3RhcnQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLnBsYWNlZCB7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgcmVkO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJlZDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkMDhmOTY7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcXG59XFxuXFxuLnBsYWNlZC1sZWZ0IHtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmVkO1xcbn1cXG5cXG4ucGxhY2VkLXJpZ2h0IHtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmF0dGFja2VkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDM1cHg7XFxufVxcblxcbi5oaXQtc2hpcCB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhbGw6IHVuc2V0O1xcbn1cXG5cXG4jbWVzc2FnZSB7XFxuICBtYXJnaW46IDMwcHggO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IC0ycHggLTFweCA1MHB4IHJnYmEoMCwwLDAsMSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvZHkoKSB7XG4gIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cbiAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkKFwiWW91ciBCb2FyZFwiLCBcInAxXCIpKTtcbiAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkKFwiRW5lbXkncyBCb2FyZFwiLCBcInAyXCIpKTtcblxuICByZXR1cm4gbWFpbkJvZHk7XG59XG5cbmZ1bmN0aW9uIGdhbWVCb2FyZCh0ZXh0LCBwbGF5ZXIpIHtcbiAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gdGV4dDtcblxuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIC8vIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJib3hcIik7XG4gICAgICAvLyBpZiAocGxheWVyID09PSBcInAyXCIpIGJveC5jbGFzc0xpc3QuYWRkKFwicDJcIik7XG5cbiAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGJveCk7XG5cbiAgICAgIGlmIChpICUgOSA9PT0gMCAmJiBpICE9PSAwKSBib3guY2xhc3NMaXN0LmFkZChcImJveC1ib3R0b21cIik7XG4gICAgICBpZiAoaiAlIDkgPT09IDAgJiYgaiAhPT0gMCkgYm94LmNsYXNzTGlzdC5hZGQoXCJib3gtcmlnaHRcIik7XG4gICAgfVxuICB9XG4gIGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbiAgYm9hcmQuaWQgPSBwbGF5ZXI7XG5cbiAgLy8gaWYgKHBsYXllciA9PT0gXCJwMlwiKSB7XG4gIC8vICAgY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAvLyAgIHN0YXJ0LnRleHRDb250ZW50ID0gXCJTdGFydFwiO1xuICAvLyAgIHN0YXJ0LmNsYXNzTGlzdC5hZGQoXCJzdGFydFwiKTtcbiAgLy8gICBib2FyZC5hcHBlbmRDaGlsZChzdGFydCk7XG4gIC8vIH1cblxuICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJvYXJkLWNvbnRhaW5lclwiKTtcblxuICByZXR1cm4gYm9hcmRDb250YWluZXI7XG59XG4iLCJmdW5jdGlvbiBvblBsYWNlKHBsYXllcikge1xuICBjb25zdCBkb21Cb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBsYXllci5uYW1lKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGlmIChwbGF5ZXIuYm9hcmQuYm9hcmRbaV1bal0uc2hpcCkge1xuICAgICAgICB7XG4gICAgICAgICAgaWYgKHBsYXllci5ib2FyZC5ib2FyZFtpXVtqXS5wb3NpdGlvbiA9PT0gMSlcbiAgICAgICAgICAgIGRvbUJvYXJkLmNoaWxkcmVuW2kgKiAxMCArIGpdLmNsYXNzTGlzdC5hZGQoXCJwbGFjZWQtbGVmdFwiKTtcblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHBsYXllci5ib2FyZC5ib2FyZFtpXVtqXS52YWx1ZS5sZW5ndGggPT09XG4gICAgICAgICAgICBwbGF5ZXIuYm9hcmQuYm9hcmRbaV1bal0ucG9zaXRpb25cbiAgICAgICAgICApXG4gICAgICAgICAgICBkb21Cb2FyZC5jaGlsZHJlbltpICogMTAgKyBqXS5jbGFzc0xpc3QuYWRkKFwicGxhY2VkLXJpZ2h0XCIpO1xuXG4gICAgICAgICAgZG9tQm9hcmQuY2hpbGRyZW5baSAqIDEwICsgal0uY2xhc3NMaXN0LmFkZChcInBsYWNlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBvbkhpdChub2RlKSB7XG4gIG5vZGUudGV4dENvbnRlbnQgPSBcIsOXXCI7XG4gIG5vZGUuY2xhc3NMaXN0LmFkZChcImF0dGFja2VkXCIpO1xuICBub2RlLmNsYXNzTGlzdC5hZGQoXCJoaXQtc2hpcFwiKTtcbn1cblxuZnVuY3Rpb24gb25NaXNzKG5vZGUpIHtcbiAgbm9kZS50ZXh0Q29udGVudCA9IFwi4oCiXCI7XG4gIG5vZGUuY2xhc3NMaXN0LmFkZChcImF0dGFja2VkXCIpO1xufVxuXG5mdW5jdGlvbiB3aW5NZXNzYWdlKHBsYXllcikge1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlXCIpO1xuXG4gIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJ9IFdpbnMhYDtcbn1cblxuZnVuY3Rpb24gdHVybk1lc3NhZ2UocGxheWVyKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VcIik7XG5cbiAgbWVzc2FnZS50ZXh0Q29udGVudCA9IGAke3BsYXllcn0ncyB0dXJuYDtcbn1cblxuZXhwb3J0IHsgb25QbGFjZSwgb25IaXQsIG9uTWlzcywgd2luTWVzc2FnZSwgdHVybk1lc3NhZ2UgfTtcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgI2JvYXJkO1xuICAjc2hpcHM7XG4gICNhbGxTaGlwcztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiNib2FyZCA9IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV07XG4gICAgdGhpcy4jc2hpcHMgPSAwO1xuICAgIHRoaXMuI2FsbFNoaXBzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICB0aGlzLiNib2FyZFtpXVtqXSA9IHtcbiAgICAgICAgICBzaGlwOiBudWxsLFxuICAgICAgICAgIHBvc2l0aW9uOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgIGhpdDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGJvYXJkKCkge1xuICAgIHJldHVybiB0aGlzLiNib2FyZDtcbiAgfVxuXG4gIHBsYWNlKHgsIHksIHNpemUgPSAxKSB7XG4gICAgaWYgKHRoaXMuI2JvYXJkW3hdW3ldLnZhbHVlICE9PSAwKSByZXR1cm4gXCJTaGlwIGFscmVhZHkgZXhpc3RzXCI7XG4gICAgaWYgKHkgKyBzaXplID4gMTApIHJldHVybiBcIkNhbm5vdCBwbGFjZVwiO1xuXG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHNpemUpO1xuICAgIGxldCBsZW5ndGggPSBzaGlwLmxlbmd0aDtcbiAgICB0aGlzLiNzaGlwcysrO1xuXG4gICAgbGV0IHBvcyA9IDE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy4jYm9hcmRbeF1beSArIGldID0ge1xuICAgICAgICBzaGlwOiB0aGlzLiNzaGlwcyxcbiAgICAgICAgcG9zaXRpb246IHBvcyxcbiAgICAgICAgdmFsdWU6IHNoaXAsXG4gICAgICAgIGhpdDogZmFsc2UsXG4gICAgICB9O1xuICAgICAgcG9zKys7XG4gICAgfVxuXG4gICAgdGhpcy4jYWxsU2hpcHMucHVzaChzaGlwKTtcbiAgfVxuXG4gIHJlY2lldmVBdHRhY2soeCwgeSkge1xuICAgIGlmICh0aGlzLiNib2FyZFt4XVt5XS5oaXQpIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMuI2JvYXJkW3hdW3ldLmhpdCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy4jYm9hcmRbeF1beV0udmFsdWUgPT09IDApIHJldHVybiBcIk1pc3NcIjtcblxuICAgIHRoaXMuI2JvYXJkW3hdW3ldLnZhbHVlLmhpdCh0aGlzLiNib2FyZFt4XVt5XS5wb3NpdGlvbiAtIDEpO1xuXG4gICAgcmV0dXJuIFwiSGl0XCI7XG4gIH1cblxuICBjaGVja0FsbFN1bmsoKSB7XG4gICAgbGV0IHN1bmsgPSAwO1xuXG4gICAgdGhpcy4jYWxsU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gKHN1bmsgKz0gIXNoaXAuaXNTdW5rKSk7XG5cbiAgICByZXR1cm4gIXN1bms7XG4gIH1cblxuICBnZXQgYWxsU2hpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FsbFNoaXBzO1xuICB9XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgb25QbGFjZSwgb25IaXQsIG9uTWlzcywgd2luTWVzc2FnZSwgdHVybk1lc3NhZ2UgfSBmcm9tIFwiLi9kb21FZmZlY3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICBjb25zdCBwMSA9IG5ldyBQbGF5ZXIoXCJwMVwiLCBcImhcIik7XG4gIGNvbnN0IHAyID0gbmV3IFBsYXllcihcInAyXCIsIFwiYlwiKTtcblxuICBwMS5ib2FyZC5wbGFjZSgyLCAzLCAxKTtcbiAgb25QbGFjZShwMSk7XG5cbiAgcDIuYm9hcmQucGxhY2UoMywgMiwgMyk7XG4gIHAyLmJvYXJkLnBsYWNlKDUsIDQsIDMpO1xuXG4gIGNvbnN0IHAxQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInAxXCIpO1xuICBjb25zdCBwMkJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwMlwiKTtcblxuICBsZXQgYXR0YWNrID0gdHJ1ZTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIHAyQm9hcmQuY2hpbGRyZW5baSAqIDEwICsgal0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKCFwMkJvYXJkLmNoaWxkcmVuW2kgKiAxMCArIGpdLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgaWYgKHAyLmJvYXJkLmJvYXJkW2ldW2pdLnNoaXApIHtcbiAgICAgICAgICAgIG9uSGl0KHAyQm9hcmQuY2hpbGRyZW5baSAqIDEwICsgal0pO1xuICAgICAgICAgICAgcDIuYm9hcmQucmVjaWV2ZUF0dGFjayhpLCBqKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBzaGlwID0gcDIuYm9hcmQuYm9hcmRbaV1bal0udmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXAgJiYgc2hpcC5pc1N1bmspXG4gICAgICAgICAgICAgICAgICBwMkJvYXJkLmNoaWxkcmVuW2kgKiAxMCArIGpdLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHAyLmJvYXJkLmNoZWNrQWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShidXR0b25zKS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgICAoYnRuKSA9PiAoYnRuLmRpc2FibGVkID0gXCJkaXNhYmxlZFwiKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGF0dGFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgd2luTWVzc2FnZShcIlBsYXllclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25NaXNzKHAyQm9hcmQuY2hpbGRyZW5baSAqIDEwICsgal0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgcjEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgbGV0IHIyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIGlmICghcDFCb2FyZC5jaGlsZHJlbltyMSAqIDEwICsgcjJdLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcjEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICByMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYXR0YWNrKSB7XG4gICAgICAgICAgICB0dXJuTWVzc2FnZShcIkJvdFwiKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrKHAxQm9hcmQsIHAxLCByMSwgcjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKGJvYXJkLCBwbGF5ZXIsIHIxLCByMikge1xuICBpZiAocGxheWVyLmJvYXJkLmJvYXJkW3IxXVtyMl0uc2hpcCkge1xuICAgIG9uSGl0KGJvYXJkLmNoaWxkcmVuW3IxICogMTAgKyByMl0pO1xuICAgIHBsYXllci5ib2FyZC5yZWNpZXZlQXR0YWNrKHIxLCByMik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBsZXQgc2hpcCA9IHBsYXllci5ib2FyZC5ib2FyZFtpXVtqXS52YWx1ZTtcbiAgICAgICAgaWYgKHNoaXAgJiYgc2hpcC5pc1N1bmspXG4gICAgICAgICAgYm9hcmQuY2hpbGRyZW5baSAqIDEwICsgal0uY2xhc3NMaXN0LmFkZChcInN1bmtcIik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwbGF5ZXIuYm9hcmQuY2hlY2tBbGxTdW5rKCkpIHtcbiAgICAgIGlmIChwbGF5ZXIuYm9hcmQuY2hlY2tBbGxTdW5rKCkpIHtcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJ1dHRvblwiKTtcbiAgICAgICAgQXJyYXkuZnJvbShidXR0b25zKS5mb3JFYWNoKChidG4pID0+IChidG4uZGlzYWJsZWQgPSBcImRpc2FibGVkXCIpKTtcbiAgICAgIH1cbiAgICAgIHdpbk1lc3NhZ2UoXCJCb3RcIik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9uTWlzcyhib2FyZC5jaGlsZHJlbltyMSAqIDEwICsgcjJdKTtcbiAgfVxuICB0dXJuTWVzc2FnZShcIlBsYXllclwiKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lc3NhZ2UoKSB7XG4gIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIG1lc3NhZ2VDb250YWluZXIuaWQgPSBcIm1lc3NhZ2VcIjtcbiAgbWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiQ2xpY2sgU3RhcnQhXCI7XG5cbiAgcmV0dXJuIG1lc3NhZ2VDb250YWluZXI7XG59XG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAjdHlwZTtcblxuICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLiN0eXBlID0gdHlwZTtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgI2xlbmd0aDtcbiAgI2hpdHM7XG5cbiAgY29uc3RydWN0b3IobGVuZ3RoID0gMSkge1xuICAgIHRoaXMuI2xlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLiNoaXRzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI2xlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLiNoaXRzW2ldID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jbGVuZ3RoO1xuICB9XG5cbiAgZ2V0IGhpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2hpdHM7XG4gIH1cblxuICBoaXQoaW5kZXgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI2hpdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpbmRleCA9PT0gaSkge1xuICAgICAgICB0aGlzLiNoaXRzW2ldICo9IC0xO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy4jaGl0cztcbiAgfVxuXG4gIGdldCBpc1N1bmsoKSB7XG4gICAgbGV0IHN1bmsgPSAwO1xuICAgIHRoaXMuI2hpdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgc3VuayArPSBlbGVtZW50ID4gMDtcbiAgICB9KTtcblxuICAgIHJldHVybiAhc3VuaztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wQmFyKCkge1xuICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYXIuY2xhc3NMaXN0LmFkZChcInRpdGxlLXRleHRcIik7XG5cbiAgYmFyLnRleHRDb250ZW50ID0gXCJCYXR0bGVTaGlwXCI7XG5cbiAgcmV0dXJuIGJhcjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBUb3BCYXIgZnJvbSBcIi4vc2NyaXB0cy90b3BCYXJcIjtcbmltcG9ydCBCb2R5IGZyb20gXCIuL3NjcmlwdHMvYm9keVwiO1xuaW1wb3J0IGdhbWVMb29wIGZyb20gXCIuL3NjcmlwdHMvZ2FtZUxvb3BcIjtcbmltcG9ydCBtZXNzYWdlIGZyb20gXCIuL3NjcmlwdHMvbWVzc2FnZVwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKFRvcEJhcigpKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoQm9keSgpKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWVzc2FnZSgpKTtcblxuZ2FtZUxvb3AoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==