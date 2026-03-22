import React, { useState, uesEffect, useRef, useEffect } from 'react';
import './stopWatch.css';



function StopWatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elaspedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const [lap,setLap] = useState([]);



    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        return () => {
            clearInterval(intervalIdRef.current);
        }


    }, [isRunning]);



    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elaspedTime;
        console.log("startTimeRef.current", startTimeRef.current);

    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
        setLap([]);

    }
    function lapTime(){
        setLap([...lap,format()]);
    }
    function clearLap(){
        setLap([]);
    }

    function format() {
let hours = Math.floor(elaspedTime / (1000 * 60 * 60));
let minutes = Math.floor((elaspedTime % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((elaspedTime % (1000 * 60)) / 1000);
let miliseconds = Math.floor((elaspedTime % 1000) / 10);
hours = hours.toString().padStart(2, '0');
minutes = minutes.toString().padStart(2, '0');
seconds = seconds.toString().padStart(2, '0');
miliseconds = miliseconds.toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}.${miliseconds}`;
    }





    return (<div className='stopWatch'>

        <div className='display'>
            {format()}
        </div>
        <div className='control'>
            <button className='start-button' onClick={start}>Start</button>
            <button className='stop-button' onClick={stop}>Stop</button>
            <button className='reset-button' onClick={reset}>Reset</button>
            <button className='lap-button' onClick={lapTime}>Lap</button>
            <button className='reset-button' onClick={clearLap}>Clear Laps</button>

        </div>
        <div className='lap-times'>
            <h2>Lap Times:</h2>
            <ul>
                {lap.map((time, index) => (
                    <li key={index}>{time}</li>
                ))}
            </ul>
        </div>



    </div>

    )
}
export default StopWatch;
