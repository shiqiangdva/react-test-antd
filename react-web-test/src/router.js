import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Buttons from "./pages/ui/buttons";
import NoMatch from "./pages/nomatch";
import Modals from "./pages/ui/modals";
import Loading from "./pages/ui/loadings";
import Notice from "./pages/ui/notice";
import Message from "./pages/ui/message";
import Tab from "./pages/ui/tabs";
import Gallery from "./pages/ui/gallery";
import Carousels from "./pages/ui/carousel";
import FormLogin from "./pages/form/login";
import FormRegister from "./pages/form/register";
import BasicTable from "./pages/table/basicTable";
import HighTable from "./pages/table/highTable";

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
                                <Route path="/admin/ui/notification" component={Notice}></Route>
                                <Route path="/admin/ui/messages" component={Message}></Route>
                                <Route path="/admin/ui/tabs" component={Tab}></Route>
                                <Route path="/admin/ui/gallery" component={Gallery}></Route>
                                <Route path="/admin/ui/carousel" component={Carousels}></Route>

                                <Route path="/admin/form/login" component={FormLogin}></Route>
                                <Route path="/admin/form/reg" component={FormRegister}></Route>
                                <Route path="/admin/table/basic" component={BasicTable}></Route>
                                <Route path="/admin/table/high" component={HighTable}></Route>

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