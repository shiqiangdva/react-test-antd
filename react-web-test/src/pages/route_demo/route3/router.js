import React, {Component} from 'react';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Topic from "../route1/Topic";
import About from "../route1/About";
import Main from "./Main";
import Home from "./Home";
import Info from "./Info";
import NoMatch from './NoMatch';

export default class IRouter extends Component {

    render() {
        return(
            <Router>
                <Home>
                    {/* 加入Switch的目的是404页面防止每个路由都会加载使用! */}
                    <Switch>
                        {/*这是普通路由*/}
                        {/*<Route exact={true} path="/" component={Main}></Route>*/}

                        {/*这是嵌套路由 页面中还有路由*/}
                        <Route path="/main" render={() =>
                            <Main>
                                <Route path="/main/:value" component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>

                        <Route component={NoMatch}></Route>
                    </Switch>

                </Home>
            </Router>
        );
    }

}