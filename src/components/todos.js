import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid } from '@material-ui/core';


const styles = theme => ({
  fab: {
    margin: theme.spacing.unit * 2,
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
  paperstyle: {
    margin: 5,
    padding: 10,
    minWidth: 250
},
});

const paperstyle = {
    margin: 5,
    padding: 10,
    minWidth: 275
}

class Todos extends React.Component {
constructor(props){
    super(props);
}

  render(){
const {classes} = this.props;
let todos = this.props.todos;
        let todoslist = todos.map((todo, index)=> <Grid item key={todo.name+index}><Paper style={paperstyle}><Typography>{todo.name}</Typography></Paper></Grid>);
    return (   
        <div>
            <Grid container  direction="row"
  >
        {todoslist}
        </Grid>
        </div>
      );
  }

}

Todos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Todos);