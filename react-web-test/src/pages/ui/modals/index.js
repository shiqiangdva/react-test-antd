import React, {Component} from 'react';
import {Card, Button, Modal} from 'antd';
import './index.less';

export default class Modals extends Component {

    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false,
    };

    handleOpen = (type) => {
        // 这里这样写比较方便值得注意下!!!
        // 这样写就不需要写if-else或者 switch去意义判断了!!!
        this.setState({
            [type]: true
        });
    };

    handleConfirm = (type) => {
        Modal[type]({
            title: 'title',
            content: '这里是内容区域',
            onOk() {
                console.log('ok');
            },
            onCancel() {
                console.log('cancel');
            }
        })
    };

    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    {/*  传参的时候写法不同需要特别注意!!! 内部需要使用箭头函数 */}
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>打开</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>

                <Card title="信息确认框" className="card-wrap">
                    {/*  传参的时候写法不同需要特别注意!!! 内部需要使用箭头函数 */}
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('error')}>Error</Button>
                </Card>

                <Modal
                    title="React默认弹出框"
                    visible={this.state.showModal1}
                    onCancel={() => {
                        this.setState({
                            showModal1: false
                        });
                    }}
                >
                    <p>我是内容content文字显示!!!啦啦啦!!!</p>
                </Modal>

                <Modal
                    title="React自定义页脚弹出框"
                    visible={this.state.showModal2}
                    okText="下一步"
                    cancelText="上一步"
                    onCancel={() => {
                        this.setState({
                            showModal2: false
                        });
                    }}
                >
                    <p>我是内容content文字显示!!!biubiubiu啦啦啦!!!</p>
                </Modal>

                <Modal
                    title="React距顶部20px弹出框"
                    style={{top: 20}}
                    visible={this.state.showModal3}
                    onCancel={() => {
                        this.setState({
                            showModal3: false
                        });
                    }}
                >
                    <p>我是内容content文字显示!!!biubiubiu啦啦啦!!!</p>
                </Modal>

                <Modal
                    title="React水平垂直居中弹出框"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4}
                    onCancel={() => {
                        this.setState({
                            showModal4: false
                        });
                    }}
                >
                    <p>我是内容content文字显示!!!biubiubiu啦啦啦!!!</p>
                </Modal>

            </div>
        )
    }

}