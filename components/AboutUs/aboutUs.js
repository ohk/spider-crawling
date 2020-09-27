import React from 'react'
import cn from 'classnames'
import About from './About'
import styles from './aboutUs.module.css'

function Abouts({ className, items, ...props }) {
    return (
        <div className={cn(styles.about, className)} {...props}>
            {items.map((item) => {
                return <About item={item} />
            })}
        </div>
    )
}

export default Abouts

