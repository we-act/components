import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../form/Button'
import IconMpKeyboardLeft from 'componentPath/svgicons/mp/IconMpKeyboardLeft'
import IconMpKeyboardRight from 'componentPath/svgicons/mp/IconMpKeyboardRight'
import IconMpTriangleLeft from 'componentPath/svgicons/mp/IconMpTriangleLeft'
import IconMpTriangleRight from 'componentPath/svgicons/mp/IconMpTriangleRight'
import styles from "./Pagination.scss"
import classNames from 'classnames'

class Pagination extends Component {

    displayName: 'Pagination'

    state = {
        countNumberWidth: ""
    }

    getTotalPageCount = () => {
        return Math.ceil(this.props.data.total / this.props.data.limit)
    }

    getCurrentPage = () => {
        // two ways to calculate current page
        let current_page = parseInt(this.props.data.currentPage)
        if (!current_page) {
            current_page = Math.ceil((this.props.data.offset + 1) / this.props.data.limit)
        }
        return current_page
    }

    handleKeyDown = (e) => {
        if(e.keyCode === 13) this.handleJump()
    }

    handleJump = () => {
        let jump = parseInt(this.refs.jump.value)
        if (jump == '' || isNaN(jump) || jump < 1) {
            return
        }

        const total_pages = this.getTotalPageCount()
        jump = jump > total_pages ? total_pages : jump
        this.gotoPage(jump)
        this.refs.jump.value = ''
    }

    gotoPage = (page) => {
        const current_page = this.getCurrentPage()
        if (page !== current_page)
            this.props.onChangePage(page)
    }

    componentDidMount = () => {
        if(this.refs.total_pages)
            this.setState({
                countNumberWidth: this.refs.total_pages.offsetWidth
            })
    }

    render () {
        if (!this.props.data)
            return (<div></div>)

        const current_page = this.getCurrentPage()
        const total_pages = this.getTotalPageCount()

        if (total_pages <= 1)
            return (<div></div>)

        const prev = (current_page - 1) < 1 ? 1 : (current_page - 1)
        const next = (current_page + 1) > total_pages ? total_pages : (current_page + 1)
        const {className, noClass, ...others} = this.props
        const cls = classNames('mod-pagination ', className, {
            'ui-fl-r ui-mt-large ui-mb-large': !(className || noClass)
        })

        let toFirst
        let toLast
        let toPrev
        let toNext

        if(this.props.small) {
            toFirst = <div 
                onClick={this.gotoPage.bind(null, 1)}
                className={styles.paginationIcon}
            >
                <svg viewBox="0 0 16 16" width="16" height="16">
                    <path transform="matrix(-1 0 0 1 18.007 0)" d="M8.825 8.178l.007-.007-4.596-4.595-1.06 1.06L6.717 8.18 3.175 11.72l1.06 1.062 4.597-4.596-.007-.008zm6 0l.007-.007-4.596-4.595-1.06 1.06 3.542 3.543-3.543 3.543 1.06 1.062 4.597-4.596-.007-.008z" />
                </svg>
            </div>

            toPrev = <div 
                onClick={this.gotoPage.bind(null, prev)}
                className={styles.paginationIcon}
            >
                <IconMpKeyboardLeft size="16" />
            </div>

            toNext = <div 
                onClick={this.gotoPage.bind(null, next)}
                className={styles.paginationIcon}
            >
                <IconMpKeyboardRight size="16" />
            </div>

            toLast = <div 
                onClick={this.gotoPage.bind(null, total_pages)}
                className={styles.paginationIcon}
                style={{marginRight: 0}}
            >
                <svg viewBox="0 0 16 16" width="16" height="16">
                    <path d="M8.825 8.178l.007-.007-4.596-4.595-1.06 1.06L6.717 8.18 3.175 11.72l1.06 1.062 4.597-4.596-.007-.008zm6 0l.007-.007-4.596-4.595-1.06 1.06 3.542 3.543-3.543 3.543 1.06 1.062 4.597-4.596-.007-.008z" />
                </svg>
            </div>

        }
        else if (!this.props.noJump) {
            toFirst = <Button size="small" onClick={this.gotoPage.bind(null, 1)} style={{ marginRight: "12px" }}>
                首页
            </Button>

            toPrev = <Button
                size="small" 
                onClick={this.gotoPage.bind(null, prev)}
                style={{ padding: "0px 8px"}} 
            >
                <IconMpTriangleLeft size="16" />
            </Button> 

            toNext = <Button
                size="small"
                onClick={this.gotoPage.bind(null, next)}
                style={{ padding: "0px 8px"}} 
            >
                <IconMpTriangleRight size="16" />
            </Button>

            toLast = <Button 
                style={{marginLeft: 12}}
                size="small" 
                onClick={this.gotoPage.bind(null, total_pages)}
            >
                尾页
            </Button>
        }
        else {
            toPrev = <Button
                size="small" 
                onClick={this.gotoPage.bind(null, prev)}
                style={{ padding: "0px 8px"}} 
            >
                <IconMpTriangleLeft size="16" />
            </Button> 

            toNext = <Button
                size="small"
                onClick={this.gotoPage.bind(null, next)}
                style={{ padding: "0px 8px"}} 
            >
                <IconMpTriangleRight size="16" />
            </Button>
        }

        return (
            <div className={this.props.noClass ? '' : [styles.pagination]}>
                <span className={styles.pages}>
                    {toFirst}
                    {toPrev}
                    <span 
                        className={classNames(styles.count, {
                            [styles.count_small]: this.props.small
                        })}
                    >
                        <label
                            style={{width: this.state.countNumberWidth}}
                        >{current_page}</label>
                        <label
                        style={{margin: this.props.small ? "0 4px" : 0}}
                        >/</label>
                        <label
                            style={{width: this.state.countNumberWidth}}
                         ref="total_pages">{total_pages}</label>
                    </span>
                    {toNext}
                    {toLast}
                    {
                        !this.props.noJump && !this.props.small && <span className={styles.jumper}>
                            <input ref='jump' type='text'
                                style={{height: 32, lineHeight: 32}}
                                onKeyDown={this.handleKeyDown}
                            />
                            <Button size="small" onClick={this.handleJump}>
                                跳转
                            </Button>
                        </span>
                    }
                </span>
            </div>
        )
    }
}

module.exports = Pagination
