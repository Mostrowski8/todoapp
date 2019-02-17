import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';

export default class Timer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                detailtimer: null,
                fromnow: null,
                detailtimeron: false,
            }
            this.updatetime = this.updatetime.bind(this);
            this.handletimerclick = this.handletimerclick.bind(this);
        }
        updatetime() {
            let date = this.props.date;
            if (this.state.detailtimeron) {
                let miliseconds = moment().diff(date, 'miliseconds');
                let left = moment.duration(miliseconds);
                let seconds = (left._data.seconds < 1) ? Math.abs(left._data.seconds) : 0;
                let minutes = (left._data.minutes < 1) ? Math.abs(left._data.minutes) : 0;
                let hours = (left._data.hours < 1) ? Math.abs(left._data.hours) : 0;
                let days = (left._data.days < 1) ? Math.abs(left._data.days) : 0;
                let months = (left._data.months < 1) ? Math.abs(left._data.months) : 0;
                let years = (left._data.years < 1) ? Math.abs(left._data.years) : 0;
                let detailtimer = (years ? years + "\xa0years, " : "") + (months ? months + "\xa0months, " : "") + (days ? days + "\xa0days, " : "") + (hours ? hours + "\xa0hours, " : "") + (minutes ? minutes + "\xa0minutes, " : "") + (seconds ? seconds + "\xa0seconds" : "0 seconds");
                detailtimer = "in " + detailtimer;
                if (detailtimer === "in 0 seconds") {
                    detailtimer = "Deadline passed!";
                }
                this.setState({
                    detailtimer: detailtimer
                })
            } else {
                let fromnow = moment(date).fromNow();
                this.setState({
                    fromnow: fromnow
                })
            }
        }

handletimerclick(event){
    let detailtimeron = !this.state.detailtimeron;
    this.setState({
        detailtimeron: detailtimeron,
    })
}

        componentWillMount() {
            this.interval = setInterval(this.updatetime, 100);
        }

        componentWillUnmount() {
            clearInterval(this.interval);
        }


    render(){
 let detailtimer = this.state.detailtimer;
 let fromnow = this.state.fromnow;
        let timerstyle = {fontSize: "1em"}
        let fromnowstyle = {fontSize: "2em", fontWeight: "700", lineHeight: "2em" }

            return(
                <Fragment>
                <FormControlLabel
                control={
                    <Switch
                    color="primary"
                      checked={this.state.detailtimeron}
                      onChange={this.handletimerclick}
                    />
                  }
                  label="Timer"
                /> 
                <Collapse in={this.state.detailtimeron}>
                <Typography color="primary" style={timerstyle} variant="caption">{detailtimer}</Typography>
                </Collapse>
                <Collapse in={!this.state.detailtimeron}>
                <Typography color="primary" style={fromnowstyle} variant="caption">{fromnow}</Typography>
                </Collapse>
                </Fragment>
            )
    }
}

Timer.propTypes = {
     date: PropTypes.object.isRequired
  };

