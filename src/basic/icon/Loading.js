import React, { Component } from 'react'
import classNames from 'classnames'

import styles from './loading.scss'

class Loading extends Component {
    static propTypes = {
        icon: React.PropTypes.string
    }

    static defaultProps = {
        icon: 'default'
    }

    render () {
        const {icon, className, ...others} = this.props
        const cls = classNames(className, styles.base, styles[icon])

        return (
            <i className={cls} {...others} />
        )
    }
}

module.exports = Loading
