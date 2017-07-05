
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import {getMenuData, getComponentPathByUrl} from '../components/menu'
import {getComponentContent} from '../components/getComponentContent'

class IndexPage extends Component {
  renderItem = () => {
    return '请看 mpa repo 源代码'
    return getMenuData().map((item, index) => {
      const hasChildren = item.children && item.children.length
      let output
      if(hasChildren) {
        output = item.children.map((subItem, idx) => {
          const content = getComponentContent(subItem.path)
          return content
        })
      }
      else
        output = ''
      return output
    })
  }

  render () {
    return (
      <div>{this.renderItem()}</div>
    )
  }
}

export default IndexPage
