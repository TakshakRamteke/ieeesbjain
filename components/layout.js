import Link from 'next/link';
import Image from 'next/image';
import styles from './layout.module.css';
import NavSection from './navsection';

export default function Layout({children}){

    return(
        <div>
            <div className={styles.topBar}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            src='/logo.png'
                            width={75}
                            height = {25}
                        />
                    </Link>
                </div>
                <h2 className={styles.join}>
                    Join
                </h2>
                <a href="https://github.com/TakshakRamteke/ieeesbjain">
                    <h2 className={styles.contribute}>
                        Contribute
                    </h2>
                </a>
            </div>
            <div>
                <NavSection>
                    {children}
                </NavSection>
            </div>
        </div>
    )


}