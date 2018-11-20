import JsonP from 'jsonp';
import axios from 'axios';
import {Modal} from 'antd';

export default class Axios {

    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                params: 'callback'
            }, function (err, response) {
                // to-do
                if (response.status === 'success') {
                    resolve(response);
                } else {
                    reject(response.message);
                }
            })
        })
    }

    static ajax(options) {

        let loading;
        if (options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }

        let baseUrl = '';
        const baseUrl1 = 'https://www.easy-mock.com/mock/5bee0db57939e615b8bbddab/reactTest';
        const baseUrl2 = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
        if (options.org) {
            baseUrl = baseUrl2;
        } else {
            baseUrl = baseUrl1;
        }
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseUrl,
                timeout: 50000,
                params: (options.data && options.data.params) || ''
            }).then((response) => {
                // debugger;
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if(response.status === 200) {
                    let res = response.data;
                    if (res.code == '0') {
                        resolve(res);
                    } else {
                        Modal.info({
                            title: '提示',
                            content: res.msg
                        })
                    }
                } else {
                    reject(response.data)
                }
            })
        });
    }
}