import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Tag.scss'

import IconMpCancel from 'componentPath/svgicons/mp/IconMpCancel'
import IconMpCancelCircle from 'componentPath/svgicons/mp/IconMpCancelCircle'

class Tag extends Component {
    static propTypes = {
        text: PropTypes.string,
        closable: PropTypes.bool,
        textTag: PropTypes.bool
    }

    static defaultProps = {
        text: "",
        closable: false,
        textTag: false
    }

    state = {
        removed: false,
        removing: false,
        width: ""
    }

    handleRemove = () => {
        this.setState({
            removing: true
        },() => {
            this.props.onClose && this.props.onClose(this.props.text)
        })
        setTimeout(() => {
            this.setState({
                removed: true
            })
        }, 350)
    }

    componentDidMount = () => {
        this.setState({
            width: this.refs.wrapper.scrollWidth + 2
        })
    }

    render() {
        const {text, closable, textTag, className, ...others} = this.props
        const cls = classNames({
            [className]: className, 
            [styles.wrapper]: true,
            [styles.text]: textTag,
            [styles.removing]: this.state.removing
        })
        if(this.state.removed) {
            return null
        }
        else {
            return (
                <div 
                    className={cls} 
                    ref="wrapper"
                    style={this.state.removing ? {
                        width: 0,
                        marginRight: 0,
                        paddingLeft: 0,
                        paddingRight: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0
                    } : {
                        width: this.state.width,
                        marginRight: textTag ? 8 : 12,
                        paddingLeft: 7,
                        paddingRight: 7,
                        borderLeftWidth: textTag ? 0 : 1,
                        borderRightWidth: textTag ? 0 : 1
                    }}
                >
                    <div className={styles.content}>
                        {text}
                        {
                            (closable && !textTag) && <IconMpCancel size="16" onClick={this.handleRemove} />
                        }
                        {
                            textTag && <IconMpCancelCircle size="16" onClick={this.handleRemove} />
                        }
                    </div>
                </div>
            )
        }
    }
}

module.exports = Tag
