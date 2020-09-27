import React from 'react'
import cn from 'classnames'
import Link from 'next/link'

import styles from './button.module.css'

function Button({ border, theme, auth, selected, className, children, ...props }) {
    const Comp = props.href ? LinkButton : NormalButton
    return (
        <Comp
            className={cn(
                styles.btn,
                theme && styles.theme,
                auth && styles.auth,
                selected && styles.selected,
                className
            )}
            {...props}
        >
            {children}
        </Comp>
    )
}

function NormalButton({ children, ...props }) {
    return <button {...props}>{children}</button>
}

function LinkButton({ href, children, ...props }) {
    return (
        <Link href={href}>
            <a className={cn(styles.btn)} {...props}>
                {children}
            </a>
        </Link>
    )
}

export default Button
