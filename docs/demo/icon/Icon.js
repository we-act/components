import Icon from 'componentPath/basic/icon/Icon'
import Loading from 'componentPath/basic/icon/Loading'
import BorderArrow from 'componentPath/basic/icon/BorderArrow'
import DemoCode from 'doc-components/DemoCode'
import styles from './style.scss'

module.exports = () => {
    return (
        <div style={{padding: '100px'}}>
            <h1>Icon table</h1>
            <br />
            <table className={styles.table}>
                <tr>
                    <td>
                        <Icon icon='bin' />
                        <br />
                        bin
                    </td>
                    <td>
                        <Icon icon='clock' />
                        <br />
                        clock
                    </td>
                    <td>
                        <Icon icon='cancel' />
                        <br />
                        cancel
                    </td>
                </tr>
            </table>
            <br />
            <br />
            <br />

            <h1>Icon 使用示范</h1>
            <br />

            <div>
                <Icon icon='clock' className='ui-mr-5' />文案
                <DemoCode markup={'<Icon icon=\'clock\' className=\'ui-mr-5\'/>文案'} />
            </div>
            <br />
            <br />

            <h1>BorderArrow 使用示范</h1>
            <br />
            <div>
                <BorderArrow direction='left' />
                <DemoCode markup={'<BorderArrow direction=\'left\'/>'} />
                <BorderArrow direction='right' />
                <DemoCode markup={'<BorderArrow direction=\'right\'/>'} />
                <BorderArrow direction='top' />
                <DemoCode markup={'<BorderArrow direction=\'top\'/>'} />
                <BorderArrow direction='bottom' />
                <DemoCode markup={'<BorderArrow direction=\'bottom\'/>'} />
                <BorderArrow color='red' direction='left' />
                <DemoCode markup={'<BorderArrow color=\'red\' direction=\'left\'/>'} />
                <BorderArrow color='#999' size='20px' />
                <DemoCode markup={'<BorderArrow color=\'#999\' size=\'20px\'/>'} />
                <BorderArrow color='#aaa' size='10px' direction='top' />
                <DemoCode markup={'<BorderArrow color=\'#aaa\' size=\'10px\' direction=\'top\'/>'} />
                <BorderArrow color='blue' direction='bottom' />
                <DemoCode markup={'<BorderArrow color=\'blue\' direction=\'bottom\'/>'} />
            </div>

            <h1>Loading 使用示范</h1>
            <br />
            <div>
               加载中 <Loading />
               <DemoCode markup={'加载中 <Loading/>'} />
            </div>
            <br />
            <div style={{lineHeight: '32px'}}>
               加载中 <Loading icon='size32' />
               <DemoCode markup={'加载中 <Loading icon=\'size32\'/>'} />
            </div>
        </div>
    )
}
