(this["webpackJsonptasks-manager"]=this["webpackJsonptasks-manager"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(35)},,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a(2),s=(a(23),a(24),a(25),a(6)),i=a(1),u={tasks:[{id:0x7894c87543560c00,value:"create sitemap sketch, wireframe and mock-up.",currentStatus:{number:3,state:"completed"},isEditing:!1},{id:8688789987545455e4,value:"select technoogies stack (programming languages, frameworks and CMS).",currentStatus:{number:3,state:"completed"},isEditing:!1},{id:6576568657545454e4,value:"create colorfull page layouts and gets client's feedback also change the layout if required, test and upload the website to server.",currentStatus:{number:1,state:"In-Progress"},isEditing:!1},{id:6576564787884876e5,value:"take 1 hour break before starting of building the initial website interface.",currentStatus:{number:2,state:"canceled"},isEditing:!1},{id:6576564787884454e5,value:"build website by adding special features and interactivity.",currentStatus:{number:0,state:"Not-Started"},isEditing:!1},{id:6576589789988445e6,value:"get content ready with the power of SEO.",currentStatus:{number:1,state:"In-Progress"},isEditing:!1},{id:6578889789988445e6,value:"fix bugs ASAP and keep it up to date.",currentStatus:{number:0,state:"Not-Started"},isEditing:!1}]},o={userInput:"",list:u.tasks,wantedListToShow:u.tasks,status:["Not-Started","In-Progress","canceled","completed"],edit:{userInput:"",itemId:0},counter:{deleted:2,edited:4,NotStarted:2,InProgress:2,canceled:1,completed:2}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"setUserInput":return Object(i.a)(Object(i.a)({},e),{},{userInput:n});case"setList":return Object(i.a)(Object(i.a)({},e),{},{list:n});case"setEdit":return Object(i.a)(Object(i.a)({},e),{},{edit:n});case"setWantedListToShow":return Object(i.a)(Object(i.a)({},e),{},{wantedListToShow:n});case"setCounter":return Object(i.a)(Object(i.a)({},e),{},{counter:n});default:return e}},d=Object(s.b)(m),f=function(){var e=Object(l.c)((function(e){return e})),t=e.list,a=e.counter,n=a.deleted,c=a.edited;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",{className:"font-weight-bold text-left my-3"},"General :"),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("p",null,"Number of Tasks"),r.a.createElement("p",null,t.length)),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("p",null,"Deleted Tasks"),r.a.createElement("p",null,n)),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("p",null,"Edited Tasks"),r.a.createElement("p",null,c)))},b=function(){var e=Object(l.c)((function(e){return e})).counter,t=e.NotStarted,a=e.InProgress,n=e.canceled,c=e.completed;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",{className:"font-weight-bold text-left my-3"},"Tasks Status :"),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("p",null,r.a.createElement("span",{className:"statisticSpan not-started-span"}),"Not Started"),r.a.createElement("p",null,t)),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("p",null,r.a.createElement("span",{className:"statisticSpan in-progress-span"}),"In Progress"),r.a.createElement("p",null,a)),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("p",null,r.a.createElement("span",{className:"statisticSpan canceled-span"}),"Canceled"),r.a.createElement("p",null,n)),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("p",null,r.a.createElement("span",{className:"statisticSpan completed-span"}),"Completed"),r.a.createElement("p",null,c)))},p=(a(26),function(){return r.a.createElement("div",{className:"bg px-2 mt-3"},r.a.createElement("h3",{className:"font-weight-bold text-left mb-4"},"Tasks statistics"),r.a.createElement(f,null),r.a.createElement("hr",{className:"bg-light my-4"}),r.a.createElement(b,null))}),E=(a(27),function(e){return{type:"setUserInput",payload:e}}),g=function(e){return{type:"setList",payload:e}},N=function(e){return{type:"setCounter",payload:e}},h=function(e){return{type:"setEdit",payload:e}},v=function(e){return{type:"setWantedListToShow",payload:e}},j=(a(28),function(){var e=Object(l.c)((function(e){return e})).list,t=Object(l.b)();function a(a){t(v("all"===a?e:e.filter((function(e){return a===e.currentStatus.state}))))}return r.a.createElement(r.a.Fragment,null,0!==e.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-light mx-1",onClick:function(){return a("all")}},"list"),r.a.createElement("button",{className:"btn btn-light mx-1",onClick:function(){return a("Not-Started")}},"Not-Started"),r.a.createElement("button",{className:"btn btn-light mx-1",onClick:function(){return a("In-Progress")}},"In-Progress"),r.a.createElement("button",{className:"btn btn-light mx-1",onClick:function(){return a("canceled")}},"Canceled"),r.a.createElement("button",{className:"btn btn-light mx-1",onClick:function(){return a("completed")}},"Completed")))}),S=a(3),w=a(37),O=(a(29),function(){var e=Object(l.c)((function(e){return e})),t=e.userInput,a=e.list,n=e.counter,c=Object(l.b)();return r.a.createElement("div",{className:"container card-body"},r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""!==t){var r,l=Object(S.a)(a),s={id:Object(w.a)(),value:t,currentStatus:{number:0,state:"Not-Started"},isEditing:!1};l.push(s),r=Object(i.a)(Object(i.a)({},n),{},{NotStarted:n.NotStarted+1}),c(N(r)),c(g(l)),c(v(l)),c(E(""))}},className:"d-flex justify-content-between"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text color text-white"},r.a.createElement("i",{className:"fas fa-book"}))),r.a.createElement("input",{className:"form-control",onChange:function(e){var t=e.target.value;c(E(t))},value:t,type:"text",placeholder:"+ Add New Task here ..."}))))}),k=a(4),y=(a(30),function(e){var t=e.id,a=e.borderColor,n=Object(l.c)((function(e){return e})),c=n.list,s=n.edit,u=n.counter,o=Object(l.b)();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a,n=Object(S.a)(c),r=s.userInput,l=n.map((function(e){return e.id===t&&(a=e.value,e=Object(i.a)(Object(i.a)({},e),{},{value:s.userInput,isEditing:!e.isEditing})),e}));if(a!==r){var m=Object(i.a)(Object(i.a)({},u),{},{edited:u.edited+1});o(N(m))}o(g(l)),o(v(l)),o(h({userInput:"",itemId:0}))},className:"d-flex justify-content-between"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"my-auto mx-1 font-weight-bold text-center"},"Editing Task"),r.a.createElement("div",{className:"input-group-text iconColor".concat(a," text-white")},r.a.createElement("i",{className:"far fa-edit editColor"}))),r.a.createElement("input",{className:"form-control edit ".concat(a),onChange:function(e){var a={userInput:e.target.value,itemId:t};o(h(a))},value:s.userInput,type:"text",placeholder:"Edit Task here ..."}))))}),x=(a(31),function(e){var t=e.val,a=e.idx,n=Object(l.c)((function(e){return e})),c=n.list,s=n.status,u=n.counter,o=Object(l.b)();return r.a.createElement(r.a.Fragment,null,t.isEditing?r.a.createElement(y,{id:t.id,borderColor:t.currentStatus.state}):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"w-75 my-auto mx-3"},a+1,"- ",t.value),r.a.createElement("span",{className:"".concat(t.currentStatus.state," text-white font-weight-bold bg-dark status py-1 text-center my-auto mr-1"),onClick:function(){return function(e){var t,a,n,r,l=Object(S.a)(c).map((function(t){if(t.id===e){var a=3===t.currentStatus.number?0:t.currentStatus.number+1;t.currentStatus={number:a,state:s[a]},0===a&&(a=4),n=t.currentStatus.state.split("-").join(""),r=s[a-1].split("-").join("")}return t}));a=Object(i.a)(Object(i.a)({},u),{},(t={},Object(k.a)(t,n,u[n]+1),Object(k.a)(t,r,u[r]-1),t)),o(N(a)),o(g(l)),o(v(l))}(t.id)}},t.currentStatus.state),r.a.createElement("i",{className:"far fa-edit my-auto mx-4 font-weight-bold text-center",onClick:function(){return function(e){var t,a=Object(S.a)(c);if(a.some((function(e){return e.isEditing}))){t=a.map((function(e){return e.isEditing&&(e.isEditing=!e.isEditing),e}));o(g(t)),o(h({userInput:"",itemId:0})),a=t}var n=a.find((function(t){return t.id===e})),r=a.map((function(t){return t.id===e&&(t.isEditing=!t.isEditing),t})),l={userInput:n.value,itemId:n.id};o(g(r)),o(h(l))}(t.id)}}),r.a.createElement("i",{className:"fas fa-trash my-auto mx-3 font-weight-bold text-center",onClick:function(){return function(e){var t=Object(S.a)(c),a=t.filter((function(t){return t.id!==e})),n=t.filter((function(t){return t.id===e}))[0].currentStatus.state.split("-").join(""),r=Object(i.a)(Object(i.a)({},u),{},Object(k.a)({deleted:u.deleted+1},n,u[n]-1));o(N(r)),o(g(a)),o(v(a))}(t.id)}})))}),I=(a(32),function(){var e=Object(l.c)((function(e){return e})).wantedListToShow;return r.a.createElement(r.a.Fragment,null,!1===Boolean(e.filter((function(e){return e.currentStatus.state})).length)?r.a.createElement("p",{className:"lead text-center font-weight-bold"},"There is No Tasks at this moment"):r.a.createElement("ul",{className:"m-4"},r.a.createElement("li",{className:"containerHead py-2 my-1 d-flex justify-content-between"},r.a.createElement("span",{className:"ml-3 my-auto w-75 font-weight-bold"},"Task"),r.a.createElement("span",{className:"mr-3 statusHead font-weight-bold text-center"},"Status"),r.a.createElement("span",{className:"mr-2 w-auto font-weight-bold text-center"},"Edit"),r.a.createElement("span",{className:"w-auto font-weight-bold text-center"},"Delete")),e.map((function(e,t){return r.a.createElement("li",{key:e.id,className:"leftBorder".concat(e.currentStatus.state," \n                                            ").concat("canceled"===e.currentStatus.state?"alert-danger":""," \n                                            ").concat(e.isEditing?"highlight":""," \n                                            item py-2 my-2 d-flex justify-content-between")},r.a.createElement(x,{val:e,idx:t}))}))))}),C=(a(33),function(){var e=Object(l.c)((function(e){return e})),t=e.list,a=e.wantedListToShow,n=e.counter,c=Object(l.b)();return r.a.createElement(r.a.Fragment,null,!0===Boolean(a.filter((function(e){return e.currentStatus.state})).length)&&r.a.createElement("div",{className:"d-flex justify-content-end"},a.some((function(e){return"completed"===e.currentStatus.state}))&&r.a.createElement("button",{className:"btn btn-dark m-1",onClick:function(){var e,a=t.filter((function(e){return"completed"!==e.currentStatus.state}));e=Object(i.a)(Object(i.a)({},n),{},{deleted:n.deleted+(t.length-a.length),completed:0}),c(N(e)),c(g(a)),c(v(a))}},"Remove Completed Tasks"),r.a.createElement("button",{className:"btn btn-dark m-1",onClick:function(){var e,a=Object(S.a)(t).map((function(e){return e.currentStatus={number:3,state:"completed"},e}));e=Object(i.a)(Object(i.a)({},n),{},{NotStarted:0,InProgress:0,canceled:0,completed:n.completed+(t.length-n.completed)}),c(N(e)),c(g(a)),c(v(a))}},"Make all Tasks Completed"),r.a.createElement("button",{className:"btn btn-dark m-1",onClick:function(){var e,a=Object(S.a)(t).map((function(e){return e.currentStatus={number:2,state:"canceled"},e}));e=Object(i.a)(Object(i.a)({},n),{},{NotStarted:0,InProgress:0,canceled:n.canceled+(t.length-n.canceled),completed:0}),c(N(e)),c(g(a)),c(v(a))}},"Cancel all Tasks"),r.a.createElement("button",{className:"btn btn-dark m-1",onClick:function(){var e=Object(i.a)(Object(i.a)({},n),{},{deleted:n.deleted+t.length,NotStarted:0,InProgress:0,canceled:0,completed:0});c(N(e)),c(g([])),c(v([]))}},"Clear List\xa0\xa0",r.a.createElement("i",{className:"fas fa-trash all"}))))}),T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-3 col-sm-12 pr-0"},r.a.createElement("h3",{className:"ml-3 font-weight-bold"},"Tasks Board")),r.a.createElement("div",{className:"col-md-9 col-sm-12 p-0"},r.a.createElement(j,null))),r.a.createElement(O,null),r.a.createElement(I,null),r.a.createElement(C,null))};a(34);var P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container bg-light mt-3 rounded"},r.a.createElement("h1",{className:"font-weight-bold text-center py-5"},"Tasks Manager"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"bg col-md-3 p-3 text-light"},r.a.createElement(p,null)),r.a.createElement("div",{className:"col-md-9 py-3 px-2 bg-borad"},r.a.createElement(T,null)))))};function F(){return r.a.createElement(l.a,{store:d},r.a.createElement(P,null))}Object(c.render)(r.a.createElement(F,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.461e6d82.chunk.js.map