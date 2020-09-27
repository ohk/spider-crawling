import React from 'react'
import cn from 'classnames'

import styles from './welcome.module.css'

function Welcome({ title, description, little, className, children, ...props }) {
    return (
        <div className={cn(styles.welcome, className)}>
            <div className={styles.little}>
                {little.split('\\n').map((item, i) => {
                    return <p key={i}>{item}</p>
                })}
            </div>
            <div className={styles.title}>
                {title.split('\\n').map((item, i) => {
                    return <p key={i}>{item}</p>
                })}
            </div>
            <div className={styles.description}>
                {description.split('\\n').map((item, i) => {
                    return <p key={i}>{item}</p>
                })}
            </div>
        </div>
    )
}

export default Welcome
