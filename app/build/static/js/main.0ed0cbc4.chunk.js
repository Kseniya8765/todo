(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,,,,,,,function(A,e,t){},function(A,e,t){},function(A,e,t){},,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){"use strict";t.r(e);var c=t(5),n=t.n(c),a=t(3),i=t(2),s=(t(14),t(15),t(16),t(1)),r=Object(s.createContext)(),j=t(0),l=function(A){var e=A.id,t=Object(s.useContext)(r).deleteTask;return Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBzVTRDYIwEL22/ssIjqAb4ATiBGpcQDfQDRxAEzZQJ4ANdAMZQQeA+gokAi0tGk18SUPpvbte311L9GUwm1HO5z4JMWssn9nhcGrz4ZZgAwSLMB1Ulj2MI2xem1+PWrfivvogm3Fto+VSwhZgGprcWIWoSEf6BGk6YmF4rWeYpjGOOCUpPXofSasF+gxtGlV4HkbQXNeLIsSl1MgOIVQHaBL1XH4qY3odyYdWRcsoaZjedc6AecZSLuB8p6Jo1t7l1BUdi9U9YEf8f0B3URjb5k2vIEToojsDsv1+U/lduPimI8fIauZyBGeScxvQM+R8TVkW4bG4mRxKBGgjAm+k7WNil2/hCtM+mfGArjvcmoR+jScLiE/pvxL+WAAAAABJRU5ErkJggg==",className:"reset",onClick:function(){return t(e)},alt:"img"})},o=(t(18),function(A){var e=A.id,t=Object(s.useContext)(r).importantTask;return Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFuSURBVHgBtZTdUYNAEMcPOHimhJRgOogVxDwzEFIBsQLpQK2Az3ftIJSgFYgd4DMM+F+HweTg4MaPnblZwpLf7v737hj7Y9Pmgmma+pqmbfFoT8WbpjnASiUgweDuALyFr0aVaFpEvq7r63MolwG7rrvCnx5d132eiud5TtDYNM1TFEUDVGdys6cqE5L6WDZBJyvMsixAVp9g9CFWIYOh1XWflE0CAdsAcMTjAWKXnPP7s1iIRHuBWfX6VdT+CNi27QYu8TyvoN9JknwA8hVDgge4WKySYOK7OQ2/s3J+xHoTF4Yx2k5cBYhJh3ChyrdKQGj4BHdDz2h/jVZffgVEhTumaEoaLhkGOmgprRATLnRdDyA8tSfd4JZl7QEsF4HYPjG0W2GaEeAX08R+XeFd2VdXQtfdIpBMNl0kOtGJchznXYz9VENbFhgqhF4FXUmwgs2YYRhbOudT1ZFd3IdohfZawObtlY6ieLH+m30C4kSg6R75v0EAAAAASUVORK5CYII=",className:"important",onClick:function(){return t(e)},alt:"img"})}),d=(t(19),function(A){A.id;return Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFCSURBVHgBxdRNToNAFAfw/6NgiBs5Qo/gDYQb1EUTgwvbExS3bjoa9z1C01XdiSfQnkCPwBFwpYktzzckNJTwMdUm/Sd8PcKPGZgZ4MAh/CPXU54xMJAtYcL4SVFiFzcHij0X8Ooe/AbSWFFaroVTnmcMYguBBYzAmEs5yMFQ8TkxXuVNaR3oEhZyUGWMBVs+0EhfDxXHDnCjz3NQsFm2wXj5SDE6UsV0HMZEai/63NI7aVmfXLz/BSvVoi1okg5sWzMCTTEjcB+sE9wXawWvFPflZ/ldWHjPEz2GO0FrA1+m0VsblidDdGrjrLi00SjiQvaehuToC7Zq6ubuYw3RrYGeORlWGSEwwVpbaApUYzywjwYWXf6gH0TDO170TupXnNqsoYcWvtb43AHlo99SBuU4eNYrhWm4h4QIl9W18qD5BQrdsUnodofNAAAAAElFTkSuQmCC",className:"important",alt:"img"})}),u=function(A){var e=A.taskName,t=A.id,c=(A.important,A.active),n=Object(s.useContext)(r).inactiveTask,a={textDecoration:!0===c?"none":"line-through",cursor:"pointer"};return Object(j.jsx)("div",{className:"box",children:Object(j.jsxs)("div",{className:"box-inp",children:[Object(j.jsx)("input",{type:"checkbox",className:"custom-checkbox",id:t,name:"happy",value:"yes",onClick:function(){return n(t)}}),Object(j.jsxs)("label",{style:a,for:t,children:[e," "]}),Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsx)(d,{id:t}),Object(j.jsx)(o,{id:t}),Object(j.jsx)(l,{id:t})]})]})})},E=(t(20),function(){return Object(j.jsx)("div",{className:"title",children:Object(j.jsxs)("menu",{className:"menu",children:[Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"img"}),Object(j.jsx)("h1",{children:"Tasks"})]}),Object(j.jsxs)("div",{className:"dropdown",children:[Object(j.jsxs)("select",{className:"select",children:[Object(j.jsx)("option",{children:"Leanne Graham "}),Object(j.jsx)("option",{children:"Leanne"})]}),Object(j.jsx)("i",{className:"material-icons",children:"keyboard_arrow_down"})]})]})})}),b=(t(21),function(A){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(j.jsx)("div",{className:"wrp",children:Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsx)("input",{placeholder:"+ Add a task, press Enter to save",value:c,onChange:function(A){var e=A.target.value;n(e)},type:"text"}),Object(j.jsx)("button",{disabled:!c,onClick:function(){A.addTask(c),n("")},children:"Add"})]})})}),x=function(A){var e=A.addTask,t=Object(s.useContext)(r);t.btnHandler,t.inputHandler;return Object(j.jsxs)("div",{children:[Object(j.jsx)(E,{}),Object(j.jsx)("div",{className:"wrp",children:Object(j.jsx)(b,{addTask:e})})]})};t(22);function m(A){var e=A.todo,t=A.inputFilterValue,c=A.addTask,n=A.displayedList;return Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{inputFilterValue:t,addTask:c,displayedList:n}),Object(j.jsxs)("div",{className:"flx",children:[Object(j.jsx)("div",{className:"aside",children:Object(j.jsx)("div",{className:"menu-wrp",children:Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADHSURBVHgBtZOBDcIgEEUP0wHqBHaEukFHcISO4AbqBm6gG3QE2EA3KCPUCfBf8kmIqSJN+pIXkgscBwcSQmjgDVp4kEIqOMAWeqjJOmOMw1gz/otJMPEBj7oQjrEKxrIYLR3zHeyh7rpHBZ5Jmn8qqGEPrzBX8gqwC5Z3cZJC4h10SWyLO5h4/lxCX80EG/hk0k4yCfQILdunnGUpfDjFbJLFy1rINxCxUgrbl7KbSfyNUbvgP8p/cXTwktnfx4d0h4N+KCnkDVbq8Xw3Vc/nAAAAAElFTkSuQmCC",alt:"img"})})}),Object(j.jsxs)("div",{className:"wrp-task",children:[Object(j.jsxs)("p",{className:"text2",children:["Total: ",Object(j.jsx)("span",{children:"7"})]}),Object(j.jsxs)("h4",{className:"text",children:["To do (",Object(j.jsx)("span",{children:"3"}),")"]}),Object(j.jsx)("div",{children:e.map((function(A){return Object(j.jsx)(u,Object(a.a)({},A),A.id)}))})]})]})]})}t(23);var B=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"transition-loader",children:Object(j.jsxs)("div",{className:"transition-loader-inner",children:[Object(j.jsx)("label",{}),Object(j.jsx)("label",{}),Object(j.jsx)("label",{}),Object(j.jsx)("label",{}),Object(j.jsx)("label",{}),Object(j.jsx)("label",{})]})})})},O=t(6),f=t(7),p=t(9),h=t(8),v=function(A){Object(p.a)(t,A);var e=Object(h.a)(t);function t(){var A;Object(O.a)(this,t);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(A=e.call.apply(e,[this].concat(n))).state={hasError:!1},A}return Object(f.a)(t,[{key:"componentDidCatch",value:function(A,e){console.log(A,e)}},{key:"render",value:function(){return this.state.hasError?Object(j.jsx)("div",{children:"Error =("}):Object(j.jsx)(j.Fragment,{children:this.props.children})}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),t}(s.Component),Q=function(){var A=Object(s.useState)(null),e=Object(i.a)(A,2),t=e[0],c=e[1],n=Object(s.useState)(""),l=Object(i.a)(n,2),o=l[0],d=l[1],u=Object(s.useState)(""),E=Object(i.a)(u,2),b=E[0],x=E[1],O=Object(s.useState)(!1),f=Object(i.a)(O,2),p=f[0],h=f[1];if(Object(s.useEffect)((function(){setTimeout((function(){c([{taskName:"Add Icon to Dashboard",id:"1",important:!1,active:!0},{taskName:"Create To-Do List",id:"2",important:!1,active:!1},{taskName:"Add Icon to Das",id:"3",important:!0,active:!0}]),h(!0)}),3e3)}),[]),!p)return Object(j.jsx)(B,{});var Q=function(A,e){return""===A?e:e.filter((function(e){return e.taskName.toLowerCase().includes(A.toLowerCase())}))}(o,t),g=function(A,e){return""===e||"all"===e?A:"active"===e?A.filter((function(A){return A.active})):"complited"===e?A.filter((function(A){return!A.active})):void 0}(Q,b),w={deleteTask:function(A){var e=t.filter((function(e){return e.id!==A}));c(e)},inactiveTask:function(A){var e=t.map((function(e){var t=e.id,c=e.active;return Object(a.a)(Object(a.a)({},e),{},{active:A===t?!c:c})}));c(e)},btnHandler:function(A){x(A)},inputHandler:function(A){var e=A.target.value;d(e)}};return Object(j.jsx)(r.Provider,{value:w,children:Object(j.jsx)("div",{children:Object(j.jsx)(v,{children:Object(j.jsx)(m,{addTask:function(A){var e=t.slice();e.unshift({taskName:A,id:"".concat(t.length," + 1"),important:!1,active:!0}),c(e)},todo:g,displayedList:b,inputFilterValue:o})})})})},g=(t(24),document.getElementById("root"));n.a.render(Object(j.jsx)(Q,{}),g)}],[[25,1,2]]]);
//# sourceMappingURL=main.0ed0cbc4.chunk.js.map