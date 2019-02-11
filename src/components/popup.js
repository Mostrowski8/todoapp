import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import PropTypes from 'prop-types';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Datepopup from './datepopup';

export default class Namepopup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todoname: "",
            datepopup: false
           };
           this.handleChange = this.handleChange.bind(this);
          
    }
  
handleChange(e){
    let name = e.target.value;
    
    this.setState({
        todoname: name
    });
}

handleDateOpen = () => {
  this.setState({ datepopup: true });
  console.log("handledatecickopen")
};

handleDateClose = () => {
  this.setState({ datepopup: false });
  console.log("handledateclose")
};


reset(){
    this.setState({
        todoname: ""
    }); 
}

  render() {
      let name = this.state.todoname==="";
      let handleClose = this.props.handleClose;
      let addToDo = this.props.addToDo;
    return (
      <div>
        <Dialog
        
          open={this.props.open}
          onClose={(e)=>{handleClose(e)}}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create task</DialogTitle>
          <DialogContent>
            <TextField onChange={this.handleChange}
              autoFocus
              margin="dense"
              id="todoname"
              label="Task name"
              type="text"
              fullWidth
            />
           
           <Datepopup 
           onClick={this.handleDateOpen}
           handleClose={this.props.handleClose}
           handleDateClose={this.handleDateClose}
           open={this.state.datepopup}
           addToDo={this.props.addToDo}
           reset={this.reset}
           name={this.state.todoname}
           /> 
          </DialogContent>
          <DialogActions>
            <Button onClick={(e)=>{handleClose(e)}} color="primary">
              Cancel
            </Button>
            {/* <Button disabled={name, date} onClick={(e)=>{addToDo(this.state.todoname, this.state.date); this.reset(); handleClose(e)}} color="primary"> */}
            <Button disabled={name} onClick={(e)=>{this.handleDateOpen()}} color="primary">
              Next
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

