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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "dist/js";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ \"./src/ts/classes.ts\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ \"./src/ts/variables.ts\");\n\r\n\r\nconst game = new _classes__WEBPACK_IMPORTED_MODULE_0__[\"Game\"]();\r\nfunction start() {\r\n    game.start();\r\n}\r\nconst startBtn = document.getElementById(\"start-btn\");\r\nstartBtn.addEventListener(\"click\", start);\r\nconst checkWinnerBtn = document.getElementById(\"check-winner-btn\");\r\nfunction getWinner() {\r\n    _variables__WEBPACK_IMPORTED_MODULE_1__[\"textResult\"].innerHTML = game.findWinner();\r\n}\r\ncheckWinnerBtn.addEventListener(\"click\", getWinner);\r\n\n\n//# sourceURL=webpack:///./src/ts/app.ts?");

/***/ }),

/***/ "./src/ts/classes.ts":
/*!***************************!*\
  !*** ./src/ts/classes.ts ***!
  \***************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/ts/variables.ts\");\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ \"./src/ts/messages.ts\");\n\r\n\r\nclass Game {\r\n    constructor() {\r\n        this.userInput = \"\";\r\n        this.defaultComputerChoice = \"\";\r\n        this.defaultUserChoice = _variables__WEBPACK_IMPORTED_MODULE_0__[\"Elements\"].paper;\r\n    }\r\n    getRandomCompChoice() {\r\n        return _variables__WEBPACK_IMPORTED_MODULE_0__[\"Elements\"][Object(_variables__WEBPACK_IMPORTED_MODULE_0__[\"randomKeyOfElements\"])()];\r\n    }\r\n    getAndCheckUserInput() {\r\n        const userPrompt = prompt(this.makeMessage4prompt(), this.defaultUserChoice);\r\n        return userPrompt &&\r\n            Object(_variables__WEBPACK_IMPORTED_MODULE_0__[\"valuesOfElements\"])().indexOf(userPrompt.toUpperCase()) >= 0\r\n            ? userPrompt.toUpperCase()\r\n            : this.defaultUserChoice;\r\n    }\r\n    makeMessage4prompt() {\r\n        return \"Please choose one of: \" + Object(_variables__WEBPACK_IMPORTED_MODULE_0__[\"valuesOfElements\"])();\r\n    }\r\n    start() {\r\n        this.userInput = this.getAndCheckUserInput();\r\n        this.defaultComputerChoice = this.getRandomCompChoice();\r\n        _variables__WEBPACK_IMPORTED_MODULE_0__[\"textResult\"].innerHTML = `Your choice ${this.userInput},<br>Computer choice ${this.defaultComputerChoice}`;\r\n    }\r\n    findWinner() {\r\n        let message = _messages__WEBPACK_IMPORTED_MODULE_1__[\"messages\"].draw;\r\n        switch (this.userInput) {\r\n            case _variables__WEBPACK_IMPORTED_MODULE_0__[\"Elements\"].paper:\r\n                if (this.defaultComputerChoice === _variables__WEBPACK_IMPORTED_MODULE_0__[\"Elements\"].rock) {\r\n                    message = _messages__WEBPACK_IMPORTED_MODULE_1__[\"messages\"].userWon;\r\n                }\r\n                if (this.defaultComputerChoice === _variables__WEBPACK_IMPORTED_MODULE_0__[\"Elements\"].scissors) {\r\n                    message = _messages__WEBPACK_IMPORTED_MODULE_1__[\"messages\"].computerWon;\r\n                }\r\n                break;\r\n            case _variables__WEBPACK_IMPORTED_MODULE_0__[\"Elements\"].rock:\r\n                if (this.defaultComputerChoice === _variables__WEBPACK_IMPORTED_MODULE_0__[\"Elements\"].paper ||\r\n                    this.defaultComputerChoice === _variables__WEBPACK_IMPORTED_MODULE_0__[\"Elements\"].scissors) {\r\n                    message = _messages__WEBPACK_IMPORTED_MODULE_1__[\"messages\"].userWon;\r\n                }\r\n                break;\r\n            case _variables__WEBPACK_IMPORTED_MODULE_0__[\"Elements\"].scissors:\r\n                if (this.defaultComputerChoice === _variables__WEBPACK_IMPORTED_MODULE_0__[\"Elements\"].rock) {\r\n                    message = _messages__WEBPACK_IMPORTED_MODULE_1__[\"messages\"].computerWon;\r\n                }\r\n                if (this.defaultComputerChoice === _variables__WEBPACK_IMPORTED_MODULE_0__[\"Elements\"].paper) {\r\n                    message = _messages__WEBPACK_IMPORTED_MODULE_1__[\"messages\"].userWon;\r\n                }\r\n                break;\r\n        }\r\n        return message;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/ts/classes.ts?");

/***/ }),

/***/ "./src/ts/messages.ts":
/*!****************************!*\
  !*** ./src/ts/messages.ts ***!
  \****************************/
/*! exports provided: messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"messages\", function() { return messages; });\nvar messages;\r\n(function (messages) {\r\n    messages[\"userWon\"] = \"User won\";\r\n    messages[\"computerWon\"] = \"Computer won\";\r\n    messages[\"draw\"] = \"Draw\";\r\n    messages[\"prompt\"] = \"Please choose one of: \";\r\n})(messages || (messages = {}));\r\n\n\n//# sourceURL=webpack:///./src/ts/messages.ts?");

/***/ }),

/***/ "./src/ts/variables.ts":
/*!*****************************!*\
  !*** ./src/ts/variables.ts ***!
  \*****************************/
/*! exports provided: Elements, textResult, valuesOfElements, randomKeyOfElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Elements\", function() { return Elements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"textResult\", function() { return textResult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"valuesOfElements\", function() { return valuesOfElements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomKeyOfElements\", function() { return randomKeyOfElements; });\nvar Elements;\r\n(function (Elements) {\r\n    Elements[\"rock\"] = \"ROCK\";\r\n    Elements[\"paper\"] = \"PAPER\";\r\n    Elements[\"scissors\"] = \"SCISSORS\";\r\n})(Elements || (Elements = {}));\r\nconst textResult = document.getElementById(\"result\");\r\nconst valuesOfElements = () => {\r\n    const arr = [];\r\n    for (const elem in Elements) {\r\n        arr.push(Elements[elem]);\r\n    }\r\n    return arr;\r\n};\r\nconst randomKeyOfElements = () => {\r\n    const objKeysArr = Object.keys(Elements);\r\n    const randomKeyIndex = Math.floor(Math.random() * objKeysArr.length);\r\n    return objKeysArr[randomKeyIndex];\r\n};\r\n\n\n//# sourceURL=webpack:///./src/ts/variables.ts?");

/***/ })

/******/ });