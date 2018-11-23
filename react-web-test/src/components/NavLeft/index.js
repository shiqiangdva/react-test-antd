import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {NavLink} from 'react-router-dom';
import MenuConfig from './../../config/menuConfig';
import './index.less';
import {connect} from 'react-redux';
import {switchMenu} from './../../redux/action';

const SubMenu = Menu.SubMenu;

class NavLeft extends Component {

    state = {
        currentKey: ''
    };

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        let currentKey = window.location.hash.replace(/#|\?.*$/g, '');

        this.setState({
            menuTreeNode,
            currentKey
        });
    }

    handleClick = ({item, key}) => {
        const {dispatch} = this.props;
        // debugger;
        dispatch(switchMenu(item.props.title));

        this.setState({
            currentKey: key
        })
    };

    /**
     * 菜单渲染
     */
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    };

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>React MS</h1>
                </div>
                <Menu
                    theme="dark"
                    selectedKeys={this.state.currentKey}
                    onClick={this.handleClick}
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    };
}

export default connect()(NavLeft);