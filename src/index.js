import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './App';
import {
  PostList,
  PostNew,
  PostDelete,
  PostEdit,
  PostShow
} from './_components/posts';
import history from './history';
import reducers from './_reducers';

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/" exact component={PostList} />
          <Route path="/posts/new" exact component={PostNew} />
          <Route path="/posts/edit/:id" exact component={PostEdit} />
          <Route path="/posts/show/:id" exact component={PostShow} />
          <Route path="/posts/delete/:id" exact component={PostDelete} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
