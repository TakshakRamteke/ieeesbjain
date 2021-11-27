import DesktopLayout from "./desktop_layout";
import MobileLayout from "./mobile_layout";
import { useState, useEffect, useCallback } from "react";

/* Function TO get The current Window Height {Didn't Work properly}*/
/*const useWindowSize = () => {
    const hasWindow = typeof window !== "undefined"

    function getWindowSize(){
        const width = hasWindow ? window.innerWidth : null
        const height = hasWindow ? window.innerHeight : null
        return{
            width,
            height,
        }
    }
    const [WindowSize, setWindowSize] = useState(getWindowSize())

        useEffect(() => {
            if(hasWindow){
                function handelResize(){
                    setWindowSize(getWindowSize())
                }
                window.addEventListener("resize", handelResize())
                return () => window.removeEventListener("resize", handelResize)
            }
        }, [hasWindow])

    return WindowSize
}*/

/* Media Query Function Insted of the above one*/

const useMediaQuery = (width) =>{

    const [isMobile, setIsMobile] = useState(false);

    const updtateViewPort = useCallback((e) => {
        if (e.matches) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addEventListener('change',e => updtateViewPort(e));

        if (media.matches){
            setIsMobile(true);
        }

        return () => media.removeEventListener('change',e => updtateViewPort(e));
    }, []);

    return isMobile
}

/* The Layout Component */
export default function Layout({children}){

    const isMobile = useMediaQuery(810);

    return(
        <div>
            {isMobile ? (
                <MobileLayout/>
            ) : (
                <DesktopLayout>
                    {children}
                </DesktopLayout>
            )}
        </div>
    )
}