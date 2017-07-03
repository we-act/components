/**
 * Form Group
 * @version 0.0.1
 *
 * @组合调用
```
<FormGroup>{children}</FormGroup>
```
 */
import React from 'react'
import classNames from 'classnames'
import styles from "./FormGroup.scss"

const FormGroup = (props) => {
    const {className, children, ...others} = props
    const cls = classNames(styles.root, className)
    return <div className={cls} {...others}>{children}</div>
}

module.exports = FormGroup
