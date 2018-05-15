import React from 'react';

/*
props:
  this.props.src = image source
  this.props.id = id for the logo
  this.props.alt = image alternative context
*/

class Image extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
    return (
      <img src={this.props.src} id={this.props.id} alt={this.props.alt}/>
    );
  }
}

export default Image;
