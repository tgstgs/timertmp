// Timer.js

import React from 'react';
import ReactDOM from 'react-dom';
// import TimerDisplay from './TimerDisplay';
// import { createContainer } from 'react-meteor-data';


class Timer extends React.Component {
   
    constructor(props) {
        super(props);
        //this.state = { time: 0 };
        this.state = { time: "" };
    }
    /*
    constructor() {
        super();
        this.state = { time: new Date().toLocaleString() };
    }
    */

    countDown(){
        var endDate = new Date("Sep 30, 2017");
        var days = parseInt((endDate - Date.now())/(1000*60*60*24));
        var hours = parseInt((endDate - Date.now())/(1000*60*60))%24;
        var minutes = parseInt((endDate - Date.now())/(1000*60))%60;
        var seconds = parseInt((endDate - Date.now())/(1000))%60;
           
        if (Date.now() < Date.parse(endDate)){
            this.state.time = days + "d, " + hours+ "h, " + minutes + "m, " + seconds + "s";
        } else {
            this.state.time = "Closed";
        }
   }
    


    componentDidMount() {
        setInterval(() => 
        //this.setState({ time: new Date().toLocaleString() }), 1000);
        this.setState({ time: this.countDown() }), 1000);
        //this.tmp = this.state.time;
        //console.log(this.tmp);
            }
    
    render() {
        
        return (
            <div>
                {/*<p>Timer</p>*/}                
                {/*Time : { this.state.time } */}
                
                Timer { this.state.time }
                {/*
                <TimerDisplay time = { this.state.time }/>
                <TimerDisplay time = 'today'/> */}

            </div> 
        );
    }

    

}

export default Timer;

/*
Time = new Mongo.Collection('time');

export default createContainer(() => {
    return {
        time: Time.find().fetch()
    }
},
Timer);
*/
