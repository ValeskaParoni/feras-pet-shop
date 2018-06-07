import React from 'react';
import WeekCalendar from './WeekCalendar';
import SelectPet from '../../controls/SelectPet';

/*
 * props:
 * */

class MyCalendar extends React.Component{
  constructor (props, context){
    super(props, context);
  }
  
  render(){

    return (<section className="content">
      <h2>Selecione o pet e o horário para o serviço</h2>
      <b id='pet-select-label'>Pet:</b> <SelectPet/>
      <WeekCalendar/>
    </section>);
  }
}

export default MyCalendar;
