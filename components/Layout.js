import React from 'react'
import Head from 'next/head'
import style from '../styles/Layout.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';

function Layout({children}) {

    //using next layout function to carry basic page layout from first page to results page


    return (
        <div className={style.container}>
            {/* next Head element for importing fonts and title element */}
            <Head>
                <title>RPG Character Maker</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap" rel="stylesheet"></link>
            </Head>  
            <header className={style.header}>
                <h1>🧙🏻‍♂️ RPG Character Maker ⚔️</h1>
            </header>

            <main className={style.main}>{children}</main>
            
           
        </div>
    )
}

export default Layout
