import React from 'react';
import Appointment from './Appointment';
import BasicCell from './BasicCell';

/*
 * props:
 * * hour_schedule: array:
 * * key
 * */

class HourCalendar extends React.Component{
  constructor (props, context){
    super(props, context);
  }
  
  render(){
    let appointments = [];
    for (let day=1; day<=5; day++){
      let data = this.props.list[day] || 'EMPTY';
      appointments.push(<Appointment data={data} key={day} date={this.props.dates[day-1]} time={this.props.hour}/>)
    }
    return (<tr className='calendar-hour'><BasicCell classNames='calendar-item' innerHTMLvalue={this.props.hour+'h - '+(this.props.hour+1)+'h'}/>{appointments}</tr>);
  }
}

export default HourCalendar;