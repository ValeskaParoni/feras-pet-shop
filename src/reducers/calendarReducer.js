import weeks from '../../resources/weekCalendar.json';


const initialState = {
  "week_schedule": weeks[0]
};


const calendarReducer = (state = initialState, action) => {

    switch(action.type) {

        case 'NEXT_WEEK':
             let nextWeek;
             if (state.week_schedule && state.week_schedule.weekNumber != '3') nextWeek = weeks[state.week_schedule.weekNumber];
             else nextWeek = state.week_schedule;
             return (
                        {
                            ...state,
                            "week_schedule": nextWeek
                        }

                    );
        
        case 'PREV_WEEK':
             let prevWeek;
             if (state.week_schedule && state.week_schedule.weekNumber != '1') prevWeek = weeks[state.week_schedule.weekNumber-2];
             else prevWeek = state.week_schedule;
             return (
                        {
                            ...state,
                            "week_schedule": prevWeek
                        }

                    );
        
        case 'SET_DATE_AND_TIME':
             return (
                        {
                            ...state,
                            "appointment": {"date": action.date,
                                           "time": action.time}
                        }

                    );
        
        case 'SET_PET':
             return (
                        {
                            ...state,
                            "pet": action.pet_id
                        }

                    );

        default:
            return state;
    }
}

export default calendarReducer;
