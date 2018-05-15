import React from 'react';

/*
props:
  this.props.onClick = function to be called when the button is clicked
  this.props.text = text inside the button
*/

class Input extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
    return (
      <input type=this.props.type name=this.props.name id=this.props.id>
    );
  }
}

export default Input;
