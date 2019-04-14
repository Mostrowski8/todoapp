import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import PropTypes from 'prop-types';

export default class Datepopup extends Component {
state = {
  date: null,
  oldDate: null
};

componentWillMount() {
  if (this.props.editingId > 0) {
    let currentdate = this.props.handleFindTodo();
    let oldDate = currentdate.date;
    this.setState({
      oldDate: oldDate
    });
  }
}

handleDateChange = date => {
  this.setState({
    date: date
  });
};

reset = () => {
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
      let title = "Set deadline";
      if (editingId <= 0){
      donebutton = <Button disabled={date} onClick={(e)=>{addToDo(name, this.state.date); this.reset(); handleDateClose(e); handleClose(e)}} color="primary">
              Done
        </Button>
      } else {
        title = "Set new deadline";
        let mydate = this.state.date? this.state.date:this.state.oldDate;
        donebutton = <Button onClick={(e)=>{editToDo(editingId, name, mydate); this.reset(); handleDateClose(e); handleClose(e)}} color="primary">
        Done
  </Button> 
      }
 
    return (
      <div>
        <Dialog
        styles = {{margin: 0, height: "100vh"}}
          open={this.props.open}
          onClose={(e)=>{this.reset(); handleClose(e); handleDateClose(e)}}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          <DialogContent>
           <MuiPickersUtilsProvider utils={MomentUtils}>
           <DatePicker
            margin="normal"
            label="Pick date"
            value={this.state.date? this.state.date:this.state.oldDate}
            onChange={this.handleDateChange}
          /><br></br>
          <TimePicker
            margin="normal"
            label="Pick hour"
            value={this.state.date? this.state.date:this.state.oldDate}
            onChange={this.handleDateChange}
          />
           </MuiPickersUtilsProvider>  
          </DialogContent>
          <DialogActions>
            <Button onClick={(e)=>{handleDateClose(e)}} color="primary">
              Back
            </Button>
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