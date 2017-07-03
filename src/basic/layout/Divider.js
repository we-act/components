
import React from 'react'
import classNames from 'classnames'

// import 'lessFolder/mod-divider.less';

class Divider extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isCollapsed: props.isCollapsed
        }
    }
    componentWillReceiveProps (nextProps) {
        this.setState({isCollapsed: nextProps.isCollapsed})
    }
    handleClick () {
        const newValue = !this.state.isCollapsed
        this.setState({isCollapsed: newValue})
        this.props.onCollapseClick && this.props.onCollapseClick(newValue)
    }
    render () {
        const {
            childStyle,
            className,
            text,
            hasFolder,
            linkText,
            linkHref,
            rightLinkText,
            rightLinkHref,
            children,
            ...others} = this.props
        const isCollapsed = this.state.isCollapsed
        const iconClass = classNames({
            'icon': true,
            'mod-divider__up-triangle': !isCollapsed,
            'mod-divider__down-triangle': isCollapsed
        })
        let collapText
        if (!isCollapsed) {
            collapText = '收起'
        } else {
            collapText = '展开'
        }

        return (
            <div className={className} {...others}>
                <div className='mod-divider__header'>
                    {text}
                    {
                        linkText && (
                            <a href={linkHref || 'javascript:;'} className='ui-ml-10'>{linkText}</a>
                        )
                    }
                    {
                        hasFolder && (
                            <div className='mod-divider__folder' onClick={this.handleClick.bind(this)}>
                                <a href='javascript:void(0);' >{collapText}</a>
                                <i className={iconClass}>
                                </i>
                            </div>
                        )
                    }
                    {
                        rightLinkText && (
                            <a href={rightLinkHref || 'javascript:;'} className='ui-fl-r'>{rightLinkText}</a>
                        )
                    }
                </div>
                {!isCollapsed && (
                    <div style={childStyle}>{children}</div>
                )}
            </div>
        )
    }
};

Divider.defaultProps = {
    childStyle: {
        padding: '20px 30px'
    }
}

module.exports = Divider
