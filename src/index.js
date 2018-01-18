import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logger from 'redux-logger';
 

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';


import rootReducer from './redux/reducers/rootReducer';
import { addComment, editComment, removeComment, thumbUpComment, thumbDownComment } from './redux/actions.js';

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);




store.dispatch(addComment('pierwszy komentarz'));

store.dispatch(addComment('drugi komentarz'));
