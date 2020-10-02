import React, { useState } from 'react'
import cn from 'classnames'

import styles from './signup.module.css'
import Title from '../Title'
import * as Icon from '../icons'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import valid from 'card-validator'

import { PLANS } from '../../CONST'
const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
    cardNumber: yup
        .string()
        .test('test-number', 'Credit Card number is invalid', (value) => valid.number(value).isValid)
        .required(),
    cardHolder: yup.string().required('Card Holder is required').min(2),
    cardMonth: yup.number().required('Month is required').min(2).max(2),
    cardYear: yup.number().required('Year is required').min(2).max(4)
})

function Login({ className, children, ...props }) {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    })
    const [plans, setPlans] = useState([...PLANS])
    const [dataF, setData] = useState()
    const onSubmit = (data, e) => {
        setData(data)
        console.log(dataF)
    }

    const handleChange = (event) => {
        var b = [...PLANS]
        b.forEach((item) => (item.id === event.target.id ? (item.checked = true) : (item.checked = false)))
        setPlans(b)
    }

    return (
        <div className={cn(styles.login, className)} {...props}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.parent}>
                    <div className={styles.divider}>
                        <Title className={styles.title}>User Credintials</Title>
                        <div className={styles.iconInput}>
                            <Icon.Name />
                            <label className={styles.label}>
                                <input
                                    className={styles.input}
                                    type="text"
                                    name="name"
                                    id="name"
                                    ref={register}
                                    placeholder="Name"
                                />
                            </label>
                        </div>
                        <p className={styles.error}>{errors.name?.message}</p>
                        <div className={styles.iconInput}>
                            <Icon.EmailU />
                            <label className={styles.label}>
                                <input
                                    className={styles.input}
                                    type="text"
                                    name="email"
                                    id="email"
                                    ref={register}
                                    placeholder="Email"
                                />
                            </label>
                        </div>
                        <p className={styles.error}>{errors.email?.message}</p>
                        <div className={styles.iconInput}>
                            <Icon.Password />
                            <label className={styles.label}>
                                <input
                                    className={styles.input}
                                    type="password"
                                    name="password"
                                    id="password"
                                    ref={register}
                                    placeholder="Password"
                                />
                            </label>
                        </div>
                        <p className={styles.error}>{errors.password?.message}</p>
                        <div className={styles.iconInput}>
                            <Icon.Password />
                            <label className={styles.label}>
                                <input
                                    className={styles.input}
                                    type="password"
                                    name="ConfirmPassword"
                                    id="ConfirmPassword"
                                    ref={register}
                                    placeholder="Confirm Password"
                                />
                            </label>
                        </div>
                        {dataF?.password !== dataF?.confirmPassword ? (
                            <p className={styles.error}>Passwords do not match. Please check.</p>
                        ) : (
                            <p className={styles.error}>{errors.ConfirmPassword?.message}</p>
                        )}
                    </div>
                    <div className={styles.divider}>
                        <Title className={styles.title}>Credit Card</Title>
                        <div className={styles.iconInput}>
                            <Icon.Name />
                            <label className={styles.label}>
                                <input
                                    className={styles.input}
                                    type="text"
                                    name="cardHolder"
                                    id="cardHolder"
                                    ref={register}
                                    placeholder="Card Holder"
                                />
                            </label>
                        </div>
                        <p className={styles.error}>{errors.cardHolder?.message}</p>
                        <div className={styles.iconInput}>
                            <Icon.CreditCard />
                            <label className={styles.label}>
                                <input
                                    className={styles.input}
                                    type="text"
                                    name="cardNumber"
                                    id="cardNumber"
                                    ref={register}
                                    placeholder="Card Number"
                                />
                            </label>
                        </div>
                        <p className={styles.error}>{errors.cardNumber?.message}</p>
                        <div className={styles.expiries}>
                            <div className={styles.iconInput}>
                                <Icon.Calendar />
                                <label className={styles.label}>
                                    <input
                                        className={cn(styles.input, styles.expiry)}
                                        type="number"
                                        name="cardMonth"
                                        id="cardMonth"
                                        ref={register}
                                        placeholder="MM"
                                    />
                                </label>
                            </div>
                            <p className={styles.error}>{errors.cardMonth?.message}</p>
                            <div className={styles.iconInput}>
                                <Icon.Slash />
                                <label className={styles.label}>
                                    <input
                                        className={cn(styles.input, styles.expiry)}
                                        type="number"
                                        name="cardYear"
                                        id="cardYear"
                                        ref={register}
                                        placeholder="YY"
                                    />
                                </label>
                            </div>
                            <p className={styles.error}>{errors.cardYear?.message}</p>
                        </div>
                    </div>
                    <div className={styles.divider}>
                        <Title className={styles.title}>Packages</Title>
                        <div className={styles.plans}>
                            {plans.map((item) => {
                                return (
                                    <label
                                        key={item.id}
                                        className={cn(styles.label, styles.planLb, item.checked && styles.checked)}
                                    >
                                        <input
                                            className={styles.package}
                                            type="radio"
                                            name="package"
                                            id={item.id}
                                            ref={register}
                                            onChange={handleChange}
                                        />
                                        {item.title} - {item.price}$ / {item.subscription}
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles.divider}>
                    <p className={styles.attention}>
                        The system will charge you between $ 1 and $ 2 to verify your credit card. In the next step you
                        will need to enter the fee charged from your card. This fee will be deducted from the packages
                        you receive later.
                    </p>

                    <input type="submit" className={cn(styles.btn)} value="Sign Up" style={{ width: '282px' }} />
                </div>
            </form>
        </div>
    )
}

export default Login
