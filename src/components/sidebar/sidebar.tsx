import styles from './sidebar.module.css';
import { X } from 'lucide-react';


function Sidebar({ isOpen, onClose}: { isOpen: boolean, onClose: () => void }) {

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        <h1>Theme</h1>
            <button className={styles.btn} onClick={onClose}><X size={24} /></button>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
            </p>
            <h2>Backgrounds</h2>
            <h2>Clock fonts</h2>
        </div>);
}

export default Sidebar;