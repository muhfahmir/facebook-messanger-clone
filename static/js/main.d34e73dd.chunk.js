(this["webpackJsonpfacebook-messenger-clone"]=this["webpackJsonpfacebook-messenger-clone"]||[]).push([[0],{53:function(e,s,c){},54:function(e,s,c){},55:function(e,s,c){},68:function(e,s,c){"use strict";c.r(s);var n=c(11),a=c(2),t=c.n(a),r=c(17),u=c.n(r),o=(c(53),c(35)),b=(c(54),c(87)),i=c(89),m=c(88),d=c(90),j=c(85),f=c(86),l=(c(55),Object(a.forwardRef)((function(e,s){var c=e.username,a=e.message,t=c===a.username;return Object(n.jsx)("div",{className:"message ".concat(t&&"message__user"),ref:s,children:Object(n.jsx)(d.a,{className:"".concat(t?"message__userCard":"message__guestCard"),children:Object(n.jsx)(j.a,{children:Object(n.jsxs)(f.a,{color:"white",variant:"h5",component:"h2",children:[!t&&"".concat(a.username||"Unknown User"," :")," ",a.message]})})})})}))),p=c(34),y=p.a.initializeApp({apiKey:"AIzaSyA7Cv_IhpmhtMdz0wkVO-lX9hhAhFHbpYs",authDomain:"facebook-messenger-clone-3ab5f.firebaseapp.com",projectId:"facebook-messenger-clone-3ab5f",storageBucket:"facebook-messenger-clone-3ab5f.appspot.com",messagingSenderId:"551092235487",appId:"1:551092235487:web:a2be3c28c94c624f498d6a",measurementId:"G-9XL9BKF1RB"}).firestore(),v=c(44),z=c(43),h=c.n(z);var x=function(){var e=Object(a.useState)(""),s=Object(o.a)(e,2),c=s[0],t=s[1],r=Object(a.useState)([]),u=Object(o.a)(r,2),d=u[0],j=u[1],f=Object(a.useState)(""),z=Object(o.a)(f,2),x=z[0],k=z[1];return Object(a.useEffect)((function(){y.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){j(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),Object(a.useEffect)((function(){k(prompt("Please enter your name"))}),[]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("img",{src:"data:image/png;base64,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",alt:"Facebook messenger"}),Object(n.jsx)("h1",{children:"Facebook messengger clone"}),Object(n.jsxs)("h2",{children:["Welcome ",""===x?"Unkown User":x]}),Object(n.jsx)("form",{className:"app__form",children:Object(n.jsxs)(b.a,{className:"app__formControl",children:[Object(n.jsx)(i.a,{value:c,onChange:function(e){return t(e.target.value)},placeholder:"Enter a message...",className:"app__input"}),Object(n.jsx)(m.a,{type:"submit",onClick:function(e){e.preventDefault(),y.collection("messages").add({message:c,username:x,timestamp:p.a.firestore.FieldValue.serverTimestamp()}),t("")},variant:"contained",color:"primary",disabled:!c,className:"app__iconButton",children:Object(n.jsx)(h.a,{})})]})}),Object(n.jsx)(v.a,{children:d.map((function(e){var s=e.message,c=e.id;return Object(n.jsx)(l,{username:x,message:s},c)}))})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,91)).then((function(s){var c=s.getCLS,n=s.getFID,a=s.getFCP,t=s.getLCP,r=s.getTTFB;c(e),n(e),a(e),t(e),r(e)}))};u.a.render(Object(n.jsx)(t.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),k()}},[[68,1,2]]]);
//# sourceMappingURL=main.d34e73dd.chunk.js.map