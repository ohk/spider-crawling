import React from 'react'
import cn from 'classnames'

import styles from './navigation.module.css'

import Auth from './Auth'
import Logo from './Logo'
import Menu from './Menu'
import { MENU } from '../../CONST'

function NavigationBar({ className, children, ...props }) {
    return (
        <div className={styles.parent}>
            <div className={cn(styles.navbar, className)}>
                <Logo>Spider Crawling</Logo>
                <Menu items={MENU} />
                {/*<Auth auth={props.auth} />*/}
            </div>
        </div>
    )
}

export default NavigationBar
