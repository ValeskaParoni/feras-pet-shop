import React from 'react';


class UserCreated extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
  
    //if not logged in or not admin
    //display error
    return (
      <section className="content">
        <p>Usuário criado com sucesso!</p>
      </section>
    );
   
  
  }
}

export default UserCreated;