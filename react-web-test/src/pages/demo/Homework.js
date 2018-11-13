import React, {Component} from 'react';
import {Row, Col} from 'antd';

export default class Homework extends Component {

    render() {
        return(
            <Row style={{height: 'calc(100vh)', backgroundColor: '#ff0'}}>
                <Row style={{height: 'calc(20vh)', backgroundColor: '#4200ab'}}>

                </Row>
                <Row style={{height: 'calc(60vh)', backgroundColor: '#1269ff'}}>
                    <Col span="6" style={{backgroundColor: '#ffec58', height: '100%'}}>

                    </Col>
                    <Col span="18" style={{height: '100%'}}>
                        {/*又分了三个乱七八糟 的玩应!*/}
                        <Col span="8" style={{height: '100%'}}>
                            <Row style={{height: '50%', backgroundColor: '#bdff08'}}>

                            </Row>
                            <Row style={{height: '50%', backgroundColor: '#fbfff0'}}>

                            </Row>
                        </Col>
                        <Col span="8" style={{height: '100%'}}>
                            <Col span="8" style={{height: '100%', backgroundColor: '#00ffcb'}}></Col>
                            <Col span="8" style={{height: '100%', backgroundColor: '#068fff'}}></Col>
                            <Col span="8" style={{height: '100%', backgroundColor: '#0e4aff'}}></Col>
                        </Col>
                        <Col span="8" style={{height: '100%'}}>
                            <Col span="12" style={{height: '100%'}}>
                                <Row style={{height: "25%", backgroundColor: "#fff"}}></Row>
                                <Row style={{height: "25%", backgroundColor: "#fffdd5"}}></Row>
                                <Row style={{height: "25%", backgroundColor: "#d3fdff"}}></Row>
                                <Row style={{height: "25%", backgroundColor: "#fcdaff"}}></Row>
                            </Col>
                            <Col span="12" style={{height: '100%'}}>
                                <Row style={{height: "25%", backgroundColor: "#ff8a2f"}}></Row>
                                <Row style={{height: "50%", backgroundColor: "#a927ff"}}></Row>
                                <Row style={{height: "25%", backgroundColor: "#38ff26"}}></Row>
                            </Col>
                        </Col>
                    </Col>
                </Row>
                <Row style={{height: 'calc(20vh)', backgroundColor: '#abab00'}}>

                </Row>
            </Row>
        );
    }
}