import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid } from '@material-ui/core';
import moment from 'moment';


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
    Width: 250,
    MaxWidth: 250
},
});

const paperstyle = {
    margin: 5,
    padding: 10,
    Width: 275,
    maxWidth: 250,
    overflowWrap: "break-word"
}


class Todo extends React.Component {
constructor(props){
super(props);

}

render(){
let tododate = this.props.date;
let day = moment(tododate).format('MMMM Do YYYY');
let hour = moment(tododate).format('h:mm:ss a');


return(<Fragment>

<Paper style={paperstyle}><Typography style={{maxWidth: 250, overflowWrap: "break-word"}} variant="headline">{this.props.name}</Typography><br></br><Typography>Deadline:</Typography><Typography variant="caption">{day} {hour}</Typography></Paper>

</Fragment>
  )
}
}

class Todos extends React.Component {
constructor(props){
    super(props);
}

render(){
const {classes} = this.props;
let todos = this.props.todos;
        let todoslist = todos.map((todo, index)=> <Grid item key={todo.name+index}><Todo name={todo.name} date={todo.date}/></Grid>);
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