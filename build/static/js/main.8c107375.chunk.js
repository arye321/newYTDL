(this["webpackJsonpfirebase-react-auth"]=this["webpackJsonpfirebase-react-auth"]||[]).push([[0],{74:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),u=a(84),o=a(19),s=a(49),i=a.n(s),m=(a(67),i.a.initializeApp({apiKey:"AIzaSyAfG_OpX5v_gTq-xCPklDuF08RPwYNMlAA",authDomain:"first-9b050.firebaseapp.com",databaseURL:"https://first-9b050-default-rtdb.firebaseio.com",projectId:"first-9b050",storageBucket:"first-9b050.appspot.com",messagingSenderId:"1053812019885",appId:"1:1053812019885:web:f192f1afccdc974b33ec24"})),p=m.auth(),d=r.a.createContext();function f(){return Object(n.useContext)(d)}function b(e){var t=e.children,a=Object(n.useState)(),c=Object(o.a)(a,2),l=c[0],u=c[1],s=Object(n.useState)(!0),i=Object(o.a)(s,2),m=i[0],f=i[1];Object(n.useEffect)((function(){return p.onAuthStateChanged((function(e){u(e),f(!1)}))}),[]);var b={currentUser:l,login:function(e,t){return p.signInWithEmailAndPassword(e,t)},logout:function(){return p.signOut()},resetPassword:function(e){return p.sendPasswordResetEmail(e)},updateEmail:function(e){return l.updateEmail(e)},updatePassword:function(e){return l.updatePassword(e)}};return r.a.createElement(d.Provider,{value:b},!m&&t)}var E=a(24),v=a(5),h=a(28),O=a.n(h),j=a(32),w=a(83),g=a(56);a(74);function y(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=Object(n.useRef)(),l=Object(n.useState)(""),u=Object(o.a)(l,2),s=(u[0],u[1]),i=f(),m=(i.currentUser,i.logout),p=Object(v.g)();function d(){return(d=Object(j.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(""),e.prev=1,e.next=4,m();case 4:p.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),s("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){return null==c.current&&(c.current=Object(g.a)("ws://localhost:5000",{transports:["websocket"]})),c.current.on("addLog",(function(e){var t=document.createElement("li");t.textContent=e,a.current.appendChild(t)})),c.current.on("downloadLink",(function(t){var a;a=t,e.current.href=encodeURIComponent(a),e.current.style.display="block",e.current.innerHTML="download "+a,e.current.click(),console.log(t)})),function(){console.log("xd")}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"",onSubmit:function(e){e.preventDefault(),c.current.emit("submit",t.current.value),t.current.value=""}},r.a.createElement("input",{size:"33",ref:t,autoFocus:!0}),r.a.createElement("button",null,"Submit")),r.a.createElement("a",{download:"",ref:e,style:{display:"none"}}," download"),r.a.createElement("ul",{ref:a,style:{listStyleType:"none",fontSize:"10px",left:"5px"}}),r.a.createElement("div",{className:"w-auto text-center mt-2"},r.a.createElement(w.a,{variant:"link",onClick:function(){return d.apply(this,arguments)}},"Log Out")))}var x=a(87),k=a(86),S=a(85);a(79);function C(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=f().login,c=Object(n.useState)(""),l=Object(o.a)(c,2),u=l[0],s=l[1],i=Object(n.useState)(!1),m=Object(o.a)(i,2),p=m[0],d=m[1],b=Object(v.g)();function E(){return(E=Object(j.a)(O.a.mark((function n(r){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,s(""),d(!0),n.next=6,a(e.current.value,t.current.value);case 6:b.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),s("Failed to log in");case 12:d(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement(x.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Log In"),u&&r.a.createElement(k.a,{variant:"danger"},u),r.a.createElement(S.a,{onSubmit:function(e){return E.apply(this,arguments)}},r.a.createElement(S.a.Group,{id:"email"},r.a.createElement(S.a.Label,null,"Email"),r.a.createElement(S.a.Control,{type:"email",ref:e,required:!0})),r.a.createElement(S.a.Group,{id:"password"},r.a.createElement(S.a.Label,null,"Password"),r.a.createElement(S.a.Control,{type:"password",ref:t,required:!0})),r.a.createElement(w.a,{disabled:p,className:"w-100",type:"submit"},"Log In")))))}var P=a(59),L=["component"];function R(e){var t=e.component,a=Object(P.a)(e,L),n=f().currentUser;return r.a.createElement(v.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(v.a,{to:"/login"})}}))}function N(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=f(),l=c.currentUser,u=c.updatePassword,s=c.updateEmail,i=Object(n.useState)(""),m=Object(o.a)(i,2),p=m[0],d=m[1],b=Object(n.useState)(!1),h=Object(o.a)(b,2),O=h[0],j=h[1],g=Object(v.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement(x.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Update Profile"),p&&r.a.createElement(k.a,{variant:"danger"},p),r.a.createElement(S.a,{onSubmit:function(n){if(n.preventDefault(),t.current.value!==a.current.value)return d("Passwords do not match");var r=[];j(!0),d(""),e.current.value!==l.email&&r.push(s(e.current.value)),t.current.value&&r.push(u(t.current.value)),Promise.all(r).then((function(){g.push("/")})).catch((function(){d("Failed to update account")})).finally((function(){j(!1)}))}},r.a.createElement(S.a.Group,{id:"email"},r.a.createElement(S.a.Label,null,"Email"),r.a.createElement(S.a.Control,{type:"email",ref:e,required:!0,defaultValue:l.email})),r.a.createElement(S.a.Group,{id:"password"},r.a.createElement(S.a.Label,null,"Password"),r.a.createElement(S.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})),r.a.createElement(S.a.Group,{id:"password-confirm"},r.a.createElement(S.a.Label,null,"Password Confirmation"),r.a.createElement(S.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})),r.a.createElement(w.a,{disabled:O,className:"w-100",type:"submit"},"Update")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},r.a.createElement(E.b,{to:"/"},"Cancel")))}var I=function(){return r.a.createElement(u.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"}},r.a.createElement("div",{className:"w-100",style:{maxWidth:"400px"}},r.a.createElement(E.a,null,r.a.createElement(b,null,r.a.createElement(v.d,null,r.a.createElement(R,{exact:!0,path:"/",component:y}),r.a.createElement(R,{path:"/update-profile",component:N}),r.a.createElement(v.b,{path:"/login",component:C}))))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.8c107375.chunk.js.map