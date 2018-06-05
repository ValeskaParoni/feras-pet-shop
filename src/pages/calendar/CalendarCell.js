import React from 'react';

/*
  Props:
    this.props.empty
    this.props.serviceName
    this.props.serviceImage
    this.props.petName
*/
class CalendarCell extends React.Component{
  constructor (props, context){
    super(props, context);
  }
  
  render(){
    if(this.props.empty){
      return (
       <td><input type="button" value="Vazio"></td>
      );
    } 
    return(
         <td>
          <div>
            <div style={backgroundColor: "#fff"}>
              <b style={textAlign: "center", display: "flex", justifyContent: "center"}>{this.props.serviceName}</b>
              <img src={this.props.serviceImage} style={width: "100%"}>
            </div>
            <div style={textAlign: "center"; display: "flex", justifyContent: "center", color: "#fff", backgroundColor: "purple"}>{this.props.petName}</div>
          </div>

        </td>
      );
  }
}

export default CalendarCell;