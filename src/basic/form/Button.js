/**
 * @property {disabled} bool 禁用模式
 *
 * @note 由于 less 有问题，a 标签的 button 和 `button` 标签的 button 高度不一样
 *       具体是，a 标签的 button height 32px;  `button` 标签的 button 30px
 */

import React, {Component} from 'react'

import Icon_new from 'componentPath/basic/icon/Icon_new'

import classNames from 'classnames'
import omit from 'object.omit'

import styles from "./Button.scss"

class Button extends Component {

    static propTypes = {
        disabled: React.PropTypes.bool,
        type: React.PropTypes.string,
        size: React.PropTypes.string,
        href: React.PropTypes.string,
        buttonTag: React.PropTypes.bool,
        target: React.PropTypes.string,
        isIconBtn: React.PropTypes.bool,
    }

    handleClick = (event) => {
        if(this.props.onClick){
          event.preventDefault()
          event.stopPropagation()
        }
        !this.props.disabled && !this.props.loading && this.props.onClick && this.props.onClick(event)
    }

    render () {
        const {
            type,
            size,
            buttonTag,
            mini,
            disabled,
            loading,
            className,
            children,
            isIconBtn,
            onClick,
        ...others} = this.props
        let Component = 'a'
        if (buttonTag) {
            Component = 'button'
        }

        const classSet = classNames({
            [styles.base]: true,
            [styles.default]: !type || type === 'default',
            [styles.primary]: type === 'primary',
            [styles.danger]: type === 'danger',
            [styles.assist]: type === 'assist',
            [styles.disabled]: disabled,
            [styles.small]: size === 'small',
            [styles.mini]: size === 'mini',

            [styles.loading]: loading && !isIconBtn,
            [styles.loadingIconBtn]: loading && isIconBtn,
            [styles.iconBtn]: isIconBtn,
            [className]: className
        })

        const optional = {}
        if (Component === 'a') {
            optional.role = 'button'
            // 当 `<Button href="#"></Button>` 时， href 改为 `javascript:void(0);`
            optional.href = this.props.href === '#' ? 'javascript:void(0);' : this.props.href
            const props = omit(this.props, ['type'])
        }


        return (
            <Component
                {...others}
                {...optional}
                onClick={this.handleClick}
                className={classSet}
            >
                {children}
                {loading && !isIconBtn && 
                    <Icon_new currentColor className={styles.loadingIcon} icon="loading" size="16" />
                }
            </Component>
        )
    }

}

module.exports = Button
