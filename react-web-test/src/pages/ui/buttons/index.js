import React, {Component} from 'react';
import {Button, Card, Icon, Radio} from 'antd';
import './index.less';

export default class Buttons extends Component {

    state = {
        loading: true,
        loadingText: '关闭',
        size: 'default'
    };

    handleCloseLoading = () => {
        if (this.state.loading) {
            this.setState({
                loading: false,
                loadingText: '开启'
            });
        } else {
            this.setState({
                loading: true,
                loadingText: '关闭'
            });
        }
    };

    handleButtonSize = (e)=> {
        this.setState({
            size: e.target.value
        });
    };

    render() {
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">我是按钮</Button>
                    <Button>我是按钮</Button>
                    <Button type="dashed">我是按钮</Button>
                    <Button type="danger">我是按钮</Button>
                    <Button disabled>我是按钮</Button>
                </Card>

                <Card title="图形按钮" className="card-wrap">
                    <Button icon='plus'>创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"/>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>

                <Card title="Loading按钮" className="card-wrap">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" loading={this.state.loading} shape="circle"/>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}/>
                    <Button type="primary" onClick={this.handleCloseLoading}>{this.state.loadingText}</Button>
                </Card>

                <Card title="按钮组" style={{marginBottom: 10}}>
                    <Button.Group>
                        {/*<Button type="primary" icon="left" style={{marginRight: 0}}>返回</Button>*/}
                        {/*<Button type="primary" icon="right">前进</Button>*/}
                        <Button type="primary">
                            <Icon type="left"/>
                            返回
                        </Button>
                        <Button type="primary">
                            前进
                            <Icon type="right"/>
                        </Button>
                    </Button.Group>
                </Card>

                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group value={this.state.size} onChange={this.handleButtonSize}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>

                    <Button type="primary" size={this.state.size}>按钮</Button>
                    <Button size={this.state.size}>按钮</Button>
                    <Button type="dashed" size={this.state.size}>按钮</Button>
                    <Button type="danger" size={this.state.size}>按钮</Button>
                </Card>

            </div>
        );
    }

}