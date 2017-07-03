
import React, { Component } from 'react'
import classNames from 'classnames'
import Button from '../basic/form/Button_new'
import VerticalCenter from '../basic/layout/VerticalCenter'
import styles from './withModal.scss'

const DIALOG_HEADER_HEIGHT = 59
const DIALOG_FOOTER_HEIGHT = 75
const sizeList = {
    sn: {width: 520, height: 360},
    sw: {width: 640, height: 360},
    mn: {width: 840, height: 480},
    mw: {width: 960, height: 480},
    ln: {width: 840, height: 560},
    lw: {width: 960, height: 560},
    xl: {width: 960, height: 620}
}
Object.keys(sizeList).forEach((k) => {
    sizeList[k].height -= (DIALOG_HEADER_HEIGHT + DIALOG_FOOTER_HEIGHT)
})

// copy from bootstrap modal.js 3.3.7
const measureScrollbar = function () {
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    document.body.appendChild(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    document.body.removeChild(scrollDiv)
    return scrollbarWidth
}
const hasScrollbar = measureScrollbar()

const withModal = ({
    ModalContent, 
    renderBottomButtons
}, 
defaultProps = {
    headStyle: {},
    bodyStyle: {},
    width: null,
    height: null,
    title: '',
    // 不显示 footer
    noFooter: false,
    // 没有背景和 border-bottom 的 header
    plainHead: false
}) => {

    class InnerComponent extends Component {
        constructor(props) {
            super(props)

            const {show} = props
            if(show)
                this.toggleDocumentFix()
        }

        static propTypes = {
            close: React.PropTypes.func,
            buttons: React.PropTypes.array,
            show: React.PropTypes.bool,
            title: React.PropTypes.string,
            headStyle: React.PropTypes.object,
            bodyStyle: React.PropTypes.object,
            centerContent: React.PropTypes.bool
        }
        static defaultProps = {
            close: () => {},
            buttons: [],
            show: false,
            centerContent: false,
            ...defaultProps
        }

        componentWillUnmount = () => {
            this.toggleDocumentNormal()
        }
        
        shouldComponentUpdate(nextProps, nextState) {
            if (this.props.show !== nextProps.show) {
                this.toggleStyle(nextProps.show)
            }
            return true
        }

        getModalBodyScrollTop = () => {
            return this.refs.bodyScroll.scrollTop
        }

        getModalBodyScrollElement = () => {
            return this.refs.bodyScroll
        }

        toggleDocumentFix() {
            document.body.style.overflow = "hidden"
            if(hasScrollbar)
                document.body.style.paddingRight = hasScrollbar + "px"
            
        }

        toggleDocumentNormal() {
            setTimeout(() => {
                document.body.style.overflow = "auto"
                if(hasScrollbar)
                    document.body.style.paddingRight = "0"
            }, 100)
        }

        toggleStyle(show) {
            // console.log('show', show, this.props.title, new Date().getTime())
            if(show) {
                this.toggleDocumentFix()
            }
            else {
                this.toggleDocumentNormal()
            }
        }

        handleClick = (e) => {
            // console.log('handleClick', e)
            this.props.onClickOutside && this.props.onClickOutside(e)
        }

        handleClickContentRoot = (e) => {
            // console.log('stopPropagation', e)
            e.stopPropagation()
        }

        render () {
            const {
                size,
                title,
                buttons,
                close,
                width,
                height,
                show,
                className,
                headStyle,
                plainHead,
                noFooter,
                centerContent,
                ...others
            } = this.props

            let {bodyStyle} = this.props

            if(width)
                bodyStyle = Object.assign({}, bodyStyle, {width})
            if(height) {
                const heightCalculated = (noFooter ? 
                    height - DIALOG_HEADER_HEIGHT :
                    height - DIALOG_HEADER_HEIGHT - DIALOG_FOOTER_HEIGHT
                ) + 'px'
                bodyStyle = Object.assign({}, bodyStyle, {height: heightCalculated})
            }

            let children = <ModalContent {...this.props} />
            if(centerContent) {
                children = <VerticalCenter>{children}</VerticalCenter>
            }

            const cls = classNames({
                [styles.root]: true,
                [className]: className
            })

            if(size) {
                const thisSize = sizeList[size]
                const bodyScrollStyle = {
                    width: thisSize.width,
                    height: thisSize.height
                }
                children = <section ref='bodyScroll' className={styles.bodyScroll} style={bodyScrollStyle}>{children}</section>
            }

            // size 模式下 body 不要 padding
            const bodyCls = classNames(styles.body, {
                [styles.sizeMode]: size
            })

            return (
                <div 
                    onClick={this.handleClick} 
                    className={classNames({
                        [styles.wrap]: true,
                        [styles.show]: show
                    })}>
                    <div className={styles.tableLayout}>
                        <div className={styles.tableCellLayout}>
                            <div className={styles.inlineBlockLayout}>
                                <div 
                                    onClick={this.handleClickContentRoot} 
                                    className={cls}>

                                    <div className={styles.head} style={headStyle}>
                                        <span className={styles.head_title}>{title}</span>
                                        <i
                                            onClick={close} 
                                            className={styles.close} 
                                        >
                                            <svg 
                                                viewBox="0 0 16 16"
                                            >
                                                <title>关闭</title>
                                                <desc>关闭按钮</desc>
                                                <path d="M8 6.5L2.5 1 1 2.5 6.5 8 1 13.5 2.5 15 8 9.5l5.5 5.5 1.5-1.5L9.5 8 15 2.5 13.5 1 8 6.5z" />
                                                <path d="M0 0h16v16H0z" fill="none" />
                                            </svg>
                                        </i>
                                    </div>
                                    <div className={bodyCls} style={bodyStyle}>
                                        {children}
                                    </div>
                                    {!noFooter && <div className={styles.footer}>
                                        {renderBottomButtons(this.props)}
                                    </div>}
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return InnerComponent
}


export const renderModalButtons = (buttons) => {
    return buttons.map((btn, idx) => {
        const {type, label, ...others} = btn

        return (
            <Button className={styles.btn} key={idx} type={type} {...others}>{label}</Button>
        )
    })
}

export default withModal