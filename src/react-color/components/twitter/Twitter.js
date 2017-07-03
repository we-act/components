import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'
import CSSModules from 'react-css-modules'

import DividingLine from '../../../basic/layout/DividingLine'

import styles from './Twitter.scss'
import colorHelper from '../../helpers/color'
import colors from './colors'

import { EditableInput, Swatch, ColorWrap, Saturation, Hue } from '../common'

const ChromePointer = () => {
  return (
    <div className={ styles.pickerChromePointer } />
  )
}

const ChromePointerCircle = () => {
  return (
    <div className={ styles.pickerChromePointerCircle } />
  )
}

class Twitter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showAdvanced: props.showAdvanced
    }
  }
  handleClick = (type) => {
    this.setState({
      showAdvanced: type === 'advanced'
    })
  }
  render() {
    const { disableAlpha, rgb, hsl, hsv, hex, renderers,
      color, onChange, colors, width, triangle 
    } = this.props
    const {showAdvanced} = this.state

    const thisStyles = reactCSS({
      'default': {
        label: {
          fontSize: '18px',
          color: '#fff',
        },
        triangle: {
          width: '0px',
          height: '0px',
          borderStyle: 'solid',
          borderWidth: '0 5px 6px 5px',
          borderColor: 'transparent transparent #fff transparent',
          position: 'absolute',
        },
        triangleShadow: {
          width: '0px',
          height: '0px',
          borderStyle: 'solid',
          borderWidth: '0 5px 6px 5px',
          borderColor: 'transparent transparent #C9CCD1 transparent',
          position: 'absolute',
        },
        hash: {
          background: '#F0F0F0',
          height: '16px',
          width: '16px',
          float: 'left',
          color: '#98A1A4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textIndent: '-400em',
          marginTop: '3px',
          marginRight: '8px',
          border: '1px solid #F0F0F0'
        },
        input: {
          width: '143px',
          fontSize: '14px',
          color: '#9A9CA1',
          border: '0px',
          outline: 'none',
          height: '24px',
          boxShadow: 'inset 0 0 0 1px #E4E6EB',
          borderRadius: '0 2px 2px 0',
          float: 'left',
          paddingLeft: '8px',
        },
        swatch: {
          width: '16px',
          height: '16px',
          float: 'left',
          borderRadius: '0px',
          boxSizing: 'border-box',
          margin: '0 4px 4px 0',
        },
        clear: {
          clear: 'both',
        },
        saturationWrap: {
          width: '140px',
          height: '104px',
          position: 'relative',
          marginRight: '12px',
          marginBottom: '10px',
          borderRadius: '2px 2px 0 0',
          float: 'left',
          overflow: 'hidden',
        },
        Saturation: {
          radius: '2px 2px 0 0',
        },
        hueWrap: {
          height: '104px',
          width: '12px',
          float: 'left',
          position: 'relative',
        },
        Hue: {
          radius: '2px',
        },
      },
      'hide-triangle': {
        triangle: {
          display: 'none',
        },
        triangleShadow: {
          display: 'none',
        },
      },
      'top-left-triangle': {
        triangle: {
          top: '-5px',
          left: '36px',
        },
        triangleShadow: {
          top: '-7px',
          left: '36px',
        },
      },
      'top-right-triangle': {
        triangle: {
          top: '-5px',
          right: '36px',
        },
        triangleShadow: {
          top: '-7px',
          right: '36px',
        },
      },
    }, {
      'hide-triangle': triangle === 'hide',
      'top-left-triangle': triangle === 'top-left',
      'top-right-triangle': triangle === 'top-right',
    })
    const handleChange = (hex, e) => {
      colorHelper.isValidHex(hex) && onChange({
        hex,
        source: 'hex',
      }, e)
    }
    const renderSwatch = () => {
      return map(colors, (c, i) => {
        return (
          <Swatch
            key={ i }
            color={ c }
            hex={ c }
            style={ Object.assign({}, thisStyles.swatch, {border: i === 0 ? '1px solid #E4E6EB' : 'none'}) }
            onClick={ handleChange }
          />
        )
      })
    }

    const renderHue = () => {
      return  <div>
        <div className='saturationWrap' style={ thisStyles.saturationWrap }>
          <Saturation
            className='saturation'
            style={ thisStyles.Saturation }
            hsl={ hsl }
            hsv={ hsv }
            pointer={ ChromePointerCircle }
            onChange={ onChange }
          />
        </div>
        <div className='hueWrap' style={ thisStyles.hueWrap }>
          <Hue
            className='hue'
            direction="vertical"
            style={ thisStyles.Hue }
            hsl={ hsl }
            pointer={ ChromePointer }
            onChange={ onChange }
          />
        </div>
      </div>
    }

    let content
    if(showAdvanced)
      content = renderHue()
    else
      content = renderSwatch()

    let borderColor = color
    if(borderColor.toLowerCase() === '#ffffff') {
      borderColor = '#E4E6EB'
    }

    return (
      <div styleName='card'>
        <div style={ thisStyles.triangleShadow } />
        <div style={ thisStyles.triangle } />

        <div styleName='body'>
          <div styleName='tab'>
            <span onClick={this.handleClick.bind(this, 'basic')} className={!showAdvanced ? styles.active : ''}>基本色</span>
            <DividingLine/>
            <span onClick={this.handleClick.bind(this, 'advanced')} className={showAdvanced ? styles.active : ''}>更多颜色</span>
          </div>
          <div className='ui-clearfix' style={{paddingBottom: '16px'}}>
            {content}
          </div>
          <div style={ Object.assign({}, thisStyles.hash, {backgroundColor: color, borderColor}) }>#</div>
          <EditableInput
            placeholder="ff691f"
            style={{ input: thisStyles.input }}
            value=""
            onChange={ handleChange }
          />
          <div style={ thisStyles.clear } />
        </div>
      </div>
    )
  }
}

Twitter.defaultProps = {
  colors,
  triangle: 'top-left',
}

const TwitterWithCssModules = CSSModules(Twitter, styles, {allowMultiple: true})
export default ColorWrap(TwitterWithCssModules)