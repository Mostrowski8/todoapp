import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Todo from './todo';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  slide: {
    padding: 15,
    minHeight: 100
  }
};

export default class Todos extends React.Component {
constructor(props){
    super(props);
    this.state = {
      sortedtodos: []
    }
    this.sortTodos = this.sortTodos.bind(this);
}

sortTodos(tab){
  switch(tab){
    case 0:
        return this.props.todos;
        
        case 1:
        let sortedtodos = this.props.todos.slice().sort(function(a,b){
          if (a.date < b.date)
          return -1;
        if (a.date > b.date)
          return 1;
        return 0;
        });
        return sortedtodos;
        case 2:
        return this.props.donetodos;
        default:
        return [];
        }; 
}



render(){
  let tab = this.props.tab;
  let search = this.props.search; 
  let sortedtodos = this.sortTodos(this.props.tab);
  let todos;
 if (search !=="") {
 todos = sortedtodos.filter(function (todo){return todo.name.indexOf(search) !== -1})
 } else {
 todos = sortedtodos;
 }  

let todoslist = todos.map((todo, index)=> <Grid item lg={2}  md={4} sm={6} xs={12} key={todo.name+index}><Todo tab={this.props.tab} id={todo.id} handleConfirmOpen={this.props.handleConfirmOpen} name={todo.name} date={todo.date}/></Grid>);

    return (   
        <div>
        <SwipeableViews
        style={{minHeight: "80vh"}}
          axis={'x'}
          index={tab}
          onChangeIndex={this.props.handleChangeIndex}
        >
        <div style={styles.slide}>
        <Grid container spacing={24} direction="row">
        {todoslist}
        </Grid>
        </div>
        <div style={styles.slide}>
        <Grid container spacing={24} direction="row">
        {todoslist}
        </Grid>
        </div>
        <div style={styles.slide}>
        <Grid container spacing={24} direction="row">
        {todoslist}
        </Grid>
        </div>
        </SwipeableViews>
        </div>
      );
  }
}

 Todos.propTypes = {
  search: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired})),
  tab: PropTypes.number.isRequired,
  handleChangeIndex: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  handleConfirmOpen: PropTypes.func.isRequired,
  donetodos: PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired})), 
 };

