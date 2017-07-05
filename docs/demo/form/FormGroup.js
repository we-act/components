import React, {Component} from 'react'
import DemoCode from 'doc-components/DemoCode'

import {
    FormGroup,
    FormLabel,
    FormControl,
    FormTip,
    FormError,
    TextInput,
    Checkbox,
    Dropdown,
    Radio,
    TextArea,
    Search
} from 'componentPath/basic/form'

class FormDemos extends Component {
    state = {
        value: '',
        valueSearch: '',
        selected: false
    }
    handleChange = (value) => {
        this.setState({value: value})
    }
    handleCheckbox = () => {
        this.setState({
          selected: !this.state.selected
        });
    }
    handleChangeSearch = (value) => {
        this.setState({valueSearch: value})
        console.log('handleChangeSearch', value)
    }
    handleSubmitSearch = (value) => {
        console.log('handleSubmitSearch', value)
    }
    handleSubmitSearch2 = (value) => {
        console.log('handleSubmitSearch2', value)
    }
    render () {
        return <div style={{padding: '100px'}}>

            <h1>Form 控件使用示范</h1>

            <DemoCode markup={'<FormLabel>一二三四五六</FormLabel>'} />
            <FormGroup>
                <FormLabel>一二三四五六</FormLabel>
                <FormControl>
                    这是表单值这是表单值这是表单值这是表单值这是表单值这是表单值这是表单值这是表单值这是表单值这是表单值这是表单值
                </FormControl>
            </FormGroup>

            <DemoCode markup={'<FormLabel width="9">一二三四五六七八九</FormLabel>'} />
            <FormGroup>
                <FormLabel width='9'>一二三四五六七八九</FormLabel>
                <FormControl>
                    这是表单值这是表单值这是表单值这是表单值这是表单值这是表单值这是表单值这是表单值这是表单值这是表单值这是表单值
                </FormControl>
            </FormGroup>

            <FormGroup>
                <FormLabel type='valign-input'>textInput</FormLabel>
                <FormControl>
                    <TextInput limit={20} placeholder='请输入XXX' value={this.state.value} onChange={this.handleChange} width='300px' />
                    <FormError>{this.state.value.length > 20 ? '字数超了' : ''}</FormError>
                </FormControl>
            </FormGroup>

            <FormGroup>
                <FormLabel width='10' type='valign-input'>textInput props.countHanzi</FormLabel>
                <FormControl>
                    <TextInput countHanzi={false} limit={20} placeholder='请输入XXX' value={this.state.value} onChange={this.handleChange} width='300px' />
                </FormControl>
            </FormGroup>

            <FormGroup>
                <FormLabel type='valign-input'>textInput</FormLabel>
                <FormControl>

                    <TextInput placeholder='请输入XXX' />

                    <FormTip>表单提示</FormTip>
                    <FormError>表单验证消息 失败</FormError>

                </FormControl>
            </FormGroup>

            <FormGroup>
                <FormLabel>textInput disabled</FormLabel>
                <FormControl>
                    <TextInput placeholder='' disabled></TextInput>
                    <FormTip>text input 的 disabled 态</FormTip>
                </FormControl>
            </FormGroup>

            <FormGroup>
                <FormLabel>TextArea</FormLabel>
                <FormControl>
                    <TextArea onChange={this.handleChange} value={this.state.value} limit={200} placeholder='请输入XXX' width='600px' height='200px' />
                </FormControl>
            </FormGroup>

            <FormGroup>
                <FormLabel>TextArea</FormLabel>
                <FormControl>
                    <TextArea onChange={this.handleChange} value={this.state.value} outsideLimit limit={200} placeholder='请输入XXX' width='400px' height='200px' />
                </FormControl>
            </FormGroup>



            <FormGroup>
                <FormLabel>TextArea disabled</FormLabel>
                <FormControl>

                        <TextArea disabled />
                </FormControl>
            </FormGroup>

            <FormGroup>
                <FormLabel>Checkbox</FormLabel>
                <FormControl>
                    <Checkbox selected={this.state.selected} onChange={this.handleCheckbox}>普通复选框</Checkbox>
                    <Checkbox selected>已选复选框</Checkbox>
                    <Checkbox disabled>普通置灰复选框</Checkbox>
                    <Checkbox selected disabled>已选置灰复选框</Checkbox>
                </FormControl>
            </FormGroup>

            <FormGroup>
                <FormLabel type='valign-input'>Search</FormLabel>
                <FormControl>
                    <Search value={this.state.valueSearch} onChange={this.handleChangeSearch} onSubmit={this.handleSubmitSearch} placeholder='请输入XXX搜索' />
                </FormControl>
            </FormGroup>

            <FormGroup>
                <FormLabel type='valign-input'>Search</FormLabel>
                <FormControl>
                    <Search onSubmit={this.handleSubmitSearch2} placeholder='请输入XXX搜索' />
                </FormControl>
            </FormGroup>

        </div>
    }
}

module.exports = FormDemos
