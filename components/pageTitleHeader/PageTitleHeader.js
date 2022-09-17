// REACT IMPORTS ============================================================================== // 
import { useEffect, useState } from "react";

// NEXT IMPORTS ============================================================================== // 
import Link from "next/link";
import { useRouter } from 'next/router'


// COMPONENT IMPORTS ========================================================================= // 

// STYLES ==================================================================================== // 
import styles from './page-title.module.css'

// RESOURCES ================================================================================= // 


/* 
Component Name: Page Title Header

Author: Logan Trundle
Collaborators:
Version #: 1.0.0
Date Created: 16/09/2022
Date Updated:

Overview: 
Intended to go at the top of a page as the title. It accepts 2 props

    title: string
    navigation: boolean

'navigation' indicates whether or not the page needs a back button or not
*/


export const PageTitleHeader = ({title, navigation}) => {

    // VARIABLES ============================================================================== // 
    const router = useRouter()

    // COMPONENT INIT ========================================================================= // 
    useEffect(() => {}, []);

    // RENDER ================================================================================= // 
    return (
        <div className={styles.container}>

        {navigation && 
            <div className={styles.navigation}>
                <p onClick={() => router.back()}>go back</p>
            </div>
        }
            <h3>{title}</h3>
        </div>
        )
}
