import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './TabList_new.scss'

class TabList extends Component {
    static propTypes = {
        selected: React.PropTypes.number,
        tabs: React.PropTypes.array
    };

    render () {
        const {tabs, className, onClick, ...others} = this.props

        const lists = tabs.map((tab, i) => {
            const itemClass = classNames(
                styles.item,
                {[styles.active] : this.props.selected === i})

            return <a 
                    href='javascript:;' 
                    className={itemClass} 
                    key={i}
                    onClick={onClick ? onClick.bind(this, i) : ()=>{}}
                    role="tab"
                    aria-selected={this.props.selected === i ? "true" : false} 
                    >
                        {tab.icon}
                        {tab.text}
                    </a>
        })
        return (
            <div
            className={className}
            role="tablist"
            {...others}>
                {lists}
            </div>
        )
    }
}

module.exports = TabList
