import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Collapse.scss'
import IconMpKeyboardRight from 'componentPath/svgicons/mp/IconMpKeyboardRight'

class Collapse extends Component {
    static propTypes = {
        accordion: PropTypes.bool,
        children: PropTypes.node.isRequired,
        defaultActiveIndex: PropTypes.array,
        gray: PropTypes.bool,
    }

    static defaultProps = {
        accordion: false,
        gray: false,
        defaultActiveIndex: []
    }

    state = {
        activeIndex: this.props.defaultActiveIndex ? this.props.defaultActiveIndex : []
    }

    handleChange = (index) => {
        if(this.props.accordion) {
            this.setState({
                activeIndex: this.state.activeIndex[0] === index ? [] : [index]
            },() => {
                this.props.onChange && this.props.onChange(this.state.activeIndex)
            })
        }
        else {
            const activeIndex = this.state.activeIndex
            const place = activeIndex.indexOf(index)
            place > -1 ? activeIndex.splice(place, 1) : activeIndex.push(index)
            this.setState({
                activeIndex: activeIndex
            },() => {
                this.props.onChange && this.props.onChange(this.state.activeIndex)
            })
        }
    }

    getHeight = (index) => {
        if(this.refs["content_" + index]) {
            return this.refs["content_" + index].scrollHeight
        }
    }

    render() {
        const {children, className, gray, accordion, ...others} = this.props
        const cls = classNames({
            [className]: className, 
            [styles.outer]: true
        })
        const childs = React.Children.toArray(children)
        return (
            <ol className={cls} {...others}>
                {childs.map((item, i) => {
                    const panelInfo = {
                        header: item.props.header,
                        index: item.props.index,
                        children: item.props.children
                    }
                    return <li
                        className={classNames(styles.list,{
                            [styles.gray]: gray,
                            [styles.active]: this.state.activeIndex.indexOf(panelInfo.index) > -1
                        })}
                        key={i}
                    >
                        <div className={styles.header} onClick={() => this.handleChange(panelInfo.index)}>
                            <IconMpKeyboardRight size="16" />
                            <div className={styles.header_txt}>{panelInfo.header}</div>
                        </div>
                        <div 
                            className={styles.content}
                            ref={"content_" + panelInfo.index}
                            style={this.state.activeIndex.indexOf(panelInfo.index) > -1 ? {
                                height: this.getHeight(panelInfo.index),
                                borderBottomWidth: 1
                            } : {
                                height: 0,
                                borderBottomWidth: 0
                            }}
                        >
                            {panelInfo.children}
                        </div>
                    </li>
                })}
            </ol>
        )
    }
}

module.exports = Collapse
