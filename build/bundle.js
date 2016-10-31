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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/pressstart2p-webfont.eot";

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Paddle = __webpack_require__(5);

var _Paddle2 = _interopRequireDefault(_Paddle);

var _keys = __webpack_require__(7);

var _Ball = __webpack_require__(4);

var _Ball2 = _interopRequireDefault(_Ball);

var _Score = __webpack_require__(6);

var _Score2 = _interopRequireDefault(_Score);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
	function Game() {
		_classCallCheck(this, Game);

		var canvas = document.getElementById('game');

		this.width = canvas.width;
		this.height = canvas.height;
		this.context = canvas.getContext('2d');
		this.context.fillStyle = 'white';
		this.balls = new _Ball2.default(this.height, this.width, 'white'), this.balls2 = new _Ball2.default(this.height, this.width, 'green'), this.balls6 = new _Ball2.default(this.height, this.width, 'lightblue'), this.balls5 = new _Ball2.default(this.height, this.width, 'grey'), this.balls7 = new _Ball2.default(this.height, this.width, 'red'), this.balls8 = new _Ball2.default(this.height, this.width, 'pink'), this.balls3 = new _Ball2.default(this.height, this.width, 'blue'), this.balls4 = new _Ball2.default(this.height, this.width, 'purple'), this.scoreboard = new _Score2.default(this.height, this.width);
		// ball  to players to score 


		this.p1 = new _Paddle2.default(this.height, 5, 'white', _keys.player1Keys), this.p2 = new _Paddle2.default(this.height, this.width - 10, 'white', _keys.player2Keys);
	}

	_createClass(Game, [{
		key: 'drawLine',
		value: function drawLine() {
			this.context.setLineDash([10, 10]);
			this.context.beginPath();
			this.context.moveTo(this.width / 2, 0);
			this.context.lineTo(this.width / 2, this.height);
			this.context.strokeStyle = "white";
			this.context.stroke();
		}
	}, {
		key: 'drawBoard',
		value: function drawBoard() {
			this.context.fillStyle = 'black';
			this.context.fillRect(0, 0, this.width, this.height);
			this.drawLine();
		}
	}, {
		key: 'render',
		value: function render() {
			this.drawBoard();

			this.p1.render(this.context);
			this.p2.render(this.context);
			this.balls.render(this.context, this.p1, this.p2);
			this.balls2.render(this.context, this.p1, this.p2);
			this.balls3.render(this.context, this.p1, this.p2);
			this.balls4.render(this.context, this.p1, this.p2);
			this.balls5.render(this.context, this.p1, this.p2);
			this.balls6.render(this.context, this.p1, this.p2);
			this.balls7.render(this.context, this.p1, this.p2);

			this.scoreboard.render(this.context, this.p1, this.p2);
		}
	}]);

	return Game;
}();

exports.default = Game;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(13)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./game.css", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./game.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 3 */
/***/ function(module, exports) {

"use strict";
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
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ball = function () {
    function Ball(boardHeight, boardWidth, color) {
        _classCallCheck(this, Ball);

        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.ballcolor = color;
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;
        this.width = 10;
        this.height = 10;
        this.radius = 25;
        this.Yspeed = Math.floor(Math.random() * 12 - 6);
        this.Xspeed = 7 - Math.abs(this.Yspeed);

        this.ping = new Audio('./sounds/pong-02.wav');
    }

    _createClass(Ball, [{
        key: 'paddleBounce',
        value: function paddleBounce(p1, p2) {
            // this.x-this.radius-p1.width = p1.x && 
            var p1RightEdge = this.x - this.radius - p1.width <= p1.x;
            var p1LeftEdge = this.x - this.radius >= p1.x;

            if (p1RightEdge && p1LeftEdge) {
                if (this.y >= p1.y && this.y <= p1.height + p1.y) {

                    this.Yspeed = Math.floor(Math.random() * 12 - 6);
                    this.Xspeed *= -1;
                    this.sound();
                }
            }
            if (this.x + this.radius >= p2.x && this.x - this.radius - p1.width <= p2.x) {
                if (this.y >= p2.y && this.y <= p2.height + p2.y) {
                    this.Xspeed *= -1;
                    this.Yspeed = Math.floor(Math.random() * 12 - 6);
                    this.sound();
                }
            }
        }
    }, {
        key: 'bounce',
        value: function bounce() {

            if (this.y <= 0 + this.radius || this.y >= 150 - this.radius) {
                this.Yspeed *= -1;

                // console.log(ping)
                this.sound();
            }
        }
    }, {
        key: 'sound',
        value: function sound() {
            this.ping.play();
        }
    }, {
        key: 'goal',
        value: function goal(p1, p2) {

            if (this.x <= 0 + this.radius) {
                this.Xspeed *= -1;
                this.x = this.boardWidth / 2;
                this.y = this.boardHeight / 2;
                p1.score += 1;
                this.sound();
            }
            if (this.x >= this.boardWidth - this.radius) {
                this.Xspeed *= -1;
                this.x = this.boardWidth / 2;
                this.y = this.boardHeight / 2;
                p2.score += 1;
                this.sound();
            }
        }
    }, {
        key: 'movement',
        value: function movement() {
            this.x += this.Xspeed;
            this.y += this.Yspeed;
        }
    }, {
        key: 'render',
        value: function render(context, p1, p2) {
            this.paddleBounce(p1, p2);
            this.goal(p1, p2);
            this.bounce();
            this.movement();
            context.fillStyle = this.ballcolor;
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            context.fill();
        }
    }]);

    return Ball;
}();

exports.default = Ball;

/***/ },
/* 5 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Paddle = function () {
	function Paddle(boardHeight, x, color, keys) {
		var _this = this;

		_classCallCheck(this, Paddle);

		this.score = 0;
		this.speed = 10;
		this.keys = keys;
		this.width = 5;
		this.height = 60;
		this.color = color;
		this.x = x;
		this.y = boardHeight / 2 - this.height / 2;
		this.boardHeight = boardHeight;

		document.addEventListener('keydown', function (event) {
			return _this.keyListener(event);
		});
	}

	_createClass(Paddle, [{
		key: 'keyListener',
		value: function keyListener(event) {

			switch (event.keyCode) {
				case this.keys.up:
					this.moveUp();
					break;

				case this.keys.down:
					this.moveDown();
					break;

				default:
					return;
			}
		}
	}, {
		key: 'moveUp',
		value: function moveUp() {
			if (this.y >= 0 + this.speed) {

				this.y -= this.speed;
			}
		}
	}, {
		key: 'moveDown',
		value: function moveDown() {
			if (this.y <= this.boardHeight - this.height - this.speed) {

				this.y += this.speed;
			}
		}
	}, {
		key: 'render',
		value: function render(context) {
			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
		}
	}]);

	return Paddle;
}();

exports.default = Paddle;

/***/ },
/* 6 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = function () {
	function Score(boardHeight, boardWidth) {
		_classCallCheck(this, Score);

		this.goal = 5;
		var scoreY = boardHeight / 4;
		var scoreX = boardWidth / 2;
		this.p1y = scoreY - 15;
		this.p1x = scoreX - 26;
		this.p2y = scoreY - 15;
		this.p2x = scoreX + 12;
		// this.p1 = topleft

	}

	_createClass(Score, [{
		key: "win",
		value: function win(p1, p2) {
			if (p1.score === 5 || p2.score === 5) {}
		}
	}, {
		key: "drawScoreP1",
		value: function drawScoreP1(context, p1) {
			context.fillStyle = "white";
			// context.fontColor = 'white'
			context.font = "30px Helvetica";
			context.fillText(p1.score, this.p1x, this.p1y);
		}
	}, {
		key: "drawScoreP2",
		value: function drawScoreP2(context, p2) {
			context.fillStyle = "white";
			// context.fontColor = 'white'
			context.font = "30px Helvetica";
			context.fillText(p2.score, this.p2x, this.p2y);
		}
		// 

	}, {
		key: "render",
		value: function render(context, p1, p2) {
			this.win(p1, p2);
			this.drawScoreP1(context, p1);
			this.drawScoreP2(context, p2);
		}
	}]);

	return Score;
}();

exports.default = Score;

/***/ },
/* 7 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var player1Keys = exports.player1Keys = {
	up: 65,
	down: 90
};
var player2Keys = exports.player2Keys = {
	up: 38,
	down: 40
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n   margin: 0;\n   padding: 0;\n   border: 0;\n   font-size: 100%;\n   font: inherit;\n   vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n   display: block;\n}\nbody {\n   line-height: 1;\n}\nol, ul {\n   list-style: none;\n}\nblockquote, q {\n   quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n   content: '';\n   content: none;\n}\ntable {\n   border-collapse: collapse;\n   border-spacing: 0;\n}\n\n/* Game Styles */\n\n@font-face {\n    font-family: 'PressStart2P Web';\n    src: url(" + __webpack_require__(0) + ");\n    src: url(" + __webpack_require__(0) + "?#iefix) format('embedded-opentype'),\n         url(" + __webpack_require__(12) + ") format('woff2'),\n         url(" + __webpack_require__(11) + ") format('woff'),\n         url(" + __webpack_require__(10) + ") format('truetype'),\n         url(" + __webpack_require__(9) + "#press_start_2pregular) format('svg');\n    font-weight: normal;\n    font-style: normal;\n}\nbody {\n   font-family: 'PressStart2P Web', monospace;\n   margin: 0 auto;\n   text-align: center;\n}\nh1 {\n   margin-top: 20px;\n}\n#game {\n   background-color: black;\n   display: block;\n   height: 256px;\n   margin: 20px auto;\n   width: 512px;\n}\n.players {\n   display: inline-flex;\n   justify-content: space-between;\n   text-align: center;\n   width: 512px;\n}\n", ""]);

// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/pressstart2p-webfont.svg";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/pressstart2p-webfont.ttf";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/pressstart2p-webfont.woff";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/pressstart2p-webfont.woff2";

/***/ },
/* 13 */
/***/ function(module, exports) {

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
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

__webpack_require__(2);

var _Game = __webpack_require__(1);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _Game2.default();

var fps = 30;

(function gameLoop() {
	game.render();
	setTimeout(gameLoop, fps);
})();

/***/ }
/******/ ]);