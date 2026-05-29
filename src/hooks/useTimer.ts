import {useEffect, useState} from 'react';

const timeNowSeconds = () => Math.floor(Date.now() / 1000);

export function useTimer() {
    const [isRunning, setIsRunning] = useState(localStorage.getItem('isRunning') === 'true');
    const [initialTime, setInitialTime] = useState(parseInt(localStorage.getItem('initialTime') ?? '0'));
    const [timer, setTimer] = useState(parseInt(localStorage.getItem('timer') ?? '0'));

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsRunning(false);
    }, []);

    useEffect(() => {
        localStorage.setItem('isRunning', isRunning.toString());
    }, [isRunning]);

    useEffect(() => {
        localStorage.setItem('initialTime', initialTime.toString());
    }, [initialTime]);

    useEffect(() => {
        localStorage.setItem('timer', timer.toString());
    }, [timer]);

    useEffect(() => {
        let interval: number = 0;
        if (isRunning) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setTimer(timeNowSeconds() - initialTime);

            interval = setInterval(() => setTimer(
                timeNowSeconds() - initialTime
            ), 1000);

            return () => {
                clearInterval(interval);
            }
        } else {
            clearInterval(interval);
        }
    }, [isRunning]);

    const startTimer = () => {
        setInitialTime(timeNowSeconds());
        setIsRunning(true);
    };

    const pauseTimer = () => {
        setIsRunning(false);
    };

    const resumeTimer = () => {
        setIsRunning(true);
        setInitialTime(timeNowSeconds() - timer);
    }

    const resetTimer = () => {
        setInitialTime(timeNowSeconds());
        setIsRunning(false)
        setTimer(0);
    };

    const formatTime = (timer: number) => {
        const seconds = `${timer % 60}`.padStart(2, '0');
        const minutes = `${Math.floor(timer / 60) % 60}`.padStart(2, '0');
        const hours = `${Math.floor(timer / 60 / 60)}`.padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    };

    const time = formatTime(timer);

    return {timer, time, isRunning, startTimer, pauseTimer, resumeTimer, resetTimer};
}