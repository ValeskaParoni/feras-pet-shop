import scheduledServices from '../../resources/scheduledServices.json'
const initialState = {
	"scheduledServices" : scheduledServices
}
const scheduledServicesReducer = (state = initialState, action) => {
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

}
