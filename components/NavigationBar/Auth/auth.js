import React from 'react'
import cn from 'classnames'

import styles from './auth.module.css'

import Button from '../../Button'

function Auth({ auth, className, ...props }) {
    return !auth ? (
        <div className={cn(styles.auth, className)} {...props}>
            <Button href="/signin" auth>
                Sign In
            </Button>
            <Button href="/signup" auth>
                Sign Up
            </Button>
        </div>
    ) : (
        <div className={cn(styles.auth, className)} {...props}>
            <Button href="/profile" auth>
                Profile
            </Button>
        </div>
    )
}

export default Auth
