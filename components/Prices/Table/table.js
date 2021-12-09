import React from 'react'
import cn from 'classnames'
import { v4 as uuidv4 } from 'uuid'

import styles from './table.module.css'

import Button from '../../Button'
import * as Icon from '../../icons'

function PriceTable({ className, item, children, ...props }) {
    return (
        <div className={cn(styles.priceTable)} style={{ borderColor: `var(${item.color})` }} {...props}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.price} style={{ background: `var(${item.color})` }}>
                {item.price}
                {typeof item.price === 'number' && ' $'}
                {typeof item.price === 'number' && <span className={styles.subscription}>/{item.subscription}</span>}
            </div>
            <div className={styles.spec}>
                {item.specs.map((spec) => {
                    return (
                        <div
                            key={uuidv4()}
                            style={spec.confirm && { backgroundColor: `var(${item.color}-50)` }}
                            className={cn(styles.innerspec, !spec.confirm && styles.unconfirmP)}
                        >
                            <span className={cn(styles.icon, !spec.confirm && styles.unconfirm)}>
                                <Icon.Check />
                            </span>
                            <span className={cn(styles.specText, !spec.confirm && styles.unconfirmText)}>
                                {spec.text}
                            </span>
                        </div>
                    )
                })}
            </div>
            <Button className={styles.btn} theme href='mailto:me@ohkamisli.dev' style={{ background: `var(${item.color})` }}>
                Start Free Trial
            </Button>
        </div>
    )
}

export default PriceTable
