import { combineReducers } from 'redux';
import productsReducer from './productsReducer'
import servicesReducer from './servicesReducer'
import usersReducer from './usersReducer'
import petsReducer from './petsReducer'
import cartReducer from './cartReducer'
import scheduledServicesReducer from './scheduledServicesReducer'

const reducers = combineReducers({
	productsReducer,
	servicesReducer,
    usersReducer,
    petsReducer,
    cartReducer,
    scheduledServicesReducer
});

export default reducers;