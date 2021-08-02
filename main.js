(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var e=function(){function e(t,n,o,r){var i=r.zoomedImageClick,u=r.like,c=r.offlike,a=r.deleteCardClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardSelector=t,this._zoomedImageClick=i,this._deleteCardClick=a,this._name=o.name,this._link=o.link,this._like=u,this._userId=n,this._offlike=c,this._countLikes=o.likes.length,this._carduserId=o.owner._id,this._id=o._id,this._likes=o.likes}var n,o;return n=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){return t._likesClick()})),this._deleteButton.addEventListener("click",(function(){return t._deleteCard()})),this._elementPhoto.addEventListener("click",(function(){return t._zoomedImageClick(t._name,t._link)}))}},{key:"_likeCard",value:function(){this._likeButton.classList.toggle("element__button_active")}},{key:"_deleteCard",value:function(){this._deleteCardClick(this._id,this._cardElement)}},{key:"_deletelikeCard",value:function(){this._likeButton.classList.remove("element__button_active")}},{key:"_hideDeleteCard",value:function(){this._deleteButton.classList.add("element__button-delete-disabled")}},{key:"_likesClick",value:function(){this._likeButton.classList.contains("element__button_active")?(this._deletelikeCard(),this._offlike(this._id)):(this._likeCard(),this._like(this._id))}},{key:"_checkLike",value:function(){var t=this;this._likes.some((function(e){return e._id===t._userId}))?this._likeCard():this._deletelikeCard()}},{key:"updateLike",value:function(t){this._elementCounter.textContent=t}},{key:"_checkIdCard",value:function(){this._carduserId!==this._userId&&this._hideDeleteCard()}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplate(),this._cardElement.setAttribute("id","".concat(this._id)),this._cardElement.querySelector(".element__title").textContent=this._name,this._elementPhoto=this._cardElement.querySelector(".element__photo"),this._likeButton=this._cardElement.querySelector(".element__button"),this._deleteButton=this._cardElement.querySelector(".element__button-delete"),this._elementCounter=this._cardElement.querySelector(".element__like-counter"),this._elementPhoto.src=this._link,this._elementPhoto.alt=this._name,this._checkLike(),this._checkIdCard(),this.updateLike(this._countLikes),this._setEventListeners(),this._cardElement}}])&&t(n.prototype,o),e}();function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}const o=function(){function t(e,n){var o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=o,this._container=document.querySelector(n)}var e,o;return e=t,(o=[{key:"setItem",value:function(t,e){"init"===e&&this._container.append(this._renderer(t)),"other"===e&&this._container.prepend(this._renderer(t))}},{key:"renderItems",value:function(t,e){var n=this;t.forEach((function(t){n.setItem(t,e)}))}}])&&n(e.prototype,o),t}();function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}const i=function(){function t(e){var n=e.nameSelector,o=e.discSelector,r=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameSelector=n,this._discSelector=o,this._avatarSelector=r,this._profileName=document.querySelector(this._nameSelector),this._profileDisc=document.querySelector(this._discSelector),this._profileAvatar=document.querySelector(this._avatarSelector)}var e,n;return e=t,(n=[{key:"editAvatar",value:function(t){this._profileAvatar.src=t.avatar}},{key:"getUserInfo",value:function(){var t={};return t.profileName=this._profileName.textContent,t.profileDisc=this._profileDisc.textContent,t.profileAvatar=this._profileAvatar.src,t}},{key:"setUserInfo",value:function(t){this._profileName.textContent=t.name,this._profileDisc.textContent=t.about,this._profileAvatar.src=t.avatar}}])&&r(e.prototype,n),t}();var u=document.querySelector(".popup_type_editprofile"),c=document.querySelector(".popup_type_editavatar"),a=document.querySelector(".popup_type_addcard"),s=document.querySelector(".popup__input_form_name"),l=document.querySelector(".popup__input_form_disc"),f=document.querySelector(".profile__add-button"),p=document.querySelector(".profile__edit-button"),h=document.querySelector(".profile__avatar-button"),_=u.querySelector(".popup__form"),d=a.querySelector(".popup__form"),y=c.querySelector(".popup__form"),v={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error"};function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}const b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._popupEscClose=this._closePopupEsc.bind(this)}var e,n;return e=t,(n=[{key:"_closePopupEsc",value:function(t){"Escape"===t.key&&this.close()}},{key:"_closePopupOverlay",value:function(t){t.target===t.currentTarget&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._popupEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._popupEscClose)}},{key:"setEventListeners",value:function(){this._popup.querySelector(".popup__button-close").addEventListener("click",this.close.bind(this)),this._popup.addEventListener("mousedown",this._closePopupOverlay.bind(this))}}])&&m(e.prototype,n),t}();function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function C(t,e,n){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function S(t,e){return!e||"object"!==k(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}const L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(o);if(r){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return S(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).__zoomedImage=e._popup.querySelector(".popup__photo"),e.__zoomedImageTitle=e._popup.querySelector(".popup__name"),e}return e=u,(n=[{key:"open",value:function(t,e){this.__zoomedImage.setAttribute("src",e),this.__zoomedImage.setAttribute("alt",t),this.__zoomedImageTitle.textContent=t,C(w(u.prototype),"open",this).call(this)}}])&&g(e.prototype,n),u}(b);function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function P(t,e,n){return(P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function I(t,e){return(I=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function A(t,e){return!e||"object"!==O(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}const T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&I(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(o);if(r){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return A(this,t)});function u(t,e){var n,o=e.submit,r=e.input;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submit=o,n._input=r,n._button=n._popup.querySelector(".popup__save"),n._form=n._popup.querySelector(".popup__form"),n._inputs=n._popup.querySelectorAll(".popup__input"),n._buttonLoading=n._button.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputs.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;P(R(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(e){e.preventDefault(),t._submit(t._getInputValues())}))}},{key:"open",value:function(){P(R(u.prototype),"open",this).call(this),this._input()}},{key:"close",value:function(){P(R(u.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(t){this._button.textContent=t?"Сохранение...":this._buttonLoading}}])&&j(e.prototype,n),u}(b);function q(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var z=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._settings=e,this._formElement=n,this._submitButton=this._formElement.querySelector(this._settings.submitButtonSelector),this._inputList=this._formElement.querySelectorAll(e.inputSelector)}var e,n;return e=t,(n=[{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._setInputError(t)}},{key:"_setSubmitButtonState",value:function(){this._setAreaError()?(this._submitButton.classList.add(this._settings.inactiveButtonClass),this._submitButton.setAttribute("disabled",!0)):(this._submitButton.classList.remove(this._settings.inactiveButtonClass),this._submitButton.removeAttribute("disabled"))}},{key:"_setInputError",value:function(t){var e=this._formElement.querySelector("#".concat(t.id,"-error"));t.classList.add(this._settings.inputErrorClass),e.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector("#".concat(t.id,"-error"));t.classList.remove(this._settings.inputErrorClass),e.textContent=""}},{key:"_setAreaError",value:function(){return Array.from(this._inputList).some((function(t){return!t.validity.valid}))}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._setSubmitButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._setSubmitButtonState()}}])&&q(e.prototype,n),t}();function B(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}const x=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._settings=e,this._url=e.url,this._content=e.headers["Content-Type"],this._fullAuthoriz=e.headers.authorization}var e,n;return e=t,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:{authorization:this._fullAuthoriz,"Content-Type":this._content}}).then(this._CheckReject)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:{authorization:this._fullAuthoriz,"Content-Type":this._content}}).then(this._CheckReject)}},{key:"postAddCard",value:function(t){return fetch("".concat(this._url,"cards"),{method:"POST",headers:{authorization:this._fullAuthoriz,"Content-Type":this._content},body:JSON.stringify({name:t.name,link:t.link})}).then(this._CheckReject)}},{key:"setLike",value:function(t){return fetch("".concat(this._url,"cards/likes/").concat(t),{method:"PUT",headers:{authorization:this._fullAuthoriz,"Content-Type":this._content}}).then(this._CheckReject)}},{key:"editAvatar",value:function(t){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:{authorization:this._fullAuthoriz,"Content-Type":this._content},body:JSON.stringify({avatar:t.link})}).then(this._CheckReject)}},{key:"patchUserInfo",value:function(t){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:{authorization:this._fullAuthoriz,"Content-Type":this._content},body:JSON.stringify({name:t.name,about:t.description})}).then(this._CheckReject)}},{key:"deletePhoto",value:function(t){return console.log(t),fetch("".concat(this._url,"cards/").concat(t),{method:"DELETE",headers:{authorization:this._fullAuthoriz,"Content-Type":this._content}}).then(this._CheckReject)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"cards/likes/").concat(t),{method:"DELETE",headers:{authorization:this._fullAuthoriz,"Content-Type":this._content}}).then(this._CheckReject)}},{key:"_CheckReject",value:function(t){return t.ok?t.json():Promise.reject("Error: ".concat(t.status))}}])&&B(e.prototype,n),t}();function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function V(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function U(t,e){return(U=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function N(t,e){return!e||"object"!==D(e)&&"function"!=typeof e?J(t):e}function J(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function G(t,e,n){return(G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=H(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function H(t){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}const M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&U(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=H(o);if(r){var n=H(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return N(this,t)});function u(t,e){var n,o,r,c,a,s=e.call;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),a=function(t){t.preventDefault(),o._call(o._id,o._data)},(c="_deleteCard")in(r=J(o=i.call(this,t)))?Object.defineProperty(r,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[c]=a,o._call=s,G((n=J(o),H(u.prototype)),"setEventListeners",n).call(n),o}return e=u,(n=[{key:"close",value:function(){G(H(u.prototype),"close",this).call(this),this._popup.removeEventListener("submit",this._deleteCard)}},{key:"open",value:function(t,e){G(H(u.prototype),"open",this).call(this),this._popup.addEventListener("submit",this._deleteCard),this._id=t,this._data=e}}])&&V(e.prototype,n),u}(b);function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var F=null,K=new x({url:"https://mesto.nomoreparties.co/v1/cohort-26/",headers:{authorization:"e343e8e1-608e-40c1-bda2-485b4f9fb449","Content-Type":"application/json"}}),Q=new i({nameSelector:".profile__name",discSelector:".profile__disc",avatarSelector:".profile__avatar"});Promise.all([K.getUserInfo(),K.getInitialCards()]).then((function(t){var e,n,o=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i=[],u=!0,c=!1;try{for(n=n.call(t);!(u=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);u=!0);}catch(t){c=!0,r=t}finally{try{u||null==n.return||n.return()}finally{if(c)throw r}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],i=o[1];Q.setUserInfo(r),F=r._id,et.renderItems(i,"init")})).catch((function(t){console.log(t)}));var W=new L(".popup_type_closecard");W.setEventListeners();var X=new T(".popup_type_addcard",{submit:function(t){X.renderLoading(!0),K.postAddCard(t).then((function(t){et.setItem(t,"other"),X.close()})).catch((function(t){console.log(t)})).finally((function(){X.renderLoading(!1)}))},input:function(){nt.resetValidation()}});X.setEventListeners();var Y=new T(".popup_type_editprofile",{submit:function(t){Y.renderLoading(!0),K.patchUserInfo(t).then((function(t){Q.setUserInfo(t),Y.close()})).catch((function(t){console.log(t)})).finally((function(){Y.renderLoading(!1)}))},input:function(){s.value=Q.getUserInfo().profileName,l.value=Q.getUserInfo().profileDisc,ot.resetValidation()}});Y.setEventListeners();var Z=new T(".popup_type_editavatar",{submit:function(t){Z.renderLoading(!0),K.editAvatar(t).then((function(t){Q.editAvatar(t),Z.close()})).catch((function(t){console.log(t)})).finally((function(){Z.renderLoading(!1)}))},input:function(){rt.resetValidation()}});Z.setEventListeners();var tt=new M(".popup_type_submit",{call:function(t,e){K.deletePhoto(t).then((function(){e.remove(),tt.close()})).catch((function(t){console.log(t)}))}}),et=new o({renderer:function(t){var n=new e(".template-card",F,t,{zoomedImageClick:function(){W.open(t.name,t.link)},like:function(t){K.setLike(t).then((function(t){return t.likes.length})).then((function(t){n.updateLike(t)})).catch((function(t){console.log(t)}))},offlike:function(t){K.deleteLike(t).then((function(t){return t.likes.length})).then((function(t){n.updateLike(t)})).catch((function(t){console.log(t)}))},deleteCardClick:function(t,e){tt.open(t,e)}});return n.generateCard()}},".card");f.addEventListener("click",(function(){X.open()})),p.addEventListener("click",(function(){Y.open()})),h.addEventListener("click",(function(){Z.open()}));var nt=new z(v,d),ot=new z(v,_),rt=new z(v,y);[ot,nt,rt].forEach((function(t){return t.enableValidation()}))})();