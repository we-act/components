import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'
import styles from "./Dropdown.scss"

class Dropdown extends Component {
    static propTypes = {
        disabled: React.PropTypes.bool,
        options: React.PropTypes.array
    }
    static defaultProps = {
        options: [],
        value: '',
        cancelLabel: '',
        defaultLabel: "请选择"
    }
    state = {
        show: this.props.initialShow,
        hash: Math.random().toString(36).substring(3, 8)
    }

    componentDidMount = () => {
        top.addEventListener('click', this.hideMenu)
    }

    componentWillUnmount = () => {
        top.removeEventListener('click', this.hideMenu)
    }

    hideMenu = (e) => {
        const thisHash = e.target.getAttribute('data-dropdown-hash')
        if (thisHash === this.state.hash) {
            this.toggleState(e)
        }
        else if (this.state.show) {
            this.setState({show: false})
        }
    }

    toggleState = (e) => {
        if (this.props.disabled)
            return
        this.setState({show: !this.state.show})
    }

    handleClick = (e) => {
        if (this.props.disabled)
            return
        this.props.onClick && this.props.onClick(e)
        this.toggleState(e)
        e.stopPropagation()
    }

    handleWheel = (e) => {
        const _this = e.currentTarget
        const scrollTop = _this.scrollTop
        const scrollHeight = _this.scrollHeight
        const height = _this.clientHeight
        const delta = e.deltaY
        // const delta = (event.wheelDelta) ? event.wheelDelta : -(event.detail || 0)
        // 这一句是原生获取 delta 的写法，
        // React Wheel Events 让我们不用考虑兼容性，可以通过 e.deltaY 直接拿到，
        // 然而这个值 和 原生的 delta 是相反数，因此以下的 < > 号及 -1 * ，均与原生情况相反。

        if(delta > 0 && scrollHeight - height - scrollTop <= delta) {
            _this.scrollTop = scrollHeight
            e.preventDefault()
        }
        else if(delta < 0 && scrollTop <= -1 * delta) {
            _this.scrollTop = 0
            e.preventDefault()
        }
    }

    changeLabel = (e, index, opt) => {
        if (this.props.disabled)
            return

        this.setState({show: false})
        this.props.onChange && this.props.onChange(e, index, opt)
    }

    renderUlContent () {
        let ulContent
        if (this.props.options.length) {
            const ul = this.props.options.map((opt, i) => {
                return (
                    <li role="option" className={styles.list_item} key={i}>
                        <a key={i} href='javascript:;' value={opt.value} onClick={(e) => this.changeLabel(e, i, opt)}>{opt.label}</a>
                    </li>
                )
            })
            // 取消 Label
            const {cancelLabel} = this.props
            if (cancelLabel !== '') {
                ulContent = [
                    <li role="option" className={styles.list_item} key={-1}>
                        <a key={-1} href='javascript:;' value='' onClick={(e) => this.changeLabel(e, -1, {value: '', label: cancelLabel})}>{cancelLabel}</a>
                    </li>,
                    ul
                ]
            }
            else
                ulContent = ul
        }
        else {
            ulContent = <li role="option" className={styles.list_item}>
                <a href='javascript:;'>正在加载</a>
            </li>
        }
        return ulContent
    }

    render () {
        const {
            // ignore some props in others
            cancelLabel,
            defaultLabel,
            value,
            initialShow,
            left, onChange, onClick, right, disabled, options, className, children, ...others} = this.props

        let label = ''
        if (options.length) {
            options.find((o) => {
                if (o.value === value)
                    label = o.label
            })
        }
        // 如果没传值进来
        if (!label)
            label = defaultLabel

        const hashAttr = {
            'data-dropdown-hash': this.state.hash
        }

        // TODO: 没有同步修改 infoHead
        if (this.props.type === 'infoHead') {
            let ulContent
            let cls = classNames(className, 'mod-infobox__head-dropdown', {
                'mod-infobox__head-dropdown_left': left,
                'mod-infobox__head-dropdown_right': right,
                'mod-infobox__head-dropdown_down': this.state.show
            })
            ulContent = options.map((opt, i) => {
                return (
                    <li role="option" key={i}>
                        <a href='javascript:;' value={opt.value} onClick={(e) => this.changeLabel(e, i, opt)}>{opt.label}</a>
                    </li>
                )
            })
            return (
                <div {...hashAttr} className={cls} {...others}>
                    <a onClick={this.handleClick} {...hashAttr} href='javascript:;' className='mod-infobox__head-dropdown-content' style={{'paddingLeft': '20px'}}>
                        {this.state.label}
                        <i {...hashAttr} className='icon mod-infobox__icon-arrow-down'></i>
                    </a>
                    <ul className='mod-infobox__dropdown-list'>
                        {ulContent}
                    </ul>
                </div>
            )
        } else {
            let cls = classNames(className, {
                [styles.menu]: true,
                [styles.disabled]: disabled,
                [styles.show]: this.state.show
            })
            return (
                <div role="listbox" {...hashAttr} className={cls} {...others}>
                    <a onClick={this.handleClick} {...hashAttr} href='javascript:;' className={styles.switch} >
                        {label}
                        <svg
                            className={styles.icon}
                            {...hashAttr} 
                            viewBox="0 0 16 16" 
                        >
                            <path transform="matrix(1 0 0 -1 0 17)" d="M7.64 6.36c.2-.2.515-.205.72 0l3.934 3.934c.39.39.25.706-.29.706h-8.01c-.548 0-.68-.313-.288-.706L7.64 6.36z" />
                        </svg>                       
                    </a>
                    <ul className={styles.list}
                        onWheel={this.handleWheel}
                    >
                        {this.renderUlContent()}
                    </ul>
                </div>
            )
        }
    }
}
module.exports = Dropdown
