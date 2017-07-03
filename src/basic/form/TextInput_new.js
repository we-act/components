
import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'
import {getFormatStrLeng} from '../../utils'

import styles from "./TextInput_new.scss"

class TextInput extends Component {

    static propTypes = {
        // 英文是否按照汉字字数统计
        countHanzi: PropTypes.bool,
        disabled: PropTypes.bool,
        limit: PropTypes.number,
        icon: PropTypes.node,
        iconPlacement: PropTypes.string,
        placeholder: PropTypes.string,
        autoFocus: PropTypes.bool
    }
    static defaultProps = {
        countHanzi: true,
        disabled: false,
        limit: 0,
        icon: null,
        iconPlacement: "left",
        placeholder: "",
        autoFocus: false
    }

    handleChange = (e) => {
        const val = e.target.value
        if (this.props.disabled) {
            return
        }
        this.props.onChange(val)
    }

    handleIconClick = () => {
        !this.props.disabled && this.props.onIconClick && this.props.onIconClick(this.props.value)
    }

    handleBlur = (e) => {
      if (this.props.disabled) {
        return
      }
      this.props.onBlur && this.props.onBlur(e.target.value)
    }
    handleFocus = (e) => {
      if (this.props.disabled) {
        return
      }
      this.props.onFocus && this.props.onFocus(e.target.value)
    }
    handleKeyDown = (e) => {
      if (this.props.disabled) {
        return
      }
      this.props.onKeyDown && this.props.onKeyDown(e.target.value,e) 
      if(e.keyCode === 13) this.props.onPressEnter && this.props.onPressEnter(e.target.value, e)
    }
    render () {
        // others 放 <input/> 上
        const {
            autoFocus,
            value,
            onChange,
            onBlur,
            onFocus,
            onKeyDown,
            onPressEnter,
            countHanzi,
            size,
            icon,
            iconPlacement,
            onIconClick,
            placeholder,
            disabled, className, width, limit, children, style, ...others} = this.props
        const cls = classNames(className, styles.input, {
            [styles.disabled]: disabled,
            [styles.iconRight]: icon && iconPlacement === "right",
            [styles.iconLeft]: icon && iconPlacement === "left",
            [styles.sizeLarge]: size === "large",
            [styles.sizeSmall]: size === "small",
            [styles.sizeMini]: size === "mini"
        })

        let outputInput = <div style={{position: "relative", display: "inline-block", ...style}} {...others} >
            <input
                type='text'
                value={value}
                className={cls}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                onFocus={this.handleFocus}
                onKeyDown={this.handleKeyDown}
                disabled={disabled}
                style={{width: width }}
                placeholder={placeholder}
                autoFocus={autoFocus}
            />
            {
                icon && <i 
                    onClick={this.handleIconClick}
                    className={classNames(styles.icon, {
                        [styles.right]: iconPlacement === "right",
                        [styles.left]: iconPlacement === "left"
                    })}
                >
                    {icon}
                </i>
            }
        </div>

        let numString = ''
        let limitClass = {}
        if (limit) {
            const num = value ? countHanzi ? getFormatStrLeng(value) : value.length : 0
            numString = num + '/' + limit
            limitClass = classNames({
                [styles.limit]: true,
                [styles.valid]: num <= limit,
                [styles.invalid]: num > limit
            })
            return <div style={{display: "inline-block"}}>
                {outputInput}
                <span className={limitClass}>
                    <span style={{position: "absolute", left: "-9999px"}}>已输入{num}个字符，最多输入{limit}个字符</span>
                    <span aria-hidden="true">{numString}</span>
                </span>
            </div>
        }
        else {
            return outputInput
        }
    }
}

module.exports = TextInput
