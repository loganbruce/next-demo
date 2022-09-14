// REACT IMPORTS ============================================================================== // 
import { useEffect, useState } from "react";
import { ReactNode } from "react";

// NEXT IMPORTS ============================================================================== // 

// COMPONENT IMPORTS ========================================================================= // 
import { Navbar } from "../nav/navbar/Navbar";
import { Footer } from "../nav/footer/Footer";

// STYLES ==================================================================================== // 
import styles from './layout.module.css'

// RESOURCES ================================================================================= // 


/* 
Component Name:

Author:
Collaborators:
Version #:
Date Created:
Date Updated:

Overview: 
*/


export const Layout = ({children}) => {

    // VARIABLES ============================================================================== // 

    // COMPONENT INIT ========================================================================= // 
    useEffect(() => {}, []);

    // RENDER ================================================================================= // 
    return (
            <div className={styles.container}>
                <Navbar/>
                    <main className={styles.main}>
                        {children}
                    </main>
                <Footer/>
            </div>
        )
}
