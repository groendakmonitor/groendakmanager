(this.webpackJsonpgroendakmanager=this.webpackJsonpgroendakmanager||[]).push([[0],{21:function(e,t,n){},23:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(16),s=n.n(a),i=(n(21),n(3)),r=function(){return localStorage.getItem("token")},l=function(){return["x-auth-token",r()]},d=n(7),j=n.p+"static/media/groendak.8ad2a181.jpg",b=n(0),u=function(){var e=Object(d.a)(),t=Object(i.a)(e,2),n=(t[0],t[1]),o=Object(c.useState)("safehouse ominous overdrive"),a=Object(i.a)(o,2),s=a[0],r=a[1];return Object(b.jsx)("div",{className:"container d-flex justify-content-center align-items-center vh-100",children:Object(b.jsx)("div",{className:"col col-md-4 user-form py-4 d-flex flex-column",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{src:j,className:"card-img-top",alt:"Welcome"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h3",{className:"text-center",children:"Log in to groendakmonitor"}),Object(b.jsx)("form",{children:Object(b.jsx)("div",{className:"mt-5",children:Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{className:"form-label text-start w-100",children:["Password",Object(b.jsx)("input",{type:"password",className:"form-control mt-2",onChange:function(e){r(e.currentTarget.value)},value:s})]})})})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("button",{className:"w-100 btn btn-success",onClick:function(){fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/groendakmanager",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://chatter-somber-scallion.glitch.me",REACT_APP_GMAPS_API:"AIzaSyBMtoh9P3UkoxbXndKu_HOP7KsVwTRvxGU"}).REACT_APP__API_URL,"/login"),{method:"post",headers:[["Content-Type","application/json"]],body:JSON.stringify({password:s})}).then((function(e){401===e.status?console.warn("WRONG PW"):e.text().then((function(e){var t;t=e,localStorage.setItem("token",t),n("/")}))}))},children:"Login"})})]})]})})})},h=function(e){var t=e.title,n=e.children;return Object(b.jsx)("div",{className:"page-header page-header-light",children:Object(b.jsxs)("div",{className:"page-header-content container header-elements-inline",children:[Object(b.jsx)("div",{className:"page-title d-flex",children:Object(b.jsx)("h2",{className:"font-weight-semibold ml-2",children:t})}),Object(b.jsx)("div",{className:"header-elements",children:n})]})})},O=function(e){var t=e.children;return Object(b.jsx)("div",{className:"page-content",children:Object(b.jsx)("div",{className:"content-wrapper",children:t})})},m=function(){return Object(b.jsxs)("div",{className:"d-flex justify-content-between m-3",children:[Object(b.jsx)("strong",{children:"Loading..."}),Object(b.jsx)("div",{className:"spinner-border ms-auto text-info",role:"status","aria-hidden":"true"})]})},_=n(8),p=n(5),x=function(e){var t=e.data,n=e.onUpdateCustomer,o=e.onDeleteCustomer,a=Object(c.useState)(t),s=Object(i.a)(a,2),r=s[0],l=s[1];Object(c.useEffect)((function(){l(t)}),[t]);var d=function(e){l(Object(p.a)(Object(p.a)({},r),{},Object(_.a)({},e.currentTarget.name,e.currentTarget.value)))},j=Object(c.useRef)(null),u=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e,n=t.location?g(t.location):{lat:51.99954706308361,lng:4.363697780523488};e=new google.maps.Map(j.current,{center:n,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1,zoom:11});var c=new google.maps.Marker({map:e,title:"LOCATION",position:e.getCenter()});e.addListener("center_changed",(function(){l((function(t){return Object(p.a)(Object(p.a)({},t),{},{location:"".concat(e.getCenter().lat(),",").concat(e.getCenter().lng())})})),c.setPosition(e.getCenter())}));var o=u.current,a=new google.maps.places.SearchBox(o);e.controls[google.maps.ControlPosition.TOP_LEFT].push(o),e.addListener("bounds_changed",(function(){a.setBounds(e.getBounds())})),a.addListener("places_changed",(function(){var t=a.getPlaces();if(0!==t.length){var n=new google.maps.LatLngBounds;t.forEach((function(e){e.geometry?e.geometry.viewport?n.union(e.geometry.viewport):n.extend(e.geometry.location):console.log("Returned place contains no geometry")})),e.fitBounds(n)}}))}),[t.location]),Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("fieldset",{children:[Object(b.jsxs)("legend",{className:"text-uppercase font-size-sm font-weight-bold d-flex justify-content-between",children:[Object(b.jsx)("span",{className:"d-block",children:"Customer details"}),Object(b.jsxs)("span",{className:"d-block badge badge-info",children:["ID: ",t.id]})]}),Object(b.jsxs)("div",{className:"form-group row",children:[Object(b.jsx)("label",{className:"col-form-label col-lg-3",children:"Name"}),Object(b.jsx)("div",{className:"col-lg-9",children:Object(b.jsx)("div",{className:"input-group",children:Object(b.jsx)("input",{type:"text",className:"form-control",value:r.name,onChange:d,name:"name",placeholder:"name"})})})]}),Object(b.jsxs)("div",{className:"form-group row",children:[Object(b.jsx)("label",{className:"col-form-label col-lg-3",children:"Roof size"}),Object(b.jsx)("div",{className:"col-lg-9",children:Object(b.jsxs)("div",{className:"input-group",children:[Object(b.jsx)("input",{type:"number",min:"0",className:"form-control",value:r.roof_size,onChange:d,name:"roof_size",placeholder:"roof size"}),Object(b.jsx)("span",{className:"input-group-append",children:Object(b.jsx)("span",{className:"input-group-text",children:"m2"})})]})})]}),Object(b.jsxs)("div",{className:"form-group row",children:[Object(b.jsx)("label",{className:"col-form-label col-lg-3",children:"Roof thickness"}),Object(b.jsx)("div",{className:"col-lg-9",children:Object(b.jsxs)("div",{className:"input-group",children:[Object(b.jsx)("input",{type:"number",min:"0",className:"form-control",value:r.roof_thickness,onChange:d,name:"roof_thickness",placeholder:"roof thickness"}),Object(b.jsx)("span",{className:"input-group-append",children:Object(b.jsx)("span",{className:"input-group-text",children:"cm"})})]})})]}),Object(b.jsxs)("div",{className:"form-group row",children:[Object(b.jsx)("label",{className:"col-form-label col-lg-3",children:"Location"}),Object(b.jsx)("div",{className:"col-lg-9",children:Object(b.jsxs)("div",{className:"input-group",children:[Object(b.jsx)("input",{type:"text",className:"form-control",ref:u}),Object(b.jsx)("div",{ref:j,style:{width:"100%",height:200}})]})})]})]})}),Object(b.jsxs)("div",{className:"card-footer d-flex justify-content-between",children:[Object(b.jsx)("button",{type:"submit",className:"btn btn-light",onClick:function(){o()},children:"Delete"}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"button",className:"ml-2 btn btn-primary",onClick:function(){n(r)},children:"Save"})})]})]})},g=function(e){var t=e.split(",").map((function(e){return Number(e)})),n=Object(i.a)(t,2);return{lat:n[0],lng:n[1]}},f=function(e){var t=e.data,n=e.selected,c=e.onClick,o=t.last_water?new Date(t.last_water).toLocaleString():"-";return Object(b.jsxs)("tr",{onClick:function(){return c(t)},className:n?"selected":"",children:[Object(b.jsx)("td",{children:Object(b.jsxs)("span",{className:"d-block badge badge-info",children:["ID: ",t.id]})}),Object(b.jsx)("td",{children:t.name}),Object(b.jsx)("td",{children:o})]})},P=(n(23),function(e){var t=e.data,n=e.selectedCustomer,c=e.onCustomerSelect;return Object(b.jsxs)("table",{className:"table table-striped table-hover customer-list",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",style:{width:32},children:"#"}),Object(b.jsx)("th",{scope:"col",children:"Name"}),Object(b.jsx)("th",{scope:"col",children:"Last data"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsx)(f,{data:e,onClick:c,selected:n===e},e.id)}))})]})}),A=function(e){var t=e.data,n=new Date(t.date).toLocaleString();return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:n}),Object(b.jsx)("td",{children:t.incoming}),Object(b.jsx)("td",{children:t.outgoing})]})},S=n(14),T=n(15),v=function(e){var t=e.data,n=e.onAddWater,o=Object(c.useState)({incoming:0,outgoing:0}),a=Object(i.a)(o,2),s=a[0],r=a[1],l=function(e){r((function(t){return Object(p.a)(Object(p.a)({},t),{},Object(_.a)({},e.target.name,e.target.value))}))};return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("table",{className:"table table-striped table-hover",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",style:{width:46},children:"Date"}),Object(b.jsx)("th",{scope:"col",children:"Incoming"}),Object(b.jsx)("th",{scope:"col",children:"Outgoing"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsx)(A,{data:e},e.id)}))})]})}),Object(b.jsxs)("div",{className:"card-footer d-flex justify-content-between",children:[Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsxs)("div",{className:"col-6",children:[Object(b.jsx)("label",{className:"form-label",children:"Incoming"}),Object(b.jsxs)("div",{className:"input-group",children:[Object(b.jsx)("input",{type:"number",className:"form-control",name:"incoming",value:s.incoming,onChange:l,placeholder:"Incoming"}),Object(b.jsx)("span",{className:"input-group-append",children:Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){r((function(e){return Object(p.a)(Object(p.a)({},e),{},{incoming:5*Math.random()})}))},children:Object(b.jsx)(S.a,{icon:T.a})})})]})]}),Object(b.jsxs)("div",{className:"col-6",children:[Object(b.jsx)("label",{className:"form-label",children:"Outgoing"}),Object(b.jsxs)("div",{className:"input-group",children:[Object(b.jsx)("input",{type:"number",className:"form-control",name:"outgoing",value:s.outgoing,onChange:l,placeholder:"Outgoing"}),Object(b.jsx)("span",{className:"input-group-append",children:Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){r((function(e){return Object(p.a)(Object(p.a)({},e),{},{outgoing:4*Math.random()+e.incoming})}))},children:Object(b.jsx)(S.a,{icon:T.a})})})]})]})]}),Object(b.jsx)("div",{className:"d-flex align-items-end",children:Object(b.jsx)("button",{type:"button",className:"ml-2 btn btn-primary",onClick:function(){n(s.incoming,s.outgoing)},children:"Add"})})]})]})},C=n(38),N=(n(29),function(e){var t=e.data,n=e.onChange,c=e.onDelete,o=Object(C.a)((function(e){n(Object(p.a)(Object(p.a)({},t),{},{text:e}))}),500);return Object(b.jsxs)("tr",{className:"update-row",children:[Object(b.jsx)("td",{children:Object(b.jsx)("span",{className:"d-block",children:Object(b.jsx)("input",{type:"checkbox",defaultChecked:t.enabled,onChange:function(e){return n(Object(p.a)(Object(p.a)({},t),{},{enabled:e.target.checked}))}})})}),Object(b.jsx)("td",{className:"col-text",children:Object(b.jsx)("textarea",{onChange:function(e){return o(e.target.value)},defaultValue:t.text,cols:3})}),Object(b.jsx)("td",{className:"col-delete",children:Object(b.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(){return c(t.id)},children:"\ud83d\uddd1\ufe0f"})})]})}),E=function(e){var t=e.data,n=e.children,c=e.onDelete,o=e.onChange;return Object(b.jsxs)("table",{className:"table table-striped table-hover customer-list",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",style:{width:32},children:"Active"}),Object(b.jsx)("th",{scope:"col",children:"Text"}),Object(b.jsx)("th",{scope:"col"})]})}),Object(b.jsxs)("tbody",{children:[n,t.map((function(e){return Object(b.jsx)(N,{data:e,onChange:o,onDelete:c},e.id)}))]})]})},R=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/groendakmanager",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://chatter-somber-scallion.glitch.me",REACT_APP_GMAPS_API:"AIzaSyBMtoh9P3UkoxbXndKu_HOP7KsVwTRvxGU"}).REACT_APP__API_URL,"/updates"),{method:"get",headers:[["Content-Type","application/json"]]}).then((function(e){return e.json()})).then((function(e){o(e)}))}),[]);return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header d-flex justify-content-between",children:Object(b.jsx)("h3",{children:"Updates"})}),Object(b.jsx)("div",{className:"card-body p-0",children:n&&Object(b.jsx)(E,{data:n,onDelete:function(e){confirm("Are you sure?")&&fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/groendakmanager",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://chatter-somber-scallion.glitch.me",REACT_APP_GMAPS_API:"AIzaSyBMtoh9P3UkoxbXndKu_HOP7KsVwTRvxGU"}).REACT_APP__API_URL,"/update/").concat(e),{method:"delete",headers:[["Content-Type","application/json"],l()]}).then((function(e){return e.json()})).then((function(e){o(e)}))},onChange:function(e){fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/groendakmanager",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://chatter-somber-scallion.glitch.me",REACT_APP_GMAPS_API:"AIzaSyBMtoh9P3UkoxbXndKu_HOP7KsVwTRvxGU"}).REACT_APP__API_URL,"/update"),{method:"put",headers:[["Content-Type","application/json"],l()],body:JSON.stringify(e)})}})}),Object(b.jsx)("div",{className:"card-footer",children:Object(b.jsx)("button",{type:"button",className:"btn btn-success px-3 float-right mr-2",onClick:function(){fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/groendakmanager",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://chatter-somber-scallion.glitch.me",REACT_APP_GMAPS_API:"AIzaSyBMtoh9P3UkoxbXndKu_HOP7KsVwTRvxGU"}).REACT_APP__API_URL,"/update"),{method:"post",headers:[["Content-Type","application/json"],l()]}).then((function(e){return e.json()})).then((function(e){o(e)}))},children:"Add"})})]})},y=function(){var e=Object(d.a)(),t=Object(i.a)(e,2),n=(t[0],t[1]),o=Object(c.useState)(),a=Object(i.a)(o,2),s=a[0],j=a[1],u=Object(c.useState)(),_=Object(i.a)(u,2),p=_[0],g=_[1],f=Object(c.useState)(!1),A=Object(i.a)(f,2),S=A[0],T=A[1],C=Object(c.useState)(),N=Object(i.a)(C,2),E=N[0],y=N[1];Object(c.useEffect)((function(){r()?(T(!0),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/groendakmanager",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://chatter-somber-scallion.glitch.me",REACT_APP_GMAPS_API:"AIzaSyBMtoh9P3UkoxbXndKu_HOP7KsVwTRvxGU"}).REACT_APP__API_URL,"/customers"),{method:"get",headers:[["Content-Type","application/json"],l()]}).then((function(e){return e.json()})).then((function(e){!1===e.auth?n("/login"):j(e),T(!1)})).catch((function(e){}))):n("/login")}),[n]);Object(c.useEffect)((function(){p&&fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/groendakmanager",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://chatter-somber-scallion.glitch.me",REACT_APP_GMAPS_API:"AIzaSyBMtoh9P3UkoxbXndKu_HOP7KsVwTRvxGU"}).REACT_APP__API_URL,"/water/").concat(p.id),{method:"get",headers:[["Content-Type","application/json"],l()]}).then((function(e){return e.json()})).then((function(e){y(e)}))}),[p]);return Object(b.jsxs)(O,{children:[Object(b.jsx)(h,{title:"Customers",children:Object(b.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(){var e=prompt("Enter customer name");e&&(T(!0),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/groendakmanager",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://chatter-somber-scallion.glitch.me",REACT_APP_GMAPS_API:"AIzaSyBMtoh9P3UkoxbXndKu_HOP7KsVwTRvxGU"}).REACT_APP__API_URL,"/customer"),{method:"post",headers:[["Content-Type","application/json"],l()],body:JSON.stringify({name:e})}).then((function(e){return e.json()})).then((function(e){j(e),T(!1)})))},children:"Add customer"})}),Object(b.jsx)("div",{className:"container mt-4",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header d-flex justify-content-between",children:Object(b.jsx)("h3",{children:"Customers"})}),Object(b.jsxs)("div",{className:"card-body p-0",children:[S&&Object(b.jsx)(m,{}),s&&Object(b.jsx)(P,{data:s,onCustomerSelect:g,selectedCustomer:p})]})]}),Object(b.jsx)(R,{})]}),Object(b.jsxs)("div",{className:"col",children:[p&&Object(b.jsx)(x,{data:p,onUpdateCustomer:function(e){T(!0),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/groendakmanager",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://chatter-somber-scallion.glitch.me",REACT_APP_GMAPS_API:"AIzaSyBMtoh9P3UkoxbXndKu_HOP7KsVwTRvxGU"}).REACT_APP__API_URL,"/customer"),{method:"put",headers:[["Content-Type","application/json"],l()],body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){j(e),T(!1)}))},onDeleteCustomer:function(){p&&confirm('Are you sure you want to delete customer "'.concat(p.name,'" (id: ').concat(p.id,") with ").concat(null===E||void 0===E?void 0:E.length," water data points"))&&console.log("go!")}}),E&&Object(b.jsx)(v,{data:E,onAddWater:function(e,t){p&&fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/groendakmanager",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://chatter-somber-scallion.glitch.me",REACT_APP_GMAPS_API:"AIzaSyBMtoh9P3UkoxbXndKu_HOP7KsVwTRvxGU"}).REACT_APP__API_URL,"/water"),{method:"post",headers:[["Content-Type","application/json"],l()],body:JSON.stringify({id:p.id,in:e,out:t})}).then((function(){p&&fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/groendakmanager",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://chatter-somber-scallion.glitch.me",REACT_APP_GMAPS_API:"AIzaSyBMtoh9P3UkoxbXndKu_HOP7KsVwTRvxGU"}).REACT_APP__API_URL,"/water/").concat(p.id),{method:"get",headers:[["Content-Type","application/json"],l()]}).then((function(e){return e.json()})).then((function(e){y(e)}))}))}})]})]})})]})},U=n(11);n(30);var I=function(){return Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)(U.b,{children:[Object(b.jsx)(U.a,{path:"/login",children:Object(b.jsx)(u,{})}),Object(b.jsx)(U.a,{children:Object(b.jsx)(y,{})})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),a(e),s(e)}))};n(31),n(32),n(33),n(34),n(35);s.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),L()}},[[36,1,2]]]);
//# sourceMappingURL=main.905ac7b0.chunk.js.map