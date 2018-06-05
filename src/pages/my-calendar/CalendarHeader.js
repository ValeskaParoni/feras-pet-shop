import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CalendarHeader extends React.Component{
  constructor (props, context){
    super(props, context);
  }
  
  render(){
    return (
      <div id='table-header'>
        <input type="button" name="" value="<<"/>
        <h3>Semana do dia {this.props.initial_date} ao dia {this.props.final_date}</h3>
        <input type="button" name="" value=">>"/>
      </div>
    );
  }
}

export default CalendarHeader;