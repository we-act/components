

import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'
import styles from "./Checkbox.scss"
// import "lessFolder/lib-base-input.less";
// import "lessFolder/lib-base-checkbox.less"

class Checkbox extends Component {
    static propTypes = {
        selected: PropTypes.bool
    }
    // state = {
    //     selected: this.props.selected
    // }
    handleClick (e) {
        const {
            disabled,
            stopPropagation,
            onChange,
            selected
        } = this.props
        if (disabled) {
            return
        }
        onChange && onChange(!selected)
        if (stopPropagation)
            e.stopPropagation()
    }

    render () {
        const {
            // make sure no `onClick` and `onChange` in `...others`
            onClick,
            stopPropagation,
            onChange,
            selected,
            wrap,
            disabled, className, children, ...others} = this.props

        const cls = classNames(className, styles.label, {
            [styles.selected]: selected && !disabled,
            [styles.disabled]: !selected && disabled,
            [styles.disabledSelected]: selected && disabled
        })

        let iconStyle = {}
        let contentStyle = {}
        if(wrap){
            iconStyle.float = 'left'
            iconStyle.marginTop = '3px'
            contentStyle.overflow = 'hidden'
            contentStyle.display = 'block'
        }
        const spanOptional = disabled ? {style: {color: '#888'}} : {}
        return (
            /* TODO: data-role='checkbox-icon' is used for global style overriding */
            <label 
                className={cls} 
                onClick={this.handleClick.bind(this)} 
                role="checkbox"
                aria-checked={selected ? "true" : "false"}
                aria-disabled={disabled ? "true" : "false"}
                {...others}
            >
                <i className={styles.icon} data-role='checkbox-icon' style={iconStyle}></i>
                <span className={styles.content} {...spanOptional} style={contentStyle}>{children}</span>
            </label>
        )
    }
}

module.exports = Checkbox
