import React, { Component } from 'react'
import classNames from 'classnames'

import styles from './icon.scss'

class Icon extends Component {
    static propTypes = {
        icon: React.PropTypes.string,
        size: React.PropTypes.string
    }

    static defaultProps = {
        icon: 'success',
        size: '16'
    }

    render () {
        const {icon, size, className, ...others} = this.props
        const cls = classNames(className, styles.base, styles[icon])

        return (
            <i
                className={cls}
                data-role='icon'
                {...others}
                />
        )
    }
}

module.exports = Icon
