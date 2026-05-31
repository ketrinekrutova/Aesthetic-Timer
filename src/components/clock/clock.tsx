import styles from './clock.module.css';
import {useTheme} from '../../hooks/useTheme';
import {fonts} from '../../data/theme';
import {useTimer} from '../../hooks/useTimer';

function Clock() {
    const {fontId} = useTheme();
    const currentFont = fonts.find(f => f.id === fontId);
    const { timer, time, isRunning, startTimer, pauseTimer, resumeTimer, resetTimer } = useTimer();

    return (
        <div className={styles.container}>
            <div className={styles.digit} style={{
                fontFamily: currentFont?.fontFamily,
                fontSize: `clamp(40px, ${currentFont?.fontSize}vw, ${currentFont?.fontSizeMax}px)`,
                letterSpacing: currentFont?.letterSpacing
            }}>
                {time}
            </div>
            <div className='buttons'>
                {isRunning && (
                    <button onClick={pauseTimer} className={styles.btn}>Pause</button>
                )}

                {!isRunning && timer === 0 && (
                    <button onClick={startTimer} className={styles.btn}>Start</button>
                )}
                {!isRunning && timer !== 0 && (
                    <button onClick={resumeTimer} className={styles.btn}>Start</button>
                )}

                <button onClick={resetTimer} className={styles.btn}>Reset</button>

            </div>
        </div>
    );
}

export default Clock;