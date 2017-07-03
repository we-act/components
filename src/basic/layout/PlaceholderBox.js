
import React, { Component } from 'react'
import classNames from 'classnames'

const PlaceholderBox = (props) => {
    const defaultStyle = {
        border: '1px solid #E7E7EB',
        minHeight: '300px',
        textAlign: 'center',
        color: '#9B9B9B'
    }
    const {style, bgColor, noBorder, height, children,
        // inTbody indicates return `<tr><td>` wrapper
        inTbody,
        colSpan,
        className,
        ...others} = props
    const style2 = {...defaultStyle, ...style}
    if (noBorder)
        style2.border = null
    if (height)
        style2.minHeight = height
    style2.lineHeight = style2.minHeight
    if (bgColor)
        style2.backgroundColor = bgColor

    const styleInner = {
        display: 'inline-block',
        lineHeight: '16px',
        verticalAlign: 'middle'
    }
    let content = <div style={style2} className={className}>
            <div style={styleInner}>{children}</div>
        </div>

    // use in a tbody
    if(inTbody)
        content = <tr>
                <td colSpan={colSpan}>
                    {content}
                </td>
            </tr>

    return content
}

module.exports = PlaceholderBox
