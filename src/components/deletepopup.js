import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';


export default class Deletepopup extends React.Component {
constructor(props){
    super(props);
}



render(){
    return(
<Dialog
 open={this.props.open}
 onClose={(e)=>{this.props.handleClose(e)}}
 aria-labelledby="form-dialog-title">
    <DialogTitle>Delete task?</DialogTitle>
    <DialogActions>
            <Button onClick={(e)=>{this.props.handleClose(e)}} color="primary">
              Cancel
            </Button>
            <Button  onClick={(e)=>{this.props.handleDeleteTodo(); this.props.handleClose(e)}} color="primary">
              Confirm
            </Button>
          </DialogActions>
</Dialog>
    )
}


}

Deletepopup.propTypes = {
    handleDeleteTodo:  PropTypes.func.isRequired,
    handleClose:  PropTypes.func.isRequired
  }