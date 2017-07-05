import React, {Component} from 'react'
import Dialog from 'componentPath/basic/layout/Dialog'
import Confirm from 'componentPath/basic/layout/Confirm'
import Alert from 'componentPath/basic/layout/Alert'
import Button from 'componentPath/basic/form/Button'

class DialogDemo extends Component {
    state = {
        open: false,
        openScrollDialog: true,
        showConfirm: false,
        showAlert: false
    }

    open = () => {
        this.setState({open: true})
    }
    close = () => {
        this.setState({open: false})
    }

    openAlert = () => {
        this.setState({showAlert: true})
    }
    closeAlert = () => {
        this.setState({showAlert: false})
    }

    openConfirm = () => {
        this.setState({showConfirm: true})
    }
    closeConfirm = () => {
        this.setState({showConfirm: false})
    }

    openScrollDialog = () => {
        this.setState({openScrollDialog: true})
    }
    closeScrollDialog = () => {
        this.setState({openScrollDialog: false})
    }

    componentDidMount() {
        const scrollEl = this.refs.confirm.getModalBodyScrollElement()
        console.log('scrollEl', scrollEl)
    }

    handleClickOutside = () => {
        this.setState({openScrollDialog: false})
    }

    render () {
        const buttons = [
            {
                label: '自定义',
                type: 'primary',
                onClick: this.close
            },
            {
                label: '自定义',
                type: 'default',
                onClick: this.close
            }
        ]
        return (
            <div style={{padding: '100px 50px'}}>
                <div>
                    <Button type='primary' onClick={this.open}>点击弹出 Dialog</Button>
                    <br />
                    <br />
                    <Button type='primary' onClick={this.openConfirm}>点击弹出 Confirm</Button>
                    <br />
                    <br />
                    <Button type='primary' onClick={this.openAlert}>点击弹出 Alert</Button>
                    <br />
                    <br />
                    <Button type='primary' onClick={this.openScrollDialog}>点击弹出内部滚动 Dialog</Button>
                </div>
                <div>
                    <Alert 
                        ref='alert'
                        centerContent
                        size='sn'
                        title='弹出的 Alert' 
                        close={this.closeAlert} 
                        show={this.state.showAlert}>
                        这里是弹出的 Alert 内容
                    </Alert>
                    <Confirm 
                        ref='confirm'
                        centerContent
                        size='sw'
                        title='弹出的 Confirm' 
                        close={this.closeConfirm} 
                        confirm={this.closeConfirm} 
                        show={this.state.showConfirm}>
                        这里是弹出的 Confirm 内容
                    </Confirm>
                    <Dialog 
                        ref='dialog' 
                        centerContent
                        title='弹出的 Dialog' 
                        buttons={buttons} 
                        show={this.state.open} 
                        size='ln'
                        close={this.close}>
                        这里是弹出的 Dialog 内容
                    </Dialog>
                    <Confirm 
                        style={{width: '300px'}}
                        ref='dialog' 
                        centerContent
                        title='弹出的内部滚动 Dialog' 
                        show={this.state.openScrollDialog} 
                        onClickOutside={this.closeScrollDialog}
                        size='ln'
                        close={this.closeScrollDialog} 
                        confirm={this.closeScrollDialog}>
                        <div style={{padding: '40px 0'}}>
                            {new Array(60).fill(0).map((item, i) => {
                                return <div key={i}>这里是弹出的 Dialog 内容</div>
                            })}
                        </div>
                    </Confirm>
                </div>
            </div>
        )
    }
}

module.exports = DialogDemo
