import { createStore } from 'redux';
import imageLists from './Reducers';

const store = createStore(imageLists);

export default store;