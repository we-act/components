import React, {Component} from 'react'
import Dropdown from 'componentPath/basic/form/Dropdown'
import Button from 'componentPath/basic/form/Button'

class DropdownDemo extends Component {

    static defaultProps = {
        optionsFirst: [
            {value: 'test1', label: '选项1'},
            {value: 'test2', label: '选项2'},
            {value: 'test3', label: '选项3'},
            {value: 'test4', label: '选项4'},
            {value: 'test5', label: '选项5'},
            {value: 'test6', label: '选项6'},
            {value: 'test7', label: '选项7'}
        ],
        options3: []
    }

    state = {
        value: 'test1',
        options2Fetched: false,
        options2: [],
        value2: ''
    }
    changeHandler = (e, i, selectOption) => {
        console.log(i, selectOption)
        this.setState({value: selectOption.value})
    }
    changeHandler2 = (e, i, selectOption) => {
        console.log(i, selectOption)
        this.setState({value2: selectOption.value})
    }
    handleClick = (e) => {
        console.log('options2Fetched', this.state.options2Fetched)
        if (this.state.options2Fetched)
            return

        this.setState({options2Fetched: true})
        setTimeout(() => {
            this.setState({options2: [
                {value: 'test01', label: '选项01'},
                {value: 'test02', label: '选项02'},
                {value: 'test03', label: '选项03'},
                {value: 'test04', label: '选项04'}
            ]})
        }, 800)
    }
    reset = () => {
        this.setState({value: ''})
    }
    render () {
        return (
            <div style={{width: '100%', padding: '30px'}}>

                <h2>传了初始值，没有 defaultLabel</h2>
                <Dropdown
                    options={this.props.optionsFirst}
                    className='ui-mr-30'
                    value={this.state.value}
                />

                <br />
                <br />

                <Dropdown
                    options={this.props.optionsFirst}
                    className='ui-mr-30'
                    onChange={this.changeHandler}
                    initialShow
                    value={this.state.value}
                    defaultLabel='请选择'
                    cancelLabel='不限'
                />
                <Button onClick={this.reset}>重置</Button>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <Dropdown
                    options={this.state.options2}
                    onChange={this.changeHandler2}
                    value={this.state.value2}
                    onClick={this.handleClick}
                    cancelLabel='不限'
                />

                <br />
                <br />
                <br />

                <Dropdown 
                    options={this.props.options3}
                    disabled
                    value=''
                    />
            </div>

        )
    }
}

module.exports = <DropdownDemo />
