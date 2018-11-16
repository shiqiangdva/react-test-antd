import React, {Component} from 'react';
import {Card, Table} from 'antd';
import axios from './../../axios/index';
import TestUtils from "./test";

export default class BasicTable extends Component {

    state = {
        dataSource2: []
    };

    componentDidMount() {
        const dataSource = [
            {
                id: '0',
                userName: 'Kevin0',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '1993-11-26',
                address: '大连市沙河口区',
                time: '09:00'
            }, {
                id: '1',
                userName: 'Kevin1',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '1993-11-26',
                address: '大连市沙河口区',
                time: '09:00'
            }, {
                id: '2',
                userName: 'Kevin2',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '1993-11-26',
                address: '大连市沙河口区',
                time: '09:00'
            },
        ];

        this.setState({
            dataSource
        });

        this.request();
    }

    // 懂爱获取mock数据
    request = ()=>{
        axios.ajax({
            url:'/table/list',
            data: {
                params: {
                    page: 1
                },
                // isShowLoading: false
            }
        }).then((res) => {
            if (res.code === 0) {
                this.setState({
                    dataSource2: res.result.list
                })
            }
        })
    };

    render() {
        // 表头
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            }, {
                title: '用户名',
                dataIndex: 'userName'
            }, {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女';
                }
            }, {
                title: '状态',
                dataIndex: 'state',
                render(state){
                    // let config  = {
                    //     '1':'咸鱼一条',
                    //     '2':'风华浪子',
                    //     '3':'北大才子',
                    //     '4':'百度FE',
                    //     '5':'创业者'
                    // };
                    return TestUtils.config2[state];
                }
            }, {
                title: '爱好',
                dataIndex: 'interest',
                render(abc) {
                    // let config = {
                    //     '1': '游泳',
                    //     '2': '打篮球',
                    //     '3': '踢足球',
                    //     '4': '跑步',
                    //     '5': '爬山',
                    //     '6': '骑行',
                    //     '7': '桌球',
                    //     '8': '麦霸'
                    // };
                    return TestUtils.config[abc];
                }
            }, {
                title: '生日',
                dataIndex: 'birthday'
            }, {
                title: '地址',
                dataIndex: 'address'
            }, {
                title: '早起时间',
                dataIndex: 'time'
            }

        ];

        return(
            <div>
                <Card title={"基础表格"}>
                    <Table
                        // 带边框
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        // 不要分页
                        pagination={false}
                    />
                </Card>

                <Card title={"动态数据渲染表格"} style={{margin: "10px 0"}}>
                    <Table
                        // 带边框
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        // 不要分页
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }

}