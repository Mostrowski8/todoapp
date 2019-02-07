import React, { Component, Fragment } from 'react';
import './App.css';
import 'typeface-roboto';
import { withStyles, createMuiTheme, MuiThemeProvider, withTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Helmet } from 'react-helmet'
import SvgIcon from '@material-ui/core/SvgIcon';
import {Typography, AppBar, Icon, Link, Toolbar, IconButton, InputBase} from '@material-ui/core/';
import { red } from '@material-ui/core/colors';
import SearchAppBar from './components/searchappbar';
import SimpleTooltips from './components/tooltip';
import Todos from './components/todos';
import FormDialog from './components/popup';
import moment from 'moment';


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
  open: false,
  
}
this.addToDo = this.addToDo.bind(this);
this.clearAll = this.clearAll.bind(this);
this.handleClickOpen = this.handleClickOpen.bind(this);
this.handleClose = this.handleClose.bind(this);

 }
  
addToDo(name, date){
  let todos = this.state.todos.slice();
  todos.push({name: name, date: date});  
this.setState({
todos: todos
});
}

clearAll(event){ 
  console.log("clearall fired");
this.setState({
todos: []
});
};

handleClickOpen = () => {
  this.setState({ open: true });
  console.log("handlecickopen")
};

handleClose = () => {
  this.setState({ open: false });
  console.log("handleclose")
};




  render() {
    const todos = this.state.todos;
let todoadder = this.state.todoadder;

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

    <SearchAppBar clearAll={this.clearAll} title="To do App"></SearchAppBar>
    <Todos todos={todos}></Todos>
    <SimpleTooltips handleClickOpen={this.handleClickOpen} ></SimpleTooltips>
    <FormDialog open={this.state.open} handleClose={this.handleClose} addToDo={this.addToDo}></FormDialog>
   
    
    
    </div>
    </MuiThemeProvider>
    </Fragment>
    );
  }
}

export default App;
