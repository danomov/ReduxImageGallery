import { createStore, applyMiddleware } from 'redux';
import imageLists from './Reducers';
import thunk from 'redux-thunk';

const store = createStore(imageLists, applyMiddleware(thunk));

export default store;