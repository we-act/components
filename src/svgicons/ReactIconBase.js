import React from 'react'
import Icon from 'react-icon-base'

const ReactIconBase = props => {
    const {type, children, ...others} = props
    return <Icon style={{verticalAlign: ''}} viewBox="0 0 32 32" {...others}>
        {children}
      </Icon>
}

export default ReactIconBase
