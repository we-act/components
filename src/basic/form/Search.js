import React, { Component } from 'react'
import classNames from 'classnames'
// import "lessFolder/mod-search-box.less"
import Icon from '../icon/Icon'
import "./search.less"

const iconStyle = {
    position: 'absolute',
    right: '40px',
    top: '10px'
}

class Search extends Component {

    static defaultProps = {
        style: {
            position: 'relative',
            display: 'inline-block'
        }
    }
    state = {
        value: this.props.value || ''
    }
    handleCancel = (e) => {
        this.state.value = ''
        this.setState(this.state)
        this.props.onCancel && this.props.onCancel(this.state.value)
    }

    handleChange = (e) => {
        this.state.value = e.target.value
        this.setState(this.state)
        this.props.onChange && this.props.onChange(this.state.value)
    }
    handleSubmit = (e) => {
        this.props.onSubmit && this.props.onSubmit(this.state.value)
    }
    render () {
        // others 放 <input/> 上
        const {
            // 这里的 value 和 onChange 是为了在 others 中去掉
            value,
            onChange,
            className,
            style,
            inputWidth,
            ...others
        } = this.props
        const cancel = this.state.value ? <Icon icon='cancel' onClick={this.handleCancel} style={iconStyle} /> : ''

        return (
            <div className={className} style={style}>
                <input onChange={this.handleChange} value={this.state.value} type='text' style={{width: inputWidth}} className='input ui-c-dark' {...others} />
                    {cancel}
                    <div className='mod-search-box__btn' onClick={this.handleSubmit}>
                        <i className='mod-search-box__icon2'></i>
                    </div>
            </div>
        )
    }
}

module.exports = Search
