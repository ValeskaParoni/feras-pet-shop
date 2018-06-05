import scheduledServices from '../../resources/scheduledServices.json'
const initialState = {
	"scheduledServices" : scheduledServices,
  "selectedService": -1
}
const scheduledServicesReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SCHEDULE_SERVICE':
          return (
                  {
                      ...state,
                      "scheduledServices": [
                          ...state.scheduledServices,
                          action.scheduledService
                      ]
                  }
              );

        case 'EDIT_SCHEDULE':
               return {
                    ...state,
                    scheduledServices: state.schecheduledServices.map(
                       (currentSchedule, i) => {
                            if(currentSchedule.id === action.updatedSchedule.id){
                                return {...currentSchedule, ...action.updatedSchedule};
                            }
                            else {
                                return currentSchedule;
                            }

                        }
                   )
                }

        case 'REMOVE_SCHEDULED_SERVICE':
          return{
              ...state,
              scheduledServices: state.scheduledServices.filter((scheduleId, i) => scheduleId.id !== action.scheduleId)

          }

        case 'SELECT_SERVICE':
          return{
            ...state,
            selectedService: action.serviceId
          }

        default:
          return state;


  }
}

export default scheduledServicesReducer;