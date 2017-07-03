import React, { Component } from 'react'
import classNames from 'classnames'
import styles from "./FormLabel.scss"

const FormLabel = (props) => {
    const {
        className,
        type,
        children,
        size,
        ...others
    } = props
    const cls = classNames(styles.root, className)

    let {style} = props
    style || (style = {})

    // TODO: remove valign-input usage
    if (type === 'valign-input')
        style.marginTop = '0.3em'
    else
        style.marginTop = '0'

    if(size)
      style.width = size + 'em'

    return (
        <label style={style} className={cls} {...others}>
            {children}
        </label>
    )
}

module.exports = FormLabel
