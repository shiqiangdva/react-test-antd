import React, {Component} from 'react';
import {Menu} from 'antd';

const {SubMenu} = Menu;

class TopNav extends Component {

    static defaultProps = {
        datasource: []
    };

    handleNaviClick(item) {
        this.props.submit(item.item.props.children);
    }

    render() {
        return (
            <div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{lineHeight: '64px'}}
                    onClick={this.handleNaviClick.bind(this)}
                >
                    <Menu.Item key="1">男性</Menu.Item>
                    <Menu.Item key="2">女性</Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default TopNav;