import { motion } from "framer-motion";
import styles from "./drawer.module.css"
import Backdrop from "../Backdrop/backdrop";
import Link from 'next/link';
import {useRouter} from 'next/router';

const dropDown = {
    hidden : {
        x: "-100vw",
        opacity: 0,
    },
    visible : {
        x: "0",
        opacity: 1,
        transition: {
            duration : 0.1,
        }
    },
    exit : {
        x: "-100vw",
        opacity: 0
    },
};

const Drawer = ({handelClose,}) =>{

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
        <Backdrop onClick = {handelClose}>
            <motion.div
                onClick = {(e) => e.stopPropagation()}
                className = {styles.drawer}
                variants = {dropDown}
                initial = "hidden"
                animate = "visible"
                exit = "exit"
            >

                <ul className={styles.ul}>
                    <li>
                        <Link href ="/about">
                            <a className={isActive('/about') ? styles.liActive : styles.li}>
                                About
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href ="/contact">
                            <a className={isActive('/contact') ? styles.liActive : styles.li}>
                                Contact
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href ="/events">
                            <a className={isActive('/events') ? styles.liActive : styles.li}>
                                Events
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href ="/members">
                            <a className={isActive('/members') ? styles.liActive : styles.li}>
                                Members
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href ="/featured">
                            <a className={isActive('/featured') ? styles.liActive : styles.li}>
                                Featured
                            </a>
                        </Link>
                    </li>
                </ul>

            </motion.div>
        </Backdrop>
    );

}

export default Drawer;