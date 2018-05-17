import { combineReducers } from 'redux';
import productsReducer from './productsReducer'
import servicesReducer from './servicesReducer'

const reducers = combineReducers({
	productsReducer,
	servicesReducer,
});

export default reducers;