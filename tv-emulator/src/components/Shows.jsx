import { useState } from 'react';
import styles from '../styles/Shows.module.css';

function ShowTimes({times}) {
    return(
        <div className={styles.times}>
            {times.map((time, index) => {
                return (
                    <div key={index} className={styles.time}>
                        {time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </div>
                );
            })}
        </div>
    );
}


function ShowNames() {
    return(
        <div className={styles.names}></div>
    );
}

export default function Shows({time}) {
    
    // Align to nearest half hour
    var startTime = new Date(time.getTime());
    if(time.getMinutes() / 30 >= 1) {
        startTime.setMinutes(30);
    } else {
        startTime.setMinutes(0);
    }

    var times = [];
    times.push(startTime);
    for(let i = 1; i < 8; i++) {
        let nextTime = new Date(startTime.getTime() + i * 30 * 60000);
        times.push(nextTime);
    }

    return(
        <div className={styles.shows}>
            <ShowTimes times={times}/>
            <ShowNames/>
        </div>
    );
}