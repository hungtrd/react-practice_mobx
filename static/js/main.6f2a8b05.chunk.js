(this["webpackJsonpreact-practice_mobx"]=this["webpackJsonpreact-practice_mobx"]||[]).push([[0],{45:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var r,n,c,s,i,o,l=a(0),j=a.n(l),u=a(13),b=a.n(u),h=(a(45),a(14)),p=a(39),d=a(7),O=a(15),m=a.n(O),g=a(19),x=a(18),f=a(32),y=a(33),v=a(16),w=(a(47),a(5)),L=a(34),k=(r=function(){function e(){Object(f.a)(this,e),Object(x.a)(this,"isLogin",n,this),Object(x.a)(this,"type",c,this),Object(x.a)(this,"message",s,this),Object(x.a)(this,"setAlert",i,this),Object(x.a)(this,"logout",o,this),Object(w.m)(this),this.isLogin=!1,this.type="",this.message=""}return Object(y.a)(e,[{key:"login",value:function(){var e=Object(g.a)(m.a.mark((function e(t,a){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.fakeLogin(t,a);case 3:return r=e.sent,localStorage.setItem("email",t),this.isLogin=!0,e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"fakeLogin",value:function(){var e=Object(g.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){Object(L.setTimeout)((function(){/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(t)||r({type:"error",target:"email",message:"Email Invalid!"}),"ows"!==a&&r({type:"error",target:"password",message:"Password Invalid!"}),e({type:"success",target:"",message:"Login Successfully!"})}),2e3)})));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),n=Object(v.a)(r.prototype,"isLogin",[w.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=Object(v.a)(r.prototype,"type",[w.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=Object(v.a)(r.prototype,"message",[w.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i=Object(v.a)(r.prototype,"setAlert",[w.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,a){e.type=t,e.message=a}}}),Object(v.a)(r.prototype,"login",[w.f],Object.getOwnPropertyDescriptor(r.prototype,"login"),r.prototype),o=Object(v.a)(r.prototype,"logout",[w.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.isLogin=!1,e.setAlert("success","Logout successfully!"),localStorage.setItem("email","")}}}),r),C=a(17),S=a(67),I=a(66),z=a(61),A=a(3),F=Object(h.a)((function(e){var t=e.store,a=Object(l.useState)({type:"",target:"",message:""}),r=Object(C.a)(a,2),n=r[0],c=r[1],s=Object(l.useState)(""),i=Object(C.a)(s,2),o=i[0],j=i[1],u=Object(l.useState)(""),b=Object(C.a)(u,2),h=b[0],p=b[1],O=function(){var e=Object(g.a)(m.a.mark((function e(a){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t.login(o,h);case 3:r=e.sent,c(r),t.setAlert(r.type,r.message);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t.isLogin?Object(A.jsx)(d.a,{to:"/home"}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("h1",{children:" Login "}),Object(A.jsx)(S.a,{className:"form-login",children:Object(A.jsx)(S.a.Body,{children:Object(A.jsxs)(I.a,{onSubmit:O,children:[Object(A.jsxs)(I.a.Group,{controlId:"email",children:[Object(A.jsx)(I.a.Label,{children:" Email "}),Object(A.jsx)(I.a.Control,{type:"text",name:"email",placeholder:"admin@ows.vn",onChange:function(e){j(e.currentTarget.value)}}),Object(A.jsx)(I.a.Text,{className:"text-danger",children:"email"===n.target?n.message:""})]}),Object(A.jsxs)(I.a.Group,{controlId:"password",children:[Object(A.jsx)(I.a.Label,{children:" Password "}),Object(A.jsx)(I.a.Control,{type:"password",name:"password",placeholder:"ows",onChange:function(e){p(e.currentTarget.value)}}),Object(A.jsx)(I.a.Text,{className:"text-danger",children:"password"===n.target?n.message:""})]}),Object(A.jsx)(I.a.Group,{controlId:"remember",children:Object(A.jsx)(I.a.Check,{type:"checkbox",name:"remember",label:"remember me?"})}),Object(A.jsx)(z.a,{variant:"primary",type:"submit",children:"Login"})]})})})]})})),N=a(62),T=a(63),P=a(36),B=a(64),D=(a(56),a.p+"static/media/avatar.f4eb2a3e.jpeg"),G=Object(h.a)((function(e){var t=e.store,a=Object(l.useState)(""),r=Object(C.a)(a,2),n=r[0],c=r[1];return t.isLogin?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("h1",{children:" Home "}),Object(A.jsx)(S.a,{className:"home",children:Object(A.jsx)(S.a.Body,{children:Object(A.jsxs)(N.a,{children:[Object(A.jsxs)(T.a,{children:[Object(A.jsx)(P.a,{md:"12",children:Object(A.jsx)(B.a,{style:{overflow:"hidden",maxHeight:"100px"},src:n||D,roundedCircle:!0})}),Object(A.jsx)(P.a,{md:"12",children:Object(A.jsx)(I.a,{children:Object(A.jsx)(I.a.Group,{className:"avatar-select",children:Object(A.jsx)("input",{name:"avatar",type:"file",onChange:function(e){return function(e){var t=new FileReader,a=e[0];t.readAsDataURL(a),t.onloadend=function(){c(t.result)}}(e.target.files)}})})})})]}),Object(A.jsx)(T.a,{children:Object(A.jsx)(P.a,{md:"12",children:localStorage.getItem("email")})}),Object(A.jsx)(T.a,{children:Object(A.jsx)(P.a,{md:"12",children:Object(A.jsx)(z.a,{size:"sm",onClick:t.logout(),children:"Logout"})})})]})})})]}):Object(A.jsx)(d.a,{to:"/login"})})),E=a(65),Z=Object(h.a)((function(e){var t=e.store;return Object(A.jsx)("div",{className:"custom-toast",children:t.message?Object(A.jsx)(E.a,{variant:"success"===t.type?"success":"danger",children:t.message}):""})})),H=(a(57),Object(h.a)((function(){var e=new k;return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(Z,{store:e}),Object(A.jsx)(p.a,{children:Object(A.jsxs)(d.d,{children:[Object(A.jsx)(d.b,{path:"/login",children:Object(A.jsx)(F,{store:e})}),Object(A.jsx)(d.b,{path:"/home",children:Object(A.jsx)(G,{store:e})})]})})]})}))),J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};a(58);b.a.render(Object(A.jsx)(j.a.StrictMode,{children:Object(A.jsx)(H,{})}),document.getElementById("root")),J()}},[[59,1,2]]]);
//# sourceMappingURL=main.6f2a8b05.chunk.js.map