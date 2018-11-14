import React, {Component} from 'react';
import {Card, Button, Tabs, message, Icon} from 'antd';
import './index';

const TabPane = Tabs.TabPane;

export default class Tab extends Component {

    callback = (key) => {
        message.info('您选择的页签为:' + key);
    };

    onChange = (activeKey) => {
        this.setState({
            activeKey
        });
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({title: activeKey, content: 'New Tab Pane', key: activeKey});
        this.setState({panes, activeKey});
    };

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });

        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    };

    componentWillMount() {
        const panes = [
            {
                title: 'Tab 1',
                content: 'Tab 1',
                key: '1'
            },
            {
                title: 'Tab 2',
                content: 'Tab 2',
                key: '2'
            },
            {
                title: 'Tab 3',
                content: 'Tab 3',
                key: '3'
            }
        ];
        this.setState({
            activeKey: panes[0].key,
            panes
        });
        this.newTabIndex = 0;
    }

    render() {

        const icon1 = <span><Icon type="plus"/>Tab 1</span>;
        const icon2 = <span><Icon type="edit"/>Tab 2</span>;
        const icon3 = <span><Icon type="delete"/>Tab 3</span>;

        return (
            <div>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>

                <Card title="Tab带图的页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab={icon1} key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab={icon2} key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab={icon3} key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>

                <Card title="Tab带图的页签" className="card-wrap">
                    <Tabs
                          onChange={this.onChange}
                          activeKey={this.state.activeKey}
                          type="editable-card"
                          onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((panel) => {
                                return <TabPane
                                    tab={panel.title}
                                    key={panel.key}
                                />
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }

}