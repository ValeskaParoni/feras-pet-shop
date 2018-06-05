import React from 'react';
import HourCalendar from './HourCalendar';
import CalendarHeader from './CalendarHeader';
import BasicCell from './BasicCell';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import daysOfWeek from '../../../resources/daysOfWeek';

class WeekCalendar extends React.Component{
  constructor (props, context){
    super(props, context);
  }
  
  render(){
    let list_of_hours = {};
    let list_of_components = [];
    let list_of_component_days = [];
    for (let hour = 8; hour <=18; hour++){
      list_of_hours[hour] = {};
      for (let day = 1; day <= 5; day++){
        if (this.props.week_schedule[day]['appointments'][hour]){
          list_of_hours[hour][day] = this.props.week_schedule[day]['appointments'][hour];
        }
      }
      if (list_of_hours[hour]){
        list_of_components.push(<HourCalendar list= {list_of_hours[hour]} key={hour} hour={hour}/>);
      }
    }

    let initial_date = new Date(this.props.week_schedule[1].date);
    initial_date = `${initial_date.getDate()}/${initial_date.getMonth()}`;
    
    let final_date = new Date(this.props.week_schedule[5].date);
    final_date = `${final_date.getDate()}/${final_date.getMonth()}`;
                                
    for (let day = 1; day <=5; day++){
          const date = new Date(this.props.week_schedule[day].date);
          list_of_component_days.push(<BasicCell classNames='calendar-item' innerHTMLvalue={`${daysOfWeek[date.getDay()-1]} ${date.getDate()}/${date.getMonth()}`}/>);
    }
    return (<div className='calendar-table-wrapper'>
      <CalendarHeader initial_date final_date/>
      <table>
        <thead>
          <BasicCell classNames='calendar-item' innerHTMLvalue='Horários'/>
          {list_of_component_days}
        </thead>
        <tbody>
          {list_of_components}
        </tbody>
      </table>
      </div>);
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(dispatch)
  }
}

function mapStateToProps(state, ownProps) {
  return {
    week_schedule: state.calendarReducer.week_schedule.weekSchedule,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeekCalendar);
