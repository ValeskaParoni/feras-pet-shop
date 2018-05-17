import React from 'react';

/*
no props
*/

class Footer extends React.Component{
  constructor (props, context){
    super(props, context);
  }
  
  render(){
    return (
      <footer>
        <div id="contact_info">
            <address id="shop_address">
              <b>Feras Pet Shop</b><br/>
              R. do Trabalho, 1010 - Cep: 15879-123<br/>
              Webcity, SP -   Brasil <br/>
            </address>
            <p id="shop_phone">Tel: (99)3100-1010</p>
        </div>
      </footer>
    );
  }
}

export default Footer;