import React, {Component} from 'react'
import InstantSearch from 'componentPath/basic/form/InstantSearch'

class InstantSearchDemo extends Component {
    static defaultProps = {
        list: [
            '结果1',
            '结果2',
            '结果3',
            '结果32'
        ]
    }
    state = {
        searchValue: '',
        searchValue1: '',
        list: []
    }
    handleChange = (e) => {
        const _value = e.target.value
        this.setState({searchValue: _value})
    }
    handleChange1 = (e) => {
        const _value = e.target.value
        this.setState({searchValue1: _value})
        let newList = []
        if(_value){
            this.props.list.map((item, index) => {
                if(item.indexOf(_value) != -1){
                    const wordIndex = item.indexOf(_value)
                    const textBefore = item.slice(0, wordIndex);
                    const lastIndex = textBefore.length + _value.length
                    const textAfter = item.slice(lastIndex)
                    const newLine = <span value={item}>{textBefore}<span style={{color: "#459ae9"}}>{_value}</span>{textAfter}</span>
                    newList = newList.concat([newLine])
                }
            })
            if(newList.length === 0){
                newList = [<span className='ui-c-gray' value=''>无匹配项</span>]
            }
        }
        this.setState({
            list: newList
        });
    }
    handleCancel = (e) => {
        this.setState({searchValue: ''})
    }
    handleCancel1 = (e) => {
        this.setState({searchValue1: '', list: []})
    }
    handleListClick = (item) => {
        const newValue = item.props.value
        this.setState({
            list: []
        })
        this.setState({searchValue1: newValue})
    }
    render () {
        return (
            <div style={{width: '100%', padding: '30px'}}>

                <h2>search后不带list</h2>
                <InstantSearch value={this.state.searchValue}
                               onChange={this.handleChange}
                               onClick={this.handleCancel}
                               inputStyle={{width: '350px'}}
                               />


                <br />
                <br />
                <h2>search后带list</h2>
                <InstantSearch list={this.state.list}
                               value={this.state.searchValue1}
                               onChange={this.handleChange1}
                               onClick={this.handleCancel1}
                               onListClick= {this.handleListClick}
                               inputStyle={{width: '350px'}}
                    />
                <br />
                <br />
                <br />
            </div>

        )
    }
}

module.exports = <InstantSearchDemo />
