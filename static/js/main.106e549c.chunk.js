(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{226:function(e,t,a){e.exports=a(436)},231:function(e,t,a){},436:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(20),o=a.n(l),r=(a(231),a(117)),s=a(23),d=a(24),c=a(26),h=a(25),m=a(27),p=a(7),u=(a(233),a(16)),b=a(91),f=a.n(b),g=a(159),E=a(56),C=a(84),O=a.n(C),v=a(53),k=a.n(v),y=a(28),j=a.n(y),T=a(22),w=a.n(T),D=a(43),S=a.n(D),x=a(44),I=a(161),F=a.n(I),M=a(162),A=a.n(M),_=a(83),W=a.n(_),B=a(55),N=a.n(B),z={marginLeft:-12,marginRight:20},R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.state={anchorEl:null},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state.anchorEl,a=this.props.clearAll,n=this.props.handleChangeTheme,l=this.props.handleInfoOpen;return i.a.createElement("div",null,i.a.createElement(j.a,{style:z,color:"inherit","aria-label":"Open drawer","aria-owns":t?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick},i.a.createElement(F.a,null)),i.a.createElement(W.a,{id:"simple-menu",anchorEl:t,open:Boolean(t),onClose:this.handleClose,disableAutoFocusItem:!0},i.a.createElement(N.a,{onClick:function(t){n(),e.handleClick(t),e.handleClose()}},"Change theme"),i.a.createElement(N.a,{onClick:function(t){e.handleClick(t),a(),e.handleClose(t)}},"Clear all"),i.a.createElement(N.a,{onClick:function(t){l(),e.handleClick(t),e.handleClose()}},"Info")))}}]),t}(i.a.Component);var L=Object(u.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(E.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(E.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(x.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(x.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(E.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})(function(e){var t=e.classes;return i.a.createElement("div",{className:t.root},i.a.createElement(O.a,{position:"static"},i.a.createElement(k.a,null,i.a.createElement(R,{handleInfoOpen:e.handleInfoOpen,handleChangeTheme:e.handleChangeTheme,clearAll:e.clearAll}),i.a.createElement(w.a,{className:t.title,variant:"h6",color:"inherit",noWrap:!0},e.title),i.a.createElement("div",{className:t.grow}),i.a.createElement("div",{className:t.search},i.a.createElement("div",{className:t.searchIcon},i.a.createElement(A.a,null)),i.a.createElement(S.a,{onChange:e.handleSearch,placeholder:"Search by name",classes:{root:t.inputRoot,input:t.inputInput}})))))}),H=a(163),Y=a.n(H),P=a(85),G=a.n(P),J=a(45),V=a.n(J);var $=Object(u.withStyles)(function(e){return{fab:{margin:2*e.spacing.unit},absolute:{position:"fixed",bottom:2*e.spacing.unit,right:3*e.spacing.unit}}})(function(e){var t=e.classes,a=e.handleClickOpen;return i.a.createElement("div",{onClick:function(e){a(e)}},i.a.createElement(V.a,{title:"Add","aria-label":"Add"},i.a.createElement(G.a,{color:"primary",className:t.absolute},i.a.createElement(Y.a,null))))}),q=a(18),K=a(36),Q=a.n(K),U=a(86),X=a.n(U),Z=a(87),ee=a.n(Z),te=a(64),ae=a.n(te),ne=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={detailtimer:null,fromnow:null,detailtimeron:!1},a.updatetime=a.updatetime.bind(Object(p.a)(Object(p.a)(a))),a.handletimerclick=a.handletimerclick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"updatetime",value:function(){var e=this.props.date;if(this.state.detailtimeron){var t=Q()().diff(e,"miliseconds"),a=Q.a.duration(t),n=a._data.seconds<1?Math.abs(a._data.seconds):0,i=a._data.minutes<1?Math.abs(a._data.minutes):0,l=a._data.hours<1?Math.abs(a._data.hours):0,o=a._data.days<1?Math.abs(a._data.days):0,r=a._data.months<1?Math.abs(a._data.months):0,s=a._data.years<1?Math.abs(a._data.years):0,d=(s?s+"\xa0years, ":"")+(r?r+"\xa0months, ":"")+(o?o+"\xa0days, ":"")+(l?l+"\xa0hours, ":"")+(i?i+"\xa0minutes, ":"")+(n?n+"\xa0seconds":"0 seconds");"in 0 seconds"===(d="in "+d)&&(d="Deadline passed!"),this.setState({detailtimer:d})}else{var c=Q()(e).fromNow();this.setState({fromnow:c})}}},{key:"handletimerclick",value:function(e){var t=!this.state.detailtimeron;this.setState({detailtimeron:t})}},{key:"render",value:function(){var e=this.state.detailtimer,t=this.state.fromnow;return i.a.createElement(n.Fragment,null,i.a.createElement(X.a,{control:i.a.createElement(ee.a,{color:"primary",checked:this.state.detailtimeron,onChange:this.handletimerclick}),label:"Timer"}),i.a.createElement(ae.a,{in:this.state.detailtimeron},i.a.createElement(q.e,{color:"primary",style:{fontSize:"1em"},variant:"caption"},e)),i.a.createElement(ae.a,{in:!this.state.detailtimeron},i.a.createElement(q.e,{color:"primary",style:{fontSize:"2em",fontWeight:"700",lineHeight:"1em"},variant:"caption"},t)))}}]),t}(i.a.Component),ie=a(165),le=a.n(ie),oe=a(164),re=a.n(oe),se=a(17),de=a.n(se),ce={margin:5,padding:10,MaxWidth:"100%",overflowWrap:"break-word"},he=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={timeleft:null,detailtimeron:!0},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props.date,l=Q()(a).format("MMMM Do YYYY"),o=Q()(a).format("h:mm:ss a"),r=this.props.handleConfirmOpen,s=this.props.handleEditOpen,d=this.props.handleClickOpen;return!1===this.props.done&&(e=i.a.createElement(V.a,{title:"Edit"},i.a.createElement(j.a,{onClick:function(e){s(t.props.id),d()},"aria-label":"Edit"},i.a.createElement(re.a,{style:{fontSize:"0.7em"}})))),i.a.createElement(n.Fragment,null,i.a.createElement(q.b,{style:ce},i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},i.a.createElement("div",{style:{maxWidth:250,display:"inline-block",marginTop:5}},i.a.createElement(q.e,{style:{fontSize:"1.5em",maxWidth:250,overflowWrap:"break-word"}},this.props.name)),i.a.createElement("div",{style:{display:"inline-block",alignSelf:"right"}},e,i.a.createElement(V.a,{title:"Delete"},i.a.createElement(j.a,{onClick:function(e){r(t.props.id,"Delete")},"aria-label":"Delete"},i.a.createElement(le.a,{style:{fontSize:"0.7em"}}))))),i.a.createElement("hr",null),i.a.createElement(q.e,null,"Deadline:"),i.a.createElement(q.e,{variant:"caption"},l," | ",o),i.a.createElement("hr",null),i.a.createElement(ne,{date:a}),i.a.createElement("div",{style:{textAlign:"right"}},2!==this.props.tab&&i.a.createElement(de.a,{onClick:function(e){r(t.props.id,"Finish")},"aria-label":"Done",variant:"contained",style:{display:"inline-block",marginTop:10},color:"primary"},"Done"))))}}]),t}(i.a.Component),me=a(166),pe=a.n(me),ue={slide:{padding:15,minHeight:100}},be=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={sortedtodos:[]},a.sortTodos=a.sortTodos.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"sortTodos",value:function(e){switch(e){case 0:return this.props.todos;case 1:return this.props.todos.slice().sort(function(e,t){return e.date<t.date?-1:e.date>t.date?1:0});case 2:return this.props.donetodos;default:return[]}}},{key:"render",value:function(){var e=this,t=this.props.tab,a=this.props.search,n=this.sortTodos(this.props.tab),l=(""!==a?n.filter(function(e){return-1!==e.name.indexOf(a)}):n).map(function(t,a){return i.a.createElement(q.a,{item:!0,lg:2,md:4,sm:6,xs:12,key:t.name+a},i.a.createElement(he,{tab:e.props.tab,id:t.id,handleClickOpen:e.props.handleClickOpen,handleEditOpen:e.props.handleEditOpen,handleConfirmOpen:e.props.handleConfirmOpen,name:t.name,done:t.done,date:t.date}))});return i.a.createElement("div",null,i.a.createElement(pe.a,{style:{minHeight:"80vh"},axis:"x",index:t,onChangeIndex:this.props.handleChangeIndex},i.a.createElement("div",{style:ue.slide},i.a.createElement(q.a,{container:!0,spacing:24,direction:"row"},l)),i.a.createElement("div",{style:ue.slide},i.a.createElement(q.a,{container:!0,spacing:24,direction:"row"},l)),i.a.createElement("div",{style:ue.slide},i.a.createElement(q.a,{container:!0,spacing:24,direction:"row"},l))))}}]),t}(i.a.Component),fe=a(54),ge=a.n(fe),Ee=a(31),Ce=a.n(Ee),Oe=a(32),ve=a.n(Oe),ke=a(34),ye=a.n(ke),je=a(33),Te=a.n(je),we=a(92),De=a(167),Se=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleDateChange=function(e){a.setState({date:e})},a.state={date:null,oldDate:null},a.handleDateChange=a.handleDateChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){if(this.props.editingId>0){var e=this.props.handleFindTodo().date;this.setState({oldDate:e})}}},{key:"reset",value:function(){this.setState({todoname:"",date:null})}},{key:"render",value:function(){var e,t=this,a=this.props.editingId,n=this.props.name,l=null===this.state.date,o=this.props.addToDo,r=this.props.editToDo,s=this.props.handleClose,d=this.props.handleDateClose,c="Set deadline";if(a<=0)e=i.a.createElement(de.a,{disabled:l,onClick:function(e){o(n,t.state.date),t.reset(),d(e),s(e)},color:"primary"},"Done");else{c="Set new deadline";var h=this.state.date?this.state.date:this.state.oldDate;e=i.a.createElement(de.a,{onClick:function(e){r(a,n,h),t.reset(),d(e),s(e)},color:"primary"},"Done")}return i.a.createElement("div",null,i.a.createElement(Ce.a,{styles:{margin:0,height:"100vh"},open:this.props.open,onClose:function(e){t.reset(),s(e),d(e)},"aria-labelledby":"form-dialog-title"},i.a.createElement(Te.a,{id:"form-dialog-title"},c),i.a.createElement(ye.a,null,i.a.createElement(we.b,{utils:De.a},i.a.createElement(we.a,{margin:"normal",label:"Pick date",value:this.state.date?this.state.date:this.state.oldDate,onChange:this.handleDateChange}),i.a.createElement("br",null),i.a.createElement(we.c,{margin:"normal",label:"Pick hour",value:this.state.date?this.state.date:this.state.oldDate,onChange:this.handleDateChange}))),i.a.createElement(ve.a,null,i.a.createElement(de.a,{onClick:function(e){d(e)},color:"primary"},"Back"),e)))}}]),t}(i.a.Component),xe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleDateOpen=function(){a.setState({datepopup:!0})},a.handleDateClose=function(){a.setState({datepopup:!1})},a.state={todoname:"",datepopup:!1},a.handleChange=a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({todoname:t})}},{key:"reset",value:function(){this.setState({todoname:""})}},{key:"render",value:function(){var e,t=this,a=""===this.state.todoname,n=this.props.handleClose,l="Create task";this.props.editingId>0&&(e=this.props.handleFindTodo().name,l="Change name");return i.a.createElement("div",null,i.a.createElement(Ce.a,{open:this.props.open,onClose:function(e){n(e)},"aria-labelledby":"form-dialog-title"},i.a.createElement(Te.a,{id:"form-dialog-title"},l),i.a.createElement(ye.a,null,i.a.createElement(ge.a,{onChange:this.handleChange,autoFocus:!0,placeholder:e,margin:"dense",id:"todoname",label:"Task name",type:"text",fullWidth:!0}),i.a.createElement(Se,{handleFindTodo:this.props.handleFindTodo,editToDo:this.props.editToDo,editingId:this.props.editingId,onClick:this.handleDateOpen,handleClose:this.props.handleClose,handleDateClose:this.handleDateClose,open:this.state.datepopup,addToDo:this.props.addToDo,reset:this.reset,name:this.state.todoname})),i.a.createElement(ve.a,null,i.a.createElement(de.a,{onClick:function(e){n(e)},color:"primary"},"Cancel"),i.a.createElement(de.a,{disabled:a,onClick:function(e){t.handleDateOpen()},color:"primary"},"Next"))))}}]),t}(i.a.Component);function Ie(e){return i.a.createElement(q.d,{value:e.tab,onChange:e.handleTabChange,indicatorColor:"primary",textColor:"primary",variant:"fullWidth"},i.a.createElement(q.c,{tab:1,label:"Date created"}),i.a.createElement(q.c,{tab:2,label:"By deadline"}),i.a.createElement(q.c,{tab:3,label:"Done"}))}var Fe=function(e){var t,a;return"Delete"===e.popupcontext?(t=e.handleDeleteTodo,a=i.a.createElement(Te.a,null,"Delete task?")):"Finish"===e.popupcontext&&(t=e.handleFinishTodo,a=i.a.createElement(Te.a,null,"Finish task?")),i.a.createElement(Ce.a,{open:e.open,onClose:function(t){e.handleClose(t)},"aria-labelledby":"form-dialog-title"},a,i.a.createElement(ve.a,null,i.a.createElement(de.a,{onClick:function(t){e.handleClose(t)},color:"primary"},"Cancel"),i.a.createElement(de.a,{onClick:function(a){t(),e.handleClose(a)},color:"primary"},"Confirm")))},Me=a(66),Ae={darkTheme:Object(u.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:Me.red,type:"dark"},menuButton:{marginLeft:-12,marginRight:20}}),lighTheme:Object(u.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:Me.red,type:"light"},menuButton:{marginLeft:-12,marginRight:20}})},_e=a(52),We=a.n(_e),Be=a(40),Ne=a.n(Be),ze=a(67),Re=a.n(ze),Le=function(e){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:e.darkTheme?"white":"black",width:e.width?e.width:"24",height:e.height?e.height:"24",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}))},He=function(e){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:e.darkTheme?"white":"black",width:e.width?e.width:"24",height:e.height?e.height:"24",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"}))},Ye=a(68),Pe=a.n(Ye),Ge=a(90),Je=a.n(Ge),Ve=function(e){return i.a.createElement(Ce.a,{open:e.open,onClose:function(t){e.handleClose(t)},"aria-labelledby":"form-dialog-title"},i.a.createElement(Te.a,null,"Info"),i.a.createElement(ye.a,null,i.a.createElement(q.e,null,"Deadline tracking app created for demonstration purposes.",i.a.createElement("br",null),"Core dependencies:"),i.a.createElement(We.a,null,i.a.createElement(Ne.a,null,i.a.createElement(q.e,null,"React 16.7.0")),i.a.createElement(Ne.a,null,i.a.createElement(q.e,null,"Material-ui 3.9.1"))),i.a.createElement(Je.a,{variant:"fullWidth"}),i.a.createElement(We.a,null,i.a.createElement(Ne.a,{button:!0,component:"a",href:"https://github.com/Mostrowski8",target:"_blank"},i.a.createElement(Re.a,null,i.a.createElement(Le,{darkTheme:e.darkTheme})),i.a.createElement(Pe.a,null,"Chek out my GitHub!")),i.a.createElement(Ne.a,{button:!0,component:"a",href:"https://www.linkedin.com/in/marek-ostrowski-07b555149/",target:"_blank"},i.a.createElement(Re.a,null,i.a.createElement(He,{darkTheme:e.darkTheme})),i.a.createElement(Pe.a,null,"Chek out my LinkedIn!")))),i.a.createElement(ve.a,null,i.a.createElement(de.a,{onClick:function(t){e.handleClose(t)},color:"primary"},"Close")))},$e=Ae.darkTheme,qe=Ae.lighTheme,Ke=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleEditOpen=function(e){a.setState({editingId:e})},a.handleClickOpen=function(){a.setState({namepopup:!0})},a.handleClose=function(){a.setState({namepopup:!1,confirmpopup:!1,popupcontext:null,editingId:-1,infoOpen:!1})},a.handleChangeIndex=function(e){a.setState({tab:e})},a.state={todos:[],donetodos:[],namepopup:!1,search:"",tab:0,id:0,confirmpopup:!1,popupcontext:null,targetid:null,editingId:-1,darkTheme:!0,infoOpen:!1},a.addToDo=a.addToDo.bind(Object(p.a)(Object(p.a)(a))),a.clearAll=a.clearAll.bind(Object(p.a)(Object(p.a)(a))),a.handleClickOpen=a.handleClickOpen.bind(Object(p.a)(Object(p.a)(a))),a.handleClose=a.handleClose.bind(Object(p.a)(Object(p.a)(a))),a.handleSearch=a.handleSearch.bind(Object(p.a)(Object(p.a)(a))),a.handleTabChange=a.handleTabChange.bind(Object(p.a)(Object(p.a)(a))),a.handleChangeIndex=a.handleChangeIndex.bind(Object(p.a)(Object(p.a)(a))),a.handleDeleteTodo=a.handleDeleteTodo.bind(Object(p.a)(Object(p.a)(a))),a.handleConfirmOpen=a.handleConfirmOpen.bind(Object(p.a)(Object(p.a)(a))),a.handleFinishTodo=a.handleFinishTodo.bind(Object(p.a)(Object(p.a)(a))),a.editToDo=a.editToDo.bind(Object(p.a)(Object(p.a)(a))),a.handleEditOpen=a.handleEditOpen.bind(Object(p.a)(Object(p.a)(a))),a.handleChangeTheme=a.handleChangeTheme.bind(Object(p.a)(Object(p.a)(a))),a.handleInfoOpen=a.handleInfoOpen.bind(Object(p.a)(Object(p.a)(a))),a.handleFindTodo=a.handleFindTodo.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"handleInfoOpen",value:function(){this.setState({infoOpen:!0})}},{key:"handleFindTodo",value:function(){var e=this.state.editingId;return this.state.todos.find(function(t){return e===t.id})}},{key:"addToDo",value:function(e,t){var a=this.state.id+1,n=this.state.todos.slice();n.push({id:a,name:e,date:t,done:!1}),this.setState({todos:n,id:a})}},{key:"handleChangeTheme",value:function(){this.setState({darkTheme:!this.state.darkTheme})}},{key:"editToDo",value:function(e,t,a){var n=this.state.todos.map(function(n){return n.id===e?Object(r.a)({},n,{name:t,date:a}):n});this.setState({todos:n})}},{key:"clearAll",value:function(e){this.setState({todos:[],donetodos:[]})}},{key:"handleSearch",value:function(e){this.setState({search:e.target.value})}},{key:"handleTabChange",value:function(e,t){this.setState({tab:t})}},{key:"handleConfirmOpen",value:function(e,t){this.setState({popupcontext:t,confirmpopup:!0,targetid:e})}},{key:"handleDeleteTodo",value:function(){var e=this.state.targetid,t=this.state.todos.filter(function(t){return t.id!==e}),a=this.state.donetodos.filter(function(t){return t.id!==e});this.setState({todos:t,donetodos:a})}},{key:"handleFinishTodo",value:function(){var e=this.state.targetid,t=this.state.todos.find(function(t){return t.id===e});t=Object(r.a)({},t,{done:!0});var a=this.state.todos.filter(function(t){return t.id!==e}),n=this.state.donetodos.slice().concat(t);this.setState({todos:a,donetodos:n})}},{key:"render",value:function(){var e=this.state.todos,t=this.state.tab;return i.a.createElement(n.Fragment,null,i.a.createElement(u.MuiThemeProvider,{theme:this.state.darkTheme?$e:qe},i.a.createElement(f.a,null),i.a.createElement("div",{className:"App"},i.a.createElement(g.Helmet,null,i.a.createElement("meta",{charSet:"utf-8",name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"}),i.a.createElement("title",null,"To do App"),i.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"})),i.a.createElement(L,{handleInfoOpen:this.handleInfoOpen,handleChangeTheme:this.handleChangeTheme,handleSearch:this.handleSearch,search:this.state.search,clearAll:this.clearAll,title:"To do App"}),i.a.createElement(Ie,{tab:t,handleTabChange:this.handleTabChange}),i.a.createElement(be,{handleClickOpen:this.handleClickOpen,handleEditOpen:this.handleEditOpen,handleConfirmOpen:this.handleConfirmOpen,id:this.state.id,handleDeleteTodo:this.handleDeleteTodo,handleChangeIndex:this.handleChangeIndex,tab:t,search:this.state.search,todos:e,donetodos:this.state.donetodos}),i.a.createElement($,{handleClickOpen:this.handleClickOpen}),i.a.createElement(xe,{handleFindTodo:this.handleFindTodo,editToDo:this.editToDo,editingId:this.state.editingId,open:this.state.namepopup,handleClose:this.handleClose,addToDo:this.addToDo}),i.a.createElement(Ve,{darkTheme:this.state.darkTheme,open:this.state.infoOpen,handleClose:this.handleClose}),i.a.createElement(Fe,{popupcontext:this.state.popupcontext,open:this.state.confirmpopup,handleClose:this.handleClose,handleFinishTodo:this.handleFinishTodo,handleDeleteTodo:this.handleDeleteTodo}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(Ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[226,2,1]]]);
//# sourceMappingURL=main.106e549c.chunk.js.map