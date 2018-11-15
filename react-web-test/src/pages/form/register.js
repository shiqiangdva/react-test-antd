import React, {Component} from 'react';
import {Card, Form, Button, Input, Checkbox, Radio, InputNumber, Select, Switch, DatePicker, TimePicker, Upload, Icon, message} from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

class FormRegister extends Component {

    state={};

    getBase64 = (img, callback)=>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg:imageUrl,
                loading: false,
            }));
        }
    };

    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo));
        message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.password}`)
    };

    render() {

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };

        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        };

        return (
            <div>
                <Card title={"注册表单"}>
                    <Form layout={'horizontal'} onSubmit={this.handleSubmit}>
                        <FormItem label={"用户名"} {...formItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空!'
                                        }
                                    ]
                                })(
                                    <Input placeholder={"请输入用户名"}/>
                                )
                            }
                        </FormItem>

                        <FormItem label={"密码"} {...formItemLayout}>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码不能为空!'
                                        }
                                    ]
                                })(
                                    <Input type={'password'} placeholder={"请输入密码"}/>
                                )
                            }
                        </FormItem>

                        <FormItem label={"性别"} {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1',
                                })(
                                    <RadioGroup>
                                        <Radio value={"1"}>男</Radio>
                                        <Radio value={"2"}>女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>

                        <FormItem label={"年龄"} {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: 18,
                                })(
                                    <InputNumber />
                                )
                            }
                        </FormItem>

                        <FormItem label={"当前状态"} {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: "2",
                                })(
                                    <Select>
                                        <Option value={"1"}>90可爱萌妹</Option>
                                        <Option value={"2"}>80性感御姐</Option>
                                        <Option value={"3"}>00可爱萝莉</Option>
                                        <Option value={"4"}>高冷妖艳妹</Option>
                                        <Option value={"5"}>温柔可人女</Option>
                                    </Select>
                                )
                            }
                        </FormItem>

                        <FormItem label={"爱好"} {...formItemLayout}>
                            {
                                getFieldDecorator('interest', {
                                    initialValue: ['1', '2'],
                                })(
                                    <Select mode={"multiple"}>
                                        <Option value={"1"}>睡觉</Option>
                                        <Option value={"2"}>上网</Option>
                                        <Option value={"3"}>看书</Option>
                                        <Option value={"4"}>旅游</Option>
                                        <Option value={"5"}>去洗澡</Option>
                                        <Option value={"6"}>唱歌</Option>
                                    </Select>
                                )
                            }
                        </FormItem>

                        <FormItem label={"是否已婚"} {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Switch/>
                                )
                            }
                        </FormItem>

                        <FormItem label={"生日"} {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment('2018-11-16'),
                                })(
                                    <DatePicker
                                        showTime
                                        format={'YYYY-MM-DD HH:mm:ss'}
                                    />
                                )
                            }
                        </FormItem>

                        <FormItem label={"联系地址"} {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    initialValue: '火星'
                                })(
                                    <TextArea
                                        autosize={{minRows: 4, maxRows: 6}}
                                    />
                                )
                            }
                        </FormItem>

                        <FormItem label={"早起时间"} {...formItemLayout}>
                            {
                                getFieldDecorator('time', {
                                    // initialValue: ''
                                })(
                                    <TimePicker
                                    />
                                )
                            }
                        </FormItem>

                        <FormItem label={"头像"} {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                        listType="picture-card"
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        onChange={this.handleChange}
                                    >
                                        {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus"/>}
                                    </Upload>
                                )
                            }
                        </FormItem>

                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Checkbox>我已阅读过<a href="#">慕课协议</a></Checkbox>
                                )
                            }
                        </FormItem>

                        <FormItem {...offsetLayout}>
                            <Button type="primary" htmlType='onSubmit'>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormRegister);