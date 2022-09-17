// REACT IMPORTS ============================================================================== // 
import { useEffect, useState } from "react";

// NEXT IMPORTS ============================================================================== // 
import Link from "next/link";
import { useRouter } from "next/router";

// COMPONENT IMPORTS ========================================================================= // 

// STYLES ==================================================================================== // 
import styles from './navbar.module.css'

// RESOURCES ================================================================================= // 


/* 
Component Name: Navbar

Author: Logan Trundle
Collaborators:
Version #: 1.0.0
Date Created: 16/09/2022
Date Updated:

Overview: 
*/


export const Navbar = () => {

    // VARIABLES ============================================================================== // 
    const router = useRouter();

    // COMPONENT INIT ========================================================================= // 
    useEffect(() => {}, []);

    // RENDER ================================================================================= // 
    return (
            <nav className={styles.container}>
                <div className={styles.logo}>FAKE LOGO</div>
                <div className={styles.links_container}>
                    <Link href='/'>
                        <a className={router.pathname === '/' ? `${styles.link_active}` : ""}>home</a>
                    </Link>
                    <Link href='/articles'>
                        <a className={router.pathname.startsWith('/articles') ? `${styles.link_active}` : ""}>articles</a>
                    </Link>
                    <Link href='/about'>
                        <a className={router.pathname.startsWith('/about') ? `${styles.link_active}` : ""}>about</a>
                    </Link>
                </div>
            </nav>
        )
}
