import React from 'react';

/*
props:
  this.props.onClick = function to be called when the button is clicked
  this.props.text = text inside the button
*/

class Input extends React.Component{
  constructor (props, context){
    super(props, context);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.getValue = this.getValue.bind(this);
  }
  getValue(){
    return this.state.value;
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render(){
    if (this.props.textArea == 'true') {
      return (
        <textarea name={this.props.name} rows={this.props.rows} cols={this.props.cols} value={this.state.value} onChange={this.handleChange} />
      );
    }
    else{
      return (
        <input type={this.props.type} name={this.props.name} id={this.props.id} value={this.state.value} min={this.props.min}
        step={this.props.step} onChange={this.handleChange}/>
      );
    }
  }
}

export default Input;
