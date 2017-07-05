import React, {Component} from 'react'
import SearchList from 'componentPath/mp/search-list/SearchList'
import {
    Button
} from 'componentPath/basic/form'

class SearchListDemo extends Component {

    state = {
        placeholder : "搜索省、市、行政区、商圈、地址",
        selectedResult : [
            // {
            //     name: "广州",
            //     range: false
            // },
            // {
            //     name: "一二三四五六七八九十一二三四五六七八九十",
            //     range: true,
            //     rangeDistance : "2.0"
            // }
        ],
        searchResult : [
            {
                name: "深圳市",
                price: "3000",
                description: "广东省",
                range: false
            },
            {
                name: "腾讯大厦",
                price: "300",
                description: "广东省深圳市南山区科技园科技中一路",
                range: true
            },
            {
                name: "深圳腾讯滨海大厦",
                price: "200",
                description: "广东省深圳市南山区",
                range: true
            },
            {
                name: "深圳腾讯计算机系统有限公司(飞亚达科技大厦)",
                price: "100",
                description: "广东省深圳市南山区五四路127信和广场12楼广东省深圳市南山区五四路127信和广场12楼",
                range: true
            },
            {
                name: "深圳腾讯计算机系统有限公司(飞亚达科技大厦)",
                price: "100",
                description: "广东省深圳市南山区五四路127信和广场12楼广东省深圳市南山区五四路127信和广场12楼",
                range: true
            }
        ]
    }

    selectChangeHandler = (selectedArray) => {
        console.log(selectedArray)
        return selectedArray
    }

    render () {
        const exampleStyle = {
        }

        const {placeholder, searchResult, selectedResult} = this.state

        return (
            <div style={{padding: '0 100px'}}>
                <h1>SearchList 示例</h1>
                <SearchList
                    placeholder={placeholder}
                    searchResult={searchResult}
                    selectedResult={selectedResult}
                    style = {exampleStyle} 
                    onSelectChange = {this.selectChangeHandler}
                />
            </div>
        )
    }
}

module.exports = SearchListDemo
