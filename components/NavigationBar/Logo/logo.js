import React from 'react'
import cn from 'classnames'

import styles from './logo.module.css'

import Button from '../../Button'

function Logo({ children, className, ...props }) {
    return (
        <Button href="/" {...props} className={cn(styles.logo, className)}>
            {children}
        </Button>
    )
}

export default Logo
