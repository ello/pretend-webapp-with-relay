import 'babel-polyfill';

import css from './app.scss';

import App from './components/App';
import AppHomeRoute from './routes/AppHomeRoute';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

ReactDOM.render(
  <Relay.RootContainer
    Component={App}
    route={new AppHomeRoute()}
    renderLoading={function () {
      return <div className="loader">
        <span className="fa fa-spin fa-spinner"></span>
        </div>;
  }} />,
  document.getElementById('root')
);
