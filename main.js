(()=>{"use strict";var t=document.querySelector(".profile__edit"),e=document.querySelector(".profile__add-content"),n=(document.querySelectorAll(".popup"),document.querySelector(".popup__field_type_name")),r=document.querySelector(".popup__field_type_desc"),o=document.querySelector(".cards");function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var c=function(){function t(e,n,r){var o=r.handleCardClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=e.title,this._link=e.link,this._templateSelector=n,this._handleCardClick=o}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._cardDelete=this._element.querySelector(".card__delete"),this._cardLike=this._element.querySelector(".card__like"),this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._title,this._element.querySelector(".card__title").textContent=this._title,this._element}},{key:"_setEventListeners",value:function(){var t=this;this._cardDelete.addEventListener("click",(function(){t._deleteCard()})),this._cardLike.addEventListener("click",(function(){t._likeCard()})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._link,t._title)}))}},{key:"_deleteCard",value:function(){this._cardDelete.closest(".card").remove(),this._element=null}},{key:"_likeCard",value:function(){this._cardLike.classList.toggle("card__like_active")}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var s=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._form=n,this._formInput=Array.from(n.querySelectorAll(e.inputSelector)),this._buttonSubmit=n.querySelector(e.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showErrorValid",value:function(t,e){var n=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e}},{key:"_hideErrorValid",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.textContent=""}},{key:"_checkValidInput",value:function(t){t.validity.valid?this._hideErrorValid(t):this._showErrorValid(t,t.validationMessage)}},{key:"_checkValidBtn",value:function(){return this._formInput.some((function(t){return!t.validity.valid}))}},{key:"_disableSubmitButton",value:function(){this._buttonSubmit.classList.add(this._inactiveButtonClass),this._buttonSubmit.disabled=!0}},{key:"_toggleButtonState",value:function(){this._checkValidBtn()?this._disableSubmitButton():(this._buttonSubmit.classList.remove(this._inactiveButtonClass),this._buttonSubmit.disabled=!1)}},{key:"returnValidationSubmit",value:function(){var t=this;this._form.addEventListener("submit",(function(){t._checkValidBtn()&&t._disableSubmitButton()}))}},{key:"_setEventListeners",value:function(){var t=this;this._formInput.forEach((function(e){e.addEventListener("input",(function(){t._validInput(e)}))}))}},{key:"_validInput",value:function(t){this._checkValidInput(t),this._toggleButtonState()}},{key:"_validBtn",value:function(){this._toggleButtonState(),this.returnValidationSubmit()}},{key:"enableValidation",value:function(){this._setEventListeners(),this._validBtn()}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}var y=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._cardsContainer=n}var e,n;return e=t,(n=[{key:"renderItems",value:function(){var t=this;this._items.reverse().forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._cardsContainer.prepend(t)}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(e.userName),this._desc=document.querySelector(e.userDesc)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,desc:this._desc.textContent}}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._desc.textContent=t.desc}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}var _=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElement=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._popupsOutputs=this._popupElement.querySelector(".close")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popupsOutputs.addEventListener("click",(function(){return t.close()})),this._popupElement.addEventListener("click",(function(e){e.target===t._popupElement&&t.close()}))}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=w(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function w(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function j(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return j(this,t)});function u(t,e){var n,r=e.submit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submit=r,n._inputList=n._popupElement.querySelectorAll(".popup__field"),n}return e=u,(n=[{key:"_getForms",value:function(){return this._formList=this._popupElement.querySelector(".form"),this._formList}},{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputList.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"setEventListeners",value:function(){var t=this;k(O(u.prototype),"setEventListeners",this).call(this),this._element=this._getForms(),this._element.addEventListener("submit",(function(e){e.preventDefault(),t._submit(t._getInputValues())}))}},{key:"close",value:function(){k(O(u.prototype),"close",this).call(this),this._element.reset()}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(_);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=q(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},x.apply(this,arguments)}function q(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function B(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return B(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).expansionImg=document.querySelector(".popup__expansion-img"),e.expansionTitle=document.querySelector(".popup__expansion-title"),e}return e=u,(n=[{key:"open",value:function(t,e){x(T(u.prototype),"open",this).call(this),this.expansionImg.src=t,this.expansionImg.alt=e,this.expansionTitle.textContent=e}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(_),V=new v({userName:".profile__name",userDesc:".profile__description"}),D=new C(".popup_type_edit",{submit:function(t){V.setUserInfo(t),D.close()}});D.setEventListeners();var A=new R(".popup_type_expansion");A.setEventListeners();var U=function(t){return new c(t,".pattern-card",{handleCardClick:function(t,e){A.open(t,e)}}).generateCard()},N=new C(".popup_type_add",{submit:function(t){z.addItem(U(t)),N.close()}});N.setEventListeners();var F,z=new y({items:[{title:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{title:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{title:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{title:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{title:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{title:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(t){z.addItem(U(t))}},o);z.renderItems(),F={formSelector:".form",inputSelector:".popup__field",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_inactive",inputErrorClass:"popup__field_error"},Array.from(document.querySelectorAll(F.formSelector)).forEach((function(t){new s(F,t).enableValidation()})),t.addEventListener("click",(function(){D.open();var t=V.getUserInfo();n.value=t.name,r.value=t.desc})),e.addEventListener("click",(function(){N.open()}))})();