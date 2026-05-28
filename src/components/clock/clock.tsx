import {useEffect, useState} from 'react';
import styles from './clock.module.css';
import {useTheme} from '../../hooks/useTheme';
import {fonts} from '../../data/theme';

const timeNowSeconds = () => Math.floor(Date.now() / 1000);

function Clock() {
    const [isRunning, setIsRunning] = useState(localStorage.getItem('isRunning') === 'true');
    const [initialTime, setInitialTime] = useState(parseInt(localStorage.getItem('initialTime') ?? '0'));
    const [timer, setTimer] = useState(parseInt(localStorage.getItem('timer') ?? '0'));

    const {fontId} = useTheme();
    const currentFont = fonts.find(f => f.id === fontId);

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

    return (
        <div className={styles.container}>
            <div className={styles.digit} style={{
                fontFamily: currentFont?.fontFamily,
                fontSize: `clamp(40px, ${currentFont?.fontSize}vw, ${currentFont?.fontSizeMax}px)`
            }}>
                {formatTime(timer)}
            </div>
            <div className='buttons'>
                {isRunning && (
                    <button onClick={pauseTimer} className={styles.btn}>Pause</button>
                )}

                {!isRunning && timer === 0 && (
                    <button onClick={startTimer} className={styles.btn}>Start</button>
                )}
                {!isRunning && timer !== 0 && (
                    <button onClick={resumeTimer} className={styles.btn}>Resume</button>
                )}

                <button onClick={resetTimer} className={styles.btn}>Reset</button>

            </div>
        </div>
    );
}

export default Clock;