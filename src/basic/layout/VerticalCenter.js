import React, { Component } from 'react'
import styles from './VerticalCenter.scss'

const VerticalCenter = (props) => {
    const {children} = props
    return <div className={styles.table}>
        <div className={styles.tableCell}>
            <div className={styles.inlineBlock}>
                {children}
            </div>
        </div>
    </div>
}

export default VerticalCenter
