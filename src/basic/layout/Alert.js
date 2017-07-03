import React, { Component } from 'react'
import withModal, {renderModalButtons} from '../../hoc/withModal'

const ModalContent = (props) => {
    return <div>{props.children}</div>
}

const renderBottomButtons = (props) => {
    const buttons = [
        {
            label: '确定',
            type: 'primary',
            onClick: props.close
        }
    ]
    return renderModalButtons(buttons)
}

export default withModal({ModalContent, renderBottomButtons})
