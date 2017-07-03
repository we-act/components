import React, {Component} from 'react'
import classNames from 'classnames'
import Button from 'componentPath/basic/form/Button'

import styles from './Popover_new.scss'

class Popover extends Component {
    static contextTypes = {
        // context from HoverTip
        showPopover: React.PropTypes.bool
    }

    static propTypes = {
        placement: React.PropTypes.string,
        show: React.PropTypes.bool,
        buttons: React.PropTypes.array,
        text: React.PropTypes.string,
        contentLeft: React.PropTypes.bool,
        contentCenter: React.PropTypes.bool
    }
    static defaultProps = {
        placement: "topRight",
        show: false,
        buttons: [],
        text: "",
        contentLeft: false,
        contentCenter: false,
    }

    renderButtons = () => {
        const total = this.props.buttons.length
        if (total > 0) {
            return this.props.buttons.map((action, idx) => {
                const {type, label, ...others} = action
                const cls = classNames(styles.button, {
                    'ui-mr-10': (idx + 1) !== total
                })

                return <Button key={idx} type={type} className={cls} {...others}>{label}</Button>
            })
        }
    }

    render () {
        const {
            placement,
            show,
            text,
            buttons,
            children,
            contentLeft,
            contentCenter,
            className,
            ...others
        } = this.props

        const showPopover = this.context.showPopover

        const classSet = classNames({
            [styles.popover]: true,
            [className]: className,
            [styles.show]: show || showPopover
        })

        const arrowClassSet = classNames({
            [styles.arrow]: true,
            [styles.topRight]: placement === "topRight",
            [styles.rightTop]: placement === "rightTop",
            [styles.bottomRight]: placement === "bottomRight",
            [styles.topLeft]: placement === "topLeft",
            [styles.bottomLeft]: placement === "bottomLeft"
        })

        const contentClassSet = classNames({
            'ui-ta-l': contentLeft,
            'ui-ta-c': contentCenter
        })

        return (
            <div className={classSet} {...others}>
                <div className={contentClassSet}>
                    {children}
                </div>
                {buttons.length !== 0 && (<div className={styles.buttons}>
                    {this.renderButtons()}
                </div>)}

                <i className={arrowClassSet}></i>
            </div>
        )
    }
}

module.exports = Popover
