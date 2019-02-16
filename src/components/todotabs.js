import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tab, AppBar, Tabs, Typography, Paper, Grid } from '@material-ui/core';

export default function Todotabs (props){
    
return(
<Tabs
value={props.tab}
onChange={props.handleTabChange}
indicatorColor="primary"
textColor="primary"
variant="fullWidth"
>
    <Tab tab={1} label="Date created" />
    <Tab tab={2} label="By deadline" />
    <Tab tab={3} label="Done" />
</Tabs>

)

} 

Todotabs.propTypes = {
    tab: PropTypes.number.isRequired,
    handleTabChange: PropTypes.func.isRequired
  };