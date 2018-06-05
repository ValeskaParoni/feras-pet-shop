import React from 'react';

/*
 * props:
 * * data: EMPTY ou o serviço escolhido naquele dia
 * * select: true or false, true se os espaços vazios forem selecionáveis, false se for só pra ver o calendário
 * */

class Appointment extends React.Component{
  constructor (props, context){
    super(props, context);
  }
  
  render(){
    let goToPaymentStep = function(){
      
    }
    let innerHTMLvalue;
    let onClickValue;
    let classNames = 'calendar-item';
    if (this.props.data == 'EMPTY'){
      classNames += ' empty';
      innerHTMLvalue = this.props.select? 'Selecionar':'Vazio';
      onClickValue = this.props.select? goToPaymentStep:undefined;
    }
    else {
      innerHTMLvalue = [];
      innerHTMLvalue.push(<div className='calendar-service-name' key='1'>{this.props.data.serviceName}</div>);
      innerHTMLvalue.push(<img key = '2' src={'./../../images/' + this.props.data.imageSrc}/>);
      innerHTMLvalue.push(<div key = '3' className='calendar-client-name'>{this.props.data.clientName}</div>);
    }
    return (<td className={classNames} onClick={onClickValue}>{innerHTMLvalue}</td>);
  }
}

export default Appointment;
