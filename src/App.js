import React, { Component, Fragment } from 'react';
import 'typeface-roboto';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Helmet } from 'react-helmet'
import SearchAppBar from './components/searchappbar';
import SimpleTooltips from './components/tooltip';
import Todos from './components/todos';
import Namepopup from './components/namepopup';
import Todotabs from './components/todotabs';
import Confirmpopup from './components/confirmpopup';
import myThemes from './themes/themes';
import Infopopup from './components/infopopup';

const {darkTheme, lighTheme} = myThemes;

class App extends Component {

state = {
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
  darkTheme: true,
  infoOpen: false
}

handleInfoOpen = () => {
  this.setState({
    infoOpen: true
  })
}

handleFindTodo = () => {
  let editingId = this.state.editingId;
  let editedtodo = this.state.todos.find((todo) => editingId === todo.id)
  console.log(editedtodo);
  return editedtodo;
}

addToDo = (name, date) => {
  let id = this.state.id + 1;
  let todos = this.state.todos.slice();
  todos.push({
    id: id,
    name: name,
    date: date,
    done: false
  });
  this.setState({
    todos: todos,
    id: id
  });
}

handleChangeTheme = () => {
  this.setState({
    darkTheme: !this.state.darkTheme
  })
}

editToDo = (id, name, date) => {
  let editedTodos = this.state.todos.map(todo => (todo.id === id ? {
    ...todo,
    name,
    date
  } : todo));
  this.setState({
    todos: editedTodos
  })
}

clearAll = event => {
  this.setState({
    todos: [],
    donetodos: []
  });
};

handleEditOpen = id => {
  this.setState({
    editingId: id
  });
}

handleClickOpen = () => {
  this.setState({
    namepopup: true
  });
};

handleClose = () => {
  this.setState({
    namepopup: false,
    confirmpopup: false,
    popupcontext: null,
    editingId: -1,
    infoOpen: false
  });
};

handleSearch = e => {
  this.setState({
    search: e.target.value
  });
}

handleTabChange = (event, value) => {
  this.setState({
    tab: value
  });
}

handleChangeIndex = index => {
  this.setState({
    tab: index
  });
};

handleConfirmOpen = (id, popupcontext) => {
  this.setState({
    popupcontext: popupcontext,
    confirmpopup: true,
    targetid: id
  });
};

handleDeleteTodo = () => {
  let id = this.state.targetid;
  let todos = this.state.todos.filter(function (todo) {
    return todo.id !== id
  });
  let donetodos = this.state.donetodos.filter(function (todo) {
    return todo.id !== id
  });
  this.setState({
    todos: todos,
    donetodos: donetodos
  });
}

handleFinishTodo = () => {
  let id = this.state.targetid;
  let donetodo = this.state.todos.find(function (todo) {
    return todo.id === id
  });
  donetodo = {
    ...donetodo,
    done: true
  }
  let todos = this.state.todos.filter(function (todo) {
    return todo.id !== id
  });
  let donetodos = this.state.donetodos.slice().concat(donetodo);
  this.setState({
    todos: todos,
    donetodos: donetodos
  });
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
    <SearchAppBar handleInfoOpen={this.handleInfoOpen} handleChangeTheme={this.handleChangeTheme} handleSearch={this.handleSearch} search={this.state.search} clearAll={this.clearAll} title="To do App"></SearchAppBar>
    <Todotabs tab={tab} handleTabChange={this.handleTabChange}></Todotabs>
    <Todos handleClickOpen={this.handleClickOpen} handleEditOpen={this.handleEditOpen} handleConfirmOpen={this.handleConfirmOpen} id={this.state.id} handleDeleteTodo={this.handleDeleteTodo} handleChangeIndex={this.handleChangeIndex} tab={tab} search={this.state.search} todos={todos} donetodos={this.state.donetodos}></Todos>
    <SimpleTooltips handleClickOpen={this.handleClickOpen} ></SimpleTooltips>
    <Namepopup handleFindTodo={this.handleFindTodo} editToDo={this.editToDo} editingId={this.state.editingId} open={this.state.namepopup} handleClose={this.handleClose} addToDo={this.addToDo}></Namepopup>
    <Infopopup darkTheme={this.state.darkTheme} open={this.state.infoOpen} handleClose={this.handleClose}></Infopopup>
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
