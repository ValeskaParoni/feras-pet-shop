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
    let pets = [{petName:'Nome', petNumber:'3'}, {petName:'Nome2', petNumber:'2'}];

    return (<section className="content">
      <h2>Selecione o pet e o horário para o serviço</h2>
      <b>Pet:</b> <SelectPet pets={pets}/>
      <WeekCalendar/>
    </section>);
  }
}

export default MyCalendar;
