(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{17:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(19),o=n.n(s),r=(n(17),n(9)),i=n(24),u=n(2),l=n(3),p=n(8),d=n(0);var j=function(e){var t=e.onSignOut,n=e.userData;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("div",{className:"header__logo"}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{exact:!0,path:"/",children:Object(d.jsxs)("div",{className:"header__user-email-logout",children:[Object(d.jsx)("p",{className:"header__user-email",children:n.email}),Object(d.jsx)(p.b,{to:"login",className:"header__logout-link",onClick:t,children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(d.jsx)(l.b,{path:"/register",children:Object(d.jsx)(p.b,{to:"login",className:"header__login-link",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(d.jsx)(l.b,{path:"/login",children:Object(d.jsx)(p.b,{to:"register",className:"header__login-link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})]})};var b=function(){var e=new Date;return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",e.getFullYear(),". Mesto Russia. \u0418\u0432\u0430\u043d \u0426\u044b\u043f\u043a\u0438\u043d"]})})},m=c.a.createContext();function h(e){var t=Object(a.useContext)(m);return Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsx)("div",{className:"profile__avatar-container",onClick:e.onEditAvatar,children:Object(d.jsx)("img",{src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"profile__avatar"})}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsx)("h1",{className:"profile__name",children:t.name}),Object(d.jsx)("button",{type:"button",className:"profile__edit-button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:e.onEditProfile}),Object(d.jsx)("p",{className:"profile__job",children:t.about})]}),Object(d.jsx)("button",{type:"button",className:"profile__add-button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e",onClick:e.onAddPlace})]})}function _(e){var t=Object(a.useContext)(m);return Object(d.jsxs)("li",{className:"cards__item",children:[e.card.owner._id===t._id&&Object(d.jsx)("button",{type:"button",className:"cards__remove-button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:function(){return e.onCardDelete(e.card)}}),Object(d.jsx)("img",{src:e.card.link,alt:e.card.name,className:"cards__image",onClick:function(){return e.onCardClick(e.card)}}),Object(d.jsxs)("div",{className:"cards__caption",children:[Object(d.jsx)("h2",{className:"cards__image-caption",children:e.card.name}),Object(d.jsxs)("div",{className:"cards__likes",children:[Object(d.jsx)("button",{type:"button",className:"cards__like-button ".concat(e.card.likes.some((function(e){return e._id===t._id}))?"cards__like-button_active":""),"aria-label":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a",onClick:function(){return e.onCardLike(e.card)}}),Object(d.jsx)("span",{className:"cards__likes-number",children:e.card.likes.length?e.card.likes.length:""})]})]})]})}function f(e){return Object(d.jsx)("section",{className:"cards",children:Object(d.jsx)("ul",{className:"cards__list",children:e.children})})}function O(e){return Object(d.jsxs)("main",{className:"main",children:[Object(d.jsx)(h,Object(r.a)({},e)),Object(d.jsx)(f,{children:e.cards.map((function(t){return Object(d.jsx)(_,{card:t,onCardDelete:e.onCardDelete,onCardClick:e.onCardClick,onCardLike:e.onCardLike},t._id)}))})]})}function g(e){return Object(d.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),onMouseDown:e.onClose,children:Object(d.jsxs)("div",{className:"popup__container",onMouseDown:function(e){return e.stopPropagation()},children:[Object(d.jsx)("button",{type:"button",className:"popup__close-button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:e.onClose}),Object(d.jsx)("h3",{className:"popup__heading",children:e.title}),Object(d.jsxs)("form",{className:"popup__form popup__form_type_".concat(e.name),method:"POST",name:e.name,onSubmit:e.onSubmit,children:[e.children,Object(d.jsx)("button",{type:"submit",className:"popup__submit-button","aria-label":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435",children:e.buttonText})]})]})})}function x(e){var t=Object(a.useContext)(m),n=Object(a.useState)(t.name),c=Object(u.a)(n,2),s=c[0],o=c[1],r=Object(a.useState)(t.about),i=Object(u.a)(r,2),l=i[0],p=i[1];return Object(a.useEffect)((function(){o(t.name),p(t.about)}),[t,e.isOpen]),Object(d.jsxs)(g,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:l})},children:[Object(d.jsx)("input",{type:"text",className:"popup__form-item popup__form-item_value_name",placeholder:"\u0418\u043c\u044f",name:"userName",id:"user-name",minLength:"2",maxLength:"40",required:!0,value:s||"",onChange:function(e){return o(e.target.value)}}),Object(d.jsx)("span",{className:"user-name-error popup__form-error-msg"}),Object(d.jsx)("input",{type:"text",className:"popup__form-item popup__form-item_value_job",placeholder:"\u0420\u043e\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",name:"userJob",id:"user-job",minLength:"2",maxLength:"200",required:!0,value:l||"",onChange:function(e){return p(e.target.value)}}),Object(d.jsx)("span",{className:"user-job-error popup__form-error-msg popup__form-error-msg_pos_bottom"})]})}function v(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current.value=""}),[e.isOpen]),Object(d.jsxs)(g,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(d.jsx)("input",{ref:t,type:"url",className:"popup__form-item popup__form-item_value_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatarLink",id:"avatar-link",required:!0}),Object(d.jsx)("span",{className:"avatar-link-error popup__form-error-msg"})]})}function k(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(""),r=Object(u.a)(o,2),i=r[0],l=r[1];return Object(a.useEffect)((function(){s(""),l("")}),[e.isOpen]),Object(d.jsxs)(g,{name:"new-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onAddPlace({link:c,name:i})},children:[Object(d.jsx)("input",{type:"text",className:"popup__form-item popup__form-item_value_pic-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"picName",id:"pic-name",minLength:"2",maxLength:"30",required:!0,value:i,onChange:function(e){return l(e.target.value)}}),Object(d.jsx)("span",{className:"pic-name-error popup__form-error-msg"}),Object(d.jsx)("input",{type:"url",className:"popup__form-item popup__form-item_value_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"picLink",id:"pic-link",required:!0,value:c,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("span",{className:"pic-link-error popup__form-error-msg popup__form-error-msg_pos_bottom"})]})}function N(e){return Object(d.jsx)("div",{className:"popup popup_type_image ".concat(e.isOpen?"popup_opened":""),onClick:e.onClose,children:Object(d.jsxs)("figure",{className:"popup__figure",onClick:function(e){return e.stopPropagation()},children:[Object(d.jsx)("button",{type:"button",className:"popup__close-button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:e.onClose}),Object(d.jsx)("img",{src:e.data.link,alt:e.data.name,className:"popup__image"}),Object(d.jsx)("figcaption",{className:"popup__caption",children:e.data.name})]})})}function C(e){return Object(d.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),onClick:e.onClose,children:Object(d.jsxs)("div",{className:"popup__container",onClick:function(e){return e.stopPropagation()},children:[Object(d.jsx)("button",{type:"button",className:"popup__close-button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",onClick:e.onClose}),Object(d.jsx)("div",{className:"popup__success ".concat(e.isSuccess?"":"popup__success_type_unsuccess")}),Object(d.jsx)("h3",{className:"popup__heading popup__heading_type_info-tooltip",children:"".concat(e.isSuccess?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.")})]})})}function y(e){var t=e.onLoginSubmit,n=Object(a.useState)(""),c=Object(u.a)(n,2),s=c[0],o=c[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),l=i[0],p=i[1];return Object(d.jsxs)("div",{className:"login",children:[Object(d.jsx)("h3",{className:"login__heading",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsxs)("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),t(l,s)},children:[Object(d.jsx)("input",{type:"email",className:"login__form-item",placeholder:"E-mail",name:"email",id:"email",required:!0,value:s||"",onChange:function(e){return o(e.target.value)}}),Object(d.jsx)("input",{type:"password",className:"login__form-item",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",id:"password",required:!0,value:l||"",onChange:function(e){return p(e.target.value)}}),Object(d.jsx)("button",{type:"submit",className:"login__submit-button","aria-label":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}function S(e){var t=e.onRegisterSubmit,n=Object(a.useState)(""),c=Object(u.a)(n,2),s=c[0],o=c[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),l=i[0],j=i[1];return Object(d.jsxs)("div",{className:"register",children:[Object(d.jsx)("h3",{className:"register__heading",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("form",{className:"register__form",onSubmit:function(e){e.preventDefault(),t(l,s)},children:[Object(d.jsx)("input",{type:"email",className:"register__form-item",placeholder:"E-mail",name:"email",id:"email",required:!0,value:s||"",onChange:function(e){return o(e.target.value)}}),Object(d.jsx)("input",{type:"password",className:"register__form-item",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",id:"password",required:!0,value:l||"",onChange:function(e){return j(e.target.value)}}),Object(d.jsx)("button",{type:"submit",className:"register__submit-button","aria-label":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(d.jsxs)("div",{className:"register__login",children:[Object(d.jsx)("p",{children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?\xa0"}),Object(d.jsx)(p.b,{to:"login",className:"register__login-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}var U=n(25),E=["component"],T=function(e){var t=e.component,n=Object(U.a)(e,E);return Object(d.jsx)(l.b,{children:function(){return n.loggedIn?Object(d.jsx)(t,Object(r.a)({},n)):Object(d.jsx)(l.a,{to:"/login"})}})},L=n(22),w=n(23),D=new(function(){function e(t){Object(L.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(w.a)(e,[{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._handleResponse(t)}))}},{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._handleResponse(t)}))}},{key:"editUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._handleResponse(e)}))}},{key:"editUserAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._handleResponse(e)}))}},{key:"postCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._handleResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._handleResponse(e)}))}},{key:"_makeLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._handleResponse(e)}))}},{key:"_makeUnlike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._handleResponse(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?this._makeUnlike(e):this._makeLike(e)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-26",headers:{authorization:"a37d820a-4f35-49a2-9bb2-cba80f833b0c","Content-Type":"application/json"}}),P="https://auth.nomoreparties.co";function A(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}var R=function(){var e=Object(l.g)(),t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(!1),p=Object(u.a)(o,2),h=p[0],_=p[1],f=Object(a.useState)(!1),U=Object(u.a)(f,2),E=U[0],L=U[1],w=Object(a.useState)({isOpen:!1,cardToDelete:{}}),R=Object(u.a)(w,2),I=R[0],q=R[1],J=Object(a.useState)({isOpen:!1,data:{}}),G=Object(u.a)(J,2),M=G[0],z=G[1],B=Object(a.useState)({}),H=Object(u.a)(B,2),F=H[0],Y=H[1],K=Object(a.useState)({}),Q=Object(u.a)(K,2),V=Q[0],W=Q[1],X=Object(a.useState)([]),Z=Object(u.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useState)({isOpen:!1,isSuccess:!0}),ne=Object(u.a)(te,2),ae=ne[0],ce=ne[1],se=Object(a.useState)(!1),oe=Object(u.a)(se,2),re=oe[0],ie=oe[1];function ue(){s(!1),_(!1),L(!1),q({isOpen:!1,cardToDelete:{}}),z({isOpen:!1,data:M.data}),ce({isOpen:!1})}function le(){var t,n=localStorage.getItem("jwt");n?(t=n,fetch("".concat(P,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return A(e)}))).then((function(t){ie(!0),W(Object(r.a)({},t.data)),e.push("/")})).catch((function(e){console.log(e)})):e.push("/login")}return Object(a.useEffect)((function(){le()}),[]),Object(a.useEffect)((function(){Promise.all([D.getInitialCards(),D.getUserInfo()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];ee(n),Y(a)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){var e=function(e){"Escape"===e.key&&ue()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]),Object(d.jsx)("div",{className:"page",children:Object(d.jsx)("div",{className:"page__content",children:Object(d.jsxs)(m.Provider,{value:F,children:[Object(d.jsx)(j,{onSignOut:function(){localStorage.removeItem("jwt"),e.push("/login")},userData:V}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(T,{exact:!0,path:"/",loggedIn:re,component:O,onEditProfile:function(){return s(!0)},onEditAvatar:function(){return _(!0)},onAddPlace:function(){return L(!0)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===F._id}));D.changeLikeCardStatus(e._id,t).then((function(t){ee((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){q({isOpen:!0,cardToDelete:Object(r.a)({},e)})},onCardClick:function(e){z({isOpen:!0,data:{link:e.link,name:e.name}})},cards:$}),Object(d.jsx)(l.b,{path:"/login",children:Object(d.jsx)(y,{onLoginSubmit:function(e,t){(function(e,t){return fetch("".concat(P,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return A(e)})).then((function(e){return localStorage.setItem("jwt",e.token),e}))})(e,t).then((function(e){le()})).catch((function(e){console.log(e)}))}})}),Object(d.jsx)(l.b,{path:"/register",children:Object(d.jsx)(S,{onRegisterSubmit:function(t,n){(function(e,t){return fetch("".concat(P,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return A(e)}))})(t,n).then((function(t){ce({isOpen:!0,isSuccess:!0}),e.push("/login")})).catch((function(e){console.log(e),ce({isOpen:!0,isSuccess:!1})}))}})})]}),Object(d.jsx)(b,{}),Object(d.jsx)(x,{isOpen:c,onClose:ue,onUpdateUser:function(e){D.editUserInfo(e).then((function(e){Y(e),ue()})).catch((function(e){return console.log(e)}))},onOvelayClick:ue}),Object(d.jsx)(v,{isOpen:h,onClose:ue,onUpdateAvatar:function(e){D.editUserAvatar(e).then((function(e){Y(e),ue()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(k,{isOpen:E,onClose:ue,onAddPlace:function(e){D.postCard(e).then((function(e){ee([e].concat(Object(i.a)($))),ue()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(g,{name:"delete-card-confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:I.isOpen,onClose:ue,buttonText:"\u0414\u0430",onSubmit:function(e){!function(e,t){e.preventDefault(),D.deleteCard(t._id).then((function(){ee((function(e){return e.filter((function(e){return e._id!==t._id}))})),ue()})).catch((function(e){return console.log(e)}))}(e,I.cardToDelete)}}),Object(d.jsx)(N,Object(r.a)(Object(r.a)({},M),{},{onClose:ue})),Object(d.jsx)(C,{isOpen:ae.isOpen,isSuccess:ae.isSuccess,name:"info-tooltip",onClose:ue})]})})})};o.a.render(Object(d.jsx)(p.a,{children:Object(d.jsx)(R,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.9b0d59e8.chunk.js.map