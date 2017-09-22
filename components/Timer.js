// Timer.js

import React from 'react';
import ReactDOM from 'react-dom';
import TimerDisplay from './TimerDisplay';
import { createContainer } from 'react-meteor-data';


class Timer extends React.Component {
    // render the child component TimerDisplay instead
    //constructor(props) {
      //  super(props);
        //this.state = { time: 0 };
    //}
    constructor() {
        super();
        this.state = { time: new Date().toLocaleString() };
    }

    componentDidMount() {
        setInterval(() => 
            this.setState({ time: new Date().toLocaleString() }), 1000);
        }

    render() {
        return (
            <div>
                {/*Time: { this.state.time }*/}
                <TimerDisplay time = { this.state.time }/>
                <TimerDisplay time = 'today'/>
            </div> 
        );
    }
}

// export default Timer;

Time = new Mongo.Collection('time');

export default createContainer(() => {
    return {
        time: Time.find().fetch()
    }
},
Timer);

