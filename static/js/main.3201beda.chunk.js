(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{223:function(e,t,a){e.exports=a(432)},228:function(e,t,a){},230:function(e,t,a){},432:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(19),r=a.n(i),o=(a(228),a(21)),c=a(22),s=a(24),d=a(23),h=a(25),m=a(14),u=(a(230),a(232),a(16)),p=a(85),b=a.n(p),f=a(158),E=a(84),g=a(86),v=a(77),C=a.n(v),O=a(49),j=a.n(O),k=a(30),y=a.n(k),w=a(27),T=a.n(w),S=a(41),D=a.n(S),x=a(48),M=a(160),A=a.n(M),I=a(161),W=a.n(I),_=a(76),N=a.n(_),B=a(51),R=a.n(B),L={marginLeft:-12,marginRight:20},F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={anchorEl:null},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.anchorEl,a=(this.props.classes,this.props.clearAll);return l.a.createElement("div",null,l.a.createElement(y.a,{style:L,color:"inherit","aria-label":"Open drawer","aria-owns":t?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick},l.a.createElement(A.a,null)),l.a.createElement(N.a,{id:"simple-menu",anchorEl:t,open:Boolean(t),onClose:this.handleClose,disableAutoFocusItem:!0},l.a.createElement(R.a,{onClick:function(t){e.handleClick(t),e.handleClose()}},"Change view"),l.a.createElement(R.a,{onClick:function(t){e.handleClick(t),a(),e.handleClose(t)}},"Clear all"),l.a.createElement(R.a,{onClick:function(t){e.handleClick(t),e.handleClose()}},"Info")))}}]),t}(l.a.Component);var Y=Object(u.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(g.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(g.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(x.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(x.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(g.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})(function(e){var t=e.classes;return l.a.createElement("div",{className:t.root},l.a.createElement(C.a,{position:"static"},l.a.createElement(j.a,null,l.a.createElement(F,{clearAll:e.clearAll}),l.a.createElement(T.a,{className:t.title,variant:"h6",color:"inherit",noWrap:!0},e.title),l.a.createElement("div",{className:t.grow}),l.a.createElement("div",{className:t.search},l.a.createElement("div",{className:t.searchIcon},l.a.createElement(W.a,null)),l.a.createElement(D.a,{onChange:e.handleSearch,placeholder:"Search by name",classes:{root:t.inputRoot,input:t.inputInput}})))))}),H=a(162),P=a.n(H),z=a(79),J=a.n(z),G=a(78),U=a.n(G);var V=Object(u.withStyles)(function(e){return{fab:{margin:2*e.spacing.unit},absolute:{position:"fixed",bottom:2*e.spacing.unit,right:3*e.spacing.unit}}})(function(e){var t=e.classes,a=(e.addToDo,e.handleClickOpen);return l.a.createElement("div",{onClick:function(e){a(e)}},l.a.createElement(U.a,{title:"Add","aria-label":"Add"},l.a.createElement(J.a,{color:"primary",className:t.absolute},l.a.createElement(P.a,null))))}),$=a(17),q=a(31),K=a.n(q),Q=a(80),X=a.n(Q),Z=a(81),ee=a.n(Z),te=a(59),ae=a.n(te),ne=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={detailtimer:null,fromnow:null,detailtimeron:!1},a.updatetime=a.updatetime.bind(Object(m.a)(Object(m.a)(a))),a.handletimerclick=a.handletimerclick.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"updatetime",value:function(){var e=this.props.date;if(this.state.detailtimeron){var t=K()().diff(e,"miliseconds"),a=K.a.duration(t),n=a._data.seconds<1?Math.abs(a._data.seconds):0,l=a._data.minutes<1?Math.abs(a._data.minutes):0,i=a._data.hours<1?Math.abs(a._data.hours):0,r=a._data.days<1?Math.abs(a._data.days):0,o=a._data.months<1?Math.abs(a._data.months):0,c=a._data.years<1?Math.abs(a._data.years):0,s=(c?c+"\xa0years, ":"")+(o?o+"\xa0months, ":"")+(r?r+"\xa0days, ":"")+(i?i+"\xa0hours, ":"")+(l?l+"\xa0minutes, ":"")+(n?n+"\xa0seconds":"0 seconds");"in 0 seconds"===(s="in "+s)&&(s="Deadline passed!"),this.setState({detailtimer:s})}else{var d=K()(e).fromNow();this.setState({fromnow:d})}}},{key:"handletimerclick",value:function(e){var t=!this.state.detailtimeron;this.setState({detailtimeron:t})}},{key:"componentWillMount",value:function(){this.interval=setInterval(this.updatetime,100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.detailtimer,t=this.state.fromnow;return l.a.createElement(n.Fragment,null,l.a.createElement(X.a,{control:l.a.createElement(ee.a,{color:"primary",checked:this.state.detailtimeron,onChange:this.handletimerclick}),label:"Timer"}),l.a.createElement(ae.a,{in:this.state.detailtimeron},l.a.createElement($.e,{color:"primary",style:{fontSize:"1em"},variant:"caption"},e)),l.a.createElement(ae.a,{in:!this.state.detailtimeron},l.a.createElement($.e,{color:"primary",style:{fontSize:"2em",fontWeight:"700",lineHeight:"2em"},variant:"caption"},t)))}}]),t}(l.a.Component),le={margin:5,padding:10,MaxWidth:"100%",overflowWrap:"break-word"},ie=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={timeleft:null,detailtimeron:!0},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.date,t=K()(e).format("MMMM Do YYYY"),a=K()(e).format("h:mm:ss a");this.state.timeleft;return l.a.createElement(n.Fragment,null,l.a.createElement($.b,{style:le},l.a.createElement($.e,{style:{maxWidth:250,overflowWrap:"break-word"}},this.props.name),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement($.e,null,"Deadline:"),l.a.createElement($.e,{variant:"caption"},t," | ",a),l.a.createElement("br",null),l.a.createElement(ne,{date:e})))}}]),t}(l.a.Component),re=a(163),oe=a.n(re),ce={slide:{padding:15,minHeight:100}},se=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={sortedtodos:[]},a.sortTodos=a.sortTodos.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"sortTodos",value:function(e){switch(e){case 0:return this.props.todos;case 1:return this.props.todos.slice().sort(function(e,t){return e.date<t.date?-1:e.date>t.date?1:0});case 3:default:return[]}}},{key:"render",value:function(){var e=this.props.tab,t=this.props.search,a=this.sortTodos(this.props.tab),n=(""!==t?a.filter(function(e){return-1!==e.name.indexOf(t)}):a).map(function(e,t){return l.a.createElement($.a,{item:!0,lg:2,md:4,sm:6,xs:12,key:e.name+t},l.a.createElement(ie,{name:e.name,date:e.date}))});return l.a.createElement("div",null,l.a.createElement(oe.a,{axis:"x",index:e,onChangeIndex:this.props.handleTabChange},l.a.createElement("div",{style:ce.slide},l.a.createElement($.a,{container:!0,spacing:24,direction:"row"},n)),l.a.createElement("div",{style:ce.slide},l.a.createElement($.a,{container:!0,spacing:24,direction:"row"},n)),l.a.createElement("div",{style:ce.slide},l.a.createElement($.a,{container:!0,spacing:24,direction:"row"},n))))}}]),t}(l.a.Component),de=a(26),he=a.n(de),me=a(42),ue=a.n(me),pe=a(36),be=a.n(pe),fe=a(38),Ee=a.n(fe),ge=a(37),ve=a.n(ge),Ce=a(50),Oe=a.n(Ce),je=a(115),ke=a(61),ye=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleDateChange=function(e){a.setState({date:e})},a.state={date:null},a.handleDateChange=a.handleDateChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"reset",value:function(){this.setState({todoname:"",date:null})}},{key:"render",value:function(){var e=this,t=this.props.name,a=null===this.state.date,n=this.props.addToDo,i=this.props.handleClose,r=this.props.handleDateClose;return l.a.createElement("div",null,l.a.createElement(be.a,{open:this.props.open,onClose:function(t){e.reset(),i(t),r(t)},"aria-labelledby":"form-dialog-title"},l.a.createElement(Oe.a,{id:"form-dialog-title"},"Set deadline"),l.a.createElement(ve.a,null,l.a.createElement(ke.b,{utils:je.a},l.a.createElement(ke.a,{margin:"normal",label:"Pick date",value:this.state.date,onChange:this.handleDateChange}),l.a.createElement("br",null),l.a.createElement(ke.c,{margin:"normal",label:"Pick hour",value:this.state.date,onChange:this.handleDateChange}))),l.a.createElement(Ee.a,null,l.a.createElement(he.a,{onClick:function(e){r(e)},color:"primary"},"Back"),l.a.createElement(he.a,{disabled:a,onClick:function(a){n(t,e.state.date),e.reset(),r(a),i(a)},color:"primary"},"Done"))))}}]),t}(l.a.Component),we=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleDateOpen=function(){a.setState({datepopup:!0})},a.handleDateClose=function(){a.setState({datepopup:!1})},a.state={todoname:"",datepopup:!1},a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({todoname:t})}},{key:"reset",value:function(){this.setState({todoname:""})}},{key:"render",value:function(){var e=this,t=""===this.state.todoname,a=this.props.handleClose;this.props.addToDo;return l.a.createElement("div",null,l.a.createElement(be.a,{open:this.props.open,onClose:function(e){a(e)},"aria-labelledby":"form-dialog-title"},l.a.createElement(Oe.a,{id:"form-dialog-title"},"Create task"),l.a.createElement(ve.a,null,l.a.createElement(ue.a,{onChange:this.handleChange,autoFocus:!0,margin:"dense",id:"todoname",label:"Task name",type:"text",fullWidth:!0}),l.a.createElement(ye,{onClick:this.handleDateOpen,handleClose:this.props.handleClose,handleDateClose:this.handleDateClose,open:this.state.datepopup,addToDo:this.props.addToDo,reset:this.reset,name:this.state.todoname})),l.a.createElement(Ee.a,null,l.a.createElement(he.a,{onClick:function(e){a(e)},color:"primary"},"Cancel"),l.a.createElement(he.a,{disabled:t,onClick:function(t){e.handleDateOpen()},color:"primary"},"Next"))))}}]),t}(l.a.Component);function Te(e){return l.a.createElement($.d,{value:e.tab,onChange:e.handleTabChange,indicatorColor:"primary",textColor:"primary",variant:"fullWidth"},l.a.createElement($.c,{tab:1,label:"Date created"}),l.a.createElement($.c,{tab:2,label:"By deadline"}),l.a.createElement($.c,{tab:3,label:"Done"}))}var Se=Object(u.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:E.red,type:"dark"},menuButton:{marginLeft:-12,marginRight:20}}),De=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleClickOpen=function(){a.setState({namepopup:!0})},a.handleClose=function(){a.setState({namepopup:!1})},a.state={todos:[],namepopup:!1,search:"",tab:0},a.addToDo=a.addToDo.bind(Object(m.a)(Object(m.a)(a))),a.clearAll=a.clearAll.bind(Object(m.a)(Object(m.a)(a))),a.handleClickOpen=a.handleClickOpen.bind(Object(m.a)(Object(m.a)(a))),a.handleClose=a.handleClose.bind(Object(m.a)(Object(m.a)(a))),a.handleSearch=a.handleSearch.bind(Object(m.a)(Object(m.a)(a))),a.handleTabChange=a.handleTabChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"addToDo",value:function(e,t){var a=this.state.todos.slice();a.push({name:e,date:t}),this.setState({todos:a})}},{key:"clearAll",value:function(e){this.setState({todos:[]})}},{key:"handleSearch",value:function(e){this.setState({search:e.target.value})}},{key:"handleTabChange",value:function(e,t){this.setState({tab:t})}},{key:"render",value:function(){var e=this.state.todos,t=(this.state.todoadder,this.state.tab);return l.a.createElement(n.Fragment,null,l.a.createElement(u.MuiThemeProvider,{theme:Se},l.a.createElement(b.a,null),l.a.createElement("div",{className:"App"},l.a.createElement(f.Helmet,null,l.a.createElement("meta",{charSet:"utf-8",name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"}),l.a.createElement("title",null,"To do App"),l.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"})),l.a.createElement(Y,{handleSearch:this.handleSearch,search:this.state.search,clearAll:this.clearAll,title:"To do App"}),l.a.createElement(Te,{tab:t,handleTabChange:this.handleTabChange}),l.a.createElement(se,{handleTabChange:this.handleTabChange,tab:t,search:this.state.search,todos:e}),l.a.createElement(V,{handleClickOpen:this.handleClickOpen}),l.a.createElement(we,{open:this.state.namepopup,handleClose:this.handleClose,addToDo:this.addToDo}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(De,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[223,2,1]]]);
//# sourceMappingURL=main.3201beda.chunk.js.map