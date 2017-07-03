import React, { Component } from 'react'
import styles from './BackNav.css';

const BackNav = (props) => {
    return (
        <div>
            <i className={styles.iconGoback} onClick={props.onClickBack} style={{'cursor':'pointer'}}></i>
            <a href="javascript:;" className="ui-c-gray" onClick={props.onClickBack}>{props.backName}</a> / {props.curName}
        </div>
    )
}

BackNav.propTypes = {
    onClickBack: React.PropTypes.func,
    backName: React.PropTypes.string,
    curName: React.PropTypes.string
}
BackNav.defaultProps = {
    backName: '返回',
    curName: '当前'
}

module.exports = BackNav