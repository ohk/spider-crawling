import React from 'react'
import cn from 'classnames'

import styles from './about.module.css'

function AboutUs({ className, item, children, ...props }) {
    return (
        <div className={cn(styles.about, className)}>
            <img src={item.src || '/profile.jpg'} className={styles.img} alt={item.alt || 'Founder Photo'} />
            <div className={styles.name}>{item.name}</div>
            <div className={styles.title}>{item.title || 'Co-Founder'}</div>
            <div className={styles.description}>{item.description}</div>
        </div>
    )
}

export default AboutUs
