import React, { Component } from 'react'
import classNames from 'classnames'

import './ButtonTip.less'

const ButtonTip = (props) => {
    const {type, className, children, ...others} = props
    const cls = classNames({
        'mod-arrow-box': true,
        'mod-arrow-box_right': type === 'right',
        'mod-arrow-box_left': type === 'left'
    })

    return (
        <div 
            className={className} 
            style={{display: 'inline-block', verticalAlign: 'bottom'}}>
            <div className={cls} {...others}>
                <div className='mod-arrow-box__inner'>
                    {children}
                </div>
                <i className='mod-arrow-box__arrow mod-arrow-box__arrow-out'></i>
                <i className='mod-arrow-box__arrow mod-arrow-box__arrow-in'></i>

            </div>
        </div>
    )
}
ButtonTip.protoTypes = {
    type: React.PropTypes.string
}
ButtonTip.defaultProps = {
    type: 'right'
}

module.exports = ButtonTip
