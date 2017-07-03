import React, {
    Component
} from 'react'
import classNames from 'classnames'
import styles from "./Radio.scss"

class Radio extends Component {

    static contextTypes = {
        radioGroup: React.PropTypes.object
    }

    render () {
        const {
            // TODO: 好像 name 没啥用
            name,
            selectedValue,
            onChange
        } = this.context.radioGroup

        const {
            className,
            value,
            label,
            disabled,
            children,
            ...others
        } = this.props

        let checked = false
        if (selectedValue !== undefined) {
            checked = (value === selectedValue)
        }
        const optional = {}
        if (!disabled && typeof onChange === 'function') {
            optional.onChange = onChange.bind(null, value, label)
        }

        let content = children ? children : label

        let cls = classNames(className, {
            [styles.radio]: true,
            [styles.selected]: checked && !disabled,
            [styles.disabled]: !checked && disabled,
            [styles.disabledSelected]: checked && disabled
        })

        return <label
            className={cls}
            role="radio"
            aria-checked={checked ? "true" : "false"}
            aria-disabled={disabled ? "true" : "false"}
            {...others}
            {...optional}
            >
                <i className={styles.input}></i>
                <span className={styles.label}>{content}</span>
                <input className={styles.originInput} type="radio" />
            </label>
    }
}

module.exports = Radio
