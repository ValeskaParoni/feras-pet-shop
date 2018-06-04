import registeredServices from '../../resources/servicesCatalog.json'

const initialState = {
	"registeredServices" : registeredServices
}

const servicesReducer = (state = initialState, action) => {

	switch(action.type) {
		case 'SET_SERVICES_CATALOG':
			return {
				...state,
				servicesCatalog: action.servicesCatalog,
			};
		case 'SET_SERVICES_CATEGORIES':
			return {
				...state,
				servicesCategories: action.servicesCategories,
			};

		case 'REGISTER_SERVICE':
			return (
							{
									...state,
									"registeredServices": [
											...state.registeredServices,
											action.newService
									]
							}
					);

			
		case 'EDIT_SERVICE':
					 return {
								...state,
								services: state.registeredServices.map(
									 (currentService, i) => {
												if(currentService.id === action.updatedService.id){
														return {...currentService, ...action.updatedService};
												}
												else {
														return currentService;
												}

										}
							 )
						}
		case 'DELETE_SERVICE':
            return{
                ...state,
                services: state.registeredServices.filter((service, i) => service.id !== action.serviceId)

            }
		default:
			return state;
	}
}

export default servicesReducer