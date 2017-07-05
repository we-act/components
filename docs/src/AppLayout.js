import React from 'react'
import {Menu, getMenuData} from './components/menu'
// import Header from '../../components/Header'
import './app.less'
// import '../../styles/core.scss'

const renderMenu = (routes) => {
  // console.log(menuData, routes)
  let prop = {
      listData: getMenuData(),
      pathPrefix: 'component'
  }
  return <div>
    <Menu {...prop} />
  </div>
}

export const getMenuPath = (menuRoute) => {

}

export const CoreLayout = ({ children, routes }) => (
  <div className='body'>
    {/*<div className='mod-frame__head app1-top-nav' id='a-top-nav'>
        menu
    </div>*/}

    <div className=''>
      <div id="docs-menu" className='sidebar'>
        {renderMenu(routes)}
      </div>
    
      <div className='app1-content'>{children || 'baba'}</div>
    </div>
  </div>
)

CoreLayout.propTypes = {
    children: React.PropTypes.element
}

export default CoreLayout
