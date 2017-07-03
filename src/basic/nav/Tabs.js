import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from "./Tabs.scss"

class Tabs extends Component {
    static propTypes = {
        tabs: PropTypes.array,
        onChange: PropTypes.func,
        selected: PropTypes.number
    }

    static defaultProps = {
        tabs: [],
        onChange: null,
        selected: 0
    }

    render () {
        const {tabs, selected, onChange, className, ...others} = this.props

        const cls = classNames(className, styles.wrapper)

        return (
            <ol className={cls} {...others}>
                {
                    tabs.map((tab, i) => {
                        return <li 
                            key={i} 
                            className={i === selected ? styles.selected : ""}
                            onClick={() => this.props.onChange && this.props.onChange(i)}
                        >
                            {tab}
                        </li>
                    })
                }
            </ol>
        )
    }
}

module.exports = Tabs
