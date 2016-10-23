import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import PushNotificationForm from 'components/PushNotificationForm';

const initialState = window.INITIAL_STATE;

// create store with initialState for react+redux server rendering
// This is useful for hydrating the state of the client to match the state of a Redux application running on the server.

const store = createStore(reducers, initialState, applyMiddleware(thunk));

if (document.getElementById('pushNotificationForm')) {
  ReactDOM.render(
    <Provider store={store}>
      <PushNotificationForm />
    </Provider>, document.getElementById('pushNotificationForm'));
}