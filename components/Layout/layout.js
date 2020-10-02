import React from 'react'
import Head from 'next/head'

import styles from './layout.module.css'

import NavigationBar from '../NavigationBar'
import Footer from '../Footer'

function Layout({ className, children, ...props }) {
    return (
        <div className={styles.layout} {...props}>
            <Head>
                <title>Spider Crawling</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <NavigationBar className={styles.header} />
            <div className={styles.main}>{children}</div>
            <Footer className={styles.footer} />
        </div>
    )
}

export default Layout
