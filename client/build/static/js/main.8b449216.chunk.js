(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,n,t){e.exports=t(147)},147:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(11),i=t.n(c),o=t(57),l=t(13),u=t(14),s=t(7),d=t(6);function p(){var e=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n"]);return p=function(){return e},e}function m(){var e=Object(s.a)(["\n  min-height: 100vh;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  background: #353130;\n  .company-logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    a {\n      font-family: var(--Font1);\n      color: white;\n      font-size: x-large;\n      white-space: nowrap;\n    }\n  }\n"]);return m=function(){return e},e}var f,h,b=d.c.div(m()),g=d.c.div(p()),v=t(37),x=f=Object(a.createContext)(),j=x.Provider,E=(x.Consumer,{_id:null,guid:"",isActive:!0,balance:"",picture:"",age:0,eyeColor:"",name:{first:"",last:""},company:"",email:"",password:"",phone:"",address:""}),O=function(e){var n=e.children,t=e.history,c=Object(a.useState)(E),i=Object(u.a)(c,2),o=i[0],l=i[1],s=Object(a.useState)(!1),d=Object(u.a)(s,2),p=d[0],m=d[1];Object(a.useEffect)((function(){var e=!0;return e&&f(e),function(){return e=!1}}),[o._id]);var f=function(){var e=localStorage.getItem("jwt");if(e){var n=Object(v.a)(e);n&&(l(n),m(!0))}};return r.a.createElement(j,{value:{user:o,setUser:l,ready:p,setReady:m,handleSignOut:function(){localStorage.removeItem("jwt"),localStorage.removeItem("email"),localStorage.removeItem("password"),setTimeout((function(){t.push("/login"),l(E)}),200)}}},"undefined"!==typeof window?n:"")},w=f,y=h=Object(a.createContext)(),C=y.Provider,k=(y.Consumer,function(e){var n=e.children,t=Object(a.useState)({}),c=Object(u.a)(t,2),i=c[0],o=c[1];return Object(a.useEffect)((function(){o({})}),[n]),r.a.createElement(C,{value:{errors:i,setErrors:o,clearErrors:function(){o({})}}},n)}),S=h,T=function(e){return r.a.createElement(k,null,r.a.createElement(O,e,e.children))},z=function(e){var n=e.children;return r.a.createElement(T,null,r.a.createElement(b,null,r.a.createElement(g,null,n)))},M=function(){return r.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 674 636",style:{enableBackground:"new 0 0 674 636"},xmlSpace:"preserve"},r.a.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:"\n\t.st0{fill:#2C95F1;}\n"}}),r.a.createElement("g",null,r.a.createElement("path",{className:"st0",d:"M125.4,428.5c6-0.2,12-0.3,18,0c4.1,0.3,5.3-1,5.2-5.2c-0.2-28.3-0.1-56.6-0.1-84.9c0-1.5-0.6-3.2,0.8-5.1 c14.2,25.3,28.3,50.2,42.7,75.7c15.1-25.4,29.8-50.3,44.6-75.2c0.8,30.2,0.8,60,0.7,89.8c0,3.5,0.6,5.1,4.6,4.8 c6.3-0.4,12.7-0.2,19,0c2.7,0.1,3.8-0.7,3.8-3.6c-0.1-45.5-0.1-90.9,0-136.4c0-3.2-1.2-3.9-4.1-3.8c-7.2,0.2-14.3,0.2-21.5,0 c-3.4-0.1-5.4,0.9-7.1,4c-6,10.7-12.3,21.3-18.6,31.9c-6.8,11.6-13.6,23.1-20.4,34.7c-2.1-1.2-2.6-3.1-3.4-4.7 C178,330,166.4,309.4,155,288.7c-1.7-3-3.5-4.3-7-4.1c-7.7,0.3-15.3,0.2-23,0c-2.8-0.1-3.7,0.8-3.7,3.7c0.1,45.5,0.1,90.9,0,136.4 C121.3,428,122.6,428.5,125.4,428.5z"}),r.a.createElement("path",{className:"st0",d:"M473.5,483c-6.5,0.2-13,0.4-19.5-0.1c-5.2-0.4-7.9,1.5-10.5,6c-12.2,21.5-24.9,42.9-37.9,65 c-1.3-2.2-2.2-3.6-3-5c-11.6-20.7-23.3-41.5-34.8-62.3c-1.5-2.7-3.1-3.8-6.2-3.7c-7.5,0.2-15,0.3-22.5,0c-4-0.2-5,1.2-4.9,5 c0.2,24.5,0.1,49,0.1,73.5c0,20.2,0.1,40.3-0.1,60.5c0,4,1.2,5.2,5.1,5c5.5-0.3,11-0.3,16.5,0c4.4,0.3,5.9-0.8,5.9-5.6 c-0.3-28.3-0.1-56.6-0.1-85c0-1.5-0.6-3.2,0.8-4.9c14.2,25.1,28.3,50,42.7,75.5c15.1-25.4,29.9-50.2,45.4-76.3c0,3.2,0,4.8,0,6.4 c0,28.2,0.1,56.3-0.1,84.5c0,4.5,1.3,5.7,5.6,5.4c6-0.4,12-0.2,18,0c2.7,0.1,3.8-0.7,3.8-3.6c-0.1-45.5-0.1-91,0-136.4 C477.6,483.5,476.3,483,473.5,483z"}),r.a.createElement("path",{className:"st0",d:"M201.9,125.2c11.2,0,22.3,0.3,33.5-0.1c4.5-0.2,5.6,1.4,6,5.5c2.2,19.6,10,36.7,22.4,51.9 c25.1,30.4,68.5,42.8,105.8,30.4c41.8-13.9,70.7-54.7,67.8-99.7c-1.4-21.7-9-40.7-22.7-57.4c-7.3-8.8-16.1-15.8-25.9-22.2 c0.9-0.7,1.1-1.1,1.4-1.1c18.5-0.1,37-0.1,55.5-0.1c2.8,0,3,1.7,3.3,3.9c0.6,5.3,2.6,6.5,7.3,4.5c5.9-2.6,11.7-5.5,17.7-8.2 c2.7-1.2,4.3-3,4.4-6.1c0.1-3-1.3-5-4-6.3c-6.2-2.9-12.3-6-18.5-8.7c-4.1-1.8-6.6-0.4-6.7,4.2c-0.1,4.2-1.9,4.8-5.5,4.8 c-33-0.1-66,0-98.9-0.1c-6.8,0-13.6,0.2-20.4,1.2c-21.4,3.4-39.9,12.8-55,28.1C253,66.1,243.5,85.9,241.2,109 c-0.3,3.3-1.7,4.3-5.1,4.3c-11.7-0.2-23.3-0.1-35,0c-4.8,0-7.7,3.3-6.6,7.2C195.6,124,198.4,125.2,201.9,125.2z M334.1,112.3 c-5.7-2.6-11.4-5.4-17.2-8c-4.4-1.9-7-0.6-7.1,4.2c-0.1,4.3-2,4.8-5.6,4.7c-15.3-0.2-30.7-0.3-46,0.1c-5.2,0.1-5.8-1.8-5.1-6.1 c5.2-30.7,21.4-53.6,49.7-66.8C353.8,16.9,413,46.7,424,101.7c8.9,44.6-16.3,86.6-59.6,100.1c-47.6,14.8-97.8-14.1-109.6-62.4 c-0.8-3.4-1.1-6.9-1.8-10.3c-0.7-3.2,0.7-4,3.7-4c8.2,0.2,16.3,0.1,24.5,0.1c8,0,16,0.1,24,0c2.6,0,4.2,0.2,4.5,3.6 c0.4,5.8,2.6,6.8,8,4.4c5.5-2.4,10.9-5,16.4-7.4c3-1.3,5-3.2,5.1-6.7C339.2,115.5,337.1,113.7,334.1,112.3z"}),r.a.createElement("path",{className:"st0",d:"M388.9,399.8c2.9,0,4.5,0.9,5.6,3.6c3.2,7.3,6.7,14.5,10,21.8c0.9,1.9,1.7,3.3,4.3,3.3c9-0.2,18-0.1,27.8-0.1 c-1.1-2.4-1.9-4.1-2.6-5.7c-19.3-40.9-38.6-81.8-58-122.7c-2.4-5.1-3.4-11.9-7.9-14.6c-4.5-2.7-11.1-0.4-16.7-0.8 c-3.4-0.3-5,1.2-6.4,4.1c-21.3,45.3-42.7,90.5-64,135.8c-0.5,1.1-1.6,2.2-0.8,3.9c8.4,0,16.9-0.1,25.4,0.1c3.1,0.1,4.8-0.9,6-3.8 c3.1-7.2,6.7-14.1,9.8-21.3c1.2-2.7,2.7-3.6,5.6-3.6C347.6,400,368.2,400,388.9,399.8z M335.3,373.1c7.4-15.8,14.8-31.6,22.6-48.3 c7.9,17.1,15.3,33.2,22.7,49.3c0.3,0.6,0.3,1.2,0.6,2.2c-14.9,0-29.6,0-44.2,0C334,376.5,334.3,375.2,335.3,373.1z"}),r.a.createElement("path",{className:"st0",d:"M517.3,393.7c3.6,10.3,6.7,20.9,10,31.4c0.5,1.6,0.6,3.4,2.9,3.4c9.3,0,18.5,0,28.4,0 c-6.1-13.4-9.9-26.8-14.7-39.8c-3.7-10.1-8-19.9-20-24.3c1.1-0.7,1.4-0.9,1.7-1.1c15.3-5.8,28-23.8,24.3-44.6 c-3.3-19-18.7-32.6-38.8-33.3c-19-0.7-38-0.1-57-0.2c-2.8,0-3.2,1.3-3.2,3.7c0,45.3,0,90.6,0,136c0,2.8,0.8,3.8,3.7,3.8 c5.8-0.2,11.7-0.4,17.5,0c4.8,0.3,6.5-0.8,6.4-6.1c-0.4-15.7-0.2-31.3-0.1-47c0-1.8-0.8-3.8,2.5-4.2 C499.5,369.2,511.2,376.1,517.3,393.7z M481.4,350.2c-2.6,0.1-3-1.2-3-3.4c0.1-6.5,0-13,0-19.4c0-6.3,0-12.6,0-18.9 c0-1.5-0.3-3.2,2-3.1c7.9,0.3,16-1,23.8,0.8c12.2,2.7,18.9,11.8,18.1,24.3c-0.6,10.2-9.6,18.7-21.1,19.5 C494.7,350.4,488,350,481.4,350.2z"}),r.a.createElement("path",{className:"st0",d:"M310.7,486.7c0-2.8-0.9-3.8-3.7-3.7c-6.7,0.2-13.3,0.3-20,0c-3.9-0.2-4.6,1.3-4.6,4.8 c0.1,23.8,0.1,47.6,0.1,71.4c0,5.3-0.3,10.6-1.5,15.9c-3.5,15-14.2,25-28.3,26.3c-18.9,1.7-31.6-5.2-38.2-20.5 c-3.2-7.4-3.7-15.2-3.8-23c-0.1-23.3-0.1-46.6,0-69.9c0-4-1.2-5.1-5.1-4.9c-5.8,0.3-11.7,0.4-17.5,0c-4.1-0.3-5.5,1-5.5,5.2 c0.2,13.5,0.1,27,0.1,40.5c0.2,0,0.3,0,0.5,0c0,13.3-0.8,26.7,0.1,39.9c3,42.3,37.2,67.6,78.7,59c27.8-5.7,47.3-30.1,48.1-59.4 C311,541,310.6,513.9,310.7,486.7z"}),r.a.createElement("path",{className:"st0",d:"M101.2,385.4c-1.6-15.6-10.5-25.8-23.7-32.9c-10-5.4-20.9-8.5-31.2-13.2c-4.4-2-8.7-4.3-11.8-8.1 c-3.5-4.3-4.1-9-1.6-14c2.6-5.1,7.1-8,12.6-8.9c10.7-1.9,20.6,0.2,29,7.2c2.6,2.2,4.4,2.6,6.9-0.3c4.2-4.7,8.7-9.2,13.4-13.4 c3-2.6,2-4-0.5-5.9c-11.4-8.6-24-13.5-38.9-13.8c-14.1-1.3-27.5,2.3-39,11.6c-20.7,16.9-17.7,49.2,5.8,64.4 c8.5,5.5,17.9,8.7,27.2,12.2c6.2,2.4,12.5,4.7,17.7,9.1c7.1,6.1,6.8,15.9-0.8,21.4c-4.1,3-9,4.4-14.1,4.2 c-11.6-0.5-22.3-3.7-31.4-11.2c-2.3-1.9-3.5-1.3-5.3,0.6c-4.1,4.4-8.4,8.6-12.6,12.8c-4.6,4.6-4.6,4.7,0.7,8.6 c20.7,15.3,43.8,19.4,68.1,12.3C92.2,422,103.2,404.7,101.2,385.4z"}),r.a.createElement("path",{className:"st0",d:"M557.4,483.2c-15.8-0.3-31.7,0.1-47.5-0.2c-4.2-0.1-5.6,0.8-5.6,5.4c0.3,22.2,0.1,44.3,0.1,66.5 c0,22.3,0.1,44.6-0.1,67c0,3.7,0.7,5.4,4.8,5.1c6.1-0.4,12.3-0.3,18.5,0c3.6,0.2,4.9-0.8,4.8-4.7c-0.3-12.8,0-25.7-0.2-38.5 c0-3,0.8-4,3.9-4c8.7,0.1,17.3,0.3,26-0.5c26.4-2.5,46.4-28.1,42.4-54.3C601,500.6,581.9,483.6,557.4,483.2z M551.3,558.2 c-4.8,0.1-9.7-0.3-14.5,0.1c-4,0.3-4.7-1.3-4.5-4.8c0.2-7.5,0.1-15,0.1-22.5c0-7.8,0.1-15.7,0-23.5c0-2.5,0.6-3.6,3.3-3.5 c5.5,0.2,11-0.1,16.5,0.2c14.4,0.6,25.4,12.7,25.2,27.6C577.2,545.8,565.1,558,551.3,558.2z"}),r.a.createElement("path",{className:"st0",d:"M119.5,483.2c-16-0.3-32,0-48-0.2c-4.1-0.1-5.4,0.9-5.3,5.2c0.2,22.1,0.1,44.3,0.1,66.4 c0,22.6,0,45.3-0.1,67.9c0,3.1,0.6,4.5,4.1,4.4c6.5-0.3,13-0.3,19.5,0c3.6,0.1,4.5-1.2,4.5-4.6c-0.2-12.8,0-25.6-0.1-38.5 c0-3,0.9-4,4-4c8.5,0,17,0.3,25.5-0.5c28.2-2.7,48.4-30.3,42.3-57.9C160.9,499.1,142.3,483.6,119.5,483.2z M138.3,537.8 c-2.9,11.5-13.7,20.2-25.2,20.4c-5.2,0.1-10.3-0.1-15.5,0.1c-2.6,0.1-3.4-0.9-3.4-3.4c0.1-8,0-16,0-23.9c0-7.6,0-15.3,0-22.9 c0-1.5-0.8-3.9,1.9-3.8c9.8,0.4,19.9-2,29.3,3.3C135.9,513.5,141.3,525.8,138.3,537.8z"}),r.a.createElement("path",{className:"st0",d:"M674.4,288.6c0.1-2.6-0.7-3.5-3.4-3.5c-33.5,0.1-67,0.1-100.5,0c-2.7,0-3.4,0.9-3.4,3.5 c0.1,5.8,0.2,11.7,0,17.5c-0.1,3.1,1,4,4,3.9c9.8-0.2,19.7,0.3,29.5-0.2c5.3-0.3,6.3,1.5,6.2,6.4c-0.2,35.8-0.1,71.6-0.2,107.5 c0,3.6,0.7,5,4.7,4.8c6.5-0.3,13-0.3,19.5,0c3.6,0.2,4.4-1.1,4.4-4.5c-0.2-18.2-0.1-36.3-0.1-54.5c0-18.2,0.1-36.3-0.1-54.5 c-0.1-4.3,1.2-5.3,5.3-5.2c10,0.3,20,0,30,0.2c3,0,4.1-0.8,4-3.9C674.2,300.2,674.3,294.4,674.4,288.6z"})))},N=t(82),L=t.n(N),_=t(83),U=t.n(_),F=t(84),I=t.n(F);function K(){var e=Object(s.a)(["\n    font-smooth: always;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    overflow-y: none;\n    html {\n    box-sizing: border-box;\n    font-size: 1rem;\n\n    }\n    *, *:before, *:after {\n    box-sizing: inherit;\n    }\n    body {\n    min-height: 100vh;\n    overflow-x: hidden;\n    padding: 0;\n    margin: 0;\n    font-size: 1.2rem;\n    line-height: 2;\n    font-family: arial,sans-serif;\n    background: white;\n    }\n"]);return K=function(){return e},e}var P="375px",B="425px",A="768px",G="1024px",R="1440px",J="2560px",q={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(P,")"),mobileL:"(max-width: ".concat(B,")"),tablet:"(max-width: ".concat(A,")"),laptop:"(max-width: ".concat(G,")"),laptopL:"(max-width: ".concat(R,")"),desktop:"(max-width: ".concat(J,")"),desktopL:"(max-width: ".concat(J,")")},H={colors:{primary:"#2C95F1"},avatars:[L.a,I.a,U.a]},W=Object(d.b)(K()),X=t(188);function D(){var e=Object(s.a)(["\n  height: 40px;\n  width: 100%;\n  border: 1px solid blue;\n  background-color: "," !important;\n  color: white !important;\n  :disabled{\n      opacity: 0.8;\n  }\n"]);return D=function(){return e},e}function Q(){var e=Object(s.a)(["\n  background: #f9f9f9;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n\n  .logo-wrapper {\n    height: 100px;\n    width: 100%;\n    display: flex;\n    margin-bottom: 20px;\n    svg {\n      margin: auto;\n      height: inherit;\n    }\n  }\n  .login-wrapper {\n    margin-top: 100px;\n\n    width: 420px;\n\n    @media "," {\n      width: 300px;\n    }\n  }\n\n  .card {\n    padding: 20px;\n    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    background: white;\n  }\n\n  .form-wrapper {\n      padding-top: 20px;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 15px;\n  }\n"]);return Q=function(){return e},e}var V=d.c.div(Q(),q.mobileL),Y=Object(d.c)(X.a)(D(),(function(e){return e.theme.colors.primary})),Z=t(192);function $(){var e=Object(s.a)(["\nheight: 68px;\n  p {\n    margin-left: 0px;\n  }\n"]);return $=function(){return e},e}var ee=Object(d.c)(Z.a)($()),ne=function(e){var n=e.handleChange,t=e.size,a=e.value,c=e.name,i=e.onKeyUp,o=e.disabled,l=e.errorText,u=e.type,s=e.helperText,d=e.variant,p=e.error;return r.a.createElement(ee,{label:c,variant:d,size:t,id:"".concat(c,"TextField"),value:a,type:u,disabled:o,onKeyUp:i,onChange:n,error:p,helperText:l||(s||"")})};ne.defaultProps={handleChange:function(){return console.log("MaterialFormInputGroup has no prop of handleChange")},name:"name_of_input",disabled:!1,value:null,size:"small",error:!1,errorText:"",helperText:"",type:"text",variant:"standard"};var te=ne;function ae(){return!!localStorage.getItem("jwt")&&localStorage.getItem("jwt")}var re=t(126),ce=re.CancelToken.source(),ie=ae();re.defaults.headers.common.Authorization=ie||null,re.defaults.headers.common.cancelToken=ce.token,re.defaults.headers.post["Content-Type"]="application/json",re.defaults.headers.put["Content-Type"]="application/json",re.defaults.headers.patch["Content-Type"]="application/json";var oe=re.create({baseURL:"http://localhost:5000"}),le=function(){return{options:{Authorization:ae(),headers:{"Content-Type":"application/json"},cancelToken:ce.token}}},ue=function(e,n){try{localStorage.setItem(e,n)}catch(t){console.error("could not save token in loginUser")}},se=t(152),de=t(194);function pe(){var e=Object(s.a)(["\n  z-index: 10000 !important;\n  color: white;\n"]);return pe=function(){return e},e}var me=Object(d.c)(se.a)(pe());var fe=function(){return r.a.createElement(me,{open:!0},r.a.createElement(de.a,{color:"inherit"}))};function he(e){var n=e.history,t=Object(a.useContext)(S),c=t.errors,i=t.setErrors,o=Object(a.useContext)(w).setUser,l=Object(a.useState)("henderson.briggs@geeknet.net"),s=Object(u.a)(l,2),d=s[0],p=s[1],m=Object(a.useState)("23derd*334"),f=Object(u.a)(m,2),h=f[0],b=f[1],g=Object(a.useState)(!1),x=Object(u.a)(g,2),j=x[0],E=x[1],O=function(){E(!0),function(e){var n=e.email,t=e.password;return oe.post("/api/users/login",e).then((function(e){var a=e.data.token;return ue("jwt",a),ue("email",n),ue("password",t),Object(v.a)(a)})).catch((function(e){throw e}))}({email:d,password:h}).then((function(e){o(e),setTimeout((function(){E(!1),n.push("".concat("/account","?id=").concat(e._id))}),300)})).catch((function(e){throw i(e.response.data),E(!1),e}))};return r.a.createElement(r.a.Fragment,null,j?r.a.createElement(fe,null):"",r.a.createElement(V,null,r.a.createElement("div",{className:"login-wrapper"},r.a.createElement("div",{className:"logo-wrapper"},r.a.createElement(M,null)),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"form-wrapper"},r.a.createElement(te,{disabled:j,value:d,variant:"outlined",name:"Email",handleChange:function(e){return p(e.target.value)},errorText:c.email?c.email:"",error:!!c.email&&c.email}),r.a.createElement(te,{disabled:j,variant:"outlined",value:h,name:"Password",type:"password",handleChange:function(e){return b(e.target.value)},errorText:c.password?c.password:"",error:!!c.password&&c.password}),r.a.createElement(Y,{disabled:j,onClick:function(){return O()}},j?"Logging in":"Login"))))))}var be=function(e){return r.a.createElement(z,null,r.a.createElement(he,e))},ge=t(18),ve=t(58),xe=t.n(ve),je=t(88);var Ee=function(e){var n=Object(l.e)();Object(a.useEffect)((function(){var e=!0;return e&&t(),function(){return e=!1}}),[]);var t=function(){var e=Object(je.a)(xe.a.mark((function e(){var t,a;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:(t=e.sent)?(a=Object(v.a)(t))&&a._id:n.push("".concat("/login"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,e.children)},Oe=t(195),we=t(89),ye=t.n(we),Ce=t(197),ke=t(196);function Se(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-left: 12px;\n\n"]);return Se=function(){return e},e}function Te(){var e=Object(s.a)(["\n    margin: 0;\n    display: flex;\n    justify-content: space-between;\n"]);return Te=function(){return e},e}function ze(){var e=Object(s.a)(["\n    width: 500px;\n    height: 400px;\n    padding: 16px;\n\n    @media ","{\n      width: 80vw;\n    }\n\n\n"]);return ze=function(){return e},e}function Me(){var e=Object(s.a)(["\n  width: 50%;\n  text-transform: initial !important;\n"]);return Me=function(){return e},e}function Ne(){var e=Object(s.a)(["\n    width: 50px;\n    height: 50px;\n    position: relative;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-image: ",";\n    margin: auto;\n    cursor: pointer; \n    border-radius: 4px;\n    ","\n    ","\n\n  transition: 0.1s ease-in-out;\n    .overlay{\n      ","\n      border-radius: 4px;\n      width: inherit;\n      height: inherit;\n      position: absolute;\n      background: rgba(0, 0, 0, 0.2);\n    }\n"]);return Ne=function(){return e},e}function Le(){var e=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));\n  grid-row-gap: 8px;\n  grid-column-gap: 5px;\n\n  @media ","{\n    grid-row-gap: 5px;\n  grid-column-gap: 5px;\n    }\n"]);return Le=function(){return e},e}function _e(){var e=Object(s.a)(["\n  color: ",";\n"]);return _e=function(){return e},e}function Ue(){var e=Object(s.a)(["\n  display: block;\n  position: relative;\n  height: 100px;\n"]);return Ue=function(){return e},e}function Fe(){var e=Object(s.a)(["\n  width: 40px;\n  height: 40px;\n  position: absolute !important;\n  font-size: 22px;\n  bottom: 2px;\n  right: 5px;\n  z-index: 500;\n  background: white !important;\n  padding: 5px;\n"]);return Fe=function(){return e},e}function Ie(){var e=Object(s.a)(["\n  width: 100px;\n  height: 100px;\n  border-radius: 75px;\n  object-fit: cover;\n  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);\n  border: 4px solid white;\n"]);return Ie=function(){return e},e}function Ke(){var e=Object(s.a)(["\n  max-width: 400px;\n  margin: auto;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  background: white;\n  .avatar-and-name {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n\n  .user-fields {\n    width: 100%;\n    padding-top: 20px;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 10px;\n  }\n\n  @media ","{\n    max-width: 90vw;\n  }\n"]);return Ke=function(){return e},e}function Pe(){var e=Object(s.a)(["\n  padding-left: 10px;\n  color: green;\n"]);return Pe=function(){return e},e}function Be(){var e=Object(s.a)(["\n  padding-top: 10px;\n"]);return Be=function(){return e},e}function Ae(){var e=Object(s.a)(["\n  height: 100%;\n  padding-top: 40px;\n"]);return Ae=function(){return e},e}var Ge=d.c.div(Ae()),Re=d.c.div(Be()),Je=d.c.span(Pe()),qe=d.c.div(Ke(),q.mobileL),He=d.c.img(Ie()),We=Object(d.c)(Oe.a)(Fe()),Xe=d.c.div(Ue()),De=Object(d.c)(ye.a)(_e(),(function(e){return e.theme.colors.primary})),Qe=d.c.div(Le(),q.mobileL),Ve=d.c.div(Ne(),(function(e){return e.src?"url(".concat(e.src,")"):""}),(function(e){return e.isSelected&&"transform: scale(1.1);"}),(function(e){return e.isSelected&&"box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);"}),(function(e){return e.isSelected||e.showOverlay?"display: block;":"display: none;"})),Ye=Object(d.c)(X.a)(Me()),Ze=Object(d.c)(ke.a)(ze(),q.mobileL),$e=Object(d.c)(Ce.a)(Te()),en=d.c.div(Se()),nn=t(44),tn=t(155),an=t(203),rn=t(151),cn=t(150),on=t(153);function ln(){var e=Object(s.a)([""]);return ln=function(){return e},e}function un(){var e=Object(s.a)(["\n  height: 68px;\n  p {\n    margin-left: 0px;\n  }\n"]);return un=function(){return e},e}var sn=Object(d.c)(cn.a)(un()),dn=Object(d.c)(rn.a)(ln()),pn=function(e){var n,t=e.handleChange,a=e.size,c=e.value,i=e.name,o=e.onOptionSelected,l=e.options,u=e.disabled,s=e.errorText,d=e.type,p=e.helperText,m=e.variant,f=e.error,h=l.map((function(e,n){return r.a.createElement(an.a,{onClick:function(){return o()},value:e.value},r.a.createElement("em",null,e.label?e.label:e.value))}));return r.a.createElement(sn,{size:a,variant:m},r.a.createElement(tn.a,{id:"label".concat(i)},i),r.a.createElement(on.a,(n={labelId:"label".concat(i),id:"".concat(i,"SelectField"),value:c,onChange:t,disabled:u},Object(nn.a)(n,"value",c),Object(nn.a)(n,"type",d),Object(nn.a)(n,"error",f),n),h),s?r.a.createElement(dn,null,"errorText"):p?r.a.createElement(dn,null,p):"")};pn.defaultProps={onOptionSelected:function(){return console.log("MaterialFormInputGroup has no prop of onOptionSelected")},handleChange:function(){return console.log("MaterialFormInputGroup has no prop of handleChange")},name:"name_of_input",disabled:!1,value:null,size:"small",error:!1,errorText:"",helperText:"",type:"text",variant:"standard",options:[{label:"label",value:"value"}]};var mn=pn,fn=t(93),hn=t.n(fn),bn=t(199),gn=t(90),vn=t.n(gn),xn=t(91),jn=t(198);var En=function(){var e=Object(a.useContext)(w).user,n=Object(a.useState)({}),t=Object(u.a)(n,2),c=(t[0],t[1]),i=Object(a.useState)(!1),o=Object(u.a)(i,2),l=o[0],s=o[1],d=Object(a.useRef)(null),p=Object(a.useState)(""),m=Object(u.a)(p,2),f=m[0],h=m[1],b=Object(a.useState)(""),g=Object(u.a)(b,2),v=g[0],x=g[1],j=Object(a.useState)(!1),E=Object(u.a)(j,2),O=E[0],y=E[1];Object(a.useEffect)((function(){var n=!0;return n&&e._id&&C(n),function(){return n=!1}}),[e._id]);var C=function(n){var t;(t=e._id,oe.get("/api/users/picture/".concat(t)).then((function(e){return e})).catch((function(e){throw e}))).then((function(e){e.status>=200&&n&&h(e.data)})).catch((function(e){throw c(e.response.data),e}))},k=function(){var n;s(!0),(n={userid:e._id,picture:v},oe.patch("/api/users/picture",n,le()).then((function(e){return e})).catch((function(e){throw e}))).then((function(e){e.status>=200&&setTimeout((function(){C(!0),s(!1)}),500)})).catch((function(e){throw s(!1),e}))},S=H.avatars.map((function(e,n){return r.a.createElement(Ve,{isSelected:e===v,key:n,onClick:function(){return x(e)},src:e},r.a.createElement("div",{className:"overlay"}))}));return r.a.createElement(r.a.Fragment,null,l&&r.a.createElement(fe,null),r.a.createElement(jn.a,{onClose:function(){return y(!1)},open:O},r.a.createElement(en,null,r.a.createElement(bn.a,null,"Select or upload a picture"),r.a.createElement(Oe.a,{onClick:function(){return y(!1)}},r.a.createElement(hn.a,null))),r.a.createElement(Ze,null,r.a.createElement("input",{ref:d,hidden:!0,type:"file",onChange:function(e){return n=e,void new vn.a(n.target.files[0],{convertSize:150,success:function(e){Object(xn.a)(e,(function(e,n){x(n)}))},error:function(e){console.error(e.toString())}});var n}}),r.a.createElement(Qe,null,r.a.createElement(Ve,{onClick:function(){return d.current.click()},src:H.avatars.includes(v)?"":v,showOverlay:!0},r.a.createElement(Oe.a,null,r.a.createElement(De,null))),S)),r.a.createElement($e,null,r.a.createElement(Ye,{onClick:function(){return y(!1)}},"Cancel"),r.a.createElement(Ye,{disabled:!v||l,onClick:function(){return k()}},"Save chang",l?"ing":"es"))),r.a.createElement(Xe,null,r.a.createElement(He,{src:f}),r.a.createElement(We,{onClick:function(){return y(!0)}},r.a.createElement(De,null))))},On=t(94),wn=t(202);function yn(){var e=Object(s.a)(["\n  color: white !important;\n  min-width: 150px !important;\n  background: "," !important;\n\n  @media "," {\n    width: 90%;\n  }\n"]);return yn=function(){return e},e}function Cn(){var e=Object(s.a)(["\n  padding: 0px;\n  bottom: 0px;\n  left: 0px;\n\n  .MuiSnackbarContent-root {\n    width: 100%;\n    padding: 0px;\n    bottom: 0px;\n    left: 0px;\n  }\n\n  .MuiSnackbarContent-action {\n    margin-right: 0px;\n    padding-left: 0px;\n    margin-left: 0px;\n    width: 100%;\n    padding: 15px;\n  }\n\n  @media "," {\n    padding: 10px;\n  }\n"]);return Cn=function(){return e},e}function kn(){var e=Object(s.a)(["\n  position: relative;\n  height: 40px;\n  display: flex;\n  justify-content: flex-end;\n\n  .message-cta-wrapper {\n    padding-right: 20px;\n    padding-left: 20px;\n    width: inherit;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    height: inherit;\n\n    .message {\n      padding-right: 20px;\n      text-align: left;\n      color: white;\n      font-size: 16px;\n    }\n\n    @media "," {\n      flex-direction: column;\n      padding: 0px;\n\n      .message {\n        font-size: 13px;\n        padding-right: 0px;\n      }\n\n      width: 100%;\n    }\n  }\n\n  @media "," {\n    height: 70px;\n\n    width: 100%;\n  }\n"]);return kn=function(){return e},e}var Sn=d.c.div(kn(),q.mobileL,q.mobileL),Tn=Object(d.c)(wn.a)(Cn(),q.mobileL),zn=Object(d.c)(X.a)(yn(),(function(e){return e.theme.colors.primary}),q.mobileL);function Mn(e){var n=e.open,t=e.setOpen,a=(e.severity,e.submitText),c=e.submittingText,i=e.submitting,o=e.message,l=e.callback,u=e.position,s=u.horizontal,d=u.vertical;return r.a.createElement(Tn,{anchorOrigin:{vertical:d,horizontal:s},open:n,key:d+s,onClose:function(e,n){"clickaway"!==n&&t(!1)},action:r.a.createElement(Sn,{submitting:i},r.a.createElement("div",{className:"message-cta-wrapper"},r.a.createElement("div",{className:"message"},i?c:o),!i&&r.a.createElement(zn,{onClick:function(){return l()}},a," ")))})}Mn.defaultProps={open:!1,message:"this is message",submitText:"Submit",submittingText:"Submitting",submitting:!1,callback:function(){return console.log("no property called callback has been passed down to MaterialSnackbarSubmit.js")},position:{vertical:"bottom",horizontal:"right"}};var Nn=Mn;function Ln(){var e=Object(a.useContext)(S),n=e.errors,t=e.setErrors,c=Object(a.useContext)(w),i=c.user,o=c.setUser,l=Object(a.useState)(!1),s=Object(u.a)(l,2),d=s[0],p=s[1],m=Object(a.useState)(E),f=Object(u.a)(m,2),h=f[0],b=f[1],g=Object(a.useState)(!1),x=Object(u.a)(g,2),j=x[0],O=x[1];Object(a.useEffect)((function(){var e=!0;return e&&i._id&&b(i),function(){return e=!1}}),[i._id]);var y=function(e,n){var t=Object(On.isEqual)(e,n);O(!t)},C=function(){var e;p(!0),(e=h,oe.post("/api/users",e,le()).then((function(e){var n=e.data.token;ue("jwt",n);var t=Object(v.a)(n);return ue("email",t.email),t})).catch((function(e){throw e}))).then((function(e){setTimeout((function(){o(e),p(!1),O(!1)}),500)})).catch((function(e){p(!1),t(e.response.data)}))};return r.a.createElement(r.a.Fragment,null,d?r.a.createElement(fe,null):null,r.a.createElement(Ge,null,r.a.createElement(qe,null,r.a.createElement(En,{userid:i._id,currentPicture:i.picture}),r.a.createElement(Re,null,r.a.createElement("b",null,"Balance:"),r.a.createElement(Je,null,h.balance)),r.a.createElement("div",{className:"user-fields"},r.a.createElement(te,{name:"First name",value:h.name.first,onKeyUp:function(){return y(i,h)},handleChange:function(e){return b(Object(ge.a)(Object(ge.a)({},h),{},{name:{first:e.target.value,last:h.name.last}}))},error:!!n.first,errorText:n.first?n.first:""}),r.a.createElement(te,{name:"Last name",value:h.name.last,onKeyUp:function(){return y(i,h)},handleChange:function(e){return b(Object(ge.a)(Object(ge.a)({},h),{},{name:{last:e.target.value,first:h.name.first}}))},error:!!n.last,errorText:n.last?n.last:""}),r.a.createElement(te,{name:"Age",value:h.age,type:"number",onKeyUp:function(){return y(i,h)},handleChange:function(e){return b(Object(ge.a)(Object(ge.a)({},h),{},{age:Number(e.target.value)}))},error:!!n.age,errorText:n.age?n.age:""}),r.a.createElement(mn,{name:"Eye Color",value:h.eyeColor,options:[{value:"blue",label:"Blue"},{value:"brown",label:"Brown"},{value:"green",label:"Green"}],onOptionSelected:function(){return y(i,h)},handleChange:function(e){return b(Object(ge.a)(Object(ge.a)({},h),{},{eyeColor:e.target.value}))},error:!!n.age,errorText:n.age?n.age:""}),r.a.createElement(te,{name:"Company",value:h.company,onKeyUp:function(){return y(i,h)},handleChange:function(e){return b(Object(ge.a)(Object(ge.a)({},h),{},{company:e.target.value}))},error:!!n.company,errorText:n.company?n.company:""}),r.a.createElement(te,{name:"Email",value:h.email,onKeyUp:function(){return y(i,h)},handleChange:function(e){return b(Object(ge.a)(Object(ge.a)({},h),{},{email:e.target.value}))},error:!!n.email,errorText:n.email?n.email:""}),r.a.createElement(te,{name:"Phone",value:h.phone,onKeyUp:function(){return y(i,h)},handleChange:function(e){return b(Object(ge.a)(Object(ge.a)({},h),{},{phone:e.target.value}))},error:!!n.phone,errorText:n.phone?n.phone:""}),r.a.createElement(te,{name:"Address",value:h.address,onKeyUp:function(){return y(i,h)},handleChange:function(e){return b(Object(ge.a)(Object(ge.a)({},h),{},{address:e.target.value}))},error:!!n.address,errorText:n.address?n.address:""})))),!d&&r.a.createElement(Nn,{message:"Would you want to save your changes?",submitText:"Save",submittingText:"Saving please wait...",submitting:d,callback:function(){return C()},setOpen:O,open:j}))}var _n=function(e){return r.a.createElement(Ee,e,r.a.createElement(Ln,e))};function Un(){var e=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n"]);return Un=function(){return e},e}function Fn(){var e=Object(s.a)(["\n  min-height: 100vh;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  background: #f9f9f9;\n\n"]);return Fn=function(){return e},e}var In=d.c.div(Fn()),Kn=d.c.div(Un()),Pn=t(200),Bn=t(201),An=t(95),Gn=t.n(An),Rn=t(96);function Jn(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return Jn=function(){return e},e}function qn(){var e=Object(s.a)([""]);return qn=function(){return e},e}function Hn(){var e=Object(s.a)(["\n    background: "," !important;\n"]);return Hn=function(){return e},e}var Wn=Object(d.c)(Pn.a)(Hn(),(function(e){return e.theme.colors.primary})),Xn=d.c.div(qn()),Dn=Object(d.c)(Bn.a)(Jn());var Qn=function(e){var n=e.title,t=Object(a.useContext)(w).handleSignOut,c=r.a.useState(null),i=Object(u.a)(c,2),o=i[0],l=i[1];return r.a.createElement(Wn,{position:"static"},r.a.createElement(Dn,null,r.a.createElement("div",null),n?r.a.createElement(Xn,null,n):null,r.a.createElement(Oe.a,{onClick:function(e){l(e.currentTarget)},edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(Gn.a,null))),r.a.createElement(Rn.a,{id:"menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){l(null)}},r.a.createElement(an.a,{onClick:function(){return l(null),void t()}},"Logout")))},Vn=function(e){var n=e.children,t=e.title;return r.a.createElement(T,e,r.a.createElement(In,null,r.a.createElement(Qn,{title:t}),r.a.createElement(Kn,null,n)))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{theme:H},r.a.createElement(W,null),r.a.createElement(o.a,null,r.a.createElement(l.a,{exact:!0,path:"/",component:be}),r.a.createElement(l.a,{exact:!0,path:"/login",render:function(e){return r.a.createElement(be,e)}}),r.a.createElement(l.a,{exact:!0,path:"/account",render:function(e){return r.a.createElement(Vn,Object.assign({title:"Account"},e),r.a.createElement(_n,e))}})))),document.getElementById("root"))},82:function(e,n,t){e.exports=t.p+"static/media/blue-avatar.fc5ad432.svg"},83:function(e,n,t){e.exports=t.p+"static/media/purple-avatar.f74fbb5c.svg"},84:function(e,n,t){e.exports=t.p+"static/media/orange-avatar.1b10c6ef.svg"}},[[118,1,2]]]);
//# sourceMappingURL=main.8b449216.chunk.js.map