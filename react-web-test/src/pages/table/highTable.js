import React, {Component} from 'react';
import {Card, Table, Modal, Button, message, Badge} from 'antd';
import axios from './../../axios/index';
import TestUtils from "./test";
import Utils from './../../utils/utils';

export default class HighTable extends Component {

    state = {

    };

    params = {
        page: 1
    };

    componentDidMount() {
        this.request();
    }

    handleChange =(pagination, filters, sorter) => {
        console.log(sorter);
        // if (sorter.order) {
            this.setState({
                sortOrder: sorter.order
            })
        // }
    };

    handleDelete = (item) => {
        let id = item.id;
        Modal.confirm({
            title: '确认',
            content: '确认删除么?',
            onOk: () => {
                message.success('删除成功!');
                this.request();
            }
        })
    };

    request = () => {
        let _this = this;
        axios.ajax({
            url: '/table/high/list',
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
                    dataSource: res.result.list,
                })
            }
        })
    };

    render() {

        // 表头
        const columns = [
            {
                title: 'id',
                width: 80,
                dataIndex: 'id',
                key: 'id'
            }, {
                title: '用户名',
                width: 80,
                dataIndex: 'userName',
                key: 'userName'
            }, {
                title: '性别',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女';
                },
                key: 'sex'
            }, {
                title: '状态',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    return TestUtils.config2[state];
                },
                key: 'state'
            }, {
                title: '爱好',
                width: 80,
                dataIndex: 'interest',
                key: 'interest',
                render(abc) {
                    return TestUtils.config[abc];
                }
            }, {
                title: '生日',
                width: 80,
                dataIndex: 'birthday',
                key: 'birthday'
            }, {
                title: '地址',
                width: 120,
                dataIndex: 'address',
                key: 'address'
            }, {
                title: '早起时间',
                width: 80,
                dataIndex: 'time',
                key: 'time'
            }

        ];

        const columns2 = [
            {
                title: 'id',
                width: 80,
                dataIndex: 'id',
                fixed: 'left',
                key: 'id'
            }, {
                title: '用户名',
                fixed: 'left',
                width: 80,
                dataIndex: 'userName',
                key: 'userName'
            }, {
                title: '性别',
                width: 80,
                dataIndex: 'sex',
                key: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女';
                }
            }, {
                title: '状态',
                width: 120,
                dataIndex: 'state',
                key: 'state',
                render(state) {
                    return TestUtils.config2[state];
                }
            }, {
                title: '状态',
                width: 120,
                dataIndex: 'state',
                key: 'state',
                render(state) {
                    return TestUtils.config2[state];
                }
            }, {
                title: '状态',
                width: 120,
                dataIndex: 'state',
                key: 'state',
                render(state) {
                    return TestUtils.config2[state];
                }
            }, {
                title: '状态',
                width: 120,
                dataIndex: 'state',
                key: 'state',
                render(state) {
                    return TestUtils.config2[state];
                }
            }, {
                title: '状态',
                width: 120,
                dataIndex: 'state',
                render(state) {
                    return TestUtils.config2[state];
                }
            }, {
                title: '状态',
                width: 120,
                dataIndex: 'state',
                key: 'state',
                render(state) {
                    return TestUtils.config2[state];
                }
            }, {
                title: '状态',
                width: 120,
                dataIndex: 'state',
                render(state) {
                    return TestUtils.config2[state];
                }
            }, {
                title: '状态',
                width: 120,
                dataIndex: 'state',
                key: 'state',
                render(state) {
                    return TestUtils.config2[state];
                }
            }, {
                title: '状态',
                width: 120,
                dataIndex: 'state',
                key: 'state',
                render(state) {
                    return TestUtils.config2[state];
                }
            }, {
                title: '状态',
                width: 120,
                dataIndex: 'state',
                render(state) {
                    return TestUtils.config2[state];
                }
            }, {
                title: '爱好',
                width: 80,
                dataIndex: 'interest',
                key: 'interest',
                render(abc) {
                    return TestUtils.config[abc];
                }
            }, {
                title: '生日',
                width: 80,
                dataIndex: 'birthday',
                key: 'birthday',
            }, {
                title: '地址',
                width: 80,
                dataIndex: 'address',
                key: 'address'
            }, {
                title: '早起时间',
                width: 80,
                dataIndex: 'time',
                fixed:"right",
                key: 'time'
            }

        ];

        const columns3 = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id'
            }, {
                title: '用户名',
                dataIndex: 'userName',
                key: 'userName'
            }, {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女';
                },
                key: 'sex'
            }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                sorter: (a, b) => {
                    return a.age - b.age;
                },
                sortOrder: this.state.sortOrder
            }, {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    return TestUtils.config2[state];
                },
                key: 'state'
            }, {
                title: '爱好',
                dataIndex: 'interest',
                render(abc) {
                    return TestUtils.config[abc];
                },
                key: 'interest'
            }, {
                title: '生日',
                dataIndex: 'birthday',
                key: 'birthday'
            }, {
                title: '地址',
                dataIndex: 'address',
                key: 'address'
            }, {
                title: '早起时间',
                dataIndex: 'time',
                key: 'time'
            }

        ];

        const columns4 = [
            {
                title: 'id',
                width: 80,
                dataIndex: 'id',
                key: 'id'
            }, {
                title: '用户名',
                width: 80,
                dataIndex: 'userName',
                key: 'userName'
            }, {
                title: '性别',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女';
                },
                key: 'sex'
            }, {
                title: '状态',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    return TestUtils.config2[state];
                },
                key: 'state',

            }, {
                title: '爱好',
                width: 80,
                dataIndex: 'interest',
                key: 'interest',
                render(abc) {
                    let config = {
                        '1': <Badge status={'success'} text={'成功'}/>,
                        '2': <Badge status={'error'} text={'报错'}/>,
                        '3': <Badge status={'default'} text={'正常'}/>,
                        '4': <Badge status={'processing'} text={'进行中'}/>,
                        '5': <Badge status={'warning'} text={'警告'}/>,
                        '6': <Badge status={'default'} text={'正常'}/>,
                        '7': <Badge status={'processing'} text={'进行中'}/>,
                        '8': <Badge status={'warning'} text={'警告'}/>
                    };
                    return config[abc];
                }
            }, {
                title: '生日',
                width: 80,
                dataIndex: 'birthday',
                key: 'birthday'
            }, {
                title: '地址',
                width: 120,
                dataIndex: 'address',
                key: 'address'
            }, {
                title: '操作',
                width: 60,
                render: (text, item) => {
                    return <Button size={'small'} onClick={() => this.handleDelete(item)}>删除</Button>
                }
            }

        ];

        return (
            <div>
                <Card title={"头部固定"}>
                    <Table
                        // 带边框
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        // 不要分页
                        pagination={false}
                        scroll={{y:240}}
                    />
                </Card>

                <Card title={"左侧固定"} style={{margin: "10px 0"}}>
                    <Table
                        // 带边框
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        // 不要分页
                        pagination={false}
                        scroll={{x:1800}}
                    />
                </Card>

                <Card title={"表格排序"} style={{margin: "10px 0"}}>
                    <Table
                        // 带边框
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        // 不要分页
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>

                <Card title={"操作按钮"} style={{margin: "10px 0"}}>
                    <Table
                        // 带边框
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        // 不要分页
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}