import React from 'react'
import cn from 'classnames'
import { useRouter } from 'next/router'

import styles from './menu.module.css'

import Button from '../../Button'

function Menu({ items, className, ...props }) {
    const router = useRouter()
    return (
        <div className={cn(styles.menu, className)} {...props}>
            {items.map((item) => {
                return (
                    <Button key={item.href} href={item.href} selected={router.asPath === item.href}>
                        {item.title}
                    </Button>
                )
            })}
        </div>
    )
}
export default Menu
