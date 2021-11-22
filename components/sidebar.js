import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar(){
    return(
        <div>
            <div className={styles.container}>
                <Link href="/about">
                    <a>
                        <h2>About</h2>
                    </a>
                </Link>
            </div>
            <div className={styles.container}>
                <Link href="/contact">
                        <a>
                            <h2>Contact</h2>
                        </a>
                </Link>
            </div>
            <div className={styles.container}>
                <Link href="/events">
                        <a>
                            <h2>Events</h2>
                        </a>
                </Link>
            </div>
            <div className={styles.container}>
                <Link href="/members">
                    <a>
                        <h2>Members</h2>
                    </a>
                </Link>
            </div>
            <div className={styles.container}>
                <Link href="/featured">
                    <a>
                        <h2>Featured</h2>
                    </a>
                </Link>
            </div>
        </div>
    );
}