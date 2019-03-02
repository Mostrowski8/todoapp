import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
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
};

handleDateClose = () => {
  this.setState({ datepopup: false });
};


reset(){
    this.setState({
        todoname: ""
    }); 
}

render() {
      let name = this.state.todoname==="";
      let handleClose = this.props.handleClose;
      let currentname;
      let title = "Create task"
      
if (this.props.editingId > 0){
let editedtodo = this.props.handleFindTodo();
currentname = editedtodo.name;
title = "Change name"
}

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={(e)=>{handleClose(e)}}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <TextField onChange={this.handleChange}
              autoFocus
              placeholder={currentname}
              margin="dense"
              id="todoname"
              label="Task name"
              type="text"
              fullWidth
            />
           
           <Datepopup 
           handleFindTodo = {this.props.handleFindTodo}
           editToDo = {this.props.editToDo}
           editingId = {this.props.editingId}
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
            <Button disabled={name} onClick={(e)=>{this.handleDateOpen()}} color="primary">
              Next
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

Namepopup.propTypes = {
  addToDo:  PropTypes.func.isRequired,
  handleClose:  PropTypes.func.isRequired,
  editingId: PropTypes.number.isRequired,
  editToDo: PropTypes.func.isRequired,
  handleFindTodo: PropTypes.func.isRequired,
}