import styles from './sidebar.module.css';
import {X} from 'lucide-react';


function Sidebar({isOpen, onClose}: { isOpen: boolean, onClose: () => void }) {

    return (
        <>
            <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`} onClick={onClose}></div>
            <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>

                <div className={styles.titleAndClose}>
                    <h2>Theme</h2>
                    <button className={styles.btn} onClick={onClose} aria-label="Close"><X size={20}/></button>
                </div>
                <h3>Backgrounds</h3>
                <p>Тут будут фоны.</p>
                <h3>Clock fonts</h3>
                <p>Тут будут шрифты для часов.</p>

            </div>
        </>);

}

export default Sidebar;