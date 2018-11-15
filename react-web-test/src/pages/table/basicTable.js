import React, {Component} from 'react';
import {Card, Table} from 'antd';

export default class BasicTable extends Component {

    state = {};

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

    }

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
                dataIndex: 'sex'
            }, {
                title: '状态',
                dataIndex: 'state'
            }, {
                title: '爱好',
                dataIndex: 'interest'
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
                <Card>
                    <Table
                        // 带边框
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        // 不要分页
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }

}