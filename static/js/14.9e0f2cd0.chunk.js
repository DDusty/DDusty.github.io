(this["webpackJsonptomb.finance"]=this["webpackJsonptomb.finance"]||[]).push([[14],{1611:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return ze}));var a,r,c,i=t(2),o=t.n(i),l=t(16),u=t(30),s=t(1),d=t.n(s),m=t(290),f=t(985),p=t.n(f),b=t(25),h=t(53),g=t(59),x=t(897),O=t(949),v=t(27),j=t(1058),E=t(841),y=t(303),k=t(67),N=t(197),w=t(196),T=t(1184),D=t(1186),C=t(294),P=t(74),B=b.d.button(a||(a=Object(u.a)(["\n  align-items: center;\n  background-color: ",";\n  border: 0;\n  border-radius: 12px;\n  box-shadow: ",";\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-size: ","px;\n  font-weight: 700;\n  height: ","px;\n  justify-content: center;\n  outline: none;\n  padding-left: ","px;\n  padding-right: ","px;\n  pointer-events: ",";\n  width: 100%;\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.color.grey[900]}),(function(e){return e.boxShadow}),(function(e){return e.disabled?"".concat(e.color,"55"):e.color}),(function(e){return e.fontSize}),(function(e){return e.size}),(function(e){return e.padding}),(function(e){return e.padding}),(function(e){return e.disabled?"none":void 0}),(function(e){return e.color}),(function(e){return e.theme.color.grey[900]})),z=Object(b.d)(P.b)(r||(r=Object(u.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),M=b.d.a(c||(c=Object(u.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),A=function(e){var n,t,a,r,c=e.children,i=e.disabled,o=e.href,l=e.onClick,u=e.size,m=e.text,f=e.to,p=e.variant,h=Object(s.useContext)(b.a),g=h.color,x=h.spacing;switch(p){case"secondary":n=g.teal[200];break;case"default":default:n=g.primary.main}switch(u){case"sm":a=x[3],t=36,r=14;break;case"lg":a=x[4],t=72,r=16;break;case"md":default:a=x[4],t=56,r=16}var O=Object(s.useMemo)((function(){return f?d.a.createElement(z,{to:f},m):o?d.a.createElement(M,{href:o,target:"__blank"},m):m}),[o,m,f]);return d.a.createElement(B,{boxShadow:void 0,color:n,disabled:i,fontSize:r,onClick:l,padding:a,size:t},c,O)},I=t(287),R=t(889),S=t(288),F=t(880),U=t(33),V=function(e){var n=e.max,t=e.title,a=e.description,r=e.onConfirm,c=e.onDismiss,i=e.action,o=e.tokenName,l=Object(s.useState)(""),u=Object(v.a)(l,2),m=u[0],f=u[1],p=Object(s.useMemo)((function(){return Object(U.b)(n)}),[n]),b=Object(s.useCallback)((function(e){return f(e.currentTarget.value)}),[f]),h=Object(s.useCallback)((function(){f(p)}),[p,f]);return d.a.createElement(I.a,null,d.a.createElement(S.a,{text:t}),d.a.createElement(F.a,{value:m,onSelectMax:h,onChange:b,max:p,symbol:o}),d.a.createElement(N.a,{text:a}),d.a.createElement(R.a,null,d.a.createElement(A,{text:"Cancel",variant:"secondary",onClick:c}),d.a.createElement(A,{text:i,onClick:function(){return r(m)}})))},W=t(198),_=t(890),G=t(131);var K,L,J,Q,q,H,X,Y,Z,$,ee,ne,te,ae,re,ce=function(){var e=Object(G.b)();return Object(s.useCallback)((function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Unexpected error is occurred.";n.catch((function(n){n.message.includes("User denied")||(console.error("Uncaught exception: ".concat(n.stack)),e({error:{message:t,stack:n.stack}}))}))}),[e])},ie=b.d.div(K||(K=Object(u.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 20px;\n  font-weight: 700;\n  height: 64px;\n  justify-content: center;\n  margin-top: ","px;\n"])),(function(e){return-e.theme.spacing[3]})),oe=b.d.div(L||(L=Object(u.a)(["\n  background-color: ",";\n  width: 72px;\n  height: 72px;\n  border-radius: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.color.grey[900]}),(function(e){return e.theme.spacing[2]})),le=b.d.div(J||(J=Object(u.a)(["\n  align-items: center;\n  display: flex;\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.spacing[5]})),ue=b.d.div(Q||(Q=Object(u.a)(["\n  font-size: 20px;\n  padding-left: ","px;\n  padding-right: ","px;\n  padding-bottom: ","px;\n"])),(function(e){return e.theme.spacing[3]}),(function(e){return e.theme.spacing[3]}),(function(e){return e.theme.spacing[4]})),se=b.d.div(q||(q=Object(u.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  font-weight: 600;\n"]))),de=b.d.div(H||(H=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ","px;\n  width: 100%;\n"])),(function(e){return e.theme.spacing[3]})),me=b.d.span(X||(X=Object(u.a)([""]))),fe=b.d.div(Y||(Y=Object(u.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),pe=function(e){var n=e.action,t=e.fromToken,a=e.fromTokenName,r=e.toToken,c=e.toTokenName,i=e.priceDesc,o=e.onExchange,l=e.disabled,u=void 0!==l&&l,s=e.disabledDescription,m=ce(),f=Object(k.a)().contracts.Treasury,p=Object(_.b)(t,f.address),b=Object(v.a)(p,2),h=b[0],g=b[1],x=Object(W.a)(t),O=Object(C.a)(d.a.createElement(V,{title:n,description:i,max:x,onConfirm:function(e){o(e),z()},action:n,tokenName:a})),P=Object(v.a)(O,2),B=P[0],z=P[1];return d.a.createElement(j.a,null,d.a.createElement(y.a,null,d.a.createElement(fe,null,d.a.createElement(ie,null,"".concat(n," ").concat(c)),d.a.createElement(le,null,d.a.createElement(se,null,d.a.createElement(oe,null,d.a.createElement(w.a,{symbol:t.symbol,size:54})),d.a.createElement(N.a,{text:a,variant:"normal"})),d.a.createElement(ue,null,d.a.createElement(T.a,{icon:D.a})),d.a.createElement(se,null,d.a.createElement(oe,null,d.a.createElement(w.a,{symbol:r.symbol,size:54})),d.a.createElement(N.a,{text:c,variant:"normal"}))),d.a.createElement(me,null,i),d.a.createElement(de,null,h===_.a.APPROVED||u?d.a.createElement(E.a,{color:"primary",variant:"contained",className:u?"buy-btn-disabled buy-btn":"buy-btn",onClick:B,disabled:u},s||n):d.a.createElement(E.a,{color:"primary",variant:"contained",disabled:h===_.a.PENDING||h===_.a.UNKNOWN,className:h===_.a.PENDING||h===_.a.UNKNOWN?"buy-btn buy-btn-disabled":"buy-btn",onClick:function(){return m(g(),"Unable to approve ".concat(a))}},"Approve ".concat(a))))))},be=t(915),he=t(301),ge=t(45),xe=t(35),Oe=function(){var e=Object(s.useState)(xe.a.from(0)),n=Object(v.a)(e,2),t=n[0],a=n[1],r=Object(k.a)(),c=Object(s.useCallback)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,r.getTombPriceInLastTWAP();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[r]);return Object(s.useEffect)((function(){c().catch((function(e){return console.error("Failed to fetch TOMB price: ".concat(e.stack))}));var e=setInterval(c,ge.b.refreshInterval);return function(){return clearInterval(e)}}),[a,r,c]),t},ve=t(868),je=b.d.div(Z||(Z=Object(u.a)(["\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.spacing[2]})),Ee=b.d.span($||($=Object(u.a)(["\n  //color: ",";\n  text-align: center;\n"])),(function(e){return e.theme.color.grey[300]})),ye=b.d.div(ee||(ee=Object(u.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: ","px;\n"])),(function(e){return e.theme.spacing[2]})),ke=function(e){var n=e.tokenName,t=e.description,a=e.price;return d.a.createElement(j.a,null,d.a.createElement(ye,null,d.a.createElement(je,null,"\ud83d\udcb0 ".concat(n," = ").concat(a," FTM")),d.a.createElement(Ee,null,t)))},Ne=function(){var e=Object(s.useState)(xe.a.from(0)),n=Object(v.a)(e,2),t=n[0],a=n[1],r=Object(k.a)();return Object(s.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,r.getBondsPurchasable();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,r]),t},we=xe.a.from(10).pow(18),Te=we.mul(101).div(100),De=Object(b.c)(ne||(ne=Object(u.a)(["\n  body {\n    background: url(",") no-repeat !important;\n    background-size: cover !important;\n  }\n"])),p.a),Ce=b.d.div(te||(te=Object(u.a)(["\n  display: flex;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]))),Pe=b.d.div(ae||(ae=Object(u.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]))),Be=b.d.div(re||(re=Object(u.a)(["\n  display: flex;\n  flex: 0.8;\n  margin: 0 20px;\n  flex-direction: column;\n\n  @media (max-width: 768px) {\n    width: 80%;\n    margin: 16px 0;\n  }\n"]))),ze=function(){var e=Object(h.h)().path,n=Object(g.b)().account,t=Object(k.a)(),a=Object(ve.b)(),r=Object(he.a)(),c=Oe(),i=Ne(),u=Object(W.a)(null===t||void 0===t?void 0:t.TBOND),f=Object(s.useCallback)(function(){var e=Object(l.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.buyBonds(n);case 2:r=e.sent,a(r,{summary:"Buy ".concat(Number(n).toFixed(2)," TBOND with ").concat(n," TOMB")});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[t,a]),p=Object(s.useCallback)(function(){var e=Object(l.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.redeemBonds(n);case 2:r=e.sent,a(r,{summary:"Redeem ".concat(n," TBOND")});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[t,a]),b=Object(s.useMemo)((function(){return c.gt(Te)}),[c]),v=Object(s.useMemo)((function(){return Number(null===r||void 0===r?void 0:r.tokenInFtm)<1.01}),[r]);return d.a.createElement(h.c,null,d.a.createElement(m.a,null,d.a.createElement(De,null),n?d.a.createElement(d.a.Fragment,null,d.a.createElement(h.a,{exact:!0,path:e},d.a.createElement(O.a,{icon:"\ud83c\udfe6",title:"Buy & Redeem Bonds",subtitle:"Earn premiums upon redemption"})),d.a.createElement(Ce,null,d.a.createElement(Pe,null,d.a.createElement(pe,{action:"Purchase",fromToken:t.TOMB,fromTokenName:"TOMB",toToken:t.TBOND,toTokenName:"TBOND",priceDesc:v?Object(U.a)(i,18,4)+" TBOND available for purchase":"TOMB is over peg",onExchange:f,disabled:!r||b})),d.a.createElement(Be,null,d.a.createElement(ke,{tokenName:"TOMB",description:"Last-Hour TWAP Price",price:Object(U.a)(c,18,4)}),d.a.createElement(be.a,{size:"md"}),d.a.createElement(ke,{tokenName:"TBOND",description:"Current Price: (TOMB)^2",price:Number(null===r||void 0===r?void 0:r.tokenInFtm).toFixed(2)||"-"})),d.a.createElement(Pe,null,d.a.createElement(pe,{action:"Redeem",fromToken:t.TBOND,fromTokenName:"TBOND",toToken:t.TOMB,toTokenName:"TOMB",priceDesc:"".concat(Object(U.a)(u)," TBOND Available in wallet"),onExchange:p,disabled:!r||u.eq(0)||!b,disabledDescription:b?null:"Enabled when TOMB > ".concat(1.01,"FTM")})))):d.a.createElement(x.a,null)))}},868:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return u}));var a=t(1),r=t(64),c=t(59),i=t(114);function o(){var e=Object(c.b)(),n=e.chainId,t=e.account,o=Object(r.b)();return Object(a.useCallback)((function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.summary,c=a.approval;if(t&&n){var l=e.hash;if(!l)throw Error("No transaction hash found.");o(Object(i.a)({hash:l,from:t,chainId:n,approval:c,summary:r}))}}),[o,n,t])}function l(){var e,n=Object(c.b)().chainId,t=Object(r.c)((function(e){return e.transactions}));return n&&null!==(e=t[n])&&void 0!==e?e:{}}function u(e,n){var t=l();return Object(a.useMemo)((function(){return"string"===typeof e&&"string"===typeof n&&Object.keys(t).some((function(a){var r=t[a];if(!r)return!1;if(r.receipt)return!1;var c=r.approval;return!!c&&(c.spender===n&&c.tokenAddress===e&&function(e){return(new Date).getTime()-e.addedTime<864e5}(r))}))}),[t,n,e])}},880:function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var a,r,c,i,o,l,u=t(30),s=t(1),d=t.n(s),m=t(25),f=t(841),p=m.d.div(a||(a=Object(u.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ","px;\n  display: flex;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.color.grey[200]}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.spacing[3]})),b=m.d.input(r||(r=Object(u.a)(["\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(e){return e.theme.color.grey[600]})),h=function(e){var n=e.endAdornment,t=e.onChange,a=e.placeholder,r=e.startAdornment,c=e.value;return d.a.createElement(p,null,!!r&&r,d.a.createElement(b,{placeholder:a,value:c,onChange:t}),!!n&&n)},g=m.d.div(c||(c=Object(u.a)([""]))),x=m.d.div(i||(i=Object(u.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),O=m.d.div(o||(o=Object(u.a)(["\n  align-items: center;\n  display: flex;\n"]))),v=m.d.div(l||(l=Object(u.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.color.grey[400]})),j=function(e){var n=e.max,t=e.symbol,a=e.onChange,r=e.onSelectMax,c=e.value;return d.a.createElement(g,null,d.a.createElement(v,null,n.toLocaleString()," ",t," Available"),d.a.createElement(h,{endAdornment:d.a.createElement(O,null,d.a.createElement(x,null),d.a.createElement("div",null,d.a.createElement(f.a,{size:"small",color:"primary",variant:"contained",onClick:r},"Max"))),onChange:a,placeholder:"0",value:c}))}},881:function(e,n,t){"use strict";var a=t(2),r=t.n(a),c=t(16),i=t(27),o=t(1),l=t(59);n.a=function(e,n,t){var a=Object(o.useState)(null),u=Object(i.a)(a,2),s=u[0],d=u[1],m=Object(l.b)().account,f=Object(o.useCallback)(Object(c.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.allowance(m,n);case 2:a=t.sent,d(a);case 4:case"end":return t.stop()}}),t)}))),[m,n,e]);return Object(o.useEffect)((function(){m&&n&&e&&f().catch((function(e){return console.error("Failed to fetch allowance: ".concat(e.stack))}))}),[m,n,e,t,f]),s}},889:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var a,r,c,i=t(30),o=t(1),l=t.n(o),u=t(25),s=u.d.div(a||(a=Object(i.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  height: 96px;\n  margin: ","px ","px\n    ","px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.color.grey[100]}),(function(e){return e.theme.spacing[4]}),(function(e){return-e.theme.spacing[4]}),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),d=u.d.div(r||(r=Object(i.a)(["\n  flex: 1;\n"]))),m=u.d.div(c||(c=Object(i.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]})),f=function(e){var n=e.children,t=l.a.Children.toArray(n).length;return l.a.createElement(s,null,l.a.Children.map(n,(function(e,n){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null,e),n<t-1&&l.a.createElement(m,null))})))}},890:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a,r=t(2),c=t.n(r),i=t(16),o=t(108),l=t(35),u=t(1),s=t(868),d=t(881),m=o.a.constants.MaxUint256,f=l.a.from("1000000000000000000000000");!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(a||(a={})),n.b=function(e,n){var t=Object(s.a)(e.address,n),r=Object(d.a)(e,n,t),o=Object(u.useMemo)((function(){return r?r.lt(f)?t?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN}),[r,t]),l=Object(s.b)(),p=Object(u.useCallback)(Object(i.a)(c.a.mark((function t(){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o===a.NOT_APPROVED){t.next=3;break}return console.error("approve was called unnecessarily"),t.abrupt("return");case 3:return t.next=5,e.approve(n,m);case 5:r=t.sent,l(r,{summary:"Approve ".concat(e.symbol),approval:{tokenAddress:e.address,spender:n}});case 7:case"end":return t.stop()}}),t)}))),[o,e,n,l]);return[o,p]}},897:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(1),r=t.n(a),c=t(855),i=t(235),o=function(){return r.a.createElement(c.a,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement(i.a,null))}},915:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a,r=t(30),c=t(1),i=t.n(c),o=t(25),l=o.d.div(a||(a=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),u=function(e){var n,t=e.size,a=void 0===t?"md":t,r=Object(c.useContext)(o.a).spacing;switch(a){case"lg":n=r[6];break;case"sm":n=r[2];break;case"md":default:n=r[4]}return i.a.createElement(l,{size:n})}},949:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var a,r,c,i=t(30),o=t(1),l=t.n(o),u=t(25),s=u.d.div(a||(a=Object(i.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: ","px;\n  padding-top: ","px;\n  max-width: 512px;\n  width: 100%;\n"])),(function(e){return e.theme.spacing[6]}),(function(e){return e.theme.spacing[6]})),d=u.d.h1(r||(r=Object(i.a)(["\n  color: ",";\n  font-size: 36px;\n  font-weight: 700;\n  margin: 0;\n  padding: 0;\n"])),(function(e){return e.theme.color.grey[100]})),m=u.d.h3(c||(c=Object(i.a)(["\n  color: ",";\n  font-size: 18px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n"])),(function(e){return e.theme.color.grey[400]})),f=function(e){e.icon;var n=e.subtitle,t=e.title;return l.a.createElement(s,null,l.a.createElement(d,null,t),l.a.createElement(m,null,n))}},985:function(e,n){e.exports="data:image/png;base64,NDA0OiBOb3QgRm91bmQ="}}]);