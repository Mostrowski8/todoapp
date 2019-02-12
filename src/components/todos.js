import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, Paper, Grid } from '@material-ui/core';
import moment from 'moment';
import Timer from './timer';
import Todo from './todo';


export default class Todos extends React.Component {
constructor(props){
    super(props);
}

render(){
  let search = this.props.search;
  let todos;
 if (search !=="") {
  todos = this.props.todos.filter(function (todo){return todo.name.indexOf(search) !== -1})
 } else {
  todos = this.props.todos;
 }  

        let todoslist = todos.map((todo, index)=> <Grid item lg={2}  md={4} sm={6} xs={12} key={todo.name+index}><Todo name={todo.name} date={todo.date}/></Grid>);
    return (   
        <div>
        <Grid container spacing={24} direction="row">
        {todoslist}
        </Grid>
        </div>
      );
  }
}

 Todos.propTypes = {
   search: PropTypes.string.isRequired,
   todos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired
   }))
 };

