import React from 'react';

/* No props
  Use this component when a user tries to access a page they're not allowed to
*/

class InvalidAccessMessage extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){

    return (
      <div>
        <h2>Acesso inválido!</h2>
        <p><b>Ops!</b> Você não pode acessar essa página.</p>
        <p> Se não estiver logado, por favor <b>acesse sua conta</b>.</p>
      </div>
    );
  }
}


export default InvalidAccessMessage;