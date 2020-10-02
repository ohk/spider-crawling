import React from 'react'
import cn from 'classnames'

import styles from './title.module.css'

function Title({ className, children, ...props }) {
    return (
        <div className={cn(styles.title, className)} {...props}>
            {children}
        </div>
    )
}

export default Title
