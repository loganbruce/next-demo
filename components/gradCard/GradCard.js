// REACT IMPORTS ============================================================================== // 
import Link from "next/link";
import { useEffect, useState } from "react";

// NEXT IMPORTS ============================================================================== // 

// COMPONENT IMPORTS ========================================================================= // 

// STYLES ==================================================================================== // 
import styles from './grad-card.module.css'

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


export const GradCard = ({data}) => {

    // VARIABLES ============================================================================== // 

    // COMPONENT INIT ========================================================================= // 
    useEffect(() => {}, []);

    // RENDER ================================================================================= // 
    return (
            <div className={styles.container}>
                <h4>{data.title}</h4>

                <Link className={styles.cardLink} href={`/graduates/${data.id}`}>View Graduate</Link>
            </div>
        )
}
