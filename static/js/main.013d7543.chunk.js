(this["webpackJsonpstepped-form"]=this["webpackJsonpstepped-form"]||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),o=(a(26),a(11)),s=a(17),u=a(8),m=a(35),i=a(36);a(27);var p=function(e){return r.a.createElement("form",{className:"formbox"},e.children)},E=function(e){var t=Object(u.g)();return r.a.createElement(p,null,r.a.createElement("h1",{className:"kewl-text kewl-text-right"},"Your"),r.a.createElement("h1",{className:"kewl-text kewl-text-right"},"Username"),r.a.createElement("input",{type:"text",name:"username",placeholder:"A username as unique as you are",value:e.username,onChange:function(t){return e.setUsername(t.target.value)}}),r.a.createElement("button",{onClick:function(e){e.preventDefault(),t.push("/steptwo")}},"Next"))},h=function(e){var t=Object(u.g)();return r.a.createElement(p,null,r.a.createElement("h1",{className:"kewl-text kewl-text-left"},"Your"),r.a.createElement("h1",{className:"kewl-text kewl-text-left"},"Email"),r.a.createElement("input",{type:"text",name:"email",placeholder:"An email, for formal stuff, you know.",value:e.email,onChange:function(t){return e.setEmail(t.target.value)}}),r.a.createElement("button",{className:"first-button",onClick:function(e){e.preventDefault(),t.goBack()}},"Back"),r.a.createElement("button",{onClick:function(e){e.preventDefault(),t.push("/stepthree")}},"Next"))},f=function(e){var t=Object(u.g)();return r.a.createElement(p,null,r.a.createElement("h1",{className:"kewl-text kewl-text-right"},"Your"),r.a.createElement("h1",{className:"kewl-text kewl-text-right"},"Password"),r.a.createElement("input",{type:"password",name:"password",placeholder:"It remains between us ;)",value:e.password,onChange:function(t){return e.setPassword(t.target.value)}}),r.a.createElement("button",{className:"first-button",onClick:function(e){e.preventDefault(),t.goBack()}},"Back"),r.a.createElement("button",{onClick:function(e){e.preventDefault(),t.push("/submit")}},"Next"))},d=function(e){var t=Object(u.g)();return r.a.createElement("div",{className:"submit"},r.a.createElement("h1",null,"Thanks for filling this form!"),r.a.createElement("h3",null,"Rest assured, all your data gets deleted once you reload this app."),r.a.createElement("button",{onClick:function(e){e.preventDefault(),t.go(-3)}},"Click here to go back to start"))},b=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],c=a[1],p=Object(n.useState)(""),b=Object(o.a)(p,2),k=b[0],w=b[1],v=Object(n.useState)(""),g=Object(o.a)(v,2),x=g[0],N=g[1];return r.a.createElement(s.a,null,r.a.createElement(u.b,{render:function(e){var t=e.location;e.history;return r.a.createElement(m.a,null,r.a.createElement(i.a,{timeout:200,classNames:"slide",key:t.key},r.a.createElement(u.d,{location:t},r.a.createElement(u.b,{path:"/stepone"},r.a.createElement("div",{className:"App"},r.a.createElement(E,{username:l,setUsername:c}))),r.a.createElement(u.b,{path:"/steptwo"},r.a.createElement("div",{className:"App"},r.a.createElement(h,{email:k,setEmail:w}))),r.a.createElement(u.b,{path:"/stepthree"},r.a.createElement("div",{className:"App"},r.a.createElement(f,{password:x,setPassword:N}))),r.a.createElement(u.b,{path:"/submit"},r.a.createElement("div",{className:"App"},r.a.createElement(d,null))),r.a.createElement(u.b,{path:"/"},r.a.createElement(u.a,{to:"/stepone"})))))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.013d7543.chunk.js.map