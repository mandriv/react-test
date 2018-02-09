import React from 'react';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './containers/App';
import reducer from './reducers';

// Store config
// middlewares
let middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, logger];
}
// redux-persist
const persistConfig = {
  key: process.env.REACT_APP_PERSIST_KEY,
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(...middlewares)),
);
const persistor = persistStore(store);

export default class EntryApp extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }

}
