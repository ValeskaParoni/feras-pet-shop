import React from 'react';

//Page with message for when an user is successfully created
class UserCreated extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){

    return (
      <section className="content">
        <p>Usuário criado com sucesso!</p>
      </section>
    );
   
  
  }
}

export default UserCreated;