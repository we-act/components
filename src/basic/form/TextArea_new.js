
import React, { Component } from 'react'
import classNames from 'classnames'
import {getFormatStrLeng} from '../../utils'

import styles from "./TextArea_new.scss"

class TextArea extends Component {
    handleChange = (e) => {
        const val = e.target.value
        e.preventDefault()
        e.stopPropagation()
        this.props.onChange(val)
    }

    render () {
        const {
          value,
          width, height, limit, outsideLimit, rightLimit, placeholder, className, children, ...others} = this.props

        const styleTextarea = {
            width: width,
            height: height
        }
        let numString = ''
        let limitStyle = {
          position: 'absolute',
          bottom: '1px',
          right: '5px',
          textAlign: 'right',
          backgroundColor: '#fff'
        }
        if (limit) {
            const num = value ? getFormatStrLeng(value) : 0
            numString = num + '/' + limit
            styleTextarea.paddingBottom = '26px'
            limitStyle.color = num <= limit ? '#9a9ca1' : '#f24d4d'
        }

        if(outsideLimit){
            limitStyle.right = '0'
            limitStyle.bottom = '-26px'
            styleTextarea.paddingBottom = '5px'
        }
        if(rightLimit){
            limitStyle.position = 'static'
            limitStyle.verticalAlign = 'bottom'
            limitStyle.marginLeft = '10px'
        }
        return (
          <div className={className} {...others} style={{position: 'relative',width: width}}>
              <textarea className={styles.textarea}
                  value={value}
                  onChange={this.handleChange.bind(this)}
                  placeholder={placeholder}
                  style={styleTextarea} />
              {
                  limit && (
                      <span style={limitStyle}>
                          {numString}
                      </span>
                  )
              }
          </div>
        )
    }
}

module.exports = TextArea
