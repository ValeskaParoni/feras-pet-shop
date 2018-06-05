import React from 'react';

/*
 * props:
 * * 
 * */

class BasicCell extends React.Component{
  constructor (props, context){
    super(props, context);
  }
  
  render(){
    return (<td className={this.props.classNames}>{this.props.innerHTMLvalue}</td>);
  }
}

export default BasicCell;
