import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid } from '@material-ui/core';
import moment from 'moment';

export default class Timer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                timeleft: null,
                detailtimeron: false
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
                let detailtimer = (years ? years + "\xa0years, " : "") + (months ? months + "\xa0months, " : "") + (days ? days + "\xa0days, " : "") + (hours ? hours + "\xa0hours, " : "") + (minutes ? minutes + "\xa0minutes, " : "") + (seconds ? seconds + "\xa0seconds." : "0 seconds");
                detailtimer = "in " + detailtimer;
                if (detailtimer === "in 0 seconds") {
                    detailtimer = "Deadline passed!";
                }
                this.setState({
                    timeleft: detailtimer
                })
            } else {
                let fromnow = moment(date).fromNow();
                this.setState({
                    timeleft: fromnow
                })
            }
        }

handletimerclick(event){
    let detailtimeron = !this.state.detailtimeron
    this.setState({
        detailtimeron: detailtimeron
    })
}

        componentDidMount() {
            this.interval = setInterval(this.updatetime, 1000);
        }

        componentWillUnmount() {
            clearInterval(this.interval);
        }


    render(){
            let timeleft = this.state.timeleft;
            return(
                <Typography onClick={this.handletimerclick} variant="caption">{timeleft}</Typography>
            )
    }
}



