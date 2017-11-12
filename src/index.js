import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import moment from 'moment';
import Main from './Main';

moment.locale('Fr');

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
