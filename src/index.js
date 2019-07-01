import React from 'react'
import ReactDom from 'react-dom';
import store from '@/store';
import { Provider } from 'react-redux';



import App from '@/app';


const Top = (
    <Provider store={store}>
        <App></App>
    </Provider>
)

ReactDom.render(Top, document.getElementById('app'));