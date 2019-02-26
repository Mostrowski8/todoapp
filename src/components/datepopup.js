import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import PropTypes from 'prop-types';
import WithMobileDialog from '@material-ui/core/withMobileDialog';

export default class Datepopup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: null,
           };
           this.handleDateChange = this.handleDateChange.bind(this);      
    }
  
handleDateChange = date => {
  this.setState({ date: date });
};

reset(){
    this.setState({
        todoname: "",
        date: null
    }); 
}



  render() {
    let editingId = this.props.editingId;
      let name = this.props.name;
      let date = this.state.date===null;
      let addToDo = this.props.addToDo;
      let editToDo = this.props.editToDo;
      let handleClose = this.props.handleClose;
      let handleDateClose= this.props.handleDateClose;
      let donebutton;
      if (editingId <= 0){
      donebutton = <Button disabled={date} onClick={(e)=>{addToDo(name, this.state.date); this.reset(); handleDateClose(e); handleClose(e)}} color="primary">
              Done
        </Button>
      } else {
        donebutton = <Button disabled={date} onClick={(e)=>{editToDo(editingId, name, this.state.date); this.reset(); handleDateClose(e); handleClose(e)}} color="primary">
        Done
  </Button> 
      }
 


    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={(e)=>{this.reset(); handleClose(e); handleDateClose(e)}}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Set deadline</DialogTitle>
          <DialogContent>
           <MuiPickersUtilsProvider utils={MomentUtils}>
           <DatePicker
            margin="normal"
            label="Pick date"
            value={this.state.date}
            onChange={this.handleDateChange}
          /><br></br>
          <TimePicker
            margin="normal"
            label="Pick hour"
            value={this.state.date}
            onChange={this.handleDateChange}
          />
           </MuiPickersUtilsProvider>  
          </DialogContent>
          <DialogActions>
            <Button onClick={(e)=>{handleDateClose(e)}} color="primary">
              Back
            </Button>
            {/* <Button disabled={date} onClick={(e)=>{addToDo(name, this.state.date); this.reset(); handleDateClose(e); handleClose(e)}} color="primary">
              Done
            </Button> */}
            {donebutton}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

Datepopup.propTypes = {
  name: PropTypes.string.isRequired,
  addToDo:  PropTypes.func.isRequired,
  handleClose:  PropTypes.func.isRequired,
  handleDateClose: PropTypes.func.isRequired,
  editingId: PropTypes.number.isRequired,
  editToDo: PropTypes.func.isRequired
}