// REACT IMPORTS ============================================================================== // 
import Link from "next/link";
import { useEffect, useState } from "react";

// NEXT IMPORTS ============================================================================== // 

// COMPONENT IMPORTS ========================================================================= // 

// STYLES ==================================================================================== // 
import styles from './article-card.module.css'

// RESOURCES ================================================================================= // 


/* 
Component Name: Article Card

Author: Logan Trundle
Collaborators:
Version #: 1.0.0
Date Created: 16/09/2022
Date Updated:

Overview: 
This component is displays a card with a title of an article and a link to it.
When being called it takes in a prop (data) which is a Article object.

    data = {
        body: string,
        id: number,
        title: string,
        userId: number
    }
*/


export const GradCard = ({data}) => {

    // VARIABLES ============================================================================== // 

    // COMPONENT INIT ========================================================================= // 
    useEffect(() => {}, []);

    // RENDER ================================================================================= // 
    return (
            <div className={styles.container}>
                <h4>{data.title}</h4>

                <Link href={`/articles/${data.id}`}>
                    <a className={styles.cardLink}>
                        View Article
                    </a>
                </Link>

            </div>
        )
}
