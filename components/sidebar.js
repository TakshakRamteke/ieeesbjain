import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from './sidebar.module.css';

export default function Sidebar(){
    
    const router = useRouter()
    const isActive = (route) =>{
        if (route === router.pathname){
            return true
        }
        else {
            return false
        }
    }

    return(
        <div>
            <div className={styles.container}>
                <Link href="/about">
                    <a className={isActive('/about') ? styles.linkTextActive : styles.linkText}>
                        <h2>About</h2>
                    </a>
                </Link>
            </div>
            <div className={styles.container}>
                <Link href="/contact">
                        <a className={isActive('/contact') ? styles.linkTextActive : styles.linkText}>
                            <h2>Contact</h2>
                        </a>
                </Link>
            </div>
            <div className={styles.container}>
                <Link href="/events">
                        <a className={isActive('/events') ? styles.linkTextActive : styles.linkText}>
                            <h2>Events</h2>
                        </a>
                </Link>
            </div>
            <div className={styles.container}>
                <Link href="/members">
                    <a className={isActive('/members') ? styles.linkTextActive : styles.linkText}>
                        <h2>Members</h2>
                    </a>
                </Link>
            </div>
            <div className={styles.container}>
                <Link href="/featured">
                    <a className={isActive('/featured') ? styles.linkTextActive : styles.linkText}>
                        <h2>Featured</h2>
                    </a>
                </Link>
            </div>
        </div>
    );
}