import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

import styles from "./Tooltip.scss"

class Tooltip extends Component {
    static propTypes = {
        content: PropTypes.node,
        placement: PropTypes.string,
        onlyIcon: PropTypes.bool,
        trigger: PropTypes.string,
        show: PropTypes.bool
    }
    static defaultProps = {
        content: "",
        placement: "bottomRight",
        onlyIcon: false,
        trigger: "hover",
        show: false
    }
    state = {
        div: "",
        event: "",
        positionStyle: {},
        show: this.props.show,
        id: Math.random().toString(36).substring(3, 8)
    }

    componentDidMount = () => {
        const div = document.createElement("div")
        div.style.cssText = "position:absolute;top:0;left:0;width:100%;"
        this.setState({div: div}, this.reRenderToolTip)
        document.getElementsByTagName("body")[0].appendChild(div)

        this.setState({
            event: this.refs.wrapper
        }, this.state.show ? this.handlePosition(null, "show") : null)

        top.addEventListener("resize", this.handlePosition)

        if(this.props.trigger === "click") {
            top.addEventListener("click", this.bodyClickHandler)
        }
    }

    componentWillUnmount = () => {
        if(this.state.div) {
            document.getElementsByTagName("body")[0].removeChild(this.state.div)
        }
        top.removeEventListener("click", this.bodyClickHandler)
        top.removeEventListener("resize", this.handlePosition)
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            show: nextProps.show
        }, this.reRenderToolTip)
    }

    popperClassSet = () => {
        return (
            classNames({
                [styles.popper]: true,
                [styles.popper_triggerClick]: this.props.trigger === "click",
                [styles.show]: this.state.show,

                [styles.topLeft]: this.props.placement === "topLeft",
                [styles.top]: this.props.placement === "top",
                [styles.topRight]: this.props.placement === "topRight",

                [styles.bottomLeft]: this.props.placement === "bottomLeft",
                [styles.bottom]: this.props.placement === "bottom",
                [styles.bottomRight]: this.props.placement === "bottomRight",

                [styles.leftTop]: this.props.placement === "leftTop",
                [styles.left]: this.props.placement === "left",
                [styles.leftBottom]: this.props.placement === "leftBottom",

                [styles.rightTop]: this.props.placement === "rightTop",
                [styles.right]: this.props.placement === "right",
                [styles.rightBottom]: this.props.placement === "rightBottom"
            })
        )
    }

    reRenderToolTip = () => {
        const array = [
            React.createElement(
                "div", {
                    key: 0
                },
                this.props.content
            ), 
            React.createElement(
                "i", 
                {
                    className: styles.arrow,
                    key: 1
                }
            )
        ]
        if(this.props.trigger === "click") {
            ReactDOM.render(
                React.createElement(
                    "div", 
                    {
                        style: {...this.state.positionStyle, ...this.props.popperStyle }, 
                        className: this.popperClassSet(),
                        id: this.state.id,
                        onClick: (e) => e.stopPropagation()
                    },
                    array
                ),
                this.state.div
            )
        }
        else {
            ReactDOM.render(
                React.createElement(
                    "div", 
                    {
                        style: {...this.state.positionStyle, ...this.props.popperStyle }, 
                        className: this.popperClassSet(),
                        id: this.state.id,
                        onMouseEnter: this.handleTipHover,
                        onMouseLeave: this.handleMouseLeave
                    },
                    array
                ),
                this.state.div
            )
        }
    }

    bodyClickHandler = (e) => {
        this.setState({
            show: false
        }, this.reRenderToolTip)
    }

    handleTipHover = (e) => {
        this.setState({
            show: true
        }, this.reRenderToolTip)
    }

    handleMouseLeave = () => {
        this.setState({
            show: false
        }, this.reRenderToolTip)
    }

    handlePosition = (e, show) => {
        if(e) e.stopPropagation()

        let rect
        rect = this.state.event.getBoundingClientRect()
        const top = rect.top
        const left = rect.left
        const width = rect.width
        const height = rect.height

        const popperBox = document.getElementById(this.state.id)
        const popperWidth = popperBox.offsetWidth
        const popperHeight = popperBox.offsetHeight

        const placement = this.props.placement
        const onlyIcon = this.props.onlyIcon
        let positionTop
        let positionLeft
        switch(placement) {
            case "topLeft":
                positionTop = onlyIcon ? top - popperHeight - 8 : top - popperHeight - 12
                positionLeft = left + width/2 - 44
            break
            case "top":
                positionTop = onlyIcon ? top - popperHeight - 8 : top - popperHeight - 12
                positionLeft = left + width/2 - popperWidth/2
            break
            case "topRight":
                positionTop = onlyIcon ? top - popperHeight - 8 : top - popperHeight - 12
                positionLeft = left + width/2 - popperWidth + 44
            break

            case "bottomLeft":
                positionTop = onlyIcon ? top + height + 8 : top + height + 12
                positionLeft = left + width/2 - 44
            break
            case "bottom":
                positionTop = onlyIcon ? top + height + 8 : top + height + 12
                positionLeft = left + width/2 - popperWidth/2
            break
            case "bottomRight":
                positionTop = onlyIcon ? top + height + 8 : top + height + 12
                positionLeft = left + width/2 - popperWidth + 44
            break

            case "leftTop":
                positionTop = top + height/2 - 26
                positionLeft = onlyIcon ? left - popperWidth - 8 : left - popperWidth - 12
            break
            case "left":
                // 视觉居中往上多 2px
                positionTop = top + height/2 - popperHeight/2 + 2
                positionLeft = onlyIcon ? left - popperWidth - 8 : left - popperWidth - 12
            break
            case "leftBottom":
                positionTop = top + height/2 - popperHeight + 26
                positionLeft = onlyIcon ? left - popperWidth - 8 : left - popperWidth - 12
            break

            case "rightTop":
                positionTop = top + height/2 - 26
                positionLeft = onlyIcon ? left + width + 8 : left + width + 12
            break
            case "right":
                // 视觉居中往上多 2px
                positionTop = top + height/2 - popperHeight/2 + 2
                positionLeft = onlyIcon ? left + width + 8 : left + width + 12
            break
            case "rightBottom":
                positionTop = top + height/2 - popperHeight + 26
                positionLeft = onlyIcon ? left + width + 8 : left + width + 12
            break

            default:
                // 默认 bottomRight
                positionTop = top + height + 8
                positionLeft = left + width/2 - popperWidth + 44
        }

        this.setState({
            positionStyle: { top: positionTop + window.scrollY, left: positionLeft + window.scrollX },
            show: show ? true : this.state.show
        }, this.reRenderToolTip)
    }

    render () {
        const {content, show, trigger, placement, onlyIcon, className, children, popperStyle, ...others} = this.props

        const cls = classNames({
            className,
            [styles.wrapper]: true,
            [styles.onlyIcon]: onlyIcon,
            [styles.tipShow]: this.state.show
        })

        if(trigger === "click") {
            return (
                <div
                    className={cls}
                    ref="wrapper"
                    onClick={(e) => this.handlePosition(e, "show")}
                    {...others}
                >
                    {children}
                </div>
            )
        }
        else {
            return (
                <div
                    className={cls}
                    ref="wrapper"
                    onMouseEnter={(e) => this.handlePosition(e, "show")}
                    onMouseLeave={this.handleMouseLeave}
                    {...others}
                >
                    {children}
                </div>
            )
        }
    }
}

module.exports = Tooltip
