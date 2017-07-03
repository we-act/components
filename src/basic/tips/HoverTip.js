
import React, {Component} from 'react'
import classNames from 'classnames'
import styles from "./HoverTip.css"

// TODO: move rootStyles to defaultProps.style
// 从 "lessFolder/lib-ui.less" 拿来的样式
const rootStyles = {
    position: 'relative',
    display: 'inline-block',
    '*display': 'inline',
    '*zoom': 1
}

class HoverTip extends Component {
    static childContextTypes = {
        showPopover: React.PropTypes.bool
    }
    static propTypes = {
        notRelativePopoverPosition: React.PropTypes.bool,
        type: React.PropTypes.string
    }
    static defaultProps = {
        // 让 Popover 与 HoverTip 的 position 无关
        notRelativePopoverPosition: false,
        style: {}
    }
    state = {
        showPopover: false
    }
    getChildContext () {
        const showPopover = this.state.showPopover
        return {
            showPopover: showPopover
        }
    }
    handleHover = () => {
        this.setState({showPopover: true})
        this.props.onHover && this.props.onHover()
    }
    handleMouseLeave = () => {
        this.setState({showPopover: false})
    }
    render () {
        const {
            notRelativePopoverPosition, 
            type, 
            style, 
            icon, 
            className, 
            children, 
            onHover, 
            ...others
        } = this.props

        const mergedStyle = {...style, ...rootStyles}

        // TODO: remove infobox type
        if (type === 'infobox') {
            mergedStyle.position = 'absolute'
            mergedStyle.right = '20px'
            mergedStyle.top = '0'
        }

        // remove `position: relative`
        if(notRelativePopoverPosition)
            mergedStyle.position = ''

        const iconCls = classNames(styles.icon, {
            [styles.iconQuest]: icon === 'quest',
            // TODO: change to use <BorderArrow/> instead of class
            [styles.iconArrow]: icon === 'arrow' || icon === 'arrow-high'
        })

        let iconStyle
        if (icon === 'arrow') {
            iconStyle = {
                position: 'static',
                verticalAlign: '2px'
            }
        }
        else if (icon === 'arrow-high') {
            iconStyle = {
                position: 'static',
                verticalAlign: '8px'
            }
        }

        return (
            <div
                className={className}
                style={mergedStyle}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleMouseLeave}
                {...others}>
                <i className={iconCls} style={iconStyle}></i>
                <span>{children}</span>
            </div>
        )
    }
}

module.exports = HoverTip
