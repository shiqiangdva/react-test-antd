import React, {Component} from 'react';
import {Card, Button, Spin, Icon, Alert} from 'antd';
import './index.less';

export default class Loading extends Component{

    render(){

        const icon = <Icon type="loading" style={{fontSize:24}}/>;

        return(
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small"/>
                    <Spin style={{margin: "0 20px"}}/>
                    <Spin size="large"/>
                    <Spin indicator={icon} style={{marginLeft: 20}}/>
                </Card>

                <Card title="内容遮罩" className="card-wrap">
                    <Alert
                        message="React"
                        description="欢迎学习React相关技术!!!"
                        type="info"
                    />

                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎学习React相关技术!!!"
                            type="warning"
                        />
                    </Spin>

                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎学习React相关技术!!!"
                            type="warning"
                        />
                    </Spin>

                    <Spin indicator={icon}>
                        <Alert
                            message="React"
                            description="欢迎学习React相关技术!!!"
                            type="warning"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }

}