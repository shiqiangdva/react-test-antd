import React, {Component} from 'react';
import {Card, Button, notification} from 'antd';
import './index.less';

export default class Notice extends Component{

    openNotification = (type, direction) => {
        if (direction) {
            notification.config({
                placement: direction
            });
        }
        notification[type]({
            message: '发工资了',
            description: '上个月考勤22天,迟到20天, 实发工资20000元.'
        });
    };

    render() {
        return(
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNotification('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.openNotification('error')}>Error</Button>
                    <Button type="primary" onClick={() => this.openNotification('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning')}>Warning</Button>
                </Card>

                <Card title="控制位置的提醒框" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNotification('success', 'topLeft')}>Success</Button>
                    <Button type="primary" onClick={() => this.openNotification('error', 'topRight')}>Error</Button>
                    <Button type="primary" onClick={() => this.openNotification('info', 'bottomLeft')}>Info</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning', 'bottomRight')}>Warning</Button>
                </Card>
            </div>
        )
    }

}