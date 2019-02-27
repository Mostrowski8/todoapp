import React, { Component, Fragment } from 'react';
import './App.css';
import 'typeface-roboto';
import { createMuiTheme, MuiThemeProvider, withTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Helmet } from 'react-helmet'
import { red } from '@material-ui/core/colors';
import SearchAppBar from './components/searchappbar';
import SimpleTooltips from './components/tooltip';
import Todos from './components/todos';
import Namepopup from './components/namepopup';
import Todotabs from './components/todotabs';
import Confirmpopup from './components/confirmpopup';
import myThemes from './themes/themes.js';

const {darkTheme, lighTheme} = myThemes;

class App extends Component {
constructor(props){
super(props);
this.state={
  todos: [],
  donetodos: [],
  namepopup: false,
  search: "",
  tab: 0,
  id: 0,
  confirmpopup: false,
  popupcontext: null,
  targetid: null,
  editingId: -1,
  darkTheme: true
}

this.addToDo = this.addToDo.bind(this);
this.clearAll = this.clearAll.bind(this);
this.handleClickOpen = this.handleClickOpen.bind(this);
this.handleClose = this.handleClose.bind(this);
this.handleSearch = this.handleSearch.bind(this);
this.handleTabChange = this.handleTabChange.bind(this);
this.handleChangeIndex = this.handleChangeIndex.bind(this);
this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
this.handleConfirmOpen = this.handleConfirmOpen.bind(this);
this.handleFinishTodo = this.handleFinishTodo.bind(this);
this.editToDo = this.editToDo.bind(this);
this.handleEditOpen = this.handleEditOpen.bind(this);
this.handleChangeTheme = this.handleChangeTheme.bind(this);
}
 
addToDo(name, date){
  let id = this.state.id + 1;
  let todos = this.state.todos.slice();
  todos.push({id: id, name: name, date: date});  
  this.setState({
  todos: todos,
  id: id
  });
}

handleChangeTheme(){

  this.setState({
    darkTheme: !this.state.darkTheme
  })
}

editToDo(id, name, date){
  let editedTodos = this.state.todos.map(todo => (todo.id === id ? {...todo, name, date} : todo));
  this.setState({
    todos: editedTodos
  })
}

clearAll(event){ 
this.setState({
todos: [],
donetodos: []
});
};

handleEditOpen = (id) => {
  this.setState({ editingId: id });
}

handleClickOpen = () => {
  this.setState({ namepopup: true });
};

handleClose = () => {
  this.setState({ namepopup: false, confirmpopup: false, popupcontext: null, editingId: -1 });
};

handleSearch(e){
  this.setState({search: e.target.value});
} 

handleTabChange(event, value){
  this.setState({tab: value});
}

handleChangeIndex = index => {
  this.setState({ tab: index });
};

handleConfirmOpen (id, popupcontext) {
  this.setState({ popupcontext:popupcontext, confirmpopup: true, targetid: id });
};

handleDeleteTodo (){
  let id = this.state.targetid;
  let todos = this.state.todos.filter(function (todo){return todo.id !== id});
  let donetodos = this.state.donetodos.filter(function (todo){return todo.id !== id});
  this.setState ({todos: todos, donetodos:donetodos});
}

handleFinishTodo(){
  let id = this.state.targetid;
  let donetodo = this.state.todos.find(function(todo){return todo.id === id});
  let todos = this.state.todos.filter(function (todo){return todo.id !== id});
  let donetodos = this.state.donetodos.slice().concat(donetodo);
  this.setState({todos:todos, donetodos:donetodos});
}

render() {
const todos = this.state.todos;
let tab = this.state.tab;

    return (<Fragment>
   <MuiThemeProvider theme={this.state.darkTheme? darkTheme:lighTheme}>
    <CssBaseline />
    <div className="App">
    <Helmet>
    <meta 
    charSet="utf-8" 
    name="viewport"
    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
    <title>To do App</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>
    <SearchAppBar handleChangeTheme={this.handleChangeTheme} handleSearch={this.handleSearch} search={this.state.search} clearAll={this.clearAll} title="To do App"></SearchAppBar>
    <Todotabs tab={tab} handleTabChange={this.handleTabChange}></Todotabs>
    <Todos handleClickOpen={this.handleClickOpen} handleEditOpen={this.handleEditOpen} handleConfirmOpen={this.handleConfirmOpen} id={this.state.id} handleDeleteTodo={this.handleDeleteTodo} handleChangeIndex={this.handleChangeIndex} tab={tab} search={this.state.search} todos={todos} donetodos={this.state.donetodos}></Todos>
    <SimpleTooltips handleClickOpen={this.handleClickOpen} ></SimpleTooltips>
    <Namepopup editToDo={this.editToDo} editingId={this.state.editingId} open={this.state.namepopup} handleClose={this.handleClose} addToDo={this.addToDo}></Namepopup>
    <Confirmpopup 
    popupcontext={this.state.popupcontext} 
    open={this.state.confirmpopup} 
    handleClose={this.handleClose} 
    handleFinishTodo={this.handleFinishTodo} 
    handleDeleteTodo={this.handleDeleteTodo}>
    </Confirmpopup>
    </div>
    </MuiThemeProvider>
    </Fragment>
    );
  }
}

export default App;
