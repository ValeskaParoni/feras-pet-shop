import { combineReducers } from 'redux';
import productsReducer from './productsReducer'
import servicesReducer from './servicesReducer'
import usersReducer from './usersReducer'

const reducers = combineReducers({
	productsReducer,
	servicesReducer,
    usersReducer
});

export default reducers;