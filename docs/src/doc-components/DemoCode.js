
import React, { Component } from 'react'
import classNames from 'classnames'

// TODO: 一下两个文件可以单独提出有关 DemoCode 涉及的部分来
import './example.less'
import DemoScript from './js/index'

class DemoCode extends Component {
    componentDidMount () {
        DemoScript.init()
    }
    render () {
        return (
            <div className='result-code'>
                <pre>
                    <code className='language-jsx'>
                        {this.props.markup}
                    </code>
                </pre>
                {/* <div className="result-copy"> 复制
                    <div className="result-copy-notice">复制到剪切板</div>
                </div>*/}
            </div>
        )
    }
}

module.exports = DemoCode
