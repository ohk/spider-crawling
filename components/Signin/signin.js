import React, { useState } from 'react'
import cn from 'classnames'

import styles from './signin.module.css'
import Title from '../Title'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
})

function Login({ className, children, ...props }) {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => console.log(data)

    return (
        <div className={cn(styles.login, className)} {...props}>
            <Title className={styles.title}>Sign in to your account</Title>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.label}>
                    <input
                        className={styles.input}
                        type="text"
                        name="email"
                        id="email"
                        ref={register}
                        placeholder="Email"
                    />
                    <p className={styles.error}>{errors.email?.message}</p>
                </label>
                <label className={styles.label}>
                    <input
                        className={styles.input}
                        type="password"
                        name="password"
                        id="password"
                        ref={register}
                        placeholder="Password"
                    />
                    <p className={styles.error}>{errors.password?.message}</p>
                </label>
                <input type="submit" className={styles.btn} value="Submit" />
            </form>
        </div>
    )
}

export default Login
