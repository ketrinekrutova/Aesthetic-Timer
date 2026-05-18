import styles from './sidebar.module.css';
import { X } from 'lucide-react';


function Sidebar({ isOpen, onClose}: { isOpen: boolean, onClose: () => void }) {

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.titleAndClose}>
        <h1>Theme</h1>
        <button className={styles.btn} onClick={onClose}><X size={20} /></button>
        </div>
            <h2>Backgrounds</h2>
            <p>Тут будут фоны.</p>
            <h2>Clock fonts</h2>
            <p>Тут будут шрифты для часов.</p>
        </div>);
}

export default Sidebar;