import { motion } from "framer-motion";
import styles from "./drawer.module.css"
import Backdrop from "../Backdrop/backdrop";

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
            </motion.div>
        </Backdrop>
    );

}

export default Drawer;