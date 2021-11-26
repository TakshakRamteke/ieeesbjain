import Image from 'next/image';
import styles from './navsection.module.css';
import Sidebar from './sidebar';

export default function NavSection({children}){
    return (
        <div className={styles.container}>
            <div className={styles.contentArea}>
                <Image
                src="/background.png"
                layout="fill"
                className = {styles.backgroundImage}
                />
                <main>
                    {children}
                </main>
            </div>
            <div className={styles.sideBar}>
                <Sidebar/>
            </div>
        </div>
    )
}