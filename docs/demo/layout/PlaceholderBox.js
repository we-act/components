import {PlaceholderBoxTitle, PlaceholderBox} from 'componentPath/basic/layout'
import Loading from 'componentPath/basic/icon/Loading'
import DemoCode from 'doc-components/DemoCode'

module.exports = () => {
    return (
        <div style={{padding: '100px'}}>
            <h1>PlaceholderBox 使用示范</h1>
            <br />
            <h2>默认</h2>
            <PlaceholderBox>暂无数据</PlaceholderBox>
            <h2>无 border</h2>
            <PlaceholderBox noBorder>暂无数据</PlaceholderBox>
            <h2>bgColor Prop, 加载</h2>
            <PlaceholderBox bgColor='#F4F5F9' noBorder><Loading icon='size32' /><div className='ui-mt-20'>加载中</div></PlaceholderBox>
            <h2>表格中无 border</h2>
            <table style={{minWidth: '400px', border: '1px solid #aaa'}}>
                <thead>
                    <tr>
                        <th style={{border: '1px solid #aaa'}}>1</th>
                        <th style={{border: '1px solid #aaa'}}>2</th>
                        <th style={{border: '1px solid #aaa'}}>3</th>
                    </tr>
                </thead>
                <tbody>
                    <PlaceholderBox inTbody colSpan='3' height='200px' noBorder>暂无数据</PlaceholderBox>
                </tbody>
            </table>
        </div>
    )
}
