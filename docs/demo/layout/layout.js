import Button from 'componentPath/basic/form/Button'
import DemoCode from 'doc-components/DemoCode'
import DividingLine from 'componentPath/basic/layout/DividingLine'

const markup1 = `
<div>
  <span>基本色</span>
  <DividingLine/>
  <span>更多颜色</span>
</div>
`

module.exports = () => {
  return (
    <div style={{padding: '100px'}}>
      <h1>DividingLine 使用示范</h1>
      <br />

      <div style={{fontSize: '13px'}}>
        <span>基本色</span>
        <DividingLine/>
        <span>更多颜色</span>
      </div>
      <DemoCode markup={markup1} />
    </div>
  )
}
