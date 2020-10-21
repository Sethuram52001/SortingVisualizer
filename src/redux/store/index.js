import { createStore } from 'redux';
import { sliderValue } from '../actions';
import rootReducer from '../reducers';

const store = createStore(rootReducer);
store.dispatch(sliderValue(100))

export default store;