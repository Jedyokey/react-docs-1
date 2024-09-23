import React from "react";
import Clock from "./Clock";
import { useState, useEffect } from "react";

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearInterval(id);
    }, [])

    return time;
}

function FixClock() {
    const time = useTime();
    return (
        <div>
            <Clock time={time} />
        </div>
    )
}

export default FixClock;