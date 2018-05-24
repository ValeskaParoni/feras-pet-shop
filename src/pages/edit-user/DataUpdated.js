import React from 'react';


class DataUpdated extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
  
    //if not logged in or not admin
    //display error
    return (
      <section className="content">
        <p>Dados atualizados com sucesso!</p>
      </section>
    );
   
  
  }
}

export default DataUpdated;