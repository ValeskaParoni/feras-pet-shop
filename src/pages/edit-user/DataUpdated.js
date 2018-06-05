import React from 'react';


//Succes message when user details are updated
class DataUpdated extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
  
    return (
      <section className="content">
        <p>Dados atualizados com sucesso!</p>
      </section>
    );
   
  
  }
}

export default DataUpdated;