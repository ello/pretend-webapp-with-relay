import 'babel-polyfill';

import configureStore from './store';

import init from './init';

import Auth from 'bundles/auth/components/Auth';
import Posts from './components/Posts';
import Post from './components/Post';
import Home from 'bundles/home/components/Home';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {RelayRouter} from 'react-router-relay';
import {IndexRoute, Route, browserHistory} from 'react-router';
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

async function initApp() {
  const store = configureStore();

  await store.dispatch(init());

  ReactDOM.render(
    <Provider store={store}>
      <RelayRouter history={browserHistory}>
        <Route
          path="/" component={Home} >
          <IndexRoute component={Posts} queries={ViewerQueries} />
          <Route
            path="posts/:postId" component={Post}
            queries={PostQueries} />
          <Route
            path="/auth" component={Auth} />
        </Route>
      </RelayRouter>
    </Provider>,
    document.getElementById('root')
  );

};

initApp();
