import React, { useState } from 'react'
import cn from 'classnames'
import PriceTable from './Table'
import styles from './price.module.css'

function Prices({ plans, className, ...props }) {
    const [type, setType] = useState(false)

    return (
        <div className={styles.main} {...props}>
            <div className={styles.parent}>
                <input
                    id="toggle-on"
                    className={cn(styles.toggle, styles.left)}
                    name="toggle"
                    value={!type}
                    type="radio"
                    checked={!type}
                    onChange={() => {
                        console.log('oncesi', type)
                        setType(!type)
                        console.log('sonrasi', type)
                    }}
                />
                <label htmlFor="toggle-on" className={styles.btn}>
                    Monthly
                </label>
                <input
                    id="toggle-off"
                    className={cn(styles.toggle, styles.right)}
                    name="toggle"
                    value={type}
                    type="radio"
                    checked={type}
                    onChange={() => {
                        console.log('oncesi', type)
                        setType(!type)
                        console.log('sonrasi', type)
                    }}
                />
                <label htmlFor="toggle-off" className={styles.btn}>
                    Annual
                </label>
            </div>
            <div className={cn(styles.prices, className)}>
                {type === false
                    ? plans
                          .filter((plan) => plan.subscription === 'Monthly')
                          .map((e) => {
                              return <PriceTable key={e.id} item={e} />
                          })
                    : plans
                          .filter((plan) => plan.subscription === 'Annual')
                          .map((e) => {
                              return <PriceTable key={e.id} item={e} />
                          })}
            </div>
        </div>
    )
}

export default Prices
