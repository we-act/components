import React, { Component, PropTypes } from 'react'
import Button from 'componentPath/basic/form/Button'

import {
    FormGroup,
    FormLabel,
    ColorPicker,
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

class Demo extends Component {
    state = {
        color: '#fff'
    }
    pageBgColorHandler = (color) => {
        this.setState({
            color: color.hex
        })
    }
    render() {
        const style = {
            float: 'left',
            marginRight: '300px'
        }
        return (
            <div style={{padding: '100px'}}>
                <h1>ColorPicker 使用示范</h1>
                <br />

                <FormGroup>
                    <FormLabel>Uploader</FormLabel>
                    <FormControl>
                        <div style={style}>
                            <ColorPicker
                              showAdvanced
                              color={this.state.color}
                              onChange={this.pageBgColorHandler}
                            />
                        </div>
                        <div style={style}>
                            <ColorPicker
                              color={this.state.color}
                              onChange={this.pageBgColorHandler}
                            />
                        </div>
                    </FormControl>
                </FormGroup>

            </div>
        )
    }
}

module.exports = Demo