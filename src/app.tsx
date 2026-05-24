import Clock from './components/clock/clock';
import Sidebar from './components/sidebar/sidebar';
import {useEffect, useState} from "react";
import styles from './App.module.css';
import {Settings, Maximize, Minimize} from 'lucide-react';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    function toggleSidebar() {
        return setIsOpen(!isOpen);
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
            return document.documentElement.requestFullscreen();
        }
    }

    return (
        <div className='App'>
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