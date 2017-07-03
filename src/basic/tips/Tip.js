import React from 'react'
import classNames from 'classnames'
// import 'lessFolder/mod-tips.less';
import './Tip.less'

const Tip = (props) => {
    const {success, className, children, ...others} = props
    const cls = classNames('mod-tips', className)
    const innerCls = classNames('mod-tips__inner', className, {
        'mod-tips__inner_error': !success,
        'mod-tips__inner_success': success
    })
    return (
        <div className={cls} {...others}>
            <div className={innerCls}>
                {children}
            </div>
        </div>
    )
}

Tip.propTypes = {
    success: React.PropTypes.bool
}

module.exports = Tip
