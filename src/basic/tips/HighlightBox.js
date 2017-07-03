import React, { Component } from 'react'
import classNames from 'classnames'
import Button from '../form/Button'
import "./HighlightBox.less"

const HighlightBox = (props) => {
    const {btnDesc, btnClick, iconSrc, title, desc, descOnly, noIcon, className, children, ...others} = props
    const cls = classNames('mod-highlight-box', 'ui-clearfix', className)
    let content
    let style = null
    if (noIcon) {
        style = {paddingLeft: '0'}
    }
    if (descOnly) {
        content = <p className='ui-c-gray'>{desc}</p>
    } else {
        content = <div>
                <div className='mod-highlight-box__button ui-fl-r'>
                    <Button type='primary' onClick={btnClick}>{btnDesc}</Button>
                </div>
                {
                    !noIcon && (
                        <div className='mod-highlight-box__icon'>
                            <img src={iconSrc} width='48px' height='48px' />
                        </div>
                    )
                }
                <div className='ui-bfc__content mod-highlight-box__content' style={style}>
                    <h4>{title}</h4>
                    <p className='ui-c-gray'>{desc}</p>
                </div>
            </div>
    }
    return (
        <div className={cls} {...others}>
            {content}
        </div>
    )
}

HighlightBox.propTypes = {
    btnDesc: React.PropTypes.string,
    iconSrc: React.PropTypes.string,
    title: React.PropTypes.string,
    desc: React.PropTypes.string,
    descOnly: React.PropTypes.bool,
    noIcon: React.PropTypes.bool,
    onClick: React.PropTypes.func
}

module.exports = HighlightBox
