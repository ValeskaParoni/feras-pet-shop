const servicesReducer = (state = {}, action) => {

	switch(action.type) {
		case 'SET_SERVICES_CATALOG':
			return {
				...state,
				servicesCatalog: action.servicesCatalog,
			}
		case 'SET_SERVICES_CATEGORIES':
			return {
				...state,
				servicesCategories: action.servicesCategories,
			}
		default:
			return state
	}
}

export default servicesReducer