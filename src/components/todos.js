import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, Paper, Grid } from '@material-ui/core';
import moment from 'moment';
import Timer from './timer';

const paperstyle = {
    margin: 5,
    padding: 10,
    MaxWidth: "100%",
    overflowWrap: "break-word"
}

class Todo extends React.Component {
constructor(props){
super(props);
this.state = {
  timeleft: null,
  detailtimeron : true
}
}

render(){
let date = this.props.date;
let day = moment(date).format('MMMM Do YYYY');
let hour = moment(date).format('h:mm:ss a');
let timeleft = this.state.timeleft;

return(
  
<Fragment>
<Paper style={paperstyle} >
<Typography style={{maxWidth: 250, overflowWrap: "break-word"}} >{this.props.name}</Typography>
<hr></hr>
<br></br><Typography>Deadline:</Typography>
<Typography variant="caption">{day} | {hour}</Typography>
<br></br>
{/* <Typography variant="caption">{timeleft}</Typography> */}
<Timer date={date}/>
</Paper>
</Fragment>
  )
}
}

export default class Todos extends React.Component {
constructor(props){
    super(props);
}

render(){
let todos = this.props.todos;
        let todoslist = todos.map((todo, index)=> <Grid item md={4} sm={6} xs={12} key={todo.name+index}><Todo name={todo.name} date={todo.date}/></Grid>);
    return (   
        <div>
        <Grid container spacing={24} direction="row">
        {todoslist}
        </Grid>
        </div>
      );
  }
}

// Todos.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

//export default withStyles(styles)(Todos);