import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Message.scss'
import IconMpInfo from 'componentPath/svgicons/mp/IconMpInfo'
import IconMpDone from 'componentPath/svgicons/mp/IconMpDone'
import IconMpWarning from 'componentPath/svgicons/mp/IconMpWarning'

function notice(content, duration, type) {
    const tag = document.getElementsByClassName(styles.wrapper)
    Array.prototype.forEach.call(tag, (block, i) => {
        if(block.className.indexOf(styles.disappearing) === -1) {
            block.className = block.className + " " + styles.disappearing
        }
    })
    let wrapper
    wrapper = document.createElement("div")
    wrapper.className = styles.wrapper
    document.getElementsByTagName("body")[0].appendChild(wrapper)

    let Icon

    if(type === "success") {
        Icon = <IconMpDone key={0} color="#44b549" size="16" />
    }
    else if(type === "info") {
        Icon = <IconMpInfo key={0} color="#459ae9" size="16" />
    }
    else if(type === "warn") {
        Icon = <IconMpWarning key={0} color="#ffa305" size="16" />
    }
    else if(type === "error") {
        Icon = <IconMpWarning key={0} color="#f24d4d" size="16" />
    }

    const array = [
        Icon,
        React.createElement(
            "div", 
            {
                key: 1,
                className: styles.content
            },
            content
        ),
    ]

    ReactDOM.render(
        React.createElement(
            "div", 
            {
                className: styles.inner,
                id: "tip-message-content"
            },
            array
        ),
        wrapper
    )

    setTimeout(() => {
        ReactDOM.render(
            React.createElement(
                "div", 
                {
                    className: classNames(styles.inner, styles.moveOut),
                    id: "tip-message-content"
                },
                array
            ),
            wrapper
        )
    },3000)

    setTimeout(() => {
        ReactDOM.unmountComponentAtNode(wrapper)
        document.getElementsByTagName("body")[0].removeChild(wrapper)
    },3200)
}

exports["default"] = {
    info: function info(content, duration) {
        return notice(content, duration, 'info')
    },
    success: function success(content, duration) {
        return notice(content, duration, 'success')
    },
    error: function error(content, duration) {
        return notice(content, duration, 'error')
    },
    warn: function warn(content, duration) {
        return notice(content, duration, 'warn')
    }
}
module.exports = exports['default']