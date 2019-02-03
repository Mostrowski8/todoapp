import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default class FormDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todoname: "",
           };
           this.handleChange = this.handleChange.bind(this);
    }
  
handleChange(e){
    let name = e.target.value;
    
    this.setState({
        todoname: name
    });
    console.log("handlechane", name)
}
//   handleClickOpen = () => {
//     this.setState({ open: true });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

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
          <DialogTitle id="form-dialog-title">Create</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Plese enter the task name below
            </DialogContentText>
            <TextField onChange={this.handleChange}
              autoFocus
              margin="dense"
              id="todoname"
              label="todoname"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={(e)=>{handleClose(e)}} color="primary">
              Cancel
            </Button>
            <Button disabled={name} onClick={(e)=>{addToDo(this.state.todoname); this.reset(); handleClose(e)}} color="primary">
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
