import React, { Component, Fragment } from 'react';
import './App.css';
import 'typeface-roboto';
import { createMuiTheme, MuiThemeProvider, withTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Helmet } from 'react-helmet'
//import SvgIcon from '@material-ui/core/SvgIcon';
//import {Typography, AppBar, Icon, Link, Toolbar, IconButton, InputBase} from '@material-ui/core/';
import { red } from '@material-ui/core/colors';
import SearchAppBar from './components/searchappbar';
import SimpleTooltips from './components/tooltip';
import Todos from './components/todos';
import Namepopup from './components/namepopup';
import Todotabs from './components/todotabs';


const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
     primary: red,
     type: "dark"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
});

class App extends Component {
 constructor(props){
   super(props);
this.state={
  todos: [],
  namepopup: false,
  search: "",
  tab: 0
}
this.addToDo = this.addToDo.bind(this);
this.clearAll = this.clearAll.bind(this);
this.handleClickOpen = this.handleClickOpen.bind(this);
this.handleClose = this.handleClose.bind(this);
this.handleSearch = this.handleSearch.bind(this);
this.handleTabChange = this.handleTabChange.bind(this);
this.handleChangeIndex = this.handleChangeIndex.bind(this);
 }
  
addToDo(name, date){
  let todos = this.state.todos.slice();
  todos.push({name: name, date: date});  
this.setState({
todos: todos
});
}

clearAll(event){ 
this.setState({
todos: []
});
};

handleClickOpen = () => {
  this.setState({ namepopup: true });
};

handleClose = () => {
  this.setState({ namepopup: false });
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

  render() {
    const todos = this.state.todos;
let todoadder = this.state.todoadder;
let tab = this.state.tab;

    return (<Fragment>
   <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <div className="App">

    <Helmet>
    <meta charSet="utf-8" name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
    <title>To do App</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>

    <SearchAppBar handleSearch={this.handleSearch} search={this.state.search} clearAll={this.clearAll} title="To do App"></SearchAppBar>
    <Todotabs tab={tab} handleTabChange={this.handleTabChange}></Todotabs>
    <Todos handleChangeIndex={this.handleChangeIndex} tab={tab} search={this.state.search} todos={todos}></Todos>
    <SimpleTooltips handleClickOpen={this.handleClickOpen} ></SimpleTooltips>
    <Namepopup open={this.state.namepopup} handleClose={this.handleClose} addToDo={this.addToDo}></Namepopup>
    </div>
    </MuiThemeProvider>
    </Fragment>
    );
  }
}

export default App;
