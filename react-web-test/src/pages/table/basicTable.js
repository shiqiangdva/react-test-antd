import React, {Component} from 'react';
import {Card, Table, Modal, Button, message} from 'antd';
import axios from './../../axios/index';
import TestUtils from "./test";
import Utils from './../../utils/utils';

export default class BasicTable extends Component {

    state = {
        dataSource2: []
    };

    params = {
        page: 1
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
        // 没鸟用
        dataSource.map((item, index)=>{
                return item.key = index
            }
        );

        this.setState({
            dataSource
        });

        this.request();
    }

    // 懂爱获取mock数据.xxxxxx
    request = () => {
        let _this = this;
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: this.params.page
                },
                // isShowLoading: false
            }
        }).then((res) => {
            if (res.code === 0) {
                res.result.list.map((item, index) => {
                    return item.key = index;
                });
                this.setState({
                    dataSource2: res.result.list,
                    selectedRowKeys: [],
                    selectedRows: null,
                    pagination: Utils.pagination(res, (current) => {
                        // todo
                        _this.params.page = current;
                        this.request();
                    })
                })
            }
        })
    };

    onRowClick = (record,index)=>{
        // console.log(record);
        // console.log(index);
        let selectKey = [index];
        Modal.info({
            title:'信息',
            content:`用户名：${record.userName},用户爱好：${record.interest}`
        });
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    };

    handleDelete = (() => {
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map((item) => {
            ids.push(item.id);
        });
        Modal.confirm({
            title: '删除提示',
            content: `您确认要删除这些数据么?${ids.join(',')}`,
            onOk: ()=>{
                message.success('删除成功');
                this.request();

            }
        })
    });

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
                render(state) {
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

        const selectedRowKeys = this.state.selectedRowKeys;
        console.log(selectedRowKeys);
        const rowSelection = {
            type:'radio',
            selectedRowKeys
        };

        const rowCheckSelection = {
            type:'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                let ids = [];
                selectedRows.map((item) => {
                    ids.push(item.id);
                });

                this.setState({
                    selectedRowKeys,
                    selectedIds: ids,
                    selectedRows
                })
            }
        };

        return (
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

                <Card title={"动态数据渲染表格-Mock"} style={{margin: "10px 0"}}>
                    <Table
                        // 带边框
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        // 不要分页
                        pagination={false}
                    />
                </Card>

                <Card title={"Mock-单选"} style={{margin: "10px 0"}}>
                    <Table
                        // 带边框
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record,index) => {
                            return {
                                onClick:()=>{
                                    this.onRowClick(record,index);
                                }
                            };
                        }}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        // 不要分页
                        pagination={false}
                    />
                </Card>

                <Card title={"Mock-复选"} style={{margin: "10px 0"}}>
                    <div>
                        <Button style={{marginBottom: 20}} onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table
                        // 带边框
                        bordered
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        // 不要分页
                        pagination={false}
                    />
                </Card>

                <Card title={"Mock-表格分页"} style={{margin: "10px 0"}}>
                    <Table
                        // 带边框
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        // 不要分页
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        )
    }

}