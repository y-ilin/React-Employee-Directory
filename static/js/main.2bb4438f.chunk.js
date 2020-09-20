(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{22:function(e){e.exports=JSON.parse('[{"id":"59a73cef-6d42-4603-91f9-780533d919ea","photo":"https://randomuser.me/api/portraits/med/women/19.jpg","name":"Ellen May","location":"Melbourne","role":"CEO","email":"ellenmay@gmail.com","phoneNumber":"0401478677"},{"id":"70c8079f-9847-420c-816c-8e3b9eae4f3a","photo":"https://randomuser.me/api/portraits/med/men/19.jpg","name":"Jon Castillo","location":"Melbourne","role":"A","email":"joncastillo@gmail.com","phoneNumber":"0405660144"},{"id":"d19a5b32-8b7b-4ffb-89de-2419d2f55d1c","photo":"https://randomuser.me/api/portraits/med/men/71.jpg","name":"Felipe Iglesias","location":"Sydney","role":"Z","email":"felipeiglesias@gmail.com","phoneNumber":"0407196603"},{"id":"7949c017-3e18-43d4-b20a-7c96554f64b4","photo":"https://randomuser.me/api/portraits/med/men/86.jpg","name":"Meinhard Markus","location":"Sydney","role":"CEO","email":"meinhardmarkus@gmail.com","phoneNumber":"0407459626"},{"id":"480e63ce-e967-4cb7-ae6d-454b67245797","photo":"https://randomuser.me/api/portraits/med/women/16.jpg","name":"Karla Kristensen","location":"Melbourne","role":"Developer","email":"karlakristensen@gmail.com","phoneNumber":"0406910682"},{"id":"a38bcfc4-0d2d-4f3d-9eac-090f83c5e605","photo":"https://randomuser.me/api/portraits/med/men/79.jpg","name":"Tuncay Van der Tuin","location":"Sydney","role":"Developer","email":"tuncayvandertuin@gmail.com","phoneNumber":"0407071961"},{"id":"c69b1941-0e1b-4608-96ac-902600182767","photo":"https://randomuser.me/api/portraits/med/women/89.jpg","name":"Sonia Rojas","location":"Melbourne","role":"Designer","email":"soniarojas@gmail.com","phoneNumber":"0406521497"},{"id":"f30b8a12-5f03-4d84-bba7-1a5893945015","photo":"https://randomuser.me/api/portraits/med/women/65.jpg","name":"Anna Lewis","location":"Canberra","role":"Developer","email":"annalewis@gmail.com","phoneNumber":"0405294928"},{"id":"510507ce-0664-4574-90e1-2d17691935af","photo":"https://randomuser.me/api/portraits/med/men/25.jpg","name":"Jon Patterson","location":"Brisbane","role":"Manager","email":"jonpatterson@gmail.com","phoneNumber":"0403624176"},{"id":"7b95f17b-47bd-4a22-a8be-8fdf2b5341a9","photo":"https://randomuser.me/api/portraits/med/women/45.jpg","name":"Emma Carrasco","location":"Melbourne","role":"Developer","email":"emmacarrasco@gmail.com","phoneNumber":"0401296043"}]')},27:function(e,a,t){e.exports=t(43)},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(12),l=t.n(r),m=(t(32),t(21)),i=(t(33),t(22));t(34);var c=function(e){return o.a.createElement("div",{className:"pageHeader"},o.a.createElement("h1",null,"Employee Directory"))};t(35),t(36);var u=function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("img",{src:e.photo,alt:"employee photo"})),o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.location),o.a.createElement("td",null,e.role),o.a.createElement("td",null,e.email),o.a.createElement("td",null,e.phoneNumber))};var p=function(e){return o.a.createElement("table",{className:"employeeTable"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null),o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Location"),o.a.createElement("th",null,"Role"),o.a.createElement("th",null,"Email"),o.a.createElement("th",null,"Phone Number"))),o.a.createElement("tbody",null,e.employees.map((function(e){return o.a.createElement(u,{key:e.id,photo:e.photo,name:e.name,location:e.location,role:e.role,email:e.email,phoneNumber:e.phoneNumber})}))))};t(37);var s=function(e){return o.a.createElement("form",null,o.a.createElement("input",{value:e.value,onChange:e.handleInputChange,name:"searchInput",type:"text",placeholder:"Search by name",id:"searchInput"}))},d=(t(38),t(24)),h=t(9);var b=function(e){return o.a.createElement(d.a,{id:"dropdown-basic-button",title:"Sort by"},o.a.createElement(h.a.Item,{onClick:e.handleSortBtn},"Name"),o.a.createElement(h.a.Item,{onClick:e.handleSortBtn},"Location"),o.a.createElement(h.a.Item,{onClick:e.handleSortBtn},"Role"))},f=t(26),E=function(e,a){return a.filter((function(a){return a.name.toLowerCase().includes(e)}))},g=function(e,a){return Object(f.a)(e).sort((function(e,t){return e[a]>t[a]?1:-1}))};var y=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),u=Object(m.a)(l,2),d=u[0],h=u[1],f=Object(n.useState)(i),y=Object(m.a)(f,2),j=y[0],v=y[1];return Object(n.useEffect)((function(){var e=g(i,t.toLowerCase()),a=function(e,a){return E(e,a)}(d,e);v(a)}),[t,d]),o.a.createElement("div",{className:"wrapper"},o.a.createElement(c,null),o.a.createElement("div",{className:"filterSortDiv"},o.a.createElement(s,{handleInputChange:function(e){h(e.target.value)},value:d}),o.a.createElement(b,{handleSortBtn:function(e){r(e.target.innerHTML)}})),o.a.createElement(p,{employees:j}))};t(42);l.a.render(o.a.createElement(y,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.2bb4438f.chunk.js.map