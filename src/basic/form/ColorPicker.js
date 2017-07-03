import React, { Component, PropTypes } from 'react'
import { TwitterPicker } from '../../react-color'
import CSSModules from 'react-css-modules'
import styles from './ColorPicker.scss'

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: ''
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  }

  handleChange = (color) => {
    this.props.onChange(color)
  }

  render() {
    const {popoverPositionFromOutside, color, showAdvanced } = this.props
    let borderColor = color
    if(borderColor.toLowerCase() === '#ffffff') {
      borderColor = '#E4E6EB'
    }

    let popoverStyle = popoverPositionFromOutside ? popoverPositionFromOutside : {}
    const position = popoverPositionFromOutside ? '' : 'relative'

    return (
      <div style={{position}}>
        <div styleName='swatch' onClick={ this.handleClick }>
          <div styleName='color' style={{backgroundColor: color, borderColor}} />
        </div>
        { this.state.displayColorPicker ? <div styleName='popover' style={popoverStyle}>
          <div styleName='cover' onClick={ this.handleClose }/>
          <TwitterPicker showAdvanced={showAdvanced} color={ color } onChange={ this.handleChange } />
        </div> : null }

      </div>
    )
  }
}

export default CSSModules(ColorPicker, styles, {allowMultiple: true})
