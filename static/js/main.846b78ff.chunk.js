(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),s=n.n(i),o=n(6),c=n.n(o),r=(n(15),n(9)),u=n(2),l=n.p+"static/media/logo.fb123762.svg",d=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e",className:"header__logo",src:l})})},m=s.a.createContext();var p=function(e){var t=e.card,n=e.onCardClick,i=e.onCardLike,o=e.onCardDelete,c=s.a.useContext(m),r=t.owner._id===c._id,u="element__delete-icon ".concat(r?"element__delete-icon_active":""),l=t.likes.some((function(e){return e._id===c._id})),d="element__like ".concat(l?"element__like_clicked":"");return Object(a.jsxs)("div",{className:"element",children:[Object(a.jsx)("button",{className:u,onClick:function(){o(t)},type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),Object(a.jsx)("img",{className:"element__image",src:t.link,onClick:function(){n(t)},alt:t.link}),Object(a.jsxs)("div",{className:"element__information",children:[Object(a.jsx)("p",{className:"element__title",children:t.name}),Object(a.jsxs)("div",{className:"element__like",children:[Object(a.jsx)("button",{className:d,onClick:function(){i(t)},type:"button","aria-label":"'\u043b\u0430\u0439\u043a'"}),Object(a.jsx)("p",{className:"element__like-number",children:t.likes.length>0?"".concat(t.likes.length):0})]})]})]})},b=n.p+"static/media/avatar-edit.165d742a.svg";var f=function(e){var t=s.a.useContext(m),n=e.cards,i=e.onEditAvatar,o=e.onEditProfile,c=e.onAddPlace,r=e.onCardDelete,u=e.onCardLike,l=e.onCardClick;return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("div",{className:"profile page__profile",children:[Object(a.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440"}),Object(a.jsx)("img",{className:"profile__edit",src:b,alt:"avatarEdit",onClick:i}),Object(a.jsxs)("div",{className:"user-info",children:[Object(a.jsxs)("div",{className:"user-info__data",children:[Object(a.jsxs)("div",{className:"user-info__name-data",children:[Object(a.jsx)("h1",{className:"user-info__name",children:t.name}),Object(a.jsx)("button",{className:" button user-info__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:o})]}),Object(a.jsx)("p",{className:"user-info__about",children:t.about})]}),Object(a.jsx)("button",{className:"button user-info__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442",onClick:c})]})]}),Object(a.jsx)("section",{className:"elements","aria-label":"\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b",children:n.map((function(e,t){return Object(a.jsx)(p,{card:e,onCardLike:u,onCardDelete:r,onCardClick:l},t)}))})]})};var j=function(e){var t=e.onClose,n=e.card;return Object(a.jsx)("div",{className:"popup img-popup ".concat(n.isOpen&&"img-popup_is-opened"),children:Object(a.jsxs)("div",{className:"img-popup__content",children:[Object(a.jsx)("button",{className:"popup__close",onClick:t}),Object(a.jsx)("img",{className:"img-popup__place",src:n&&n.link,alt:n&&n.name}),Object(a.jsx)("p",{className:"img-popup__caption",children:n&&n.name})]})})},h=function(){return Object(a.jsx)("footer",{className:"footer page__footer",children:Object(a.jsx)("p",{className:"footer__title",children:"\xa9 2020 Mesto Russia"})})};var _=function(e){var t=e.onSubmit,n=e.name,i=e.title,s=e.onClose,o=e.submitTitle,c=e.children,r=e.isOpen,u=e.isLoading;return Object(a.jsx)("div",{className:"popup popup-".concat(n," ").concat(r&&"popup_is-opened"),children:Object(a.jsxs)("form",{className:"popup__container",method:"GET",name:"".concat(n),onSubmit:t,action:"#",noValidate:!0,children:[Object(a.jsx)("button",{className:"popup__close",onClick:s,type:"reset"}),Object(a.jsx)("h2",{className:"popup__title",children:i}),c,Object(a.jsx)("button",{className:"popup__save",type:"submit",children:u?"\u0421\u043e\u0445\u0440\u0430\u043d\u044f\u044e...":"".concat(o)})]})})};var O=function(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateUser,o=e.isLoading,c=s.a.useContext(m),r=s.a.useState(""),l=Object(u.a)(r,2),d=l[0],p=l[1],b=s.a.useState(""),f=Object(u.a)(b,2),j=f[0],h=f[1];return s.a.useEffect((function(){p(c.name),h(c.about)}),[c]),Object(a.jsxs)(_,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit-profile",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),i({name:d,about:j})},isLoading:o,submitTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(a.jsx)("input",{id:"author-input",className:"popup__item",onChange:function(e){p(e.target.value)},value:d||"",type:"text",name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",minLength:"2",maxLength:"40",pattern:"[a-zA-Z\u0430-\u044f\u0451\u0410-\u042f\u0401\\s-]*",required:!0}),Object(a.jsx)("input",{id:"about-input",className:"popup__item",onChange:function(e){h(e.target.value)},value:j||"",type:"text",name:"about",placeholder:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0})]})};var v=function(e){var t=e.isOpen,n=e.onClose,i=e.onSubmit,s=e.isLoading;return Object(a.jsx)(_,{onSubmit:function(e){e.preventDefault(),i()},title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"confirm",isOpen:t,onClose:n,isLoading:s,textOnButton:"\u0414\u0430"})};var g=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateAvatar,o=e.isLoading,c=Object(i.useRef)("");return Object(i.useEffect)((function(){c.current.value=""}),[t]),Object(a.jsx)(_,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"update-avatar",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({avatar:c.current.value})},isLoading:o,submitTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:Object(a.jsx)("input",{ref:c,id:"avatar-input",className:"popup__item",type:"url",placeholder:"\u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",required:!0})})};var x=function(e){var t=e.isOpen,n=e.onClose,i=e.onAddPlace,o=e.isLoading,c=s.a.useState(""),r=Object(u.a)(c,2),l=r[0],d=r[1],m=s.a.useState(""),p=Object(u.a)(m,2),b=p[0],f=p[1];return Object(a.jsxs)(_,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"new-place",onSubmit:function(e){e.preventDefault(),i({name:l,link:b}),d(""),f("")},isOpen:t,onClose:n,submitTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",submitButton:"".concat(o?"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"),children:[Object(a.jsx)("input",{onChange:function(e){d(e.target.value)},value:l||"",id:"name-input",className:"popup__item",type:"text",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",minLength:"1",maxLength:"30"}),Object(a.jsx)("input",{id:"link-input",className:"popup__item",type:"url",required:!0,onChange:function(e){f(e.target.value)},value:b||"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link"})]})},C=n(7),k=n(8),N=new(function(){function e(t){Object(C.a)(this,e),this._headers=t.headers,this._baseUrl=t.baseUrl}return Object(k.a)(e,[{key:"_getResponseData",value:function(e,t){return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u0448\u0438\u0431\u043a\u0430 ".concat(e.status," - ").concat(e.statusText))}))}},{key:"editProfileInfo",value:function(e){return this._getResponseData("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"getProfileInfo",value:function(){return this._getResponseData("".concat(this._baseUrl,"/users/me"),{headers:this._headers})}},{key:"editAvatar",value:function(e){return this._getResponseData("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})})}},{key:"createNewCard",value:function(e){return this._getResponseData("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})})}},{key:"deleteCard",value:function(e){return this._getResponseData("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"setLike",value:function(e){return this._getResponseData("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers})}},{key:"removeLike",value:function(e){return this._getResponseData("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"getInitialCards",value:function(){return this._getResponseData("".concat(this._baseUrl,"/cards"),{headers:this._headers})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"27419946-4fff-4784-a16e-1161591c67a2","Content-Type":"application/json"}});var L=function(){var e=s.a.useState({}),t=Object(u.a)(e,2),n=t[0],i=t[1],o=s.a.useState(!1),c=Object(u.a)(o,2),l=c[0],p=c[1],b=s.a.useState(!1),_=Object(u.a)(b,2),C=_[0],k=_[1],L=s.a.useState({isOpen:!1,link:"",name:""}),y=Object(u.a)(L,2),S=y[0],E=y[1],D=s.a.useState(!1),P=Object(u.a)(D,2),U=P[0],T=P[1],A=s.a.useState([]),w=Object(u.a)(A,2),R=w[0],I=w[1],q=s.a.useState([]),J=Object(u.a)(q,2),B=J[0],F=J[1],z=s.a.useState(!1),H=Object(u.a)(z,2),M=H[0],G=H[1],V=s.a.useState(!1),Z=Object(u.a)(V,2),K=Z[0],Q=Z[1];s.a.useEffect((function(){Promise.all([N.getProfileInfo(),N.getInitialCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];i(n),F(a)})).catch((function(e){return console.log(e)}))}),[]),s.a.useEffect((function(){return document.addEventListener("keydown",X),document.addEventListener("mousedown",Y),function(){document.removeEventListener("keydown",X),document.removeEventListener("mousedown",Y)}}));var W=function(){Q(!1),p(!1),k(!1),T(!1),E({isOpen:!1,link:"",name:""})};function X(e){"Escape"===e.key&&W()}function Y(e){e.target.classList.contains("popup")&&W()}return Object(a.jsx)(m.Provider,{value:n,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(d,{}),Object(a.jsx)(f,{cards:B,onEditProfile:function(){Q(!0)},onAddPlace:function(){p(!0)},onEditAvatar:function(){k(!0)},onCardClick:function(e){var t=e.name,n=e.link;E({isOpen:!0,name:t,link:n})},onCardLike:function(e){e.likes.some((function(e){return e._id===n._id}))?N.removeLike(e._id).then((function(t){var n=B.map((function(n){return n._id===e._id?t:n}));F(n)})).catch((function(e){return console.log(e)})):N.setLike(e._id).then((function(t){var n=B.map((function(n){return n._id===e._id?t:n}));F(n)})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){I(e),T(!0)}}),Object(a.jsx)(h,{}),Object(a.jsx)(O,{isOpen:K,onClose:W,onUpdateUser:function(e){G(!0),N.editProfileInfo(e).then((function(e){i(e),W()})).catch((function(e){return console.log(e)})).finally((function(){return G(!1)}))},isLoading:M}),Object(a.jsx)(x,{isOpen:l,onClose:W,onAddPlace:function(e){N.createNewCard(e).then((function(e){F([].concat(Object(r.a)(B),[e])),W()})).catch((function(e){return console.log(e)}))},isLoading:M}),Object(a.jsx)(g,{isOpen:C,onClose:W,onUpdateAvatar:function(e){G(!0),N.editAvatar(e).then((function(e){i(e),W()})).catch((function(e){return console.log(e)})).finally((function(){return G(!1)}))},isLoading:M}),Object(a.jsx)(j,{card:S,onClose:W}),Object(a.jsx)(v,{isOpen:U,onClose:W,onSubmit:function(){var e=R._id===n._id;G(!0),N.deleteCard(R._id,!e).then((function(e){F(B.filter((function(t){return t._id===R._id?!e:t}))),W()})).catch((function(e){return console.log(e)})).finally((function(){return G(!1)}))},isLoading:M})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))};c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.846b78ff.chunk.js.map