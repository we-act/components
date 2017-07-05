import React, { Component } from 'react'
import Button from 'componentPath/basic/form/Button'
import Loading from 'componentPath/basic/icon/Loading'
import DemoCode from 'doc-components/DemoCode'

const markup1 = `
<Button>默认</Button>
<Button type="primary">主要</Button>
<Button disabled><Loading /> 默认</Button>
<Button type="danger">危险</Button>
<Button disabled>禁用</Button>
<Button type="danger" disabled>禁用2</Button>
`

class Demo extends Component {
    state = {
        disabled: false
    }
    clickBtn = () => {
        const loading = true
        this.setState({loading})
        console.log('clicked', this.state.loading)
    }
    render() {
        return (
            <div style={{padding: '100px'}}>
                <h1>Button 使用示范</h1>
                <br />

                <p>由于 less 有问题，a 标签的 button 和 `button` 标签的 button 高度不一样。</p>
                <p>具体是，a 标签的 button height 32px;  `button` 标签的 button 30px</p>
                <Button className='ui-mr-20'>默认</Button>
                <Button className='ui-mr-20' type='primary'>主要</Button>
                <Button className='ui-mr-20' type='danger'>危险</Button>
                <Button className='ui-mr-20' disabled>禁用</Button>
                <Button className='ui-mr-20' type='danger' disabled>禁用2</Button>
                <br />
                <br />

                <h2>加载中</h2>
                <Button className='ui-mr-20' disabled><Loading icon='size16' /> 默认</Button>
                <br />
                <br />

                <h2>点击按钮切换加载中</h2>
                <Button onClick={this.clickBtn} className='ui-mr-20' loading={this.state.loading}>
                    {this.state.loading ? '加载中' : '点击加载' }
                </Button>

                <br />
                <br />
                <DemoCode markup={markup1} />
                

                <br />
                <br />
                <h2>buttonTag</h2>

                默认 `a` tag 模式，显示 html <DemoCode markup={`<a/>`} /> 标签
                <br />

                props.buttonTag=true 时 `button` tag 模式，显示 html <DemoCode markup={`<button/>`} /> 标签
                <DemoCode markup={'<Button buttonTag>默认</Button>'} />
                <Button buttonTag className='ui-mr-20'>默认</Button>
                <Button buttonTag className='ui-mr-20' type='primary'>主要</Button>
                <Button buttonTag className='ui-mr-20' type='primary'>主要</Button>
                <Button buttonTag className='ui-mr-20' type='danger'>危险</Button>
                <Button buttonTag className='ui-mr-20' disabled>禁用</Button>
                <Button buttonTag className='ui-mr-20' type='danger' disabled>禁用2</Button>
            </div>
        )
    }
}

module.exports = Demo