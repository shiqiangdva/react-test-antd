import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Main extends Component {

    render() {
        return (
            <div>
                这是Main页面
                {/*下面的是嵌套路由的Demo演示*/}
                <Link to="/main/a">嵌套路由</Link>
                <hr/>

                {this.props.children}
            </div>
        );
    }

}