import {useState, useEffect, useRef} from 'react';
import styles from './clock.module.css';


function Clock() {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const startTimeRef = useRef<number | null>(null);
    const saveTimerRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTimer(Date.now() - startTimeRef.current!);
            }, 10);
        } else if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
        }


        return () => clearInterval(intervalRef.current !== null ? intervalRef.current : undefined);
    }, [isRunning]);

    const startTimer = () => {
        startTimeRef.current = Date.now() - saveTimerRef.current;
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
        saveTimerRef.current = timer;
    };

    const resetTimer = () => {
        setIsRunning(false)
        setTimer(0);
        saveTimerRef.current = 0;
        startTimeRef.current = null;
    };

    const formatTime = (timer: number) => {
        const seconds = `${Math.floor(timer / 1000) % 60}`.padStart(2, '0');
        const minutes = `${Math.floor(timer / 60000) % 60}`.padStart(2, '0');
        const hours = `${Math.floor(timer / 3600000)}`.padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div  className={styles.container}>
            <div  className={styles.digit}>
                {formatTime(timer)}
            </div>
            <div className='buttons'>
                <button onClick={startTimer} className={styles.btn}>Start</button>
                <button onClick={stopTimer} className={styles.btn}>Stop</button>
                <button onClick={resetTimer} className={styles.btn}>Reset</button>
            </div>
        </div>
    );
}

export default Clock;