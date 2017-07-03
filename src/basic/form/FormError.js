
import React from 'react'
import classNames from 'classnames'
import "./form.less"

const FormError = (props) => {
    const {className, style, children, ...others} = props
    const cls = classNames('mod-form__msg mod-form__msg_fail ui-mt-5', className)

    const display = !children ? 'none' : ''
    const style2 = Object.assign({}, style, {display})

    return <p style={style2} className={cls} {...others}>{children}</p>
}

FormError.defaultProps = {
    style: {
        display: ''
    }
}

module.exports = FormError
