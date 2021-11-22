import Link from 'next/link'
import styles from './layout.module.css'
import NavSection from './navsection'

export default function Layout({children}){

    return(
        <div>
            <div className={styles.topBar}>
                <h2 className={styles.logo}>
                    <Link href="/">
                        LOGO
                    </Link>
                </h2>
                <h2 className={styles.join}>
                    Join
                </h2>
                <h2 className={styles.contribute}>
                    Contribute
                </h2>
            </div>
            <div>
                <NavSection>
                    {children}
                </NavSection>
            </div>
        </div>
    )


}