import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseMemo from './UseMemo';
import UseOfRef from './UseOfRef';
import UseRefForFunctionComponents from './UseRefForFunctionComponents';
import CallingOfApi from './CallingOfApi';
import PostRequestInReact from './PostRequestInReact';
import Form_submition from './Form_submition';
import ReactRouting from './ReactRouting';
import PostRequest from './PostRequest'
import Userauthentication from './Userauthentication';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Userauthentication />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
