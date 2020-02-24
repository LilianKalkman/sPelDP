import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/app';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import postsReducer from './app/store/reducers/posts';
import usersReducer from './app/store/reducers/users';
import categoriesReducer from './app/store/reducers/categories';

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  categories: categoriesReducer,
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/:category/posts" component={App} />
        <Route path="/:category/posts/:postId" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


