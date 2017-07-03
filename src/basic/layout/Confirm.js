import React, { Component } from 'react'
import withModal, {renderModalButtons} from '../../hoc/withModal'

class ModalContent extends Component {
    static propTypes = {
        confirm: React.PropTypes.func
    }
    static defaultProps = {
        confirm: () => {}
    }
    render () {
        return <div>{this.props.children}</div>
    }
}

const renderBottomButtons = (props) => {
    const buttons = [
        {
            label: '确定',
            type: 'primary',
            onClick: props.confirm
        },
        {
            label: '取消',
            type: 'default',
            onClick: props.close
        }
    ]

    return renderModalButtons(buttons)
}

export default withModal({ModalContent, renderBottomButtons})
