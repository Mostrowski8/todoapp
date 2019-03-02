import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {Giticon, LinkedinIcon} from '../assets/icons';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



export default class Infopopup extends React.Component {
    constructor(props){
        super(props);
    }
  
    render(){
 
    return(
    <Dialog
     open={this.props.open}
     onClose={(e)=>{this.props.handleClose(e)}}
     aria-labelledby="form-dialog-title">
        <DialogTitle>Info</DialogTitle>
        <DialogContent>
          <Typography>Deadline tracking app created for demonstration purposes.<br></br>Core dependencies:</Typography>
          <List><ListItem><Typography>React 16.7.0</Typography></ListItem><ListItem><Typography>Material-ui 3.9.1</Typography></ListItem></List>
          <Divider variant="fullWidth"/>         
          <List>
          <ListItem button component="a" href="https://github.com/Mostrowski8" target="_blank">
          <ListItemIcon>
          <Giticon darkTheme={this.props.darkTheme} />
          </ ListItemIcon>
          <ListItemText>Chek out my GitHub!</ListItemText>
          </ ListItem>
          <ListItem button component="a" href="https://www.linkedin.com/in/marek-ostrowski-07b555149/" target="_blank">
          <ListItemIcon>
          <LinkedinIcon darkTheme={this.props.darkTheme} />
          </ ListItemIcon>
          <ListItemText>Chek out my LinkedIn!</ListItemText>
          </ ListItem>
          </List>
       </DialogContent>
        <DialogActions>
                <Button onClick={(e)=>{this.props.handleClose(e)}} color="primary">
                  Close
                </Button>
              </DialogActions>
    </Dialog>
        )
    }
    }
    
    Infopopup.propTypes = {
        handleClose:  PropTypes.func.isRequired,
        darkTheme: PropTypes.bool.isRequired
      }

    