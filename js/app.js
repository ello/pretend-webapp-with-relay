import 'babel-polyfill';

import css from './styles/main.scss';

import Posts from './components/Posts';
import Post from './components/Post';
import React from 'react';
import ReactDOM from 'react-dom';
import { RelayRouter } from 'react-router-relay';
import { Route, browserHistory } from 'react-router';
import Relay from 'react-relay';

const ViewerQueries = {
  root: () => Relay.QL`query { root }`,
};

const PostQueries = {
  post: () => Relay.QL`
    query {
      post(id: $postId)
    }
  `,
};
ReactDOM.render(
  <RelayRouter history={browserHistory}>
    <Route
       path="/" component={Posts}
       queries={ViewerQueries}
       />
    <Route
       path="posts/:postId" component={Post}
       queries={PostQueries}
       />
  </RelayRouter>,
  document.getElementById('root')
);
