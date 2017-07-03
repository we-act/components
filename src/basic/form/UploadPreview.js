import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'
import styles from './UploadPreview.scss'
import Icon from 'componentPath/basic/icon/Icon.js'

class UploadPreview extends Component {
    constructor (props) {
        super(props)
    }
    handleDeleteImage (i, e) {
        e.preventDefault()
        e.stopPropagation()
        this.props.deleteImage(i)
    }

    render () {
        const {options, deleteImage, className, onlyPreview, ...others} = this.props

        const items = options && options.length && options.map((item, i) => {
            if (item.imageUrl) {
                return (
              <div key={i + item.imageUrl} className={styles.imgWrp} style={{backgroundImage: 'url(' + (item.imageUrl||'http://temp.im/100x100') + ')'}}>
                <a className={styles.imgOpr} onClick={this.handleDeleteImage.bind(this, i)}>
                  <Icon style={{verticalAlign: '-20px'}} icon='bin' />
                </a>
              </div>
            )
            } else {
                return (
              <div key={i + item.imageUrl} className={styles.uploadWrp}>
                <i className={styles.add}></i>
                <div id={item.id} style={{position: 'absolute'}}>
                  <div style={{width: 100, height: 100}}></div>
                </div>
              </div>
            )
            }
        })

        return (
            <div className={classNames(styles.wrp, className)} {...others}>
              {items}
            </div>
        )
    }
}

module.exports = UploadPreview
