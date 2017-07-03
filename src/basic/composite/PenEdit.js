
import React, { Component } from 'react'
import classNames from 'classnames'

// import "lessFolder/mod-basic-table.less";

import {Popover} from './Popover'
import {TextInput} from './TextInput'

class PenEdit extends Component {
    constructor (props) {
        super(props)
        this.state = {
            open: false
        }
    }

    handleClick () {
        this.setState({open: !this.state.open})
    }

    render () {
        const {className, ...others} = this.props
        const open = this.state.open
        const buttons = [
            {
                label: '保存',
                type: 'primary'
            },
            {
                label: '取消',
                type: 'default'
            }]

        return (
            <div className='ui-d-ib' onClick={this.handleClick.bind(this)} style={{position: 'relative'}}>
                <span className='ui-d-ib mod-basic-table__icon-edit'></span>
                {
                    open && (
                        <Popover style={{width: '300px', position: 'absolute', left: '-142px'}} arrow='center' buttons={buttons} contentCenter>
                            <div className='ui-p-10'>
                                <TextInput width='50px'></TextInput><span className='ui-ml-small'>次／人</span>
                                <span className='ui-c-gray ui-ml-large'>建议填写范围3-8次</span>
                            </div>
                        </Popover>
                    )
                }
            </div>
        )
    }
}

module.exports = PenEdit
