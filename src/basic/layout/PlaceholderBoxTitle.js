
import React, { Component } from 'react'
import classNames from 'classnames'

const PlaceholderBoxTitle = (props) => {
    const {children, ...others} = props
    return (
        <div style={{fontSize: '16px'}}>{children}</div>
    )
}

module.exports = PlaceholderBoxTitle
