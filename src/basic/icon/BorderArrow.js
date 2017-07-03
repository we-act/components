import React, { Component } from 'react'
import classNames from 'classnames'

const caplizeLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const styles = {
    // borderLeftWidth: 0,
    // borderWidth: '6px',
    // borderRightColor: '#666666',
    // borderRightStyle: 'solid',
    display: 'inline-block',
    width: 0,
    height: 0,
    borderStyle: 'dashed',
    borderColor: 'transparent'
}

const BorderArrow = (props) => {
    let {direction, color, size, style, ...others} = props
    if (!style)
        style = {}
    const styleMerged = Object.assign({}, style, styles)

    let directionOpposite
    switch (direction) {
        case 'left':
            directionOpposite = 'right'
            break
        case 'right':
            directionOpposite = 'left'
            break
        case 'top':
            directionOpposite = 'bottom'
            break
        case 'bottom':
            directionOpposite = 'top'
            break
    }
    direction = caplizeLetter(direction)
    directionOpposite = caplizeLetter(directionOpposite)
    styleMerged.borderWidth = size
    styleMerged[`border${directionOpposite}Style`] = 'solid'
    styleMerged[`border${directionOpposite}Color`] = color
    styleMerged[`border${direction}Width`] = '0px'

    return (
        <i
            style={styleMerged}
            {...others}
            />
    )
}

BorderArrow.defaultProps = {
    direction: 'right',
    color: '#666666',
    size: '6px'
}

module.exports = BorderArrow
