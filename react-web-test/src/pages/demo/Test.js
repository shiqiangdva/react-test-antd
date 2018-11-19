import React, { Component } from 'react';

import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datasource:[
                {
                    "subnav": "鬼剑",
                    "options": ["红", "白", "鬼", "瞎"]
                },{
                    "subnav": "格斗",
                    "options": ["散打", "气功", "柔道", "街霸"]
                },{
                    "subnav": "枪手",
                    "options": ["漫游", "弹药", "机械", "枪炮"]
                }
            ]
        }
    }

    datas = {
        "男性": [
            {
                "subnav": "鬼剑",
                "options": ["红", "白", "鬼", "瞎"]
            },{
                "subnav": "格斗",
                "options": ["散打", "气功", "柔道", "街霸"]
            },{
                "subnav": "枪手",
                "options": ["漫游", "弹药", "机械", "枪炮"]
            }
        ],
        "女性": [
            {
                "subnav": "女鬼剑",
                "options": ["女红", "女白", "女鬼", "女瞎"]
            },{
                "subnav": "女格斗",
                "options": ["女散打", "女气功", "女柔道", "女街霸"]
            },{
                "subnav": "女枪手",
                "options": ["女漫游", "女弹药", "女机械", "女枪炮"]
            }
        ]
    }

    handleNaviClick(e) {
        console.log(e);
        this.setState({
            datasource: this.datas[e.item.props.children]
        });
    }

    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                        onClick={this.handleNaviClick.bind(this)}
                    >
                        <Menu.Item key="1">男性</Menu.Item>
                        <Menu.Item key="2">女性</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                                onClick={this.handleClick.bind(this)}
                            >
                                {
                                    /*for (let i = 0; i < this.state.datasource.length; i++) {
                                      var data = this.state.datasource[i];
                                      var index = i;
                                      SubMenu.title = data.subnav;
                                      for (let j = 0; j < data.options.length; j++) {
                                        var opt = data.options[j];
                                        var i = j;
                                        Menu.item.value = opt;
                                      }
                                    }*/
                                    this.state.datasource.map((data, index) =>
                                        <SubMenu key={"subnav" + index} title={data.subnav}>
                                            {data.options.map((opt, i) =>
                                                <Menu.Item key={data.subnav + i}>{opt}</Menu.Item>
                                            )}
                                        </SubMenu>
                                    )
                                }
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            Content
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}

export default Test;
