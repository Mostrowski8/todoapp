import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, Paper } from '@material-ui/core';
import moment from 'moment';
import Timer from './timer';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button'

const paperstyle = {
    margin: 5,
    padding: 10,
    MaxWidth: "100%",
    overflowWrap: "break-word"
}

export default class Todo extends Component {
state = {
  timeleft: null,
  detailtimeron : true
}

render(){
let date = this.props.date;
let day = moment(date).format('MMMM Do YYYY');
let hour = moment(date).format('h:mm:ss a');
let handleConfirmOpen = this.props.handleConfirmOpen;
let handleEditOpen = this.props.handleEditOpen;
let handleClickOpen = this.props.handleClickOpen;
let done = this.props.done;
let iconbutton;
if (done === false){
  iconbutton = <Tooltip title="Edit"><IconButton onClick={(e)=>{handleEditOpen(this.props.id); handleClickOpen()}}  aria-label="Edit">
  <EditIcon style={{fontSize: "0.7em"}} />
  </IconButton></Tooltip>
}

return(
<Fragment>
<Paper style={paperstyle} >
<div style={{display: "flex", justifyContent: "space-between"}}>
<div style={{maxWidth: 250, display: "inline-block", marginTop: 5}}><Typography style={{fontSize: "1.5em", maxWidth: 250, overflowWrap: "break-word"}} >{this.props.name}</Typography></div>
<div style={{display: "inline-block", alignSelf: "right"}}>     
     {iconbutton}   
      <Tooltip title="Delete">
        <IconButton onClick={(e)=>{handleConfirmOpen(this.props.id, "Delete")}} aria-label="Delete">
          <DeleteIcon style={{fontSize: "0.7em"}} />
        </IconButton>
      </Tooltip>
      </div>
      </div>
<hr></hr>
<Typography>Deadline:</Typography>
<Typography variant="caption">{day} | {hour}</Typography>
<hr></hr>
<Timer date={date}/>
<div style={{textAlign: "right"}}>
{this.props.tab !== 2 && <Button  onClick={(e)=>{handleConfirmOpen(this.props.id, "Finish")}} aria-label="Done" variant="contained" style={{display: "inline-block", marginTop: 10}} color="primary">Done</Button>}
</div>
</Paper>
</Fragment>
  )
}
}

Todo.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    handleConfirmOpen: PropTypes.func.isRequired,
    tab: PropTypes.number.isRequired,
    handleClickOpen: PropTypes.func.isRequired,
    handleEditOpen: PropTypes.func.isRequired,
    done: PropTypes.bool.isRequired
}