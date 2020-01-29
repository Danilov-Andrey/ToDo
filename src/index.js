import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { todoApp } from './reducers/todoApp';
import { searchTodo } from './reducers/searchTodo';

import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'app-todos',
  storage
};

const persistedReducer = persistReducer(persistConfig, todoApp);

export const store = createStore(
  combineReducers({
    appTodos: persistedReducer,
    searchTodo
  }),
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
