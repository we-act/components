import DemoCode from 'doc-components/DemoCode'
import Button from 'componentPath/basic/form/Button'
import {
    HoverTip,
    Popover,
    PopoverConfirm,
    Msg,
    Tip,
    ButtonTip
} from 'componentPath/basic/tips'
import HighlightBox from 'componentPath/basic/tips/HighlightBox.js'

const buttons = [
    {
        label: '确定',
        type: 'primary',
        onClick: () => {
            console.log('确定')
        }
    },
    {
        label: '取消',
        type: 'default',
        onClick: () => {
            console.log('取消')
        }
    }
]

module.exports = () => {
    return (
        <div style={{padding: '100px', width: '800px'}}>
            <h1>各种提示使用示范</h1>
            <br />

            <h2>Popover</h2>
            <Popover style={{position: 'relative'}} show width='300'>默认样式</Popover>
            <Popover style={{position: 'relative'}} show buttons={buttons} width='300' arrowStyle={{right: '45px'}}>确定要下架这件商品吗？</Popover>
            <h3>contentCenter</h3>
            <Popover style={{position: 'relative'}} show buttons={buttons} width='300' arrowStyle={{left: '45px'}} contentCenter>确定要下架这件商品吗？</Popover>
            <Popover style={{position: 'relative'}} show buttons={buttons} width='300' arrow='center'>确定要下架这件商品吗？</Popover>
            <Popover style={{position: 'relative'}} show buttons={buttons} width='300' direction='bottom' arrow='center'>确定要下架这件商品吗？</Popover>
            <Popover style={{position: 'relative'}} show buttons={buttons} width='300' direction='left' arrow='center'>确定要下架这件商品吗？</Popover>
            <Popover style={{position: 'relative'}} show buttons={buttons} width='300' direction='right' arrow='center'>确定要下架这件商品吗？</Popover>
            <DemoCode markup={'<Popover buttons={buttons} width="300" arrowStyle="45px">确定要下架这件商品吗？</Popover>'} />
            <br />
            <br />
            <h2>PopoverConfirm</h2>
            <div>
                <PopoverConfirm show arrowStyle={{left: '45px'}} style={{left: '-46px', top: '13px', position: 'relative'}} width='270' onConfirm={(e) => console.log('confirm', e, e.stopPropagation)} onCancel={(e) => {
                        console.log('e.stopPropagation')
                        e.stopPropagation()
                        console.log('close')
                    }}>确定要下架这件商品吗？</PopoverConfirm>
            </div>
            <br />
            <br />
            <h2>HoverTip</h2>
            <div>
                <HoverTip className='asdf asdf23 asdfaosdfhwef' icon='quest'> quest
                    <Popover show arrowStyle={{left: '45px'}} style={{left: '-46px', top: '13px'}} width='200'>确定要下架这件商品吗？</Popover>
                </HoverTip>
            </div>
            <br />
            <br />
            <div>
                arrow <HoverTip icon='arrow'>
                    <Popover arrowStyle={{left: '45px'}} style={{left: '-46px', top: '13px'}} width='200'>确定要下架这件商品吗？</Popover>
                </HoverTip>
            </div>
            <br />
            <br />
            <div>
                <HoverTip>右边出现
                    <Popover direction='left' style={{ left: '46px', top: '-8px'}} width='200'>确定要下架这件商品吗？</Popover>
                </HoverTip>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <h2>Msg</h2>
            <h3>大图标</h3>
            <Msg type='success' title='消息标题'>内容内容内容内容内容内容</Msg>
            <DemoCode markup={`<Msg type='success' title='消息标题'>内容内容内容内容内容内容</Msg>`} />
            
            <Msg type='warn' title='消息标题'>内容内容内容内容内容内容</Msg>
            <DemoCode markup={`<Msg type='warn' title='消息标题'>内容内容内容内容内容内容</Msg>`} />

            <Msg type='info' title='消息标题'>内容内容内容内容内容内容</Msg>
            <h3>中图标居中</h3>
            <Msg type='success' size='medium' title='消息标题' center>内容内容内容内容内容内容</Msg>
            <DemoCode markup={`<Msg type='success' size='medium' title='消息标题' center>内容内容内容内容内容内容</Msg>`} />

            <br />
            <h3>小图标</h3>
            <Msg type='success' size='small'>内容内容内容内容内容内容</Msg>
            <DemoCode markup={`<Msg type='success' size='small'>内容内容内容内容内容内容</Msg>`} />

            <h3>小图标带背景(左右 15px padding)</h3>
            <Msg type='success' size='small' bgColor>内容内容内容内容内容内容</Msg>
            <DemoCode markup={'<Msg type="success" size="small"  bgColor>内容内容内容内容内容内容</Msg>'} />

            <br />
            <br />
            <br />
            <br />
            <br />

            <h2>Tip</h2>
            <Tip style={{position: 'static'}}>请输入正确的页码</Tip>
            <DemoCode markup={'<Tip>请输入正确的页码</Tip>'} />
            <br />
            <h3>success 态</h3>
            <Tip success style={{position: 'static'}}>页码输入正确</Tip>
            <DemoCode markup={'<Tip success>请输入正确的页码</Tip>'} />

            <br />
            <br />
            <br />
            <br />
            <br />

            <h2>ButtonTip</h2>
            <ButtonTip>大小：不超过2M，   格式：bmp, png, jpeg, jpg, gif</ButtonTip>
            <Button type='primary' className='ui-ml-10'>默认</Button>
            <br />
            <br />
            <Button type='primary' className='ui-mr-10'>默认</Button>
            <ButtonTip type='left'>大小：不超过2M，   格式：bmp, png, jpeg, jpg, gif</ButtonTip>

            <br />
            <br />
            <br />
            <br />
            <br />

            <h2>HighlightBox</h2>
            <br />
            <h3>1. 纯文本</h3>
            <HighlightBox descOnly desc='这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描述信息这里是描' />
            <br />
            <br />

            <h3>2.不带logo</h3>
            <HighlightBox noIcon btnDesc='按钮描述' title='标题' desc='描述息这里是描述信息这里是描述信息' />
            <br />
            <br />

            <h3>3.带logo</h3>
            <HighlightBox btnDesc='按钮描述' iconSrc='http://temp.im/48' title='标题' desc='描述息这里是描述信息这里是描述信息' />

        </div>
    )
}
