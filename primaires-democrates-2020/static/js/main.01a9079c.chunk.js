(this["webpackJsonplibe-apps-template"]=this["webpackJsonplibe-apps-template"]||[]).push([[0],{16:function(e,t,a){"undefined"!==typeof window&&window.location.protocol,"undefined"!==typeof window&&window.location.hostname;var n={meta:{author:"Maxime Fabas",title:"Primaires d\xe9mocrates 2020",url:"https://www.liberation.fr/apps/2020/01/primaires-democrates-2020",description:"",image:"",xiti_id:"primaires-democrates-2020",tweet:"Some tweet text"},tracking:{active:!1,format:"libe-apps-template",article:"libe-apps-template"},show_header:!0,statics_url:"https://www.liberation.fr/apps/static",api_url:"https://libe-labo-2.site/api",stylesheet:"primaires-democrates.css",spreadsheet:"https://docs.google.com/spreadsheets/d/e/2PACX-1vT99eXOlXkLDOGU7ucGzQ0G9zZEsQkNuDdp8iMy58gkW9TEnMpjn9cnNmpgnPgz6PU0HdVbjciIbkAp/pub?gid=1987543395&single=true&output=tsv"};e.exports=n},35:function(e,t,a){e.exports=a(59)},59:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),i=a(5),c=a(4),s=a(7),l=a(6),o=a(0),d=a.n(o),m=a(25),u=a.n(m),p=a(26);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=a(22),_=a(10),v=a(18),f=a(13),w=a.n(f),b=a(8),E=a.n(b),g=a(27),L=a(28),y=a(34),k=a(33),B=a(14),O=a(19),j=a(15),x=a(11),C=a(16),S=a.n(C);function A(e){var t=e.scrollToContentStart,a="primaires-democrates-header",n=[a];return d.a.createElement("div",{className:n.join(" ")},d.a.createElement("div",{className:"".concat(a,"_desktop")},d.a.createElement("div",{className:"".concat(a,"_desktop-left")},d.a.createElement(j.a,null,d.a.createElement("span",null,"Primaires d\xe9mocrates"),d.a.createElement("span",null,"La course \xe0 l'investiture"))),d.a.createElement("div",{className:"".concat(a,"_desktop-right")},d.a.createElement(B.a,null),d.a.createElement(O.a,{authors:[{name:"Baptiste\xa0Bouthier",role:"R\xe9alisation"},{name:"Clara\xa0de\xa0Alberto",role:"R\xe9alisation"},{name:"Maxime\xa0Fabas",role:"R\xe9alisation"}]}))),d.a.createElement("div",{className:"".concat(a,"_mobile")},d.a.createElement(j.a,null,d.a.createElement("span",null,"Primaires d\xe9mocrates"),d.a.createElement("span",null,"la course \xe0 l'investiture")),d.a.createElement(B.a,null),d.a.createElement(O.a,{authors:[{name:"Baptiste\xa0Bouthier",role:"R\xe9alisation"},{name:"Clara\xa0de\xa0Alberto",role:"R\xe9alisation"},{name:"Maxime\xa0Fabas",role:"R\xe9alisation"}]}),d.a.createElement("button",{onClick:function(e){e&&e.preventDefault&&e.preventDefault(),t&&t()}},d.a.createElement(x.a,{src:"".concat(C.statics_url,"/assets/down-arrow-head-icon_24.svg")}))))}function N(e){var t=Object(o.useState)(window.LBLB_GLOBAL.nav_height),a=Object(v.a)(t,2),n=a[0],r=a[1],i=Object(o.useState)(!1),c=Object(v.a)(i,2),s=c[0],l=c[1];function m(){r(window.LBLB_GLOBAL.nav_height)}function u(){var e=document.querySelector(".primaires-democrates-header");if(e){var t=e.clientHeight,a=window.scrollY;l(a>=t)}}Object(o.useEffect)((function(){return window.setInterval(m,500),window.addEventListener("scroll",u),function(){window.clearInterval(m),window.removeEventListener("scroll",u)}}),[]);var p="primaires-democrates-sticky-header",h=[p];return s&&h.push("".concat(p,"_visible")),d.a.createElement("div",{style:{top:n},className:h.join(" ")},d.a.createElement(j.a,{level:6},d.a.createElement("span",null,"Primaires d\xe9mocrates"),d.a.createElement("span",null,"La course \xe0 l'investiture")))}a(24);var M=a(17),D=a(12);function G(e){var t=e.advancement,a=e.showExplanations;var n=E()().format("DD MMMM YYYY"),r=["primaires-democrates-intro"];return d.a.createElement("div",{className:r.join(" ")},d.a.createElement(M.a,{level:10},d.a.createElement("span",null,"Au ",n),d.a.createElement("span",null,"il reste ",100-Math.round(100*t),"% d\xe9l\xe9gu\xe9s \xe0 \xe9lire")),d.a.createElement(D.a,null,d.a.createElement("a",{href:"#",onClick:function(e){e&&e.preventDefault&&e.preventDefault(),a&&a()}},"J'ai rien compris")))}function Y(e){var t=e.value,a=e.activateCandidate,n=e.isFirst,r=e.percentScore;var i=t._scores.reduce((function(e,t){return e+Number(t.delegates||0)}),0),c="primaires-democrates-candidate",s=[c];return d.a.createElement("div",{onClick:function(e){a&&t.id&&a(t.id)},className:s.join(" "),"data-relative-score":r},d.a.createElement("div",{className:"".concat(c,"__score-gauge-range")},d.a.createElement("div",{className:"".concat(c,"__score-gauge")},t.score)),d.a.createElement("div",{className:"".concat(c,"__photo"),style:{backgroundImage:"url(".concat(t.photo,")")}},t.name),d.a.createElement("span",{className:"".concat(c,"__name")},d.a.createElement(M.a,{level:10},t.short_name)),d.a.createElement("span",{className:"".concat(c,"__score")},d.a.createElement(M.a,{level:10},n?"".concat(i," d\xe9l\xe9gu\xe9s"):i)))}function T(e){var t=e.candidates,a=e.activateCandidate,n=t.map((function(e){return Object(h.a)({},e,{_total_score:e._scores.reduce((function(e,t){return e+Number(t.delegates||0)}),0)})})),r=Math.max.apply(Math,Object(_.a)(n.map((function(e){return e._total_score})))),i=Object(_.a)(n).sort((function(e,t){return t._total_score-e._total_score}));Object(o.useEffect)((function(){var e=document.querySelector(".primaires-democrates-scores");if(e){var t=Object(_.a)(e.querySelectorAll(".primaires-democrates-candidate"));t&&t.forEach((function(e,t){var a=100*Number(e.getAttribute("data-relative-score")),n=e.querySelector(".primaires-democrates-candidate__score-gauge");(a||0===a)&&(n&&(Element.prototype.animate?n.animate([{width:"0%"},{width:"".concat(a,"%")}],{duration:400,delay:500+50*t,easing:"ease-out"}).onfinish=function(){return n.style.width="".concat(a,"%")}:n.style.width="".concat(a,"%")))}))}}),[t]);var c=["primaires-democrates-scores"];return d.a.createElement("div",{className:c.join(" ")},i.map((function(e,t){return d.a.createElement(Y,{isFirst:0===t,key:e.id,percentScore:e._total_score/r,activateCandidate:a,value:e})})))}function P(e){var t=e.value,a=e.activateState;var n=["primaires-democrates-state"];return d.a.createElement("div",{onClick:function(e){a&&t.id&&a(t.id)},className:n.join(" ")},d.a.createElement("span",null,E()(t.date,"DD/MM/YYYY").format("DD MMMM")),d.a.createElement("span",null,t.name))}function H(e){var t=e.states,a=e.activateState,n=t.sort((function(e,t){return E()(e.date,"DD/MM/YYYY")-E()(t.date,"DD/MM/YYYY")})),r=["primaires-democrates-calendar"];return d.a.createElement("div",{className:r.join(" ")},n.map((function(e){return d.a.createElement(P,{value:e,key:e.id,activateState:a})})))}function q(e){var t=["primaires-democrates-navigation"];return d.a.createElement("div",{className:t.join(" ")},d.a.createElement("button",null,"La course"),d.a.createElement("button",null,"Le calendrier"),d.a.createElement("button",null,"Retour \xe0 la course"),d.a.createElement("button",null,"Retour au calendrier"))}function K(e){var t=e.links,a=["primaires-democrates-read-also"];return d.a.createElement("div",{className:a.join(" ")},d.a.createElement("div",null,"\xc0 lire aussi"),d.a.createElement("div",null,(t||[]).map((function(e){return d.a.createElement("div",{key:e.title},d.a.createElement("a",{href:e.url,target:"_blank"},e.title))}))))}function R(e){var t=["primaires-democrates-explanations"];return d.a.createElement("div",{className:t.join(" ")},"Explanations")}function F(e){var t=e.candidate,a=t?t.name:null,n=t?t.bio:null,r=["primaires-democrates-candidate-bio"];return d.a.createElement("div",{className:r.join(" ")},d.a.createElement("div",null,a),d.a.createElement("div",null,n))}function I(e){var t=e.state,a=e.candidates,n=e.activateCandidate;var r=["primaires-democrates-state-details"],i=t?E()(t.date,"DD/MM/YYYY").format("DD MMMM"):null,c=t?t.name:null,s=a.map((function(e){var a=e._scores.find((function(e){return e.state===t}));return{id:e.id,name:e.name,delegates:a?a.delegates:0,percentage:a?a.percentage:0}})).sort((function(e,t){return t.delegates-e.delegates}));return d.a.createElement("div",{className:r.join(" ")},d.a.createElement("span",null,i),d.a.createElement("span",null,c),d.a.createElement("div",null,s.map((function(e){return d.a.createElement("div",{key:e.id,onClick:function(t){return a=e.id,void(n&&n(a));var a}},d.a.createElement("span",null,e.name),d.a.createElement("span",null,e.percentage),d.a.createElement("span",null,e.delegates," d\xe9l\xe9gu\xe9s"))}))))}function U(e){var t=e.mode,a=e.content,n=e.candidates,r=e.states,i=e.close,c=e.activateCandidate;var s=null;"explanations"===t?s=d.a.createElement(R,null):"candidate"===t?s=d.a.createElement(F,{candidate:n.find((function(e){return e.id===a}))}):"state"===t&&(s=d.a.createElement(I,{candidates:n,activateCandidate:c,state:r.find((function(e){return e.id===a}))}));var l=["primaires-democrates-detail-panel"];return d.a.createElement("div",{className:l.join(" ")},d.a.createElement("button",{onClick:function(e){e&&e.preventDefault&&e.preventDefault(),i&&i()}},"CLOSE"),s)}var W=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(i.a)(this,Object(c.a)(t).call(this))).c="lblb-some-app",e.state={loading_sheet:!0,error_sheet:null,data_sheet:{candidates:[],states:[],links:[]},show_detail_panel:!1,detail_panel_mode:null,detail_panel_content:null,keystrokes_history:[],konami_mode:!1},e.fetchSheet=e.fetchSheet.bind(Object(s.a)(e)),e.fetchCredentials=e.fetchCredentials.bind(Object(s.a)(e)),e.listenToKeyStrokes=e.listenToKeyStrokes.bind(Object(s.a)(e)),e.watchKonamiCode=e.watchKonamiCode.bind(Object(s.a)(e)),e.showExplanations=e.showExplanations.bind(Object(s.a)(e)),e.activateCandidate=e.activateCandidate.bind(Object(s.a)(e)),e.activateState=e.activateState.bind(Object(s.a)(e)),e.closeDetailPanel=e.closeDetailPanel.bind(Object(s.a)(e)),e.scrollToContentStart=e.scrollToContentStart.bind(Object(s.a)(e)),e}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){return document.addEventListener("keydown",this.listenToKeyStrokes),this.fetchCredentials(),this.props.spreadsheet?this.fetchSheet():this.setState({loading_sheet:!1})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.listenToKeyStrokes)}},{key:"fetchCredentials",value:function(){var e,t,a,n,r,i,c,s,l,o;return w.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return e=this.props.api_url,t=this.props.tracking,a=t.format,n=t.article,r="".concat(e,"/").concat(a,"/").concat(n,"/load"),d.prev=3,d.next=6,w.a.awrap(window.fetch(r,{method:"POST"}));case 6:return i=d.sent,d.next=9,w.a.awrap(i.json());case 9:return c=d.sent,s=c._credentials,l=s.lblb_tracking,o=s.lblb_posting,window.LBLB_GLOBAL||(window.LBLB_GLOBAL={}),window.LBLB_GLOBAL.lblb_tracking=l,window.LBLB_GLOBAL.lblb_posting=o,d.abrupt("return",{lblb_tracking:l,lblb_posting:o});case 17:return d.prev=17,d.t0=d.catch(3),console.error("Unable to fetch credentials:"),console.error(d.t0),d.abrupt("return",Error(d.t0));case 22:case"end":return d.stop()}}),null,this,[[3,17]])}},{key:"fetchSheet",value:function(){var e,t,a,n,r,i,c,s,l,o;return w.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return this.setState({loading_sheet:!0,error_sheet:null}),e=this.props.spreadsheet,d.prev=2,d.next=5,w.a.awrap(window.fetch(this.props.spreadsheet));case 5:if((t=d.sent).ok){d.next=8;break}throw t;case 8:return d.next=10,w.a.awrap(t.text());case 10:return a=d.sent,n=Object(g.parseTsv)(a,[63,5,2]),r=Object(v.a)(n,3),i=r[0],c=r[1],s=r[2],l=i.map((function(e){var t={_scores:[]};return Object.keys(e).forEach((function(a){if(a.match(/^id|name|bio|photo|racing$/))t[a]=e[a];else{var n=e[a].split(";");t._scores.push({state:a,delegates:Number((n[0]||"0").trim()),percentage:Number((n[1]||"0%").trim().replace(/%/gim,""))/100})}})),t})),this.setState({loading_sheet:!1,error_sheet:null,data_sheet:{candidates:l,states:c,links:s}}),d.abrupt("return",a);case 17:if(d.prev=17,d.t0=d.catch(2),!d.t0.status){d.next=26;break}return o="".concat(d.t0.status," error while fetching : ").concat(e),this.setState({loading_sheet:!1,error_sheet:d.t0}),console.error(o,d.t0),d.abrupt("return",Error(o));case 26:return this.setState({loading_sheet:!1,error_sheet:d.t0}),console.error(d.t0),d.abrupt("return",Error(d.t0));case 29:case"end":return d.stop()}}),null,this,[[2,17]])}},{key:"listenToKeyStrokes",value:function(e){if(e&&e.keyCode){var t=this.state.keystrokes_history,a=[].concat(Object(_.a)(t),[e.keyCode]);this.setState({keystrokes_history:a}),this.watchKonamiCode()}}},{key:"watchKonamiCode",value:function(){"38,38,40,40,37,39,37,39,66,65"===this.state.keystrokes_history.slice(-10).join(",")&&this.setState({konami_mode:!0})}},{key:"showExplanations",value:function(){this.setState({show_detail_panel:!0,detail_panel_mode:"explanations",detail_panel_content:null})}},{key:"activateCandidate",value:function(e){this.setState({show_detail_panel:!0,detail_panel_mode:"candidate",detail_panel_content:e})}},{key:"activateState",value:function(e){this.setState({show_detail_panel:!0,detail_panel_mode:"state",detail_panel_content:e})}},{key:"closeDetailPanel",value:function(){this.setState({show_detail_panel:!1,detail_panel_mode:null,detail_panel_content:null})}},{key:"scrollToContentStart",value:function(){var e=document.querySelector(".primaires-democrates-intro");if(e){var t=window.LBLB_GLOBAL.nav_height;window.scroll({top:e.offsetTop-t,left:0,behavior:"smooth"})}}},{key:"render",value:function(){var e=this.c,t=this.state,a=this.props,n=[e];if(t.loading_sheet&&n.push("".concat(e,"_loading")),t.error_sheet&&n.push("".concat(e,"_error")),t.loading_sheet)return d.a.createElement("div",{className:n.join(" ")},d.a.createElement("div",{className:"lblb-default-apps-loader"},d.a.createElement(L.a,null)));if(t.error_sheet)return d.a.createElement("div",{className:n.join(" ")},d.a.createElement("div",{className:"lblb-default-apps-error"},d.a.createElement(y.a,null)));var r=E()().endOf("day"),i=t.data_sheet.states.map((function(e){var t=E()(e.date,"DD/MM/YYYY");return Object(h.a)({},e,{_passed:t<r})})),c=i.reduce((function(e,t){return e+Number(t.nb_delegates)}),0),s=i.reduce((function(e,t){return t._passed?e+Number(t.nb_delegates):e}),0)/c;return d.a.createElement("div",{className:n.join(" ")},d.a.createElement(A,{scrollToContentStart:this.scrollToContentStart}),d.a.createElement(N,null),d.a.createElement(G,{advancement:s,showExplanations:this.showExplanations}),d.a.createElement(T,{candidates:t.data_sheet.candidates,activateCandidate:this.activateCandidate}),d.a.createElement(H,{states:t.data_sheet.states,activateState:this.activateState}),d.a.createElement(q,null),d.a.createElement(K,{links:t.data_sheet.links}),d.a.createElement(U,{close:this.closeDetailPanel,activateCandidate:this.activateCandidate,mode:t.detail_panel_mode,content:t.detail_panel_content,candidates:t.data_sheet.candidates,states:t.data_sheet.states}),d.a.createElement("div",{className:"lblb-default-apps-footer"},d.a.createElement(k.a,{short:!0,iconsOnly:!0,tweet:a.meta.tweet,url:a.meta.url}),d.a.createElement(O.a,{publishedOn:"02/09/2019 17:13",updatedOn:"03/09/2019 10:36",authors:[{name:"Jean-Sol Partre",role:"",link:"www.liberation.fr"},{name:"Maxime Fabas",role:"Production",link:"lol.com"}]}),d.a.createElement(B.a,{target:"blank"})))}}]),t}(o.Component),z=(a(58),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).getElementsHeight=a.getElementsHeight.bind(Object(s.a)(a)),window.LBLB_GLOBAL||(window.LBLB_GLOBAL={}),window.LBLB_GLOBAL.rem=16,window.LBLB_GLOBAL.breakpoints={lg:{min:1+63*window.LBLB_GLOBAL.rem,max:1/0},md:{min:1+40*window.LBLB_GLOBAL.rem,max:63*window.LBLB_GLOBAL.rem},sm:{min:0,max:40*window.LBLB_GLOBAL.rem}},Object.defineProperty(window.LBLB_GLOBAL,"current_display",{get:function(){var e=this;return Object.keys(this.breakpoints).find((function(t){return e.breakpoints[t].min<=e.client_width&&e.breakpoints[t].max>=e.client_width}))}}),window.setInterval(a.getElementsHeight,250),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentWillUnmount",value:function(){window.clearInterval(this.getElementsHeight)}},{key:"componentDidMount",value:function(){var e=this.props.meta.xiti_id,t=document.createElement("script"),a=document.createElement("script"),n=document.createElement("script"),r=document.createElement("script"),i=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src","https://www.liberation.fr/menu/script.js"),a.innerHTML="\n    var _sf_async_config={};\n    _sf_async_config.uid = 43601;\n    _sf_async_config.domain = 'liberation.fr';\n    _sf_async_config.useCanonical = true;\n    _sf_async_config.sections = \"Static\";\n    _sf_async_config.authors = \"Static\";\n    (function(){\n      function loadChartbeat() {\n        window._sf_endpt=(new Date()).getTime();\n        var e = document.createElement('script');\n        e.setAttribute('language', 'javascript');\n        e.setAttribute('type', 'text/javascript');\n        e.setAttribute('src', 'https://static.chartbeat.com/' + 'js/chartbeat.js');\n        document.body.appendChild(e);\n      }\n      var oldonload = window.onload;\n      window.onload = (typeof window.onload != 'function') ?\n      loadChartbeat : function() { oldonload(); loadChartbeat(); };\n    })();",n.innerHTML="\n    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n     })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n     ga('create', 'UA-41822557-1', 'liberation.fr');\n     ga('create', 'UA-116918263-1', 'auto', 'SixPlus');\n     ga('send', 'pageview');\n     ga('SixPlus.send', 'pageview');",r.innerHTML='\n    xtnv = document;\n    xtsd = "https://logliberation";\n    xtsite = "507510";\n    xtn2 = "48";\n    xtpage = "LibeLabo::'.concat(e,'";\n    xtdi = "";\n    xt_pagetype = "";\n    xt_multc = "&x1=0&x2=43&x3=&x4=&x5=&x6=7&x7=";\n    xt_an = "";\n    xt_ac = "";\n    if (window.xtparam==null) { window.xtparam = \'\'; }\n    window.xtparam += "&ptype="+xt_pagetype+"&ac="+xt_ac+"&an="+xt_an+xt_multc;'),i.setAttribute("type","text/javascript"),i.setAttribute("src","https://statics.liberation.fr/bloom/theme/js/xtcore.js"),S.a.show_header&&document.body.appendChild(t),document.body.appendChild(a),document.body.appendChild(n),document.body.appendChild(r),document.body.appendChild(i)}},{key:"getElementsHeight",value:function(){var e=document.querySelector(".header-fix-nav"),t=document.querySelector("body"),a=window.LBLB_GLOBAL.nav_height,n=window.LBLB_GLOBAL.body_padding_top,r=window.LBLB_GLOBAL.client_width,i=window.LBLB_GLOBAL.client_height,c=e?e.offsetHeight:0,s=t?parseFloat(window.getComputedStyle(t)["padding-top"].slice(0,-2)):0,l=document.documentElement.clientWidth,o=document.documentElement.clientHeight,d=window.LBLB_GLOBAL.current_display;window.LBLB_GLOBAL.nav_height=c,window.LBLB_GLOBAL.body_padding_top=s,window.LBLB_GLOBAL.client_width=l,window.LBLB_GLOBAL.client_height=o,a===c&&n===s&&r===l&&i===o||window.dispatchEvent(new CustomEvent("lblb-client-dimensions-change")),d!==window.LBLB_GLOBAL.current_display&&window.dispatchEvent(new CustomEvent("lblb-client-display-change"))}},{key:"render",value:function(){var e=this.props,t=e.meta,a=e.statics_url,n=e.stylesheet,r=t.title,i=t.url,c=t.description,s=t.author,l=t.image;return d.a.createElement("div",{id:"libe-labo-app-wrapper"},d.a.createElement(p.Helmet,null,d.a.createElement("title",null,"Lib\xe9ration.fr \u2013 ",r),d.a.createElement("link",{rel:"canonical",href:i}),d.a.createElement("meta",{name:"author",content:s}),d.a.createElement("meta",{name:"description",content:c}),d.a.createElement("meta",{property:"og:url",content:i}),d.a.createElement("meta",{property:"og:title",content:r}),d.a.createElement("meta",{property:"og:description",content:c}),d.a.createElement("meta",{property:"og:image",content:l}),d.a.createElement("meta",{name:"twitter:url",content:i}),d.a.createElement("meta",{name:"twitter:title",content:r}),d.a.createElement("meta",{name:"twitter:description",content:c}),d.a.createElement("meta",{name:"twitter:image",content:l}),d.a.createElement("link",{rel:"stylesheet",href:"".concat(a,"/styles/liberation.css")}),d.a.createElement("link",{rel:"stylesheet",href:"".concat(a,"/lib/normalize-8.0.0.css")}),d.a.createElement("link",{rel:"stylesheet",href:"".concat(a,"/styles/fonts.css")}),d.a.createElement("link",{rel:"stylesheet",href:"".concat(a,"/styles/font-classes.css")}),d.a.createElement("link",{rel:"stylesheet",href:"".concat(a,"/styles/components.css")}),d.a.createElement("link",{rel:"stylesheet",href:"".concat(a,"/styles/apps.css")}),d.a.createElement("link",{rel:"stylesheet",href:"".concat(a,"/lib/leaflet-1.4.0/leaflet.css")}),d.a.createElement("link",{rel:"stylesheet",href:"".concat(a,"/styles/apps/").concat(n)}),d.a.createElement("link",{rel:"stylesheet",href:"./custom.css"})),d.a.createElement(W,e))}}]),t}(o.Component));u.a.render(d.a.createElement(z,S.a),document.getElementById("libe-labo-app-root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.01a9079c.chunk.js.map