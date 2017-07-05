// import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {createHashHistory} from 'history'
import { useRouterHistory } from 'react-router'
import AppContainer from './src/App'

// ========================================================
// Browser History Setup
// ========================================================
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('app1')

let render = () => {
    const routes = require('./src/routes').default

    ReactDOM.render(
    <AppContainer
        history={appHistory}
        routes={routes}
    />,
    MOUNT_NODE
  )
}

// This code is excluded from production bundle
if (__DEV__) {
    if (module.hot) {
    // Development render functions
        const renderApp = render
        const renderError = (error) => {
            const RedBox = require('redbox-react').default

            ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
        }

    // Wrap render in try/catch
        render = () => {
            try {
                renderApp()
            } catch (error) {
                renderError(error)
            }
        }

    // Setup hot module replacement
        module.hot.accept('./src/routes', () => {
            setTimeout(() => {
                ReactDOM.unmountComponentAtNode(MOUNT_NODE)
                render()
            })
        })
    }
}

// ========================================================
// Go!
// ========================================================
render()
