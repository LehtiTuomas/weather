(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{38:function(t,e,a){},57:function(t,e,a){},59:function(t,e,a){},60:function(t,e,a){},61:function(t,e,a){},68:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),c=a(8),s=a.n(c),i=a(14),o=a.n(i),d=a(24),l=a(9),u=a(10),h=a(12),m=a(11),j=(a(38),a(25)),b=a.n(j).a.create({baseURL:"https://api.openweathermap.org",params:{appid:"fd3a962fb879d1c392826e0c9a6ea960"}}),y=(a(57),a(0)),f=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={term:""},t.onFormSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.term),t.setState({term:""}),document.activeElement.blur()},t}return Object(u.a)(a,[{key:"render",value:function(){var t=this;return Object(y.jsx)("div",{className:"search-bar-box",children:Object(y.jsx)("div",{className:"search-bar ui segment",children:Object(y.jsx)("form",{onSubmit:this.onFormSubmit,className:"ui form",children:Object(y.jsxs)("div",{className:"field",children:[Object(y.jsx)("label",{children:"Kaupunki:"}),Object(y.jsx)("input",{type:"text",value:this.state.term,onChange:function(e){return t.setState({term:e.target.value})}})]})})})})}}]),a}(r.a.Component),v=(a(59),function(t){var e=t.city;return Object(y.jsx)("div",{className:" ui cards wall",children:Object(y.jsx)("div",{className:"card",children:Object(y.jsx)("div",{className:"content",children:Object(y.jsx)("div",{className:"header",children:t.select?e.toUpperCase():e})})})})}),p=(a(60),function(t){if(!t.select)return Object(y.jsx)("div",{});var e=function(t){var e=new Date;e.setHours(t,0,0,0);var a=e.setDate(e.getDate()+1),n=6e4*(new Date).getTimezoneOffset();if(n<=0){var r=a-n;return r/=1e3}var c=a+n;return c/=1e3},a=function(){for(var e=[],a=0;a<t.days.length;a++)e.push(t.days[a].dt);return e},n=function(t){return["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"][new Date(t).getUTCDay()]},r=n(1e3*e(12)),c=n(1e3*(e(12)+86400)),s=a().indexOf(e(12)),i=a().indexOf(e(12)+86400),o=a().indexOf(e(0)),d=a().indexOf(e(0)+86400),l=a().indexOf(e(21)-86400),u=a().indexOf(e(21)),h=a().indexOf(e(21)+86400),m=function(e){t.selectDay(e),1===e?(t.dayName(v),t.dayStart(0),t.dayEnd(l),t.color("rgb(230,230,230","","")):2===e?(t.dayName(g),t.dayStart(o),t.dayEnd(u),t.color("","rgb(230,230,230","")):3===e?(t.dayName(D),t.dayStart(d),t.dayEnd(h),t.color("","","rgb(230,230,230)")):(t.dayName(v),t.dayStart(0),t.dayEnd(l))},j=t.days[0].weather[0].icon,b="http://openweathermap.org/img/wn/".concat(j,".png"),f=Math.round(t.days[0].main.temp),v="T\xe4n\xe4\xe4n",p=t.days[s].weather[0].icon,O="http://openweathermap.org/img/wn/".concat(p,".png"),x=Math.round(t.days[s].main.temp),g=r,N=t.days[i].weather[0].icon,S="http://openweathermap.org/img/wn/".concat(N,".png"),w=Math.round(t.days[i].main.temp),D=c;return Object(y.jsxs)("div",{className:"ui link eight doubling cards wall",children:[Object(y.jsx)("div",{className:"better-card",style:{backgroundColor:t.color1},onClick:function(){m(1)},children:Object(y.jsxs)("div",{className:"better-content",children:[Object(y.jsx)("div",{className:"better-content-header",children:v}),Object(y.jsx)("img",{className:"better-content-icon",alt:"",src:b}),Object(y.jsxs)("div",{className:"better-content-temp",children:[f,"  \u2103 "]})]})}),Object(y.jsx)("div",{className:"better-card center",style:{backgroundColor:t.color2},onClick:function(){m(2)},children:Object(y.jsxs)("div",{className:"better-content",children:[Object(y.jsx)("div",{className:"better-content-header",children:g}),Object(y.jsx)("img",{className:"better-content-icon",alt:"",src:O}),Object(y.jsxs)("div",{className:"better-content-temp",children:[x,"  \u2103 "]})]})}),Object(y.jsx)("div",{className:"better-card",style:{backgroundColor:t.color3},onClick:function(){m(3)},children:Object(y.jsxs)("div",{className:"better-content",children:[Object(y.jsx)("div",{className:"better-content-header",children:D}),Object(y.jsx)("img",{className:"better-content-icon",alt:"",src:S}),Object(y.jsxs)("div",{className:"better-content-temp",children:[w,"  \u2103 "]})]})})]})}),O=(a(61),a(29)),x=a.n(O),g=a(31),N=a.n(g),S=a(15),w=a.n(S),D=a(28),k=a.n(D),C=a(30),E=a.n(C),H=a.p+"static/media/south_east.bcd01cf9.svg",I=a(26),M=a.n(I),T=a.p+"static/media/north_west.92ffce4a.svg",R=function(t){if(!t.select)return Object(y.jsx)("div",{});var e=t.dayIdStart,a=t.koira,n=t.days.slice(e,a+1),r=function(t){return t>20&t<70?Object(y.jsx)(M.a,{}):t>=70&t<=110?Object(y.jsx)(k.a,{}):t>110&t<150?Object(y.jsx)("img",{className:"windDir",alt:"NW",src:T}):t>=150&t<=200?Object(y.jsx)(x.a,{}):t>200&t<230?Object(y.jsx)(E.a,{}):t>=230&t<=270?Object(y.jsx)(N.a,{}):t>270&t<340?Object(y.jsx)("img",{className:"windDir",alt:"SE",src:H}):t>=340&t<=360||t>=0&t<=20?Object(y.jsx)(w.a,{}):void 0},c=1,s=function(){return c+=1},i=0,o=0,d=0,l=0,u=function(t){return"http://openweathermap.org/img/wn/".concat(t,".png")};return Object(y.jsx)("div",{className:"ui cards wall",children:Object(y.jsx)("div",{className:"card main",style:{backgroundColor:"rgb(230,230,230)"},children:Object(y.jsxs)("div",{className:"content",children:[Object(y.jsx)("div",{className:"header",children:t.dayName}),Object(y.jsxs)("div",{className:"detail-container",children:[function(){var a=[];if(null===e)return a;for(var r=0;r<n.length;r++){var c=t.days[r].dt,s=new Date(1e3*c).getHours();s<10?a.push("0"+s):a.push(s)}return a.sort((function(t,e){return t-e})),a}().map((function(t){return Object(y.jsxs)("div",{className:"item-a",children:[t,":00 "]},s())})),function(){var t=[];if(null===e)return t;for(var a=0;a<n.length;a++){var r=n[a].weather[0].icon;t.push(r)}return t}().map((function(t){return Object(y.jsx)("img",{alt:t,style:{gridRowStart:"".concat(l+=1)},className:"item-e",src:u(t)},s())})),function(){var t=[];if(null===e)return t;for(var a=0;a<n.length;a++){var r=Math.round(n[a].main.temp);t.push(r)}return t}().map((function(t){return Object(y.jsxs)("div",{style:{gridRowStart:"".concat(i+=1)},className:"item-b",children:[t," \u2103 "]},s())})),function(){var t=[];if(null===e)return t;for(var a=0;a<n.length;a++){var r=Math.round(n[a].wind.speed);t.push(r)}return t}().map((function(t){return Object(y.jsxs)("div",{style:{gridRowStart:"".concat(o+=1)},className:"item-c",children:[t," m/s "]},s())})),function(){var t=[];if(null===e)return t;for(var a=0;a<n.length;a++){var r=n[a].wind.deg;t.push(r)}return t}().map((function(t){return Object(y.jsx)("div",{style:{gridRowStart:"".concat(d+=1)},className:"item-d",children:r(t)},s())}))]})]})})})},q=function(t){Object(h.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={days:[],selectedDay:null,city:"",dayName:"Valitse p\xe4iv\xe4",dayIDstart:null,dayIDend:null,color1:"",color2:"",color3:""},t.onSearchSubmit=function(e){t.Search(e).catch((function(e){e.response?t.setState({selectedDay:null,city:"Kaupunkia ei l\xf6ydy"}):e.request?t.setState({selectedDay:null,city:"Ei internet yhteytt\xe4"}):t.setState({selectedDay:null,city:"Jokin meni pieleen"})}))},t.Search=function(){var e=Object(d.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/data/2.5/forecast",{params:{q:a,units:"metric",lang:"fi"}});case 2:n=e.sent,t.setState({days:n.data.list,selectedDay:1,city:a}),localStorage.setItem("search",t.state.city);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.handler=function(e){t.setState({selectedDay:e})},t.dayNameHandler=function(e){t.setState({dayName:e})},t.dayStartHandler=function(e){t.setState({dayIDstart:e})},t.dayEndHandler=function(e){t.setState({dayIDend:e})},t.colorHandler=function(e,a,n){t.setState({color1:e,color2:a,color3:n})},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("search");t?this.onSearchSubmit(t):this.onSearchSubmit("Turku")}},{key:"render",value:function(){return Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)(f,{onSubmit:this.onSearchSubmit}),Object(y.jsx)("br",{}),Object(y.jsx)(v,{days:this.state.days,city:this.state.city,select:this.state.selectedDay}),Object(y.jsx)(p,{select:this.state.selectedDay,days:this.state.days,selectDay:this.handler,dayName:this.dayNameHandler,dayStart:this.dayStartHandler,dayEnd:this.dayEndHandler,color1:this.state.color1,color2:this.state.color2,color3:this.state.color3,color:this.colorHandler}),Object(y.jsx)(R,{koira:this.state.dayIDend,select:this.state.selectedDay,dayName:this.state.dayName,days:this.state.days,dayIdStart:this.state.dayIDstart})]})}}]),a}(r.a.Component);s.a.render(Object(y.jsx)(q,{}),document.querySelector("#root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.2659e073.chunk.js.map