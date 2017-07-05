
import React, { PropTypes, Component } from 'react'
import { Router } from 'react-router'
import { render } from 'react-dom'

import './reset.css'
import 'componentPath/global.less'

class App extends Component {
    static propTypes = {
        history: PropTypes.object,
        routes: PropTypes.object
    }

    render () {
        const { history, routes } = this.props

        return (
            <Router history={history} children={routes} />
        )
    }

}

export default App
