import React, {Component} from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';

export default class Home extends Component {

    render() {
        return(
                <div>
                    <ul>
                        <li>
                            {/*<Link to="/">Home(第二种实现方式)</Link>*/}
                            {/*下面是嵌套路由的Demo演示*/}
                            <Link to="/main">Home(第二种实现方式)</Link>
                        </li>
                        <li>
                            <Link to="/about">About(第二种实现方式)</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics(第二种实现方式)</Link>
                        </li>
                    </ul>
                    <hr/>

                    {this.props.children}
                </div>
        );
    }

}