import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, Paper } from '@material-ui/core';
import moment from 'moment';
import Timer from './timer';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';



const paperstyle = {
    margin: 5,
    padding: 10,
    MaxWidth: "100%",
    overflowWrap: "break-word"
}

export default class Todo extends React.Component {
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
let handleDeleteOpen = this.props.handleDeleteOpen;
return(

<Fragment>
<Paper style={paperstyle} >
<div style={{display: "flex", justifyContent: "space-between"}}>
<div style={{maxWidth: 250, display: "inline-block", marginTop: 5}}><Typography style={{fontSize: "1.5em", maxWidth: 250, overflowWrap: "break-word"}} >{this.props.name}</Typography></div>
<div style={{display: "inline-block", alignSelf: "right"}}>
      <Tooltip title="Edit">
      <IconButton  aria-label="Edit">
          <EditIcon style={{fontSize: "0.7em"}} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton onClick={(e)=>{handleDeleteOpen(this.props.id)}} aria-label="Delete">
          <DeleteIcon style={{fontSize: "0.7em"}} />
        </IconButton>
      </Tooltip>
      </div>
      </div>
<hr></hr>
<br></br><Typography>Deadline:</Typography>
<Typography variant="caption">{day} | {hour}</Typography>
<br></br>
<Timer date={date}/>
</Paper>
</Fragment>
  )
}
}

Todo.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    handleDeleteTodo: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    handleDeleteOpen: PropTypes.func.isRequired
}