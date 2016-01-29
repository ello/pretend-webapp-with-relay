import 'babel-polyfill';

import css from './styles/main.scss';

import Auth from 'bundles/auth/components/Auth';
import Posts from './components/Posts';
import Post from './components/Post';
import Home from 'bundles/home/components/Home';
import React from 'react';
import ReactDOM from 'react-dom';
import { RelayRouter } from 'react-router-relay';
import { IndexRoute, Route, browserHistory } from 'react-router';
import Relay from 'react-relay';

const ViewerQueries = {
  root: () => Relay.QL`query { root }`,
};

const PostQueries = {
  post: () => Relay.QL`
    query {
      node(id: $postId)
    }
  `,
};

let token = localStorage.getItem('ello.jwt');
let options = {credentials: 'same-origin'};
if (token) {
  options.headers = {
    authorization: `Bearer ${token}`
  };
}

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('/graphql', options)
);

ReactDOM.render(
  <RelayRouter history={browserHistory}>
    <Route
      path="/" component={Home}
      >
      <IndexRoute component={Posts} queries={ViewerQueries} />
      <Route
        path="posts/:postId" component={Post}
        queries={PostQueries}
        />
      <Route
        path="/auth" component={Auth}
        />
    </Route>
  </RelayRouter>,
  document.getElementById('root')
);
