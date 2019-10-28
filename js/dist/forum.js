module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_common__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _src_common__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/common/models/Conversation.js":
/*!*******************************************!*\
  !*** ./src/common/models/Conversation.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Conversation; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var Conversation =
/*#__PURE__*/
function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Conversation, _mixin);

  function Conversation() {
    return _mixin.apply(this, arguments) || this;
  }

  var _proto = Conversation.prototype;

  _proto.apiEndpoint = function apiEndpoint() {
    return '/captainc/pm/conversations';
  };

  return Conversation;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  id: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('id'),
  title: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('title'),
  messagesCount: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('messages_count'),
  messages: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('messages')
}));



/***/ }),

/***/ "./src/common/models/Message.js":
/*!**************************************!*\
  !*** ./src/common/models/Message.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var Message =
/*#__PURE__*/
function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Message, _mixin);

  function Message() {
    return _mixin.apply(this, arguments) || this;
  }

  var _proto = Message.prototype;

  _proto.apiEndpoint = function apiEndpoint() {
    return '/captainc/pm/messages';
  };

  return Message;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  id: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('id'),
  content: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('content'),
  user: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('user'),
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('created_at'),
  isHidden: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('isHidden')
}));



/***/ }),

/***/ "./src/forum/components/MessageListItem.js":
/*!*************************************************!*\
  !*** ./src/forum/components/MessageListItem.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessageListItem; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);




var MessageListItem =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MessageListItem, _Component);

  function MessageListItem() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MessageListItem.prototype;

  _proto.init = function init() {
    this.conversation = this.props.conversation;
    this.page = this.props.page;
  };

  _proto.view = function view() {
    var _this = this;

    var actions = this.actionItems().toArray();
    return m("div", {
      class: "DiscussionListItem"
    }, m("div", {
      class: "DiscussionListItem-content Slidable-content"
    }, m("div", {
      class: "DiscussionListItem-read MessagesListItem-read"
    }, m("i", {
      class: "fas fa-envelope-open-text"
    })), m("a", {
      href: app.route('messages.view', {
        id: this.conversation.id()
      }),
      class: "DiscussionListItem-main"
    }, m("h3", {
      class: "DiscussionListItem-title"
    }, this.conversation.title()), m("ul", {
      class: "DiscussionListItem-info"
    }, m("li", {
      class: "item-terminalPost"
    }, m("i", {
      class: "icon fas fa-reply"
    }), "\xA0", m("span", {
      class: "username"
    }, "Shahiem"), " replied\xA0", m("time", null, "17 days ago")))), m("span", {
      class: "DiscussionListItem-count"
    }, this.conversation.messagesCount())), m("div", {
      class: "ButtonGroup Dropdown dropdown DiscussionListItem-controls itemCount1"
    }, m("button", {
      class: "Dropdown-toggle Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right",
      "data-toggle": "dropdown",
      "aria-expanded": "true"
    }, m("i", {
      class: "icon fas fa-ellipsis-v Button-icon"
    }), m("span", {
      class: "Button-label"
    }), m("i", {
      class: "icon fas fa-caret-down Button-caret"
    })), m("ul", {
      class: "Dropdown-menu dropdown-menu Dropdown-menu--bottom"
    }, actions.map(function (action) {
      return m("li", {
        class: 'item-' + action.type,
        onclick: _this.onMouseClick.bind(_this, action.type)
      }, m("button", {
        class: "hasIcon",
        type: "button"
      }, m("i", {
        class: 'icon fas fa-' + action.icon + ' Button-icon'
      }), m("span", {
        class: "Button-label"
      }, action.label, '')));
    }))));
  };

  _proto.actionItems = function actionItems() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a();

    if (this.page && this.page != 'trash') {
      items.add('trash', {
        icon: 'trash',
        type: 'delete',
        label: 'Delete'
      }, 1);
    }

    if (this.page && this.page != 'archive' && this.page != 'trash') {
      items.add('archive', {
        icon: 'archive',
        type: 'archive',
        label: 'Archive'
      }, 2);
    }

    return items;
  };

  _proto.onMouseClick = function onMouseClick(actionType) {
    // Todo animation
    if (this.conversation) {
      this.element.remove();
      this.conversation.save({
        action: actionType
      });
    }
  };

  return MessageListItem;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/MessagesComposer.js":
/*!**************************************************!*\
  !*** ./src/forum/components/MessagesComposer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessagesComposer; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/ComposerBody */ "flarum/components/ComposerBody");
/* harmony import */ var flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sources_UserSearchSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sources/UserSearchSource */ "./src/forum/components/sources/UserSearchSource.js");
/* harmony import */ var _RecipientSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RecipientSearch */ "./src/forum/components/RecipientSearch.js");






var MessagesComposer =
/*#__PURE__*/
function (_ComposerBody) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MessagesComposer, _ComposerBody);

  function MessagesComposer() {
    return _ComposerBody.apply(this, arguments) || this;
  }

  var _proto = MessagesComposer.prototype;

  _proto.init = function init() {
    _ComposerBody.prototype.init.call(this);

    this.title = m.prop('');
    this.participent = m.prop('');
    this.recipientSearch = _RecipientSearch__WEBPACK_IMPORTED_MODULE_4__["default"].component({
      recipientsList: m.prop(new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a()),
      selectedRecipient: this.props.selectedRecipient
    });
  };

  MessagesComposer.initProps = function initProps(props) {
    _ComposerBody.initProps.call(this, props);

    props.placeholder = 'Message';
    props.submitLabel = 'Send';
    props.className = 'ComposerBody--messages';
    props.confirmExit = props.confirmExit || 'You have not sended your message. Do you wish to discard it?';
    props.user = app.session.user;
  };

  _proto.onkeydown = function onkeydown(e) {
    if (e.which === 13) {
      // Return
      e.preventDefault();
      this.editor.setSelectionRange(0, 0);
    }

    m.redraw.strategy('none');
  };

  _proto.preventExit = function preventExit() {
    return (this.title() || this.content()) && this.props.confirmExit;
  };

  _proto.headerItems = function headerItems() {
    var items = _ComposerBody.prototype.headerItems.call(this);

    items.add('participentId', this.recipientSearch);
    items.add('messageTitle', m("h3", null, m("input", {
      className: "FormControl",
      value: this.title(),
      oninput: m.withAttr('value', this.title),
      placeholder: "Title",
      disabled: !!this.props.disabled
    })));
    return items;
  };

  _proto.data = function data() {
    var reciepent = null;
    this.recipientSearch.props.recipientsList().toArray().map(function (user) {
      reciepent = user.id();
    });
    return {
      title: this.title(),
      content: this.content(),
      reciepent: reciepent
    };
  };

  _proto.onsubmit = function onsubmit() {
    var data = this.data();
    app.store.createRecord('captainc-pm-conversation').save(data).then(function (conversation) {
      app.composer.hide();
      m.route(app.route('messages.view', {
        id: conversation.id()
      }));
    });
  };

  return MessagesComposer;
}(flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/MessagesDropdown.js":
/*!**************************************************!*\
  !*** ./src/forum/components/MessagesDropdown.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessagesDropdown; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/NotificationsDropdown */ "flarum/components/NotificationsDropdown");
/* harmony import */ var flarum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_1__);



var MessagesDropdown =
/*#__PURE__*/
function (_NotificationsDropdow) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MessagesDropdown, _NotificationsDropdow);

  function MessagesDropdown() {
    return _NotificationsDropdow.apply(this, arguments) || this;
  }

  MessagesDropdown.initProps = function initProps(props) {
    props.label = 'Private Messages';
    props.icon = 'fas fa-envelope';

    _NotificationsDropdow.initProps.call(this, props);
  };

  var _proto = MessagesDropdown.prototype;

  _proto.init = function init() {
    _NotificationsDropdow.prototype.init.call(this);
  };

  _proto.onclick = function onclick() {
    this.goToRoute();
  };

  _proto.goToRoute = function goToRoute() {
    m.route(app.route('messages.index'));
  };

  _proto.getUnreadCount = function getUnreadCount() {// console.log(app.session.user.unreadMessages())
    // return app.session.unreadMessages;
  };

  _proto.getNewCount = function getNewCount() {// return app.session.unreadMessages;
  };

  return MessagesDropdown;
}(flarum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/MessagesReplyComposer.js":
/*!*******************************************************!*\
  !*** ./src/forum/components/MessagesReplyComposer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessagesReplyComposer; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/ComposerBody */ "flarum/components/ComposerBody");
/* harmony import */ var flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1__);



var MessagesReplyComposer =
/*#__PURE__*/
function (_ComposerBody) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MessagesReplyComposer, _ComposerBody);

  function MessagesReplyComposer() {
    return _ComposerBody.apply(this, arguments) || this;
  }

  var _proto = MessagesReplyComposer.prototype;

  _proto.init = function init() {
    _ComposerBody.prototype.init.call(this);
  };

  MessagesReplyComposer.initProps = function initProps(props) {
    _ComposerBody.initProps.call(this, props);

    props.placeholder = 'Message';
    props.submitLabel = 'Send';
    props.className = 'ComposerBody--messages';
    props.confirmExit = props.confirmExit || 'You have not sended your message. Do you wish to discard it?';
    props.user = app.session.user;
  };

  _proto.onkeydown = function onkeydown(e) {
    if (e.which === 13) {
      // Return
      e.preventDefault();
      this.editor.setSelectionRange(0, 0);
    }

    m.redraw.strategy('none');
  };

  _proto.preventExit = function preventExit() {
    return this.content() && this.props.confirmExit;
  };

  _proto.onsubmit = function onsubmit() {
    var _this = this;

    app.store.createRecord('captainc-pm-message').save({
      conversation_id: this.props.id,
      content: this.content(),
      relationships: {
        user: app.session.user
      }
    }).then(function (conversation) {
      app.composer.hide();

      _this.props.messages.unshift(conversation);

      m.redraw();
    });
  };

  return MessagesReplyComposer;
}(flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/MessagesSidebar.js":
/*!*************************************************!*\
  !*** ./src/forum/components/MessagesSidebar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessagesSidebar; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MessagesComposer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessagesComposer */ "./src/forum/components/MessagesComposer.js");




var MessagesSidebar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MessagesSidebar, _Component);

  function MessagesSidebar() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MessagesSidebar.prototype;

  _proto.init = function init() {};

  _proto.openComposer = function openComposer() {
    var component = new _MessagesComposer__WEBPACK_IMPORTED_MODULE_2__["default"]();
    app.composer.load(component);
    app.composer.show();
  };

  _proto.view = function view() {
    return m("div", null, m("button", {
      onclick: this.openComposer.bind(this),
      class: "Button Button--primary MessagesPage-button"
    }, m("i", {
      class: "icon fas fa-paper-plane Button-icon"
    }), m("span", {
      class: "Button-label"
    }, "New Conversation")), m("ul", null, m("li", null, m("a", {
      href: app.route('messages.index')
    }, m("i", {
      class: "icon fas fa-inbox Button-icon"
    }), " Inbox")), m("li", null, m("a", {
      href: app.route('messages.sent')
    }, m("i", {
      class: "icon fas  fa-paper-plane Button-icon"
    }), " Sent")), m("li", null, m("a", {
      href: app.route('messages.archieved')
    }, m("i", {
      class: "icon fas fa-archive Button-icon"
    }), " Archive")), m("li", null, m("a", {
      href: app.route('messages.trash')
    }, m("i", {
      class: "icon fas fa-trash Button-icon"
    }), " Trash"))));
  };

  return MessagesSidebar;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/MessagesStream.js":
/*!************************************************!*\
  !*** ./src/forum/components/MessagesStream.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessagesStream; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/PostUser */ "flarum/components/PostUser");
/* harmony import */ var flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3__);





var MessagesStream =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MessagesStream, _Component);

  function MessagesStream() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MessagesStream.prototype;

  _proto.init = function init() {
    _Component.prototype.init.call(this);
  };

  _proto.view = function view() {
    var message = this.props.message;
    var user = new flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_2___default.a({
      post: this.props.message
    });
    return m("article", {
      class: "Post CommentPost"
    }, m("div", null, m("header", {
      class: "Post-header"
    }, m("ul", null, m("li", {
      class: "item-user"
    }, user.render()), m("li", {
      class: "item-meta"
    }, flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3___default()(message.createdAt())))), m("div", {
      class: "Post-body"
    }, message.content())));
  };

  return MessagesStream;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/RecipientSearch.js":
/*!*************************************************!*\
  !*** ./src/forum/components/RecipientSearch.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipientSearch; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Search */ "flarum/components/Search");
/* harmony import */ var flarum_components_Search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sources_UserSearchSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sources/UserSearchSource */ "./src/forum/components/sources/UserSearchSource.js");





var RecipientSearch =
/*#__PURE__*/
function (_Search) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RecipientSearch, _Search);

  function RecipientSearch() {
    return _Search.apply(this, arguments) || this;
  }

  var _proto = RecipientSearch.prototype;

  _proto.config = function config(isInitialized) {
    if (isInitialized) return;
    var self = this;
    var searchResult = document.getElementsByClassName('Search-results')[1]; // Events

    if (searchResult) {
      searchResult.addEventListener('click', function () {
        var target = searchResult.getElementsByClassName('SearchResult active')[0];
        self.addRecipient(target.dataset.index);
      });
      searchResult.addEventListener('touchstart', function (e) {
        var target = e.target.parentNode;
        self.addRecipient(target.dataset.index);
      });
    }

    this.selectedRecipient = this.props.selectedRecipient;
    this.recipientsList = this.props.recipientsList; // Select a recipient

    if (this.selectedRecipient) self.addRecipient('users:' + this.selectedRecipient);

    _Search.prototype.config.call(this, isInitialized);
  };

  _proto.view = function view() {
    var _this = this;

    if (typeof this.value() === 'undefined') this.value('');
    if (!this.sources) this.sources = this.sourceItems().toArray();
    var loading = this.value() && this.value().length >= 3;
    return m("h3", null, typeof this.recipientsList == 'function' ? m("div", null, this.recipientsList().toArray().map(function (recipient) {
      return m("div", {
        class: "MessageComposer-reciepent"
      }, recipient.username(), m("i", {
        onclick: _this.removeRecipient.bind(_this, recipient),
        class: "fas fa-user-times MessageComposer-reciepentRemove"
      }));
    })) : '', !this.selectedRecipient ? m("div", null, m("input", {
      class: "FormControl",
      placeholder: "Reciepents",
      value: this.value(),
      oninput: m.withAttr('value', this.value)
    }), m("div", {
      class: 'Search' + (loading ? ' open' : '')
    }, m("div", {
      class: "Dropdown-menu Search-results Search-results--messages fade in"
    }, this.value() ? this.loadingSources ? 'loading' : this.sources.map(function (source) {
      return source.view(_this.value());
    }) : ''))) : m("div", null));
  };

  _proto.sourceItems = function sourceItems() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a();
    items.add('users', new _sources_UserSearchSource__WEBPACK_IMPORTED_MODULE_3__["default"]());
    return items;
  };

  _proto.clear = function clear() {
    this.value('');
    m.redraw();
  };

  _proto.addRecipient = function addRecipient(value) {
    var values = value.split(':'),
        type = values[0],
        id = values[1];
    var recipient = this.findRecipient(type, id);
    this.recipientsList().add(value, recipient);
    this.clear();
  };

  _proto.removeRecipient = function removeRecipient(recipient) {
    this.recipientsList().remove('users' + ":" + recipient.id());
    m.redraw();
  };

  _proto.findRecipient = function findRecipient(store, id) {
    return app.store.getById(store, id);
  };

  return RecipientSearch;
}(flarum_components_Search__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/sources/UserSearchSource.js":
/*!**********************************************************!*\
  !*** ./src/forum/components/sources/UserSearchSource.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserSearchSource; });
/* harmony import */ var flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/helpers/highlight */ "flarum/helpers/highlight");
/* harmony import */ var flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2__);




var UserSearchSource =
/*#__PURE__*/
function () {
  function UserSearchSource() {}

  var _proto = UserSearchSource.prototype;

  _proto.search = function search(query) {
    var params = {
      filter: {
        q: query
      },
      page: {
        limit: 3
      }
    };
    return app.store.find('users', params);
  };

  _proto.view = function view(query) {
    query = query.toLowerCase();
    var results = app.store.all('users').filter(function (user) {
      return user.username().toLowerCase().substr(0, query.length) === query;
    });
    if (!results.length) return '';
    return [results.map(function (user) {
      var name = flarum_helpers_username__WEBPACK_IMPORTED_MODULE_2___default()(user);
      name.children[0] = flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_0___default()(name.children[0], query);
      return m("li", {
        className: "SearchResult",
        "data-index": 'users:' + user.id()
      }, m("a", {
        "data-index": 'users:' + user.id()
      }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_1___default()(user), name));
    })];
  };

  return UserSearchSource;
}();



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/HeaderSecondary */ "flarum/components/HeaderSecondary");
/* harmony import */ var flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MessagesDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MessagesDropdown */ "./src/forum/components/MessagesDropdown.js");
/* harmony import */ var _common_models_Conversation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/models/Conversation */ "./src/common/models/Conversation.js");
/* harmony import */ var _common_models_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/models/Message */ "./src/common/models/Message.js");
/* harmony import */ var _pages_ConversationListPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/ConversationListPage */ "./src/forum/pages/ConversationListPage.js");
/* harmony import */ var _pages_ConversationSentPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/ConversationSentPage */ "./src/forum/pages/ConversationSentPage.js");
/* harmony import */ var _pages_ConversationTrashPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/ConversationTrashPage */ "./src/forum/pages/ConversationTrashPage.js");
/* harmony import */ var _pages_ConversationArchivePage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/ConversationArchivePage */ "./src/forum/pages/ConversationArchivePage.js");
/* harmony import */ var _pages_ConversationViewPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/ConversationViewPage */ "./src/forum/pages/ConversationViewPage.js");
/* harmony import */ var _messageAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messageAction */ "./src/forum/messageAction.js");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var flarum_models_Model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flarum/models/Model */ "flarum/models/Model");
/* harmony import */ var flarum_models_Model__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Model__WEBPACK_IMPORTED_MODULE_13__);














app.initializers.add('captaincodey-private-messages', function (app) {
  // Relationships
  app.store.models['captainc-pm-conversation'] = _common_models_Conversation__WEBPACK_IMPORTED_MODULE_4__["default"];
  app.store.models['captainc-pm-message'] = _common_models_Message__WEBPACK_IMPORTED_MODULE_5__["default"]; // User.prototype.unreadMessages = Model.attribute('username');
  // Routes

  var extendRoutes = {
    'messages.index': {
      path: '/messages',
      component: _pages_ConversationListPage__WEBPACK_IMPORTED_MODULE_6__["default"].component()
    },
    'messages.sent': {
      path: '/messages/sent',
      component: _pages_ConversationSentPage__WEBPACK_IMPORTED_MODULE_7__["default"].component()
    },
    'messages.pinned': {
      path: '/messages/pinned',
      component: _pages_ConversationSentPage__WEBPACK_IMPORTED_MODULE_7__["default"].component()
    },
    'messages.archieved': {
      path: '/messages/archieved',
      component: _pages_ConversationArchivePage__WEBPACK_IMPORTED_MODULE_9__["default"].component()
    },
    'messages.trash': {
      path: '/messages/trash',
      component: _pages_ConversationTrashPage__WEBPACK_IMPORTED_MODULE_8__["default"].component()
    },
    'messages.view': {
      path: '/m/:id',
      component: _pages_ConversationViewPage__WEBPACK_IMPORTED_MODULE_10__["default"].component()
    }
  };

  Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(app.routes, extendRoutes); // Actions


  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'items', function (items) {
    if (app.session.user) items.add('messages', m(_components_MessagesDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], null), 15);
  });
  Object(_messageAction__WEBPACK_IMPORTED_MODULE_11__["default"])();
}, -50);

/***/ }),

/***/ "./src/forum/messageAction.js":
/*!************************************!*\
  !*** ./src/forum/messageAction.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/UserCard */ "flarum/components/UserCard");
/* harmony import */ var flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MessagesComposer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MessagesComposer */ "./src/forum/components/MessagesComposer.js");





/* harmony default export */ __webpack_exports__["default"] = (function () {
  // User card
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'infoItems', function (items) {
    var user = this.props.user;

    var openComposer = function openComposer(user) {
      var component = new _components_MessagesComposer__WEBPACK_IMPORTED_MODULE_4__["default"]({
        selectedRecipient: user.id()
      });
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.composer.load(component);
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.composer.show();
    };

    if (!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user) return;
    items.add('post-messages', m("i", {
      class: "fas fa-envelope",
      onclick: openComposer.bind(null, user)
    }), -1);
  }); // Comment post

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'actionItems', function (items) {
    var post = this.props.post;

    var openComposer = function openComposer(post) {
      var component = new _components_MessagesComposer__WEBPACK_IMPORTED_MODULE_4__["default"]({
        selectedRecipient: post.user().id()
      });
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.composer.load(component);
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.composer.show();
    };

    if (post.isHidden() || !flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user) return;
    items.add('post-messages', m("i", {
      class: "fas fa-envelope",
      onclick: openComposer.bind(null, post)
    }), 1);
  });
});

/***/ }),

/***/ "./src/forum/pages/ConversationArchivePage.js":
/*!****************************************************!*\
  !*** ./src/forum/pages/ConversationArchivePage.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConversationArchivePage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MessagesSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MessagesSidebar */ "./src/forum/components/MessagesSidebar.js");
/* harmony import */ var _components_MessageListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MessageListItem */ "./src/forum/components/MessageListItem.js");





var ConversationArchivePage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ConversationArchivePage, _Page);

  function ConversationArchivePage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = ConversationArchivePage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);

    this.loadResults();
  };

  _proto.view = function view() {
    var conversations = app.cache.conversations || [];
    return m("div", {
      className: "MessagesPage"
    }, m("header", {
      class: "Hero MessagesHero MessagesHero--colored"
    }, m("div", {
      class: "container"
    }, m("div", {
      class: "containerNarrow"
    }, m("h2", {
      class: "Hero-title"
    }, "Archive")))), m("div", {
      class: "container"
    }, m("div", {
      class: "sideNavContainer"
    }, m("nav", {
      class: "MessagesPage-nav sideNav"
    }, _components_MessagesSidebar__WEBPACK_IMPORTED_MODULE_2__["default"].component()), m("div", {
      class: "MessagesPage-results sideNavOffset"
    }, conversations.length ? conversations.map(function (conversation) {
      return _components_MessageListItem__WEBPACK_IMPORTED_MODULE_3__["default"].component({
        conversation: conversation,
        page: 'archive'
      });
    }) : !this.loading ? m("div", {
      class: "MessagesPage-error"
    }, m("div", {
      class: "MessagesPage-empty"
    }, m("img", {
      width: "100",
      src: "https://image.flaticon.com/icons/svg/189/189058.svg"
    }), m("span", {
      class: "MessagesPage-emptyTitle"
    }, "Oh snap!"), " Your inbox is empty.")) : m("div", null, "Loading...")))));
  };

  _proto.loadResults = function loadResults() {
    var _this = this;

    this.loading = true;
    return app.store.find('/captainc/pm/conversations', {
      type: 'archieved'
    }).then(function (results) {
      app.cache.conversations = results;
      m.redraw();
    }).then(function () {
      _this.loading = false;
      m.redraw();
    });
  };

  return ConversationArchivePage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/pages/ConversationListPage.js":
/*!*************************************************!*\
  !*** ./src/forum/pages/ConversationListPage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConversationListPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MessagesSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MessagesSidebar */ "./src/forum/components/MessagesSidebar.js");
/* harmony import */ var _components_MessageListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MessageListItem */ "./src/forum/components/MessageListItem.js");





var ConversationListPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ConversationListPage, _Page);

  function ConversationListPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = ConversationListPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);

    this.loadResults();
  };

  _proto.view = function view() {
    var conversations = app.cache.conversations || [];
    return m("div", {
      className: "MessagesPage"
    }, m("header", {
      class: "Hero MessagesHero MessagesHero--colored"
    }, m("div", {
      class: "container"
    }, m("div", {
      class: "containerNarrow"
    }, m("h2", {
      class: "Hero-title"
    }, "Inbox")))), m("div", {
      class: "container"
    }, m("div", {
      class: "sideNavContainer"
    }, m("nav", {
      class: "MessagesPage-nav sideNav"
    }, _components_MessagesSidebar__WEBPACK_IMPORTED_MODULE_2__["default"].component()), m("div", {
      class: "MessagesPage-results sideNavOffset"
    }, conversations.length ? conversations.map(function (conversation) {
      return _components_MessageListItem__WEBPACK_IMPORTED_MODULE_3__["default"].component({
        conversation: conversation,
        page: 'inbox'
      });
    }) : !this.loading ? m("div", {
      class: "MessagesPage-error"
    }, m("div", {
      class: "MessagesPage-empty"
    }, m("img", {
      width: "100",
      src: "https://image.flaticon.com/icons/svg/189/189058.svg"
    }), m("span", {
      class: "MessagesPage-emptyTitle"
    }, "Oh snap!"), " Your inbox is empty.")) : m("div", null, "Loading...")))));
  };

  _proto.loadResults = function loadResults() {
    var _this = this;

    this.loading = true;
    return app.store.find('captainc/pm/conversations').then(function (results) {
      app.cache.conversations = results;
      m.redraw();
    }).then(function () {
      _this.loading = false;
      m.redraw();
    });
  };

  return ConversationListPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/pages/ConversationSentPage.js":
/*!*************************************************!*\
  !*** ./src/forum/pages/ConversationSentPage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConversationSentPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MessagesSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MessagesSidebar */ "./src/forum/components/MessagesSidebar.js");
/* harmony import */ var _components_MessageListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MessageListItem */ "./src/forum/components/MessageListItem.js");





var ConversationSentPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ConversationSentPage, _Page);

  function ConversationSentPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = ConversationSentPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);

    this.loadResults();
  };

  _proto.view = function view() {
    var conversations = app.cache.conversations || [];
    return m("div", {
      className: "MessagesPage"
    }, m("header", {
      class: "Hero MessagesHero MessagesHero--colored"
    }, m("div", {
      class: "container"
    }, m("div", {
      class: "containerNarrow"
    }, m("h2", {
      class: "Hero-title"
    }, "Sent")))), m("div", {
      class: "container"
    }, m("div", {
      class: "sideNavContainer"
    }, m("nav", {
      class: "MessagesPage-nav sideNav"
    }, _components_MessagesSidebar__WEBPACK_IMPORTED_MODULE_2__["default"].component()), m("div", {
      class: "MessagesPage-results sideNavOffset"
    }, conversations.length ? conversations.map(function (conversation) {
      return _components_MessageListItem__WEBPACK_IMPORTED_MODULE_3__["default"].component({
        conversation: conversation,
        page: 'sent'
      });
    }) : !this.loading ? m("div", {
      class: "MessagesPage-error"
    }, m("div", {
      class: "MessagesPage-empty"
    }, m("img", {
      width: "100",
      src: "https://image.flaticon.com/icons/svg/189/189058.svg"
    }), m("span", {
      class: "MessagesPage-emptyTitle"
    }, "Oh snap!"), " Your inbox is empty.")) : m("div", null, "Loading...")))));
  };

  _proto.loadResults = function loadResults() {
    var _this = this;

    this.loading = true;
    return app.store.find('/captainc/pm/conversations', {
      type: 'sent'
    }).then(function (results) {
      app.cache.conversations = results;
      m.redraw();
    }).then(function () {
      _this.loading = false;
      m.redraw();
    });
  };

  return ConversationSentPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/pages/ConversationTrashPage.js":
/*!**************************************************!*\
  !*** ./src/forum/pages/ConversationTrashPage.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConversationTrashPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MessagesSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MessagesSidebar */ "./src/forum/components/MessagesSidebar.js");
/* harmony import */ var _components_MessageListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MessageListItem */ "./src/forum/components/MessageListItem.js");





var ConversationTrashPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ConversationTrashPage, _Page);

  function ConversationTrashPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = ConversationTrashPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);

    this.loadResults();
  };

  _proto.view = function view() {
    var conversations = app.cache.conversations || [];
    return m("div", {
      className: "MessagesPage"
    }, m("header", {
      class: "Hero MessagesHero MessagesHero--colored"
    }, m("div", {
      class: "container"
    }, m("div", {
      class: "containerNarrow"
    }, m("h2", {
      class: "Hero-title"
    }, "Trash")))), m("div", {
      class: "container"
    }, m("div", {
      class: "sideNavContainer"
    }, m("nav", {
      class: "MessagesPage-nav sideNav"
    }, _components_MessagesSidebar__WEBPACK_IMPORTED_MODULE_2__["default"].component()), m("div", {
      class: "MessagesPage-results sideNavOffset"
    }, conversations.length ? conversations.map(function (conversation) {
      return _components_MessageListItem__WEBPACK_IMPORTED_MODULE_3__["default"].component({
        conversation: conversation,
        page: 'trash'
      });
    }) : !this.loading ? m("div", {
      class: "MessagesPage-error"
    }, m("div", {
      class: "MessagesPage-empty"
    }, m("img", {
      width: "100",
      src: "https://image.flaticon.com/icons/svg/189/189058.svg"
    }), m("span", {
      class: "MessagesPage-emptyTitle"
    }, "Oh snap!"), " Your inbox is empty.")) : m("div", null, "Loading...")))));
  };

  _proto.loadResults = function loadResults() {
    var _this = this;

    this.loading = true;
    return app.store.find('/captainc/pm/conversations', {
      type: 'deleted'
    }).then(function (results) {
      app.cache.conversations = results;
      m.redraw();
    }).then(function () {
      _this.loading = false;
      m.redraw();
    });
  };

  return ConversationTrashPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/pages/ConversationViewPage.js":
/*!*************************************************!*\
  !*** ./src/forum/pages/ConversationViewPage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConversationViewPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MessagesStream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MessagesStream */ "./src/forum/components/MessagesStream.js");
/* harmony import */ var _components_MessagesSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MessagesSidebar */ "./src/forum/components/MessagesSidebar.js");
/* harmony import */ var _components_MessagesReplyComposer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MessagesReplyComposer */ "./src/forum/components/MessagesReplyComposer.js");






var ConversationViewPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ConversationViewPage, _Page);

  function ConversationViewPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = ConversationViewPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);

    this.conversation = null;
    this.messages = [];
    this.loadConversation();
  };

  _proto.view = function view() {
    return m("div", {
      className: "MessagesPage"
    }, m("header", {
      class: "Hero DiscussionHero DiscussionHero--colored"
    }, m("div", {
      class: "container"
    }, m("ul", {
      class: "DiscussionHero-items"
    }, m("li", {
      class: "item-title"
    }), m("li", {
      class: "item-autor"
    }, m("h4", null, "There are 2 people in this conversation"), m("img", {
      class: "Avatar",
      src: "http://localhost:8888/project/gargoyle/assets/avatars/bGjGozcj6EqQWNDk.png"
    }), m("img", {
      class: "Avatar",
      src: "http://localhost:8888/project/gargoyle/assets/avatars/uJK3jUK595EIN3bB.png"
    }))))), m("div", {
      class: "container"
    }, m("div", {
      class: "sideNavContainer"
    }, m("nav", {
      class: "MessagesPage-nav sideNav"
    }, _components_MessagesSidebar__WEBPACK_IMPORTED_MODULE_3__["default"].component()), m("div", {
      class: "IndexPage-results sideNavOffset"
    }, m("div", {
      class: "PostStream"
    }, this.messages.map(function (message) {
      return m("div", null, _components_MessagesStream__WEBPACK_IMPORTED_MODULE_2__["default"].component({
        'message': message
      }));
    }), m("div", {
      class: "PostStream-item"
    }, m("article", {
      class: "Post ReplyPlaceholder",
      onclick: this.replyComposer.bind(this)
    }, m("header", {
      class: "Post-header"
    }, m("img", {
      class: "Avatar PostUser-avatar",
      src: "http://localhost:8888/project/gargoyle/assets/avatars/bGjGozcj6EqQWNDk.png"
    }), " Write a Reply..."))))))));
  };

  _proto.replyComposer = function replyComposer() {
    var component = new _components_MessagesReplyComposer__WEBPACK_IMPORTED_MODULE_4__["default"]({
      id: this.conversation.id(),
      messages: this.messages
    });
    app.composer.load(component);
    app.composer.show();
  };

  _proto.showConversation = function showConversation(conversation) {
    var _this = this;

    this.conversation = conversation;
    this.conversation.messages().map(function (message) {
      _this.messages.push(message);
    });
    m.redraw();
  };

  _proto.loadConversation = function loadConversation() {
    var paramId = m.route.param('id');
    return app.store.find('captainc/pm/conversations', paramId).then(this.showConversation.bind(this));
  };

  return ConversationViewPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/CommentPost":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/CommentPost']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/CommentPost'];

/***/ }),

/***/ "flarum/components/ComposerBody":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/ComposerBody']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/ComposerBody'];

/***/ }),

/***/ "flarum/components/HeaderSecondary":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/HeaderSecondary']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/HeaderSecondary'];

/***/ }),

/***/ "flarum/components/NotificationsDropdown":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['components/NotificationsDropdown']" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/NotificationsDropdown'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/PostUser":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/PostUser']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/PostUser'];

/***/ }),

/***/ "flarum/components/Search":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Search']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Search'];

/***/ }),

/***/ "flarum/components/UserCard":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/UserCard']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/UserCard'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/highlight":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/highlight']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/highlight'];

/***/ }),

/***/ "flarum/helpers/humanTime":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/humanTime']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/humanTime'];

/***/ }),

/***/ "flarum/helpers/username":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/username']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/username'];

/***/ }),

/***/ "flarum/models/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['models/Model']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/Model'];

/***/ }),

/***/ "flarum/models/User":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/User']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/User'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/mixin":
/*!****************************************************!*\
  !*** external "flarum.core.compat['utils/mixin']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/mixin'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map