(this["webpackJsonpice-cream"]=this["webpackJsonpice-cream"]||[]).push([[0],{14:function(e,t,a){e.exports=a(38)},19:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),l=a.n(r),o=(a(19),a(2)),i=a(13),m=a.n(i);a(37);var u=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),u=i[0],s=i[1];Object(n.useEffect)((function(){m.a.get("https://ice-creams-api.herokuapp.com/".concat(u)).then((function(e){return r(e.data)})).catch((function(e){return console.log(e)})).then((function(){}))}),[u]);var f=function(e){var t=e.target.dataset.filterType;console.log(e.target.dataset.filterType),s(t)};return c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement("h1",null,"Quarnatine Ice Cream Challenge"),c.a.createElement("p",null,c.a.createElement("b",null,"Total")," ",a.length),c.a.createElement("button",{"data-filter-type":"",onClick:function(e){return f(e)}},"Reset"),c.a.createElement("button",{"data-filter-type":"recent",onClick:function(e){return f(e)}},"Recent"),c.a.createElement("button",{"data-filter-type":"worst",onClick:function(e){return f(e)}},"Worst"),c.a.createElement("button",{"data-filter-type":"favourite",onClick:function(e){return f(e)}},"Favourite")),c.a.createElement("main",null,a.length&&a.map((function(e,t){var a=e.date.split("T")[0];return c.a.createElement("div",{key:"".concat(e.name,"-").concat(t),className:"ice-cream-card"},c.a.createElement("div",{className:"ice-cream-card__image"},c.a.createElement("img",{src:e.image,alt:"alt"})),c.a.createElement("div",{className:"ice-cream-card__text"},c.a.createElement("h4",null,c.a.createElement("b",null,"Name:")," ",e.name),c.a.createElement("p",null,c.a.createElement("b",null,"Rating:")," ",e.rating),c.a.createElement("p",null,c.a.createElement("b",null,"DG Says:")," ",e.tasting_notes),c.a.createElement("p",{className:"meta"},c.a.createElement("b",null,"Website")," ",c.a.createElement("a",{href:"{item.url}"},e.name)),c.a.createElement("p",{className:"meta"},c.a.createElement("b",null,"Scoff Date:")," ",a)))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.07fb2b45.chunk.js.map