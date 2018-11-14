import React, {Component} from 'react';

export default class Info extends Component {

    render() {
        return (

            <div>
                这是Info页面(动态路由)
                动态路由的值为:{this.props.match.params.value}
            </div>

        );
    }

}