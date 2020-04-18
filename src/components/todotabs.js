import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs} from '@material-ui/core';

const Todotabs = (props) => {
    
    return(
        <Tabs
            value={props.tab}
            onChange={props.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth">
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

export default Todotabs