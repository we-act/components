import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from "./Menu.scss"
import IconMpTriangleUp from 'componentPath/svgicons/mp/IconMpTriangleUp'
import IconMpKeyboardDown from 'componentPath/svgicons/mp/IconMpKeyboardDown'

class Item extends Component {
    static propTypes = {
        index: PropTypes.string
    }

    static defaultProps = {
        index: ""
    }

    handleClick = (index) => {
        this.context.onChange(index)
    }

    componentDidMount = () => {
        if(typeof(this.context.open) !== "undefined" && this.context.activeIndex === this.props.index) {
            this.context.setSubOpen(true)
        }
    }

    render () {
        const {index, className, children, ...others} = this.props

        const cls = classNames(className, styles.item, {
            [styles.active]: this.context.activeIndex === index
        })

        return (
            <li className={cls} onClick={() => this.handleClick(index)} {...others}>
                {children}
            </li>
        )
    }
}

Item.contextTypes = {
  activeIndex: PropTypes.string,
  onChange: PropTypes.func,
  open: PropTypes.bool,
  setSubOpen: PropTypes.func
}

class Group extends Component {
    static propTypes = {
    }

    static defaultProps = {
    }

    render () {
        const {title, className, children, ...others} = this.props

        const cls = classNames(className, styles.group)

        return (
            <li className={cls} {...others}>
                <div className={styles.groupTitle}>{title}</div>
                <ol>
                    {children}
                </ol>
            </li>
        )
    }
}

class SubMenu extends Component {
    static propTypes = {
    }

    static defaultProps = {
    }

    state = {
        open: false,
        height: ""
    }

    getChildContext() {
        return {
            open: this.state.open,
            setSubOpen: (bool) => {
                this.setState({open: true})
            }
        }
    }

    handleClick = (e) => {
        this.setState({
            open: !this.state.open
        })
    }

    componentDidMount = () => {
        this.setState({height: this.refs.list.scrollHeight})
    }

    render () {
        const {index, title, className, children, ...others} = this.props

        const cls = classNames(className, styles.sub)

        return (
            <li className={cls} {...others}>
                <div 
                    className={classNames(styles.subTitle, {
                        [styles.subTitleOpen]: this.state.open
                    })}
                    onClick={(e) => this.handleClick(e)}
                >
                    {title}
                    <IconMpKeyboardDown size="16" />
                </div>
                <ol 
                    ref="list" 
                    className={styles.subTitleList}
                    style={
                        this.state.open ? {
                            height: this.state.height,
                            paddingBottom: 19,
                            overflow: "auto",
                            opacity: 1
                        } : {
                            height: 0,
                            paddingBottom: 0,
                            overflow: "hidden",
                            opacity: 0
                        }
                    }
                >
                    {children}
                </ol>
            </li>
        )
    }
}

SubMenu.childContextTypes = {
  open: PropTypes.bool,
  setSubOpen: PropTypes.func
}

class Menu extends Component {
    static propTypes = {
        activeIndex: PropTypes.string,
        onChange: PropTypes.func
    }

    static defaultProps = {
        activeIndex: "",
        onChange: null
    }

    getChildContext() {
        return {
            activeIndex: this.props.activeIndex,
            onChange: this.props.onChange
        }
    }

    render () {
        const {activeIndex, className, children, ...others} = this.props

        const cls = classNames(className, styles.menu)

        return (
            <ol className={cls} {...others}>
                {children}
            </ol>
        )
    }
}

Menu.childContextTypes = {
  activeIndex: PropTypes.string,
  onChange: PropTypes.func
}


exports["default"] = Menu
Menu.Item = Item
Menu.SubMenu = SubMenu
Menu.Group = Group
module.exports = exports['default']