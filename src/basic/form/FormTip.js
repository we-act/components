
import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'
import styles from "./FormTip.scss"

class FormTip extends Component {
    render () {
        const {inline, className, children, ...others} = this.props
        let Component = 'div'
        if (inline)
            Component = 'span'
        const cls = classNames(styles.root, className)
        return <Component className={cls} {...others}>{children}</Component>
    }
}

module.exports = FormTip
