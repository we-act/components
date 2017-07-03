/**
 * Form Label
 * @version 0.0.1
 *
 * @property {array} width 文案长度，单位 em
 * @组合调用
```
<FormLabel width="5">一二三四五</FormLabel>
<FormLabel width="7">一二三四五六七八九</FormLabel>
```
 */

import React, { Component } from 'react'
import classNames from 'classnames'
// import omit from 'object.omit'
import "./form.less"

const FormLabel = (props) => {
    // remove style from props to avoid `...others` contain `style`
    // props = omit(props, ['style'])
    const {className, type, width, children, ...others} = props
    const cls = classNames('mod-form__label', className)

    let {style} = props
    style || (style = {})
    if (type === 'valign-input')
        style.marginTop = '0.3em'
    else
        style.marginTop = '0'

    if(!!+width) // 如果是数字，就加em
      style.width = width + 'em'

    return (
        <label style={style} className={cls} {...others}>
            {children}
        </label>
    )
}

FormLabel.propTypes = {
    width: React.PropTypes.string
}

module.exports = FormLabel
