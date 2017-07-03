import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './Mask.css'

const Mask = (props) => {
    const {className, ...others} = props
    const cls = classNames(
        [styles.root],
        className
    )
    return (
        <div className={cls} {...others} />
    )
}

module.exports = Mask
