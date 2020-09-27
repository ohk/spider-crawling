import React from 'react'

import styles from './specs.module.css'
import Spec from './Spec'
function Specs({ specs, className, children, ...props }) {
    return (
        <div className={styles.specs} {...props}>
            {specs.map((item) => {
                return <Spec item={item} />
            })}
        </div>
    )
}

export default Specs
