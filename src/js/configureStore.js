import reducer from './reducers';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const configureStore = () => {
  return createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
};

export default configureStore;
