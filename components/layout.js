import styles from './layout.module.css'

export default function Layout({children}){

    return(
        <div>
            <div className={styles.topBar}>
                <h2 className={styles.logo}>
                    LOGO
                </h2>
                <h2 className={styles.join}>
                    Join
                </h2>
                <h2 className={styles.contribute}>
                    Contribute
                </h2>
            </div>
            <main>
                {children}
            </main>
        </div>
    )


}