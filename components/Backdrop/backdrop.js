import { motion } from "framer-motion";
import styles from "./backdrop.module.css";
import Image from 'next/image'

const Backdrop = ({ children, onClick }) =>{

    return(
        <motion.div
        className = {styles.backdrop}
        onClick = {onClick}
        initial = {{opacity : 0}}
        animate = {{opacity : 1}}
        exit = {{opacity : 0}}
        >

            <Image
            className = {styles.image}
            src = "/mobilebackground.png"
            layout = "fill"
            />

            {children}

        </motion.div>
    );

}

export default Backdrop;