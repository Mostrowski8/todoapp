(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{218:function(e,t,a){e.exports=a(406)},223:function(e,t,a){},225:function(e,t,a){},406:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(17),o=a.n(i),r=(a(223),a(23)),c=a(24),s=a(29),d=a(25),h=a(28),u=a(16),m=(a(225),a(227),a(15)),p=a(79),b=a.n(p),f=a(149),g=a(78),v=a(80),E=a(71),O=a.n(E),k=a(44),C=a.n(k),j=a(31),y=a.n(j),w=a(20),S=a.n(w),M=a(38),A=a.n(M),D=a(43),T=a(151),W=a.n(T),_=a(152),I=a.n(_),N=a(70),x=a.n(N),R=a(49),B=a.n(R),L={marginLeft:-12,marginRight:20},F=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={anchorEl:null},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.anchorEl,a=(this.props.classes,this.props.clearAll);return l.a.createElement("div",null,l.a.createElement(y.a,{style:L,color:"inherit","aria-label":"Open drawer","aria-owns":t?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick},l.a.createElement(W.a,null)),l.a.createElement(x.a,{id:"simple-menu",anchorEl:t,open:Boolean(t),onClose:this.handleClose,disableAutoFocusItem:!0},l.a.createElement(B.a,{onClick:function(t){e.handleClick(t),e.handleClose()}},"Change view"),l.a.createElement(B.a,{onClick:function(t){e.handleClick(t),a(),e.handleClose(t)}},"Clear all"),l.a.createElement(B.a,{onClick:function(t){e.handleClick(t),e.handleClose()}},"Info")))}}]),t}(l.a.Component);var P=Object(m.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(v.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(v.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(D.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(D.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(v.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})(function(e){var t=e.classes;return l.a.createElement("div",{className:t.root},l.a.createElement(O.a,{position:"static"},l.a.createElement(C.a,null,l.a.createElement(F,{clearAll:e.clearAll}),l.a.createElement(S.a,{className:t.title,variant:"h6",color:"inherit",noWrap:!0},e.title),l.a.createElement("div",{className:t.grow}),l.a.createElement("div",{className:t.search},l.a.createElement("div",{className:t.searchIcon},l.a.createElement(I.a,null)),l.a.createElement(A.a,{placeholder:"Search by name",classes:{root:t.inputRoot,input:t.inputInput}})))))}),Y=a(153),J=a.n(Y),G=a(73),H=a.n(G),U=a(72),V=a.n(U);var $=Object(m.withStyles)(function(e){return{fab:{margin:2*e.spacing.unit},absolute:{position:"absolute",bottom:2*e.spacing.unit,right:3*e.spacing.unit}}})(function(e){var t=e.classes,a=(e.addToDo,e.handleClickOpen);return l.a.createElement("div",{onClick:function(e){a(e)}},l.a.createElement(V.a,{title:"Add","aria-label":"Add"},l.a.createElement(H.a,{color:"primary",className:t.absolute},l.a.createElement(J.a,null))))}),q=a(30),z=a(26),K=a.n(z),Q=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={timeleft:null,detailtimeron:!1},a.updatetime=a.updatetime.bind(Object(u.a)(Object(u.a)(a))),a.handletimerclick=a.handletimerclick.bind(Object(u.a)(Object(u.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"updatetime",value:function(){var e=this.props.date;if(this.state.detailtimeron){var t=K()().diff(e,"miliseconds"),a=K.a.duration(t),n=a._data.seconds<1?Math.abs(a._data.seconds):0,l=a._data.minutes<1?Math.abs(a._data.minutes):0,i=a._data.hours<1?Math.abs(a._data.hours):0,o=a._data.days<1?Math.abs(a._data.days):0,r=a._data.months<1?Math.abs(a._data.months):0,c=a._data.years<1?Math.abs(a._data.years):0,s=(c?c+"\xa0years, ":"")+(r?r+"\xa0months, ":"")+(o?o+"\xa0days, ":"")+(i?i+"\xa0hours, ":"")+(l?l+"\xa0minutes, ":"")+(n?n+"\xa0seconds.":"0 seconds");s="in "+s,this.setState({timeleft:s})}else{var d=K()(e).fromNow();this.setState({timeleft:d})}}},{key:"handletimerclick",value:function(e){var t=!this.state.detailtimeron;this.setState({detailtimeron:t})}},{key:"componentDidMount",value:function(){this.interval=setInterval(this.updatetime,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.timeleft;return l.a.createElement(q.c,{onClick:this.handletimerclick,variant:"caption"},e)}}]),t}(l.a.Component),X={margin:5,padding:10,Width:275,maxWidth:275,minWidth:275,overflowWrap:"break-word"},Z=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={timeleft:null,detailtimeron:!0},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.date,t=K()(e).format("MMMM Do YYYY"),a=K()(e).format("h:mm:ss a");this.state.timeleft;return l.a.createElement(n.Fragment,null,l.a.createElement(q.b,{style:X},l.a.createElement(q.c,{style:{maxWidth:250,overflowWrap:"break-word"}},this.props.name),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement(q.c,null,"Deadline:"),l.a.createElement(q.c,{variant:"caption"},t," | ",a),l.a.createElement("br",null),l.a.createElement(Q,{date:e})))}}]),t}(l.a.Component),ee=function(e){function t(e){return Object(r.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){this.props.classes;var e=this.props.todos.map(function(e,t){return l.a.createElement(q.a,{item:!0,key:e.name+t},l.a.createElement(Z,{name:e.name,date:e.date}))});return l.a.createElement("div",null,l.a.createElement(q.a,{container:!0,direction:"row"},e))}}]),t}(l.a.Component),te=Object(m.withStyles)(function(e){return{fab:{margin:2*e.spacing.unit},absolute:{position:"absolute",bottom:2*e.spacing.unit,right:3*e.spacing.unit},paperstyle:{margin:5,padding:10,Width:250,MaxWidth:250}}})(ee),ae=a(27),ne=a.n(ae),le=a(47),ie=a.n(le),oe=a(45),re=a.n(oe),ce=a(48),se=a.n(ce),de=a(46),he=a.n(de),ue=a(75),me=a.n(ue),pe=a(74),be=a.n(pe),fe=a(81),ge=a(154),ve=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleDateChange=function(e){a.setState({date:e})},a.state={todoname:"",date:null},a.handleChange=a.handleChange.bind(Object(u.a)(Object(u.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({todoname:t}),console.log("handlechane",t)}},{key:"reset",value:function(){this.setState({todoname:"",date:null})}},{key:"render",value:function(){var e=this,t=""===this.state.todoname,a=this.props.handleClose,n=this.props.addToDo;return l.a.createElement("div",null,l.a.createElement(re.a,{open:this.props.open,onClose:function(e){a(e)},"aria-labelledby":"form-dialog-title"},l.a.createElement(be.a,{id:"form-dialog-title"},"Create"),l.a.createElement(he.a,null,l.a.createElement(me.a,null,"Plese enter the task name below"),l.a.createElement(ie.a,{onChange:this.handleChange,autoFocus:!0,margin:"dense",id:"todoname",label:"todoname",type:"text",fullWidth:!0}),l.a.createElement(fe.b,{utils:ge.a},l.a.createElement(fe.a,{margin:"normal",label:"Pick date",value:this.state.date,onChange:this.handleDateChange}),l.a.createElement("br",null),l.a.createElement(fe.c,{margin:"normal",label:"Pick hour",value:this.state.date,onChange:this.handleDateChange}))),l.a.createElement(se.a,null,l.a.createElement(ne.a,{onClick:function(e){a(e)},color:"primary"},"Cancel"),l.a.createElement(ne.a,{disabled:t,onClick:function(t){n(e.state.todoname,e.state.date),e.reset(),a(t)},color:"primary"},"Done"))))}}]),t}(l.a.Component),Ee=Object(m.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:g.red,type:"dark"},menuButton:{marginLeft:-12,marginRight:20}}),Oe=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleClickOpen=function(){a.setState({open:!0}),console.log("handlecickopen")},a.handleClose=function(){a.setState({open:!1}),console.log("handleclose")},a.state={todos:[],open:!1},a.addToDo=a.addToDo.bind(Object(u.a)(Object(u.a)(a))),a.clearAll=a.clearAll.bind(Object(u.a)(Object(u.a)(a))),a.handleClickOpen=a.handleClickOpen.bind(Object(u.a)(Object(u.a)(a))),a.handleClose=a.handleClose.bind(Object(u.a)(Object(u.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"addToDo",value:function(e,t){var a=this.state.todos.slice();a.push({name:e,date:t}),this.setState({todos:a})}},{key:"clearAll",value:function(e){console.log("clearall fired"),this.setState({todos:[]})}},{key:"render",value:function(){var e=this.state.todos;this.state.todoadder;return l.a.createElement(n.Fragment,null,l.a.createElement(m.MuiThemeProvider,{theme:Ee},l.a.createElement(b.a,null),l.a.createElement("div",{className:"App"},l.a.createElement(f.Helmet,null,l.a.createElement("meta",{charSet:"utf-8",name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"}),l.a.createElement("title",null,"To do App"),l.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"})),l.a.createElement(P,{clearAll:this.clearAll,title:"To do App"}),l.a.createElement(te,{todos:e}),l.a.createElement($,{handleClickOpen:this.handleClickOpen}),l.a.createElement(ve,{open:this.state.open,handleClose:this.handleClose,addToDo:this.addToDo}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[218,2,1]]]);
//# sourceMappingURL=main.8830e3d1.chunk.js.map