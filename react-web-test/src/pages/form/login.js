import React, {Component} from 'react';
import {Card, Form, Input, Button, message, Icon, Checkbox} from 'antd';
const FormItem = Form.Item;

class FormLogin extends Component {

    // submit提交
    handleSubmit = (e) => {
        e.preventDefault();
        // 获取表单所有信息的对象
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values) => {
            if (!err) {
                message.success(`登录用户为: ${userInfo.username}, 密码为: ${userInfo.password}, 成功!`);
            }
        })
    };

    render() {

        const { getFieldDecorator } = this.props.form;

        return(
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                            <Button type={"primary"}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>

                <Card title="登录水平表单" style={{marginTop: 10}}>
                    <Form style={{width: 300}} onSubmit={this.handleSubmit}>
                        <FormItem>
                            {
                                getFieldDecorator('username', {
                                    initialValue: '1',
                                    rules: [{
                                        required: true,
                                        message: '用户名不能为空'
                                    },{
                                        min: 5,
                                        max: 10,
                                        message: '请输入5-10位字符'
                                    }, {
                                        // pattern: /^\w+$/g,
                                        pattern: new RegExp('^\\w+$','g'),
                                        message: '用户名必须为英文字母/数字'
                                    }]
                                })(
                                    <Input prefix={<Icon type={"user"}/>} placeholder={"请输入用户名"}/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password', {
                                    // initialValue: '2',
                                    rules: [{
                                        required: true,
                                        message: '密码不能为空'
                                    }]
                                })(
                                    <Input prefix={<Icon type={"lock"}/>} placeholder={"请输入密码"}/>
                                )
                            }
                        </FormItem>

                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float:'right'}}>忘记密码</a>
                        </FormItem>

                        <FormItem>
                            <Button type="primary" htmlType="submit">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(FormLogin);