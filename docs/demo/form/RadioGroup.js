
import React, { Component } from 'react'

import {
    FormGroup,
    FormControl,
    FormLabel,
    FormTip,
    FormError,
    RadioGroup,
    Radio,
    Button,
    TextInput
}
from 'componentPath/basic/form'

class Example extends Component {
    state = {
        selectedValue: 'apple'
    }

    handleChange = (value) => {
        this.setState({selectedValue: value})
    }

    render () {
        return (
      <div>
          <RadioGroup
              name='fruit'
              selectedValue={this.state.selectedValue}
              onChange={this.handleChange}>
              <Radio value='apple' label='Apple' />
              <Radio value='orange' label='Orange' />
              <Radio value='watermelon' label='Watermelon' disabled />
          </RadioGroup>
          <br />
          <br />
          <RadioGroup
              name='fruit'
              selectedValue={this.state.selectedValue}
              onChange={this.handleChange}>
              <div>
                  <Radio value='apple' label='Apple' />
                  <FormTip inline>选定时间，提前7个自然日按照固定价格预定投放目标人群，尽可能完成你的曝光需求</FormTip>
              </div>
              <div>
                  <Radio value='orange' label='Orange' />
                  <FormTip inline>选定时间，提前7个自然日按照固定价格预定投放目标人群，尽可能完成你的曝光需求</FormTip>
              </div>
              <div>
                  <Radio value='watermelon' label='Watermelon' disabled />
                  <FormTip inline>选定时间，提前7个自然日按照固定价格预定投放目标人群，尽可能完成你的曝光需求</FormTip>
              </div>
          </RadioGroup>
      </div>
    )
    }
}

module.exports = Example
