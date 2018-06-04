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

    const classes = []
    this.props.buttonClass != ""?classes.push(this.props.buttonClass):classes.push('product_add_button')
    this.props.disabled && classes.push('disabled_button')

    return <button className={classes.join(' ')} onClick={this.props.onClick} disabled={this.props.disabled}>{this.props.text}</button>
  }
}

export default Button;