import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function StopWatch() {
    const [time, setTime] = useState(0)
    const [now, setNow] = useState(0)
    // Creates a mutable object, intervalRef, initialized to null, 
    // which will hold the reference to the interval created by setInterval.
    const intervalRef = useRef(null)


//  to increment the time state by 10 milliseconds every 10 milliseconds.
const handlerStart=()=>{
    intervalRef.current = setInterval(()=>{
    setTime(prev=>prev+10)
}, 10)
};
// This function stops the stopwatch by clearing the interval using clearInterval
const handlerStop =() => {
    clearInterval(intervalRef.current);
    
};

//  This function resets the stopwatch by clearing the interval, setting time and now states to 0.
const handlerReset =() => {
  clearInterval(intervalRef.current);
        setTime(0);
        setNow(0);
}
// Calculates the time passed since the stopwatch started in seconds.
let timePassed = (time-now ) / 1000;

  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{color:"violet"}}>StopWatch</h1>
       <h2>{timePassed.toFixed(3)}</h2>
       {/* margin-right is for space between the buttons */}
       <button style={{"margin-right": "16px", backgroundColor:"green"}}  type="Start" onClick={handlerStart}>Start</button>
       <button style={{"margin-right": "16px",  backgroundColor:"red"}}   type="Stop"  onClick={handlerStop}>Stop</button>
       <button style={{"margin-right": "16px" ,backgroundColor:"yellow"}} type="Reset" onClick={handlerReset}>Reset</button>
    </div>
    // The toFixed() method in JavaScript is used to format a number using fixed-point notation. 
    // It rounds the number to a specified number of decimal places and 
    // returns the resulting string representation of the number.
  )
}

export default StopWatch;