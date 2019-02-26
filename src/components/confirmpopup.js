import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';


export default class Confirmpopup extends React.Component {
constructor(props){
    super(props);
}



render(){

let handleConfirm;
let popuptext;

 if (this.props.popupcontext === "Delete"){
   handleConfirm = this.props.handleDeleteTodo;
   popuptext = "Delete task?";
 } else if (this.props.popupcontext === "Finish"){
   handleConfirm = this.props.handleFinishTodo;
   popuptext = "Finish task?";
 }

return(
<Dialog
 open={this.props.open}
 onClose={(e)=>{this.props.handleClose(e)}}
 aria-labelledby="form-dialog-title">
    <DialogTitle>{popuptext}</DialogTitle>
    <DialogActions>
            <Button onClick={(e)=>{this.props.handleClose(e)}} color="primary">
              Cancel
            </Button>
            <Button  onClick={(e)=>{handleConfirm(); this.props.handleClose(e)}} color="primary">
              Confirm
            </Button>
          </DialogActions>
</Dialog>
    )
}
}

Confirmpopup.propTypes = {
    handleDeleteTodo:  PropTypes.func.isRequired,
    handleFinishTodo: PropTypes.func.isRequired,
    popupcontext: PropTypes.string,
    handleClose:  PropTypes.func.isRequired
  }