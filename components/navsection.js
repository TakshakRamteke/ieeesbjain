import styles from './navsection.module.css'
import Sidebar from './sidebar'

export default function NavSection({children}){
    return (
        <div className={styles.container}>
            <div className={styles.contentArea}>
                {children}
            </div>
            <div className={styles.sideBar}>
                <Sidebar/>
            </div>
        </div>
    )
}