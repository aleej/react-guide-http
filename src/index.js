import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use(request => {
    console.log('INTERCEPTOR');
    console.log(request);
    return request;
}, error => {
    console.log('ERROR');
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log('RESPONSE INTERCEPTOR');
    console.log(response);
    return response;
}, error => {
    console.log('INTERCEPTPR RESPONSE ERROR');
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
