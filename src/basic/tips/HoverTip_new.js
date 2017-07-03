
import React, {Component} from 'react'
import classNames from 'classnames'
import styles from "./HoverTip_new.scss"
import Icon from 'componentPath/basic/icon/Icon_new'

class HoverTip extends Component {
    static childContextTypes = {
        showPopover: React.PropTypes.bool
    }
    static propTypes = {
        type: React.PropTypes.string
    }
    static defaultProps = {
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
        const {type, style, icon, className, children, onHover, ...others} = this.props

        const cls = classNames({
            [className]: className, 
            [styles.wrapper]: true
        })

        return (
            <div
                className={cls}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleMouseLeave}
                {...others}>
                {icon && <Icon color="#abaeae" icon={icon} size="16" />}
                <span>{children}</span>
            </div>
        )
    }
}

module.exports = HoverTip
