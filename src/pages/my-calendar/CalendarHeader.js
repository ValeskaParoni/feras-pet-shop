import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as calendarActions from '../../actions/calendarActions';

class CalendarHeader extends React.Component{
  constructor (props, context){
    super(props, context);
  }
  
  render(){
    return (
      <div id='table-header'>
        <button onClick={this.props.actions.prevWeek}>{'<<'}</button>
        <h3>Semana do dia {this.props.initial_date} ao dia {this.props.final_date}</h3>
        <button onClick={this.props.actions.nextWeek}>{'>>'}</button>
      </div>
    );
  }
}

function mapStateToProps(){
  return {};
}

function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(calendarActions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarHeader);