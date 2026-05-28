import styles from './sidebar.module.css';
import {X} from 'lucide-react';
import {backgrounds, fonts} from '../../data/theme';
import {useTheme} from '../../hooks/useTheme';

function Sidebar({isOpen, onClose}: { isOpen: boolean, onClose: () => void }) {
    const {backgroundId, fontId, setBackgroundId, setFontId} = useTheme();

    return (
        <>
            <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`} onClick={onClose}></div>
            <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>

                <div className={styles.titleAndClose}>
                    <h2>Theme</h2>
                    <button className={styles.btn} onClick={onClose} aria-label="Close"><X size={20}/></button>
                </div>

                <h3>Backgrounds</h3>
                <div className={styles.grid}>
                    {backgrounds.map(bg => (
                        <div
                            key={bg.id}
                            className={`${styles.card} ${backgroundId === bg.id ? styles.cardActive : ''}`}
                            onClick={() => setBackgroundId(bg.id)}
                        >
                            <img src={bg.src} alt={bg.name} className={styles.cardImage}/>
                            <span className={styles.cardLabel}>{bg.name}</span>
                        </div>
                    ))}
                </div>

                <h3>Clock fonts</h3>
                <div className={styles.grid}>
                    {fonts.map(font => (
                        <div
                            key={font.id}
                            className={`${styles.card} ${fontId === font.id ? styles.cardActive : ''}`}
                            onClick={() => setFontId(font.id)}
                        >
                            <span className={styles.fontPreview} style={{fontFamily: font.fontFamily}}>Aa</span>
                            <span className={styles.cardLabel}>{font.name}</span>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}

export default Sidebar;