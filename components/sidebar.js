import styles from './sidebar.module.css'

export default function Sidebar(){
    return(
        <div>
            <div className={styles.container}>
                <h2>About</h2>
            </div>
            <div className={styles.container}>
                <h2>Contact</h2>
            </div>
            <div className={styles.container}>
                <h2>Events</h2>
            </div>
            <div className={styles.container}>
                <h2>Members</h2>
            </div>
            <div className={styles.container}>
                <h2>Featured</h2>
            </div>
        </div>
    );
}