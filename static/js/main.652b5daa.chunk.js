(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{12:function(e,t,n){e.exports=n(33)},22:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(5),r=n(6),i=n(2),o={userInput:"",list:[],isEditing:!1,editingItemId:0,wantedListToShow:[],toggleItems:!1},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"setUserInput":return Object(i.a)({},e,{userInput:a});case"setList":return Object(i.a)({},e,{list:a});case"setIsEditing":return Object(i.a)({},e,{isEditing:a});case"setEditingItemId":return Object(i.a)({},e,{editingItemId:a});case"setWantedListToShow":return Object(i.a)({},e,{wantedListToShow:a});case"setToggleItems":return Object(i.a)({},e,{toggleItems:a});default:return e}},s=Object(r.b)(m),u=n(4),d=(n(22),n(23),n(26),n(27),n(28),n(1)),p=n(35),b=function(e){return{type:"setUserInput",payload:e}},f=function(e){return{type:"setList",payload:e}},E=function(e){return{type:"setIsEditing",payload:e}},g=function(e){return{type:"setEditingItemId",payload:e}},I=function(e){return{type:"setWantedListToShow",payload:e}};var h=function(e){var t=e.changeUserInput,n=e.addToList,a=e.userInput,c=e.isEditing;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card-body"},l.a.createElement("h3",null,"Add an Item ..."),l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text bg-primary text-white"},l.a.createElement("i",{className:"fas fa-book"}))),l.a.createElement("input",{className:"form-control text-capitalize",onChange:t,value:a,type:"text",placeholder:"type item here ..."})),l.a.createElement("button",{className:"btn btn-block mt-2 font-weight-bold ".concat(c?"btn-secondary":"btn-primary"),onClick:n},c?"Edit Item":"Add Item")))};var v=function(e){var t=e.wantedListToShow,n=e.completed,a=e.itemToEdit,c=e.deleteItem;return l.a.createElement(l.a.Fragment,null,t.map((function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{key:e.id,className:"item d-flex justify-content-between"},l.a.createElement("li",{key:e.id,className:"m-3 list-group-item ".concat(e.complete?"completed":""),onClick:function(){return n(e.id)}},t+1,"- ",e.value),e.complete?l.a.createElement("span",{className:"lead text-danger font-weight-bolder mt-4"},"completed"):l.a.createElement("button",{className:"btn btn-success mr-3 commonStyleButton",onClick:function(){return a(e.id)}},"Edit ",l.a.createElement("i",{className:"far fa-edit"})),l.a.createElement("button",{className:"btn btn-warning commonStyleButton",onClick:function(){return c(e.id)}},"Delete ",l.a.createElement("i",{className:"fas fa-trash"}))))})))},w=function(e){var t=e.list,n=e.completed,a=e.deleteItem,c=e.itemToEdit,r=e.itemsToShow,i=e.wantedListToShow,o=e.deleteCompletedItem,m=e.hideShowAllItems,s=e.toggleItems,u=e.allCompletedItem,d=e.clearList;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h2",{className:"m-3 font-weight-bold text-center"},"To Do List"),l.a.createElement("p",{className:"lead text-center font-weight-bold"},"There is only ",l.a.createElement("span",{className:"text-primary"}," ",t.filter((function(e){return!e.complete})).length," ")," items NOT completed yet"),l.a.createElement("ul",{className:"list-group"},l.a.createElement(v,{wantedListToShow:i,completed:n,itemToEdit:c,deleteItem:a})),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-primary mb-3 mr-3",onClick:m},s?"Show all":"Hide all"),l.a.createElement("button",{className:"btn btn-info mb-3 mr-3",onClick:function(){return r("active")}},"Active Items"),l.a.createElement("button",{className:"btn btn-info mb-3 mr-3",onClick:function(){return r("completed")}},"Completed Items"),l.a.createElement("button",{className:"btn btn-info mb-3 mr-3",onClick:function(){return r("all")}},"All items"),l.a.createElement("button",{className:"btn btn-warning mb-3 mr-3",onClick:u},"All completed"),i.some((function(e){return e.complete}))&&l.a.createElement("button",{className:"btn btn-danger mb-3 mr-3",onClick:o},"Delete completed items")),l.a.createElement("button",{className:"btn btn-danger btn-block p-2",onClick:d},"Clear List ",l.a.createElement("i",{className:"fas fa-trash"}))))};n(32);var y=function(){var e=Object(u.c)((function(e){return e})),t=e.userInput,n=e.list,a=e.isEditing,c=e.editingItemId,r=e.wantedListToShow,i=e.toggleItems,o=Object(u.b)();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container mt-5"},l.a.createElement("div",{className:"card"},l.a.createElement("h1",{className:"m-3 font-weight-bold"},"My List"),l.a.createElement(h,{changeUserInput:function(e){var t=e.target.value;o(b(t))},addToList:function(){if(""!==t){var e;if(a&&0!==c){e=Object(d.a)(n).map((function(e){return e.id===c&&(e.value=t),e})),o(E(!a)),o(g(0))}else{var l={id:Object(p.a)(),complete:!1,value:t};(e=Object(d.a)(n)).push(l)}o(f(e)),o(I(e)),o(b(""))}},userInput:t,isEditing:a}),!a&&n[0]&&l.a.createElement(w,{list:n,completed:function(e){var t=Object(d.a)(n).map((function(t){return t.id===e&&(t.complete=!t.complete),t}));o(f(t)),o(I(t))},deleteItem:function(e){var t=Object(d.a)(n).filter((function(t){return t.id!==e}));o(f(t)),o(I(t))},itemToEdit:function(e){var t=Object(d.a)(n).find((function(t){return t.id===e})),l=t.value,c=t.id;o(b(l)),o(E(!a)),o(g(c))},itemsToShow:function(e){"active"===e?o(I(n.filter((function(e){return!e.complete})))):"completed"===e?o(I(n.filter((function(e){return e.complete})))):"all"===e&&o(I(n))},wantedListToShow:r,deleteCompletedItem:function(){var e=n.filter((function(e){return!e.complete}));o(f(e)),o(I(e))},hideShowAllItems:function(){o(I(i?n:[])),o({type:"setToggleItems",payload:!i})},toggleItems:i,allCompletedItem:function(){var e=Object(d.a)(n).map((function(e){return e.complete=!0,e}));o(f(e)),o(I(e))},clearList:function(){o(f([])),o(I([]))}}))))};function N(){return l.a.createElement(u.a,{store:s},l.a.createElement(y,null))}Object(c.render)(l.a.createElement(N,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.652b5daa.chunk.js.map