(this.webpackJsonpcors_mrsoft=this.webpackJsonpcors_mrsoft||[]).push([[0],{20:function(t,e,n){},3:function(t,e,n){t.exports={container:"FilterString_container__2N_O_",containerValue:"FilterString_containerValue__2fM0J",h1:"FilterString_h1__33R9j",inpChe:"FilterString_inpChe__vBUtl",input:"FilterString_input__2bFrN",sortData:"FilterString_sortData__U0Krz",button:"FilterString_button__pFmbN",blink:"FilterString_blink__2YFmx"}},40:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),a=n(14),r=n.n(a),s=(n(20),n(4)),l=n(3),o=n.n(l),j=n(15),b=n(0),h=i.a.memo((function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)([]),r=Object(s.a)(a,2),l=r[0],h=r[1],u=Object(c.useState)(""),d=Object(s.a)(u,2),O=d[0],x=d[1],f=Object(c.useState)("i"),p=Object(s.a)(f,2),_=p[0],g=p[1],v=O?"\u0414\u0430\u043d\u043d\u044b\u0435 \u0432\u0432\u0435\u0434\u0435\u043d\u044b":"";return Object(c.useEffect)((function(){j.get("https://cors-anywhere.herokuapp.com/".concat("http://www.mrsoft.by/data.json")).then((function(t){i(t.data.data)})).catch((function(t){console.error("Error:",t)}))}),[O,_]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:o.a.container,children:[Object(b.jsx)("h1",{className:o.a.h1,children:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"}),Object(b.jsxs)("div",{className:o.a.containerValue,children:[Object(b.jsxs)("div",{className:o.a.inpChe,children:[Object(b.jsx)("h4",{children:"\u0412\u0432\u043e\u0434 \u0434\u0430\u043d\u043d\u044b\u0445"}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{id:"text-data",type:"text",className:o.a.input,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u0438\u043b\u0438 \u0447\u0438\u0441\u043b\u043e",onChange:function(t){var e=t.target.value;x(e),x(e)},value:O}),Object(b.jsx)("span",{children:v}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"checkbox",onChange:function(){g("i"===_?"":"i"),x(O)}}),Object(b.jsx)("span",{children:"\u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430"})]})]})]}),Object(b.jsxs)("div",{className:o.a.sortData,children:[Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:o.a.button,onClick:function(){if(O.length>=1&&!+isNaN(O)){var t=n.filter((function(t){return t.length>O}));if(""===_){var e=new RegExp(/([A-Z])\w+/g),c=t.filter((function(t){return e.test(t)}));h(c)}else"i"===_&&h(t)}else O.length&&!+isNaN(O)||alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e")},children:"\u041f\u043e \u0434\u043b\u0438\u043d\u0435 \u0441\u043b\u043e\u0432"}),Object(b.jsx)("button",{className:o.a.button,onClick:function(){if(O.length>=1&&isNaN(O)){var t=new RegExp(O,"".concat(_)),e=n.filter((function(e){return t.test(e)}));h(e)}else isNaN(O)||alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0431\u0443\u043a\u0432\u044b")},children:"\u041f\u043e \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0435"})]})]})]})]}),l.length>0&&Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"}),Object(b.jsx)("div",{className:o.a.listData,children:Object(b.jsx)("ol",{children:l.map((function(t){return Object(b.jsx)("li",{className:"flow-text",children:t},t)}))})})]})]})}));var u=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(h,{})})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),a(t),r(t)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),d()}},[[40,1,2]]]);
//# sourceMappingURL=main.c777cce6.chunk.js.map