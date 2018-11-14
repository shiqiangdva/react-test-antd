import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Topic from "../route1/Topic";
import About from "../route1/About";
import Main from "./Main";
import Home from "./Home";

export default class IRouter extends Component {

    render() {
        return(
            <Router>
                <Home>
                    {/*这是普通路由*/}
                    {/*<Route exact={true} path="/" component={Main}></Route>*/}

                    {/*这是嵌套路由 页面中还有路由*/}
                    <Route path="/main" render={() =>
                        <Main>
                            <Route path="/main/a" component={About}></Route>
                        </Main>
                    }></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                </Home>
            </Router>
        );
    }

}