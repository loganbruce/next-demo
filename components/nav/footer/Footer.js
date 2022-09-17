// REACT IMPORTS ============================================================================== // 
import { useEffect, useState } from "react";

// NEXT IMPORTS ============================================================================== // 

// COMPONENT IMPORTS ========================================================================= // 

// STYLES ==================================================================================== // 
import styles from './footer.module.css'

// RESOURCES ================================================================================= // 


/* 
Component Name: Footer

Author: Logan Trundle
Collaborators:
Version #: 1.0.0
Date Created: 16/09/2022
Date Updated:

Overview:
*/


export const Footer = () => {

    // VARIABLES ============================================================================== // 

    // COMPONENT INIT ========================================================================= // 
    useEffect(() => {}, []);

    // RENDER ================================================================================= // 
    return (
            <footer className={styles.container}>
                goodbye footer
            </footer>
        )
}
