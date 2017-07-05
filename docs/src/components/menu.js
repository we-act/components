
import React, { Component } from 'react'
import { Link } from 'react-router'
import menuData2 from '../../menu.json'

export const menuData = menuData2

export const getMenuData = () => {
    return menuData2
}

export const getComponentPathByUrl = (url) => {
    return url.split('——').join('/')
}

export const getComponentUrlByPath = (path) => {
    return path.split('/').join('——')
}

// export const getComponentByMenu = (menu) => {
//     const menuItem = menuData2.find((o) => o.path === menu[0])
//     const componentItem = menuItem.children.find((o) => o.name === menu[0] + '————' + menu[1])
//     // const PageHtmlComponent = require('../docs/' + componentItem.path)
//     // const output = getComponentContent(PageHtmlComponent)
// }

const getFolderList = function (base, thisFolder) {
    let folderList
    const fafafa = function (base, breadcrumbPath) {
        base.map((item, index) => {
            // console.log('item', item.name)
            if (item.name === breadcrumbPath[0]) {
                if (breadcrumbPath.length === 1) {
                    // console.log('end', breadcrumbPath)
                    folderList = item.children
                }
                else {
                    breadcrumbPath.shift()
                    fafafa(item.children, breadcrumbPath)
                }
            }
        })
    }
    fafafa(base, thisFolder)
    return folderList
}

export class Menu extends Component {

    renderItemHtml (item, index, childrenLength) {
        const prefix = childrenLength ? '/' + this.props.pathPrefix + 'Folder/' : '/' + this.props.pathPrefix + '/'
        const cls = childrenLength ? 'app1-pagefile-list-folder' : null

        const optional = {}
        let content = item.name
        if (!childrenLength) {
            content = <Link to={`${prefix}${getComponentUrlByPath(item.path)}`} {...optional}>{item.name}</Link>
        }
        return (<div key={index} className={cls}>
            {content} <span> {childrenLength}</span>
        </div>)
    }

    mapChildren (pageChildren) {
        return pageChildren.map((item, index) => {
          const hasChildren = item.children && item.children.length
          return (<li key={index}>
              {this.renderItemHtml(item, index, hasChildren ? item.children.length : '')}
              {hasChildren && <ul style={{marginBottom: '20px'}} key={index+'children'}>
                  {this.mapChildren(item.children)}
              </ul>}
          </li>)
        })
    }

    render () {
        let base = this.props.listData

        let html = this.mapChildren(base)

        return (
            <div className='app1-pagefile-list-body'>
                <ul>{html}</ul>
            </div>
        )
    }
}
