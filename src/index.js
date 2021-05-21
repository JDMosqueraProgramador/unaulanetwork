import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const logIn = () => {
    
}

ReactDOM.render(
    <React.StrictMode>
        <App login={logIn}/>
    </React.StrictMode>,
    document.getElementById('root')
);
