import React from 'react';

/*
props:
  this.props.href = target link
  this.props.id = link's id
  this.props.text = link's text
*/

class Link extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
    return (
      <a href={this.props.href} id={this.props.id}>{this.props.text}</a>
    );
  }
}

export default Link;
