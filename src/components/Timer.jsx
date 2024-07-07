import { useState, useEffect } from "react";

export default function Timer({setStop,questionNumber}) {
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        if(timer===0) return setStop(true);
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        // The useEffect hook now returns a cleanup function that clears the interval using clearInterval(interval).
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [setStop,timer]);
    useEffect(()=>{
        setTimer(30);
    },[questionNumber]);

    return timer;
}
