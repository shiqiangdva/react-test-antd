import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Main extends Component {


    render() {
        let a = "/main/456";
        return (
            <div>
                这是Main页面
                {/*下面的是嵌套路由的Demo演示*/}
                <br/>
                <Link to="/main/test-id">嵌套路由1</Link>
                <br/>
                <Link to={a}>嵌套路由2</Link>
                <hr/>

                {this.props.children}
            </div>
        );
    }

}