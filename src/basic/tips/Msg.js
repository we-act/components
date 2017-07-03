import React, { Component } from 'react'
import classNames from 'classnames'
import './Msg.less'

const Msg = (props) => {
    const {center, type, size, bgColor, title, className, titleOnly, iconStyle, children, ...others} = props
    const cls = classNames('mod-page-msg', className, {
        'mod-page-msg_center': center,
        'mod-page-msg_bgcolor': bgColor,
        'mod-page-msg_mid': size === 'medium',
        'mod-page-msg_small': size === 'small'
    })
    const iconCls = classNames('mod-page-msg__icon2', {
        'mod-page-msg__icon_info2': type === 'info',
        'mod-page-msg__icon_success2': type === 'success',
        'mod-page-msg__icon_warn2': type === 'warn'
    })
    const titleCls = classNames('msg-page-msg__title', {
        'msg-page-msg__title_only': titleOnly
    })
    // 没有 bgColor 时去掉左右 padding
    const styleInner = bgColor ? null : {padding: '0'}
    return (
        <div className={cls} {...others}>
            <div className='mod-page-msg__inner' style={styleInner}>
                <div className={iconCls} style={iconStyle}></div>
                <div className='mod-page-msg__content'>
                    <div className={titleCls}>{title}</div>
                    {
                        !titleOnly && (
                            <div className='msg-page-msg__desc'>{children}</div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

Msg.propTypes = {
    center: React.PropTypes.bool,
    bgColor: React.PropTypes.bool,
    size: React.PropTypes.string,
    type: React.PropTypes.string,
    title: React.PropTypes.node
}

module.exports = Msg
