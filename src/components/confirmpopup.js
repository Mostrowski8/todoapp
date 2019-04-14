import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';


const Confirmpopup = (props) => {

let handleConfirm;
let popuptext;

 if (props.popupcontext === "Delete"){
   handleConfirm = props.handleDeleteTodo;
   popuptext = <DialogTitle>Delete task?</DialogTitle>;
 } else if (props.popupcontext === "Finish"){
   handleConfirm = props.handleFinishTodo;
   popuptext = <DialogTitle>Finish task?</DialogTitle>;
 }

return(
<Dialog
 open={props.open}
 onClose={(e)=>{props.handleClose(e)}}
 aria-labelledby="form-dialog-title">
    {popuptext}
    <DialogActions>
            <Button onClick={(e)=>{props.handleClose(e)}} color="primary">
              Cancel
            </Button>
            <Button  onClick={(e)=>{handleConfirm(); props.handleClose(e)}} color="primary">
              Confirm
            </Button>
          </DialogActions>
</Dialog>
    )
}

Confirmpopup.propTypes = {
    handleDeleteTodo:  PropTypes.func.isRequired,
    handleFinishTodo: PropTypes.func.isRequired,
    popupcontext: PropTypes.string,
    handleClose:  PropTypes.func.isRequired
  }

  export default Confirmpopup