import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './IconLink.scss'

class IconLink extends Component {
    handleClick = (event) => {
        !this.props.disabled && this.props.onClick && this.props.onClick(event)
    }

    render () {
        const {
            icon,
            disabled,
            text,
            className,
            onClick,
            ...others
        } = this.props
        const cls = classNames({
            [className]: className, 
            [styles.link]: true,
            [styles.disabled]: disabled
        })

        return (
            <a 
                onClick={this.handleClick}
                href="javascript:;" 
                className={cls} 
                {...others}
            >
                {icon}   
                {text}
            </a>
        )
    }
}

module.exports = IconLink
