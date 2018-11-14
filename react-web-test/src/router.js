import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Buttons from "./pages/ui/buttons";
import NoMatch from "./pages/nomatch";
import Modals from "./pages/ui/modals";
import Loading from "./pages/ui/loadings";

export default class IRouter extends Component {

    render() {
        return(
            <HashRouter>

                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                <Route path="/admin/ui/modals" component={Modals}></Route>
                                <Route path="/admin/ui/loadings" component={Loading}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }/>
                    <Route path="/order/detail" component={Login}/>
                </App>

            </HashRouter>
        );
    }

}