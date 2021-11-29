import Image from 'next/image';
import styles from './mobile_layout.module.css';
import {MenuOutlined} from '@ant-design/icons';
import { useState } from 'react';
import Drawer from '../Drawer/drawer';
import { AnimatePresence } from 'framer-motion';

export default function MobileLayout({children}){

    const [drawerOpen, setDrawerOpen] = useState(false);

    const open = () => setDrawerOpen(true);
    const close = () => setDrawerOpen(false);

    return(
        <>
            <div className = {styles.backgroundImage}>
                <Image
                    src = "/mobilebackground.png"
                    layout = "fill"
                />
            </div>

            <div className = {styles.topBar}>
                <div className = {styles.logo}>
                    <Image
                        src = "/logo.png"
                        width = {70}
                        height = {30}
                    />
                </div>
                <MenuOutlined className={styles.menue} onClick = {() => (drawerOpen ? close() : open())}/>
                <AnimatePresence
                initial = {false}
                exitBeforeEnter = {true}
                >
                    {drawerOpen && <Drawer drawerOpen={drawerOpen} handelClose={close}/>}
                </AnimatePresence>

            </div>
            
            {children}

        </>
    );
}