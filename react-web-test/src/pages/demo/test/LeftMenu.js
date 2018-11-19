import React, {Component} from 'react';
import {Menu} from 'antd';

const {SubMenu} = Menu;

class LeftMenu extends Component {

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

    handleClick() {

    }

    render() {
        return (
            <div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{height: '100%'}}
                    onClick={this.handleClick.bind(this)}
                >
                    {
                        this.state.datasource.map((data, index) =>
                            <SubMenu key={"subnav" + index} title={data.subnav}>
                                {data.options.map((opt, i) =>
                                    <Menu.Item key={data.subnav + i}>{opt}</Menu.Item>
                                )}
                            </SubMenu>
                        )
                    }
                </Menu>
            </div>
        )
    }
}

export default LeftMenu;