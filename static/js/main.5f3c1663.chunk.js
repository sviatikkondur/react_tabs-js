(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(5),s=n(1),d=n(4),b=n.n(d),r=n(0),o=function(t){var e,n=t.tabs,c=t.selectedTabId,i=t.onTabSelected,a=(e=c,n.filter((function(t){return t.id===e})).length>0?c:n[0].id),s=n.find((function(t){return t.id===a})).content;return Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:n.map((function(t){return Object(r.jsx)("li",{className:b()({"is-active":t.id===a}),"data-cy":"Tab",onClick:function(){t.id!==a&&i(t)},children:Object(r.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",children:t.title})},t.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:s})]})},l=(n(11),n(12),n(13),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),j=function(){var t=Object(s.useState)(l[0].id),e=Object(a.a)(t,2),n=e[0],c=e[1],i=l.find((function(t){return t.id===n})).title;return Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h1",{className:"title",children:"Selected tab is ".concat(i)}),Object(r.jsx)(o,{tabs:l,selectedTabId:n,onTabSelected:function(t){return c(t.id)}})]})};i.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5f3c1663.chunk.js.map