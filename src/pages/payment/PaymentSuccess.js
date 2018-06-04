import React from 'react';


class PaymentSuccess extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
  
    //if not logged in or not admin
    //display error
    return (
      <section className="content">
        <p>Pagamento realizado com sucesso!</p>
      </section>
    );
   
  
  }
}

export default PaymentSuccess;