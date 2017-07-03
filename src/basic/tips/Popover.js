import React, {Component} from 'react'
import classNames from 'classnames'
import Button from '../form/Button'

import styles from './popover.scss'

class Popover extends Component {

    static contextTypes = {
        // context from HoverTip
        showPopover: React.PropTypes.bool
    }

    static propTypes = {
        arrow: React.PropTypes.string,
        buttons: React.PropTypes.array,
        width: React.PropTypes.string,
        contentCenter: React.PropTypes.bool
    }
    static defaultProps = {
        buttons: [],
        arrowStyle: {},
        style: {}
    }
    renderButtons = () => {
        const total = this.props.buttons.length
        if (total > 0) {
            return this.props.buttons.map((action, idx) => {
                const {type, label, ...others} = action
                const cls = classNames(styles.bar_button, {
                    'ui-mr-10': (idx + 1) !== total
                })

                return <Button key={idx} type={type} className={cls} {...others}>{label}</Button>
            })
        }
    }
    stopPropagation = (e) => {
        e.stopPropagation()
    }
    render () {
        const showPopover = this.context.showPopover
        const {
            show,
            width,
            arrow,
            direction,
            buttons,
            className,
            contentLeft,
            contentCenter,
            children,
            arrowStyle,
            style,
            ...others
        } = this.props

        // Can not Mutate style
        let elStyle = Object.assign({}, this.props.style)

        if (!show && !showPopover)
            elStyle.display = 'none'
        else
            elStyle.display = ''

        if(show)
            elStyle.position = 'relative'

        if (width)
            elStyle.width = width + 'px'

        // 处理三角方向
        let cls
        if (direction)
            cls = styles['root_' + direction]
        else
            cls = styles['root_top']
        cls = classNames(cls, className)

        let arrowCls
        let arrowOutCls
        let arrowInCls
        if (direction) {
            arrowCls = styles['arrow_box_' + direction]
            arrowOutCls = styles['arrow_out_' + direction]
            arrowInCls = styles['arrow_in_' + direction]
        }
        else {
            arrowCls = styles['arrow_box_top']
            arrowOutCls = styles['arrow_out_top']
            arrowInCls = styles['arrow_in_top']
        }
        // 清理 styles.arrow_box_center 和 styles.arrow_box_middle
        // 预设的值
        if (arrowStyle) {
            if (arrowStyle.left || arrowStyle.right) {
                arrowStyle.marginLeft = '0'
                if (arrowStyle.right)
                    arrowStyle.left = 'auto'
            }
            if (arrowStyle.top || arrowStyle.bottom) {
                arrowStyle.marginTop = '0'
                if (arrowStyle.bottom)
                    arrowStyle.top = 'auto'
            }
        }

        const contentCls = classNames({
            'ui-ta-l': contentLeft,
            'ui-ta-c': contentCenter
        })

        return (
            <div className={cls} style={elStyle} onClick={this.stopPropagation} {...others}>
                <div className={styles.inner}>
                    <div className={contentCls}>
                        {children}
                    </div>
                    {buttons.length !== 0 && (<div className={styles.bar}>
                        {this.renderButtons()}
                    </div>)}
                </div>
                <div className={arrowCls} style={arrowStyle}>
                    <i className={arrowOutCls}></i>
                    <i className={arrowInCls}></i>
                </div>
            </div>
        )
    }
}

module.exports = Popover
