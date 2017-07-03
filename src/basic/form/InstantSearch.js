/**
 * Created by kathy on 24/02/17.
 */
import React, { Component } from 'react'
import classNames from 'classnames'
import "./textinput.less"
import "./search.less"
import './instantSearch.scss'
import styles from './instantSearch.scss'
import Icon from 'componentPath/basic/icon/Icon'

class InstantSearch extends Component {
  static defaultProps = {
    inputStyle: {}
  }
  render () {
    const {className, inputStyle, placeholder, list, value, onChange, onClick, onBlur, onListClick, ...others} = this.props
    const cls = classNames(className, 'mod-search-box_instant')
    const listStyle = {}
    if (inputStyle.width)
      listStyle.width = inputStyle.width + 66 + 'px'
    return (
        <div className={cls} {...others}>
          <div className='mod-search-box__btn' >
            <i className='mod-search-box__icon2'></i>
          </div>
          <input type='text'
                 style={inputStyle}
                 className='input mod-search-box__input'
                 placeholder={placeholder}
                 value={value}
                 onChange={onChange}
                 onBlur={onBlur}
              />
          {
            value && (value.length>0) && <Icon onClick={onClick} icon='cancel' className={styles.searchIcon} />
          }

          {list && list.length>0 && <ul className='mod-search-box__result-list' style={listStyle}>
            {/* */}
            {list.map((item, index) => {
              return <li key={index} onClick={(e) => {onListClick(item)}}>{item}</li>
            })}
          </ul>}
        </div>
    )
  }
}

module.exports = InstantSearch
