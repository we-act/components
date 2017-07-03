
import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'

// import "lessFolder/lib-base-input.less";
// import "lessFolder/lib-base-checkbox.less"

class RadioGroup extends Component {

    static childContextTypes = {
        radioGroup: React.PropTypes.object
    }
    static propTypes = {
        name: PropTypes.string,
        selectedValue: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool
        ]),
        onChange: PropTypes.func,
        children: PropTypes.node.isRequired
    }
    getChildContext () {
        const {
            name,
            selectedValue,
            onChange
        } = this.props
        return {
            radioGroup: {
                name,
                selectedValue,
                onChange
            }
        }
    }
    render () {
        const {name, selectedValue, onChange, children, ...rest} = this.props
        return <div role="radiogroup" {...rest}>{children}</div>
    }
}

module.exports = RadioGroup
