import React, { Component } from 'react';

import { Layout, Menu, Icon } from 'antd';
import LeftMenu from "./LeftMenu";
import TopNav from "./TopNav";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App1 extends Component {

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
    };

    handleClick() {

    }

    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    {/*上菜单*/}
                    <TopNav

                    />
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <LeftMenu

                            />
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

export default App1;
