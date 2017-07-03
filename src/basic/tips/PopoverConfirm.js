/**
 * PopoverConfirm
 * @version 0.0.1
 *
 */

import React, { Component } from 'react'
import classNames from 'classnames'
import Popover from './Popover'

class PopoverConfirm extends Component {

    render () {
        const {
            onConfirm,
            onCancel,
            // make sure no `buttons` in `...others`
            buttons,
            children,
            ...others
        } = this.props
        const btns = [
            {
                label: '确定',
                type: 'primary',
                onClick: onConfirm
            },
            {
                label: '取消',
                type: 'default',
                onClick: onCancel
            }
        ]
        return (
            <Popover buttons={btns} {...others}>
                {children}
            </Popover>
        )
    }
}

module.exports = PopoverConfirm
