import React, { Component } from 'react'
import withModal, {renderModalButtons} from '../../hoc/withModal'

class ModalContent extends Component {
    render () {
        return <div>{this.props.children}</div>
    }
}

const renderBottomButtons = (props) => {
    return renderModalButtons(props.buttons)
}

export default withModal({ModalContent, renderBottomButtons})
