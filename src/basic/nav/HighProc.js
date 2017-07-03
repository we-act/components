
import React, { Component } from 'react'
import classNames from 'classnames'

import "./high-processor.less";

class HighProc extends Component {
    static propTypes = {
        activeStep: React.PropTypes.number
    };

    static defaultProps = {
        activeStep: 1
    };

    render () {
        const {steps, activeStep, className, children, ...others} = this.props
        const total = steps.length

    // TODO: 自动化 props 验证
        if (total < 2 && total > 4) {
            return <div>Processor 的 steps 数组长度必须是 2-4</div>
        }

    // 处理自己的 classname
        const cls = classNames(
        'high-processor',
        'ui-clearfix',
        className
    )

    // 处理子组件的 classname
        const childCls = classNames({
            'high-processor__item': true,
            ['high-processor__item_' + total + '-1']: true
        })

        return (
        <div className={cls} {...others}>
        {
            steps.map((value, index) => {
                let thisOrder = index + 1
                let thiscls = classNames(childCls, {
                    'high-processor__item_current': activeStep === thisOrder,
                    'high-processor__item_last': thisOrder === steps.length
                })
                return (
                <div className={thiscls} key={index}>
                    <div className='high-processor__title'>{value.title}</div>
                    <span className='high-processor__desc'>{value.desc}</span>
                 </div>
                )
            })
        }
        </div>
        )
    }
}

module.exports = HighProc
