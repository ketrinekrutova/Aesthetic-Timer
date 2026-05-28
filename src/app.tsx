import Clock from './components/clock/clock';
import Sidebar from './components/sidebar/sidebar';
import {useEffect, useState} from "react";
import styles from './App.module.css';
import {Settings, Maximize, Minimize} from 'lucide-react';
import {useTheme} from './hooks/useTheme';
import {backgrounds, fonts} from './data/theme';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const {backgroundId, fontId} = useTheme();

    const currentBg = backgrounds.find(bg => bg.id === backgroundId);
    const currentFont = fonts.find(f => f.id === fontId);

    function toggleSidebar() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handler = () => setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', handler);
        return () => document.removeEventListener('fullscreenchange', handler);
    }, []);

    function handleFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    }

    return (
        <div
            className='App'
            style={{
                backgroundImage: currentBg?.src ? `url(${currentBg.src})` : undefined,
                backgroundColor: currentBg?.src ? undefined : 'black',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                fontFamily: currentFont?.fontFamily,
            }}
        >
            <Clock/>
            <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}/>
            <div className={styles.position_btn}>
                <button className={styles.btn} onClick={toggleSidebar}><Settings size={24}/></button>
                <button className={styles.btn} onClick={handleFullscreen}>{isFullscreen ? <Minimize size={24}/> :
                    <Maximize size={24}/>}</button>
            </div>
        </div>
    );
}

export default App;