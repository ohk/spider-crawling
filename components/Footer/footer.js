import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import styles from './footer.module.css'

function Footer({ className, children, ...props }) {
    return (
        <div className={cn(styles.footer, className)}>
            © 2018 - {new Date().getFullYear()} Spider Crawling. All rights reserved. Developed by &nbsp;
            <Link href="https://poikus.com">
                <a className={styles.link}>POIKUS Software & Technology</a>
            </Link>
        </div>
    )
}

export default Footer
