import React from 'react';

/*
props:
  this.props.onClick = function to be called when the button is clicked
  this.props.text = text inside the button
  this.props.buttonClass = className for the button (if not default class)
*/

class Button extends React.Component{
  constructor (props, context){
    super(props, context);
  }
  
  render(){
    if(this.props.buttonClass != ""){
      return (
        <button className={this.props.buttonClass} onClick={this.props.onClick}>{this.props.text}</button>
      );
    }

    return (
      <button className='product_add_button' onClick={this.props.onClick}>{this.props.text}</button>
    );
  }
}

export default Button;