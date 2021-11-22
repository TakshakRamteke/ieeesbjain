import styles from './navsection.module.css'

export default function NavSection({children}){
    return (
        <div className={styles.container}>
            <div className={styles.contentArea}>
                {children}
            </div>
            <div className={styles.sideBar}>

            </div>
        </div>
    )
}