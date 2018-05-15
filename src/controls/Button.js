import React from 'react';

/*
props:
  this.props.onClick = function to be called when the button is clicked
  this.props.text = text inside the button
*/

class Button extends React.Component{
  constructor (props, context){
    super(props, context);
  }
  
  render(){
    return (
      <button className='product_add_button' onClick={this.props.onClick}>{this.props.text}</button>
    );
  }
}

export default Button;