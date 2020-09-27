import React from 'react'
import cn from 'classnames'

import styles from './menu.module.css'

import Button from '../../Button'

function Menu({ items, className, ...props }) {
    return (
        <div className={cn(styles.menu, className)} {...props}>
            {items.map((item) => {
                return (
                    <Button href={item.href} selected={item.selected}>
                        {item.title}
                    </Button>
                )
            })}
        </div>
    )
}
export default Menu
