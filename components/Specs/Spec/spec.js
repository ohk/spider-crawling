import React from 'react'
import cn from 'classnames'

import styles from './spec.module.css'

function Spec({ className, item, ...props }) {
    return (
        <div className={cn(styles.spec, className)}>
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.description}>{item.description}</div>
        </div>
    )
}

export default Spec
