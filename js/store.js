import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {authReducer} from 'bundles/auth/reducers';

export const rootReducer = combineReducers({
  token: authReducer,
});

export default function configureStore(initialState = {token: null}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware, createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
}
