// Timer.js

import React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component {
   
    constructor(props) {
        super(props);

        this.state = { time: "" };
    }

    countDown(){
        var endDate = new Date("Oct 30, 2017");
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
        this.setState({ time: new Date().toLocaleString() }), 1000);
        //this.setState({ time: this.countDown() }), 1000); // So this apparently does not work. Can't figure out
    }
    
    render() {
        
        return (
            <div>
                Timer { this.state.time }
            </div> 
        );
    }
}

export default Timer;
