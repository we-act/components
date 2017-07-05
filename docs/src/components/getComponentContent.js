import React, { Component } from 'react'

const getComponentContent2 = (PageHtmlComponent) => {
    // 动态载入组件
    let output
    try {
        if (PageHtmlComponent.prototype instanceof Component) {
            console.log('is react component')
            output = <PageHtmlComponent />
        }
        else if (PageHtmlComponent.$$typeof) {
            console.log('is react tags')
            output = PageHtmlComponent
        }
        else if (!PageHtmlComponent.$$typeof && typeof PageHtmlComponent === 'function') {
            console.log('is plain function')
            output = PageHtmlComponent()
        }
        else
            output = JSON.stringify(PageHtmlComponent)
    }
    catch (err) {
        console.error(err)
    }

    return output

}

export const getComponentContent = (path) => {
  const PageHtmlComponent = require('../../demo/' + path)
  const content = getComponentContent2(PageHtmlComponent)
  return content
}
