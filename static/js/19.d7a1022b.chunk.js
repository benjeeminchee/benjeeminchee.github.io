(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{245:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},248:function(e,t,a){"use strict";var l=a(33),n=a(242),r=a(0),c=a.n(r),s=a(1),o=a.n(s),u=a(240),i=a.n(u),m=a(241),p={tag:m.q,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},d=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,s=e.tag,o=e.form,u=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),p=Object(m.m)(i()(t,r?"no-gutters":null,o?"form-row":"row"),a);return c.a.createElement(s,Object(l.a)({},u,{className:p}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},249:function(e,t,a){"use strict";var l=a(33),n=a(242),r=a(245),c=a.n(r),s=a(0),o=a.n(s),u=a(1),i=a.n(u),m=a(240),p=a.n(m),d=a(241),E=i.a.oneOfType([i.a.number,i.a.string]),h=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),push:Object(d.h)(E,'Please use the prop "order"'),pull:Object(d.h)(E,'Please use the prop "order"'),order:E,offset:E})]),f={tag:d.q,xs:h,sm:h,md:h,lg:h,xl:h,className:i.a.string,cssModule:i.a.object,widths:i.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},O=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,r=e.widths,s=e.tag,u=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach(function(t,l){var n=e[t];if(delete u[t],n||""===n){var r=!l;if(c()(n)){var s,o=r?"-":"-"+t+"-",m=O(r,t,n.size);i.push(Object(d.m)(p()(((s={})[m]=n.size||""===n.size,s["order"+o+n.order]=n.order||0===n.order,s["offset"+o+n.offset]=n.offset||0===n.offset,s)),a))}else{var E=O(r,t,n);i.push(E)}}}),i.length||i.push("col");var m=Object(d.m)(p()(t,i),a);return o.a.createElement(s,Object(l.a)({},u,{className:m}))};g.propTypes=f,g.defaultProps=b,t.a=g},251:function(e,t,a){"use strict";var l=a(33),n=a(242),r=a(0),c=a.n(r),s=a(1),o=a.n(s),u=a(240),i=a.n(u),m=a(241),p={tag:m.q,className:o.a.string,cssModule:o.a.object},d=function(e){var t=e.className,a=e.cssModule,r=e.tag,s=Object(n.a)(e,["className","cssModule","tag"]),o=Object(m.m)(i()(t,"card-header"),a);return c.a.createElement(r,Object(l.a)({},s,{className:o}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},266:function(e,t,a){!function(e){"use strict";function t(e){var t=this,a={ABOVE:"above",BELOW:"below",CHARTJS_TOOLTIP:"chartjs-tooltip",NO_TRANSFORM:"no-transform",TOOLTIP_BODY:"tooltip-body",TOOLTIP_BODY_ITEM:"tooltip-body-item",TOOLTIP_BODY_ITEM_COLOR:"tooltip-body-item-color",TOOLTIP_BODY_ITEM_LABEL:"tooltip-body-item-label",TOOLTIP_BODY_ITEM_VALUE:"tooltip-body-item-value",TOOLTIP_HEADER:"tooltip-header",TOOLTIP_HEADER_ITEM:"tooltip-header-item"},l={DIV:"div",SPAN:"span",TOOLTIP:(this._chart.canvas.id||function(){var e=function(){return(65536*(1+Math.random())|0).toString(16)},a="_canvas-"+(e()+e());return t._chart.canvas.id=a,a}())+"-tooltip"},n=document.getElementById(l.TOOLTIP);if(n||((n=document.createElement("div")).id=l.TOOLTIP,n.className=a.CHARTJS_TOOLTIP,this._chart.canvas.parentNode.appendChild(n)),0!==e.opacity){if(n.classList.remove(a.ABOVE,a.BELOW,a.NO_TRANSFORM),e.yAlign?n.classList.add(e.yAlign):n.classList.add(a.NO_TRANSFORM),e.body){var r=e.title||[],c=document.createElement(l.DIV);c.className=a.TOOLTIP_HEADER,r.forEach(function(e){var t=document.createElement(l.DIV);t.className=a.TOOLTIP_HEADER_ITEM,t.innerHTML=e,c.appendChild(t)});var s=document.createElement(l.DIV);s.className=a.TOOLTIP_BODY;var o=e.body.map(function(e){return e.lines});o.forEach(function(t,n){var r=document.createElement(l.DIV);r.className=a.TOOLTIP_BODY_ITEM;var c=e.labelColors[n],o=document.createElement(l.SPAN);if(o.className=a.TOOLTIP_BODY_ITEM_COLOR,o.style.backgroundColor=c.backgroundColor,r.appendChild(o),t[0].split(":").length>1){var u=document.createElement(l.SPAN);u.className=a.TOOLTIP_BODY_ITEM_LABEL,u.innerHTML=t[0].split(": ")[0],r.appendChild(u);var i=document.createElement(l.SPAN);i.className=a.TOOLTIP_BODY_ITEM_VALUE,i.innerHTML=t[0].split(": ").pop(),r.appendChild(i)}else{var m=document.createElement(l.SPAN);m.className=a.TOOLTIP_BODY_ITEM_VALUE,m.innerHTML=t[0],r.appendChild(m)}s.appendChild(r)}),n.innerHTML="",n.appendChild(c),n.appendChild(s)}var u=this._chart.canvas.offsetTop,i=this._chart.canvas.offsetLeft;n.style.opacity=1,n.style.left=i+e.caretX+"px",n.style.top=u+e.caretY+"px"}else n.style.opacity=0}var a=t;e.CustomTooltips=t,e.customTooltips=a,Object.defineProperty(e,"__esModule",{value:!0})}(t)},289:function(e,t,a){"use strict";function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",function(){return l})},301:function(e,t,a){"use strict";function l(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",function(){return l})},437:function(e,t,a){"use strict";var l=a(33),n=a(242),r=a(0),c=a.n(r),s=a(1),o=a.n(s),u=a(240),i=a.n(u),m=a(241),p={tag:m.q,flush:o.a.bool,className:o.a.string,cssModule:o.a.object},d=function(e){var t=e.className,a=e.cssModule,r=e.tag,s=e.flush,o=Object(n.a)(e,["className","cssModule","tag","flush"]),u=Object(m.m)(i()(t,"list-group",!!s&&"list-group-flush"),a);return c.a.createElement(r,Object(l.a)({},o,{className:u}))};d.propTypes=p,d.defaultProps={tag:"ul"},t.a=d},438:function(e,t,a){"use strict";var l=a(33),n=a(242),r=a(0),c=a.n(r),s=a(1),o=a.n(s),u=a(240),i=a.n(u),m=a(241),p={tag:m.q,active:o.a.bool,disabled:o.a.bool,color:o.a.string,action:o.a.bool,className:o.a.any,cssModule:o.a.object},d=function(e){e.preventDefault()},E=function(e){var t=e.className,a=e.cssModule,r=e.tag,s=e.active,o=e.disabled,u=e.action,p=e.color,E=Object(n.a)(e,["className","cssModule","tag","active","disabled","action","color"]),h=Object(m.m)(i()(t,!!s&&"active",!!o&&"disabled",!!u&&"list-group-item-action",!!p&&"list-group-item-"+p,"list-group-item"),a);return o&&(E.onClick=d),c.a.createElement(r,Object(l.a)({},E,{className:h}))};E.propTypes=p,E.defaultProps={tag:"li"},t.a=E},469:function(e,t,a){"use strict";a.r(t);var l=a(289),n=a(301),r=a(85),c=a(86),s=a(89),o=a(87),u=a(88),i=a(90),m=a(0),p=a.n(m),d=a(249),E=a(252),h=a(251),f=a(253),b=a(437),O=a(438),g=a(248),T=a(274),v=(a(266),["#FF6384","#36A2EB","#FFCE56","#4BC0C0"]),G=["#FF6384","#36A2EB","#FFCE56","#4BC0C0"],N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).toggle=a.toggle.bind(Object(i.a)(Object(i.a)(a))),a.getSum=a.getSum.bind(Object(i.a)(Object(i.a)(a))),a.state={activeTab:1,groupLabels:["unsorted income","product sales","service","others"],initialGroup:[{amt:1e4,date:"10 March 2019",to:"xxx-xxx-xxx",descr:"STOCK_PUR"},{amt:3e4,date:"15 March 2019",to:"xxx-xxx-xxx",descr:"STOCK_PUR"},{amt:5e3,date:"20 March 2019",to:"xxx-xxx-xxx",descr:"CONSULT"},{amt:3500,date:"31 March 2019",to:"xxx-xxx-xxx",descr:"MISC"}],productSaleGroup:[],serviceGroup:[],otherGroup:[],targetGroup:null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"getSum",value:function(e){for(var t=0,a=0;a<e.length;a++)t+=e[a].amt;return t}},{key:"handleListClick",value:function(e,t){var a;if(this.state.targetGroup){var r=[],c=[],s=[],o=[];switch(t){case"initialGroup":r=this.state.initialGroup;break;case"productSaleGroup":r=this.state.productSaleGroup;break;case"serviceGroup":r=this.state.serviceGroup;break;case"otherGroup":r=this.state.otherGroup}switch(this.state.targetGroup){case"initialGroup":c=this.state.initialGroup;break;case"productSaleGroup":c=this.state.productSaleGroup;break;case"serviceGroup":c=this.state.serviceGroup;break;case"otherGroup":c=this.state.otherGroup}if(r!=c){var u=r.indexOf(e);u>-1&&(s=[].concat(Object(n.a)(r.slice(0,u)),Object(n.a)(r.slice(u+1))),o=c.concat(e)),this.setState((a={},Object(l.a)(a,t,s),Object(l.a)(a,this.state.targetGroup,o),a)),console.log(s,o)}}}},{key:"setTargetGroup",value:function(e){this.state.targetGroup==e?this.setState({targetGroup:null}):this.setState({targetGroup:e})}},{key:"componentWillUpdate",value:function(e,t){this.unSortedAmt=this.getSum(t.initialGroup),this.productSaleAmt=this.getSum(t.productSaleGroup),this.serviceAmt=this.getSum(t.serviceGroup),this.otherAmt=this.getSum(t.otherGroup),this.doughnut={labels:t.groupLabels,datasets:[{data:[this.unSortedAmt,this.productSaleAmt,this.serviceAmt,this.otherAmt],backgroundColor:v,hoverBackgroundColor:G}]}}},{key:"render",value:function(){var e=this;return this.unSortedAmt=this.getSum(this.state.initialGroup),this.productSaleAmt=this.getSum(this.state.productSaleGroup),this.serviceAmt=this.getSum(this.state.serviceGroup),this.otherAmt=this.getSum(this.state.otherGroup),this.doughnut={labels:this.state.groupLabels,datasets:[{data:[this.unSortedAmt,this.productSaleAmt,this.serviceAmt,this.otherAmt],backgroundColor:v,hoverBackgroundColor:G}]},p.a.createElement("div",{className:"animated fadeIn container"},p.a.createElement("div",{className:"flexbox-item"},p.a.createElement(d.a,null,p.a.createElement(E.a,null,p.a.createElement(h.a,null,"Income Breakdown",p.a.createElement("div",{className:"card-header-actions"},p.a.createElement("a",{href:"http://www.chartjs.org",className:"card-header-action"},p.a.createElement("small",{className:"text-muted"},"docs")))),p.a.createElement(f.a,null,p.a.createElement("div",{className:"chart-wrapper"},p.a.createElement(T.b,{data:this.doughnut})))),p.a.createElement(E.a,{className:"initialGroup"==this.state.targetGroup?"outline-class":null},p.a.createElement(h.a,{onClick:function(){return e.setTargetGroup("initialGroup")}},p.a.createElement("i",{className:"fa fa-align-justify"}),p.a.createElement("strong",null,"Unsorted Income")),p.a.createElement(f.a,null,p.a.createElement(b.a,null,p.a.createElement(O.a,null,p.a.createElement(g.a,null,p.a.createElement(d.a,null,p.a.createElement("b",null,"Transaction Amount")),p.a.createElement(d.a,null,p.a.createElement("b",null,"Date")),p.a.createElement(d.a,null,p.a.createElement("b",null,"Destination")),p.a.createElement(d.a,null,p.a.createElement("b",null,"Description")))),this.state.initialGroup.map(function(t){return p.a.createElement(O.a,{onClick:function(){return e.handleListClick(t,"initialGroup")}},p.a.createElement(g.a,null,p.a.createElement(d.a,null," $",t.amt," "),p.a.createElement(d.a,null," ",t.date," "),p.a.createElement(d.a,null," ",t.to),p.a.createElement(d.a,null," ",t.descr)))}))),p.a.createElement(h.a,{className:"text-expense"},"Total Income: $",this.unSortedAmt," ")))),p.a.createElement("div",{className:"flexbox-item"},p.a.createElement(d.a,null,p.a.createElement(g.a,null,p.a.createElement(E.a,{className:"productSaleGroup"==this.state.targetGroup?"outline-class":null},p.a.createElement(h.a,{onClick:function(){return e.setTargetGroup("productSaleGroup")}},p.a.createElement("i",{className:"fa fa-align-justify"}),p.a.createElement("strong",null,"Product Sales")),p.a.createElement(f.a,null,p.a.createElement(b.a,null,p.a.createElement(O.a,null,p.a.createElement(g.a,null,p.a.createElement(d.a,null,p.a.createElement("b",null,"Transaction Amount")),p.a.createElement(d.a,null,p.a.createElement("b",null,"Date")),p.a.createElement(d.a,null,p.a.createElement("b",null,"Destination")),p.a.createElement(d.a,null,p.a.createElement("b",null,"Description")))),this.state.productSaleGroup.map(function(t){return p.a.createElement(O.a,{onClick:function(){return e.handleListClick(t,"productSaleGroup")}},p.a.createElement(g.a,null,p.a.createElement(d.a,null," $",t.amt," "),p.a.createElement(d.a,null," Date: ",t.date," "),p.a.createElement(d.a,null," To: ",t.to),p.a.createElement(d.a,null," Descr: ",t.descr)))}))),p.a.createElement(h.a,{className:"text-expense"},"Total Income: $",this.productSaleAmt," "))),p.a.createElement(g.a,null,p.a.createElement(E.a,{className:"serviceGroup"==this.state.targetGroup?"outline-class":null},p.a.createElement(h.a,{onClick:function(){return e.setTargetGroup("serviceGroup")}},p.a.createElement("i",{className:"fa fa-align-justify"}),p.a.createElement("strong",null,"Service")),p.a.createElement(f.a,null,p.a.createElement(b.a,null,p.a.createElement(O.a,null,p.a.createElement(g.a,null,p.a.createElement(d.a,null,p.a.createElement("b",null,"Transaction Amount")),p.a.createElement(d.a,null,p.a.createElement("b",null,"Date")),p.a.createElement(d.a,null,p.a.createElement("b",null,"Destination")),p.a.createElement(d.a,null,p.a.createElement("b",null,"Description")))),this.state.serviceGroup.map(function(t){return p.a.createElement(O.a,{onClick:function(){return e.handleListClick(t,"serviceGroup")}},p.a.createElement(g.a,null,p.a.createElement(d.a,null," $",t.amt," "),p.a.createElement(d.a,null," Date: ",t.date," "),p.a.createElement(d.a,null," To: ",t.to),p.a.createElement(d.a,null," Descr: ",t.descr)))}))),p.a.createElement(h.a,{className:"text-expense"},"Total Income: $",this.serviceAmt," "))),p.a.createElement(g.a,null,p.a.createElement(E.a,{className:"otherGroup"==this.state.targetGroup?"outline-class":null},p.a.createElement(h.a,{onClick:function(){return e.setTargetGroup("otherGroup")}},p.a.createElement("i",{className:"fa fa-align-justify"}),p.a.createElement("strong",null,"Other")),p.a.createElement(f.a,null,p.a.createElement(b.a,null,p.a.createElement(O.a,null,p.a.createElement(g.a,null,p.a.createElement(d.a,null,p.a.createElement("b",null,"Transaction Amount")),p.a.createElement(d.a,null,p.a.createElement("b",null,"Date")),p.a.createElement(d.a,null,p.a.createElement("b",null,"Destination")),p.a.createElement(d.a,null,p.a.createElement("b",null,"Description")))),this.state.otherGroup.map(function(t){return p.a.createElement(O.a,{onClick:function(){return e.handleListClick(t,"otherGroup")}},p.a.createElement(g.a,null,p.a.createElement(d.a,null," $",t.amt," "),p.a.createElement(d.a,null," Date: ",t.date," "),p.a.createElement(d.a,null," To: ",t.to),p.a.createElement(d.a,null," Descr: ",t.descr)))}))),p.a.createElement(h.a,{className:"text-expense"},"Total Income: $",this.otherAmt," "))))))}}]),t}(m.Component);t.default=N}}]);
//# sourceMappingURL=19.d7a1022b.chunk.js.map