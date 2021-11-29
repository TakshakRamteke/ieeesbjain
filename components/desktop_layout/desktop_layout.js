import Link from 'next/link';
import Image from 'next/image';
import styles from './desktop_layout.module.css';
import NavSection from '../navsection';

export default function DesktopLayout({children}){

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
                <div className={styles.contribute}>
                    <a href="https://github.com/TakshakRamteke/ieeesbjain" target="_blank" rel="noreferrer">
                        <h2>
                            Contribute
                        </h2>
                    </a>
                </div>
            </div>
            <div>
                <NavSection>
                    {children}
                </NavSection>
            </div>
        </div>
    );
}