
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import {Menu, getMenuData, getComponentPathByUrl} from '../components/menu'
import {getComponentContent} from '../components/getComponentContent'

class ComponentPage extends Component {
  renderItem = () => {
    return ''
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
  renderContent = () => {
    const filePath = this.getFilePath()

    // 动态载入组件
    const output = getComponentContent(filePath)

    return output
  }

  getFilePath = () => {
    let breadcrumbPath = ''
    if (this.props.params && this.props.params.ComponentPagePath) {
        const paramPage = this.props.params.ComponentPagePath
        breadcrumbPath = getComponentPathByUrl(paramPage)
        // document.title = breadcrumbPath.slice(0).reverse().join('——').replace('.js', '')
    }
    return breadcrumbPath
  }

  render () {
    return (
      <div>{this.renderContent()}</div>
    )
  }
}

export default ComponentPage
