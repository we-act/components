// import "lessFolder/mod-form.less"

import React from 'react'
import classNames from 'classnames'
import "./form.less"

const FormControl = (props) => {
    const {className, children, ...others} = props
    const cls = classNames('mod-form__controls', className)
    return (
        <div className={cls} {...others}>{children}</div>
    )
}

module.exports = FormControl
