import { combineReducers } from 'redux';
import productsReducer from './productsReducer'
import servicesReducer from './servicesReducer'
import usersReducer from './usersReducer'
import petsReducer from './petsReducer'
import calendarReducer from './calendarReducer'

const reducers = combineReducers({
	productsReducer,
	servicesReducer,
  usersReducer,
  petsReducer,
  calendarReducer
});

export default reducers;