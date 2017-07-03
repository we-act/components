import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Alert.scss'
import IconMpCancel from 'componentPath/svgicons/mp/IconMpCancel'
import IconMpInfo from 'componentPath/svgicons/mp/IconMpInfo'

class Alert extends Component {
    static propTypes = {
        text: PropTypes.string,
        closable: PropTypes.bool,
        onClose: PropTypes.func
    }

    static defaultProps = {
        text: "",
        closable: false,
        onClose: null
    }

    state = {
        removing: false,
        removed: false,
        height: null,
    }

    handleRemove = () => {
        this.props.onClose && this.props.onClose()
        this.setState({
            removing: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    removed: true
                })
            }, 220)
        })
    }

    componentDidMount = () => {
        this.setState({
            height: this.refs.wrapper.scrollHeight
        })
    }

    render() {
        const {text, closable, onClose, className, style, ...others} = this.props
        const cls = classNames({
            [className]: className, 
            [styles.wrapper]: true,
            [styles.closable]: closable,
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
                        opacity: 0,
                        margin: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        height: 0
                    } : {
                        ...style,
                        height: this.state.height
                    }}
                    {...others}
                >
                    <IconMpInfo size="16" className={styles.infoIcon} />
                    {text}
                    {
                        closable && <i className={styles.cancelIcon} onClick={this.handleRemove}><IconMpCancel size="16" /></i>
                    }
                </div>
            )
        }
    }
}

module.exports = Alert
