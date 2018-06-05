import React from 'react';

//Message displayed when payment is complete successfully
class PaymentSuccess extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
  
    return (
      <section className="content">
        <p>Pagamento realizado com sucesso!</p>
      </section>
    );
   
  
  }
}

export default PaymentSuccess;