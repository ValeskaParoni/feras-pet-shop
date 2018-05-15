import React from 'react';

/*
props:
  this.props.onClick = function to be called when the button is clicked
  this.props.text = text inside the button
*/

class Logo extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
    return (
      <img src={this.props.src} id={this.props.id} alt={this.props.alt}/>
    );
  }
}

export default Logo;
