import React, { Component } from 'react'
import classNames from 'classnames'
import Icon from 'componentPath/basic/icon/Icon_new'
import styles from './Search_new.scss'

class Search extends Component {
    state = {
        value: this.props.value || ''
    }

    handleChange = (e) => {
        this.state.value = e.target.value
        this.setState(this.state)
        this.props.onChange && this.props.onChange(this.state.value)
    }
    handleSubmit = () => {
        this.props.onSubmit && this.props.onSubmit(this.state.value)
    }
    handleKeyDown = (e) => {
        if(e.keyCode === 13) this.handleSubmit()
    }

    render () {
        const {
            value,
            onChange,
            className,
            placeholder,
            ...others
        } = this.props
        const cls = classNames({
            [className]: className, 
            [styles.search]: true
        })

        return (
            <div className={cls} {...others}>
                <input
                    className={styles.input}
                    value={this.state.value} 
                    type='text'
                    placeholder={placeholder}
                    onChange={this.handleChange} 
                    onKeyDown={this.handleKeyDown}
                />
                <i 
                    onClick={this.handleSubmit}
                    className={styles.searchBtn}
                >
                    <Icon icon="search" size="16" color="#a3a4a6" />
                </i>
            </div>
        )
    }
}

module.exports = Search
