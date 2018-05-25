import { combineReducers } from 'redux';
import productsReducer from './productsReducer'
import servicesReducer from './servicesReducer'
import usersReducer from './usersReducer'
import petsReducer from './petsReducer'

const reducers = combineReducers({
	productsReducer,
	servicesReducer,
    usersReducer,
    petsReducer
});

export default reducers;