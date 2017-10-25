import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import TeamsList from './components/TeamsList'
import rootReducer from './reducers'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/teams' component={TeamsList} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
