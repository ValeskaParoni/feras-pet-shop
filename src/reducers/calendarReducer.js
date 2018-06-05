import weeks from '../../resources/weekCalendar.json';


const initialState = {
  "week_schedule": weeks[0]
};


const calendarReducer = (state = initialState, action) => {

    switch(action.type) {

        case 'NEXT_WEEK':
             let nextWeek;
             if (state.week_schedule && state.week_schedule.weekNumber != '3') nextWeek = weeks[state.week_schedule.weekNumber];
             else if (state.week_schedule) nextWeek = weeks[0];
             return (
                        {
                            ...state,
                            "week_schedule": nextWeek
                        }

                    );

        default:
            return state;
    }
}

export default calendarReducer;
