import Clock from './components/clock/clock';
import Sidebar from './components/sidebar/sidebar';
import {useState} from "react";
import styles from './App.module.css';
import {Settings, Maximize} from 'lucide-react';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleSidebar(){
        return  setIsOpen(!isOpen);
    }

    function handleFullscreen(){
        return document.documentElement.requestFullscreen();
    }

    return (
        <div className='App'>
            <Clock />
            <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <div className={styles.position_btn}>
            <button className={styles.btn} onClick={toggleSidebar}><Settings size={24} /></button>
            <button className={styles.btn} onClick={handleFullscreen}><Maximize size={24} /></button>
            </div>
        </div>
    );
}

export default App;