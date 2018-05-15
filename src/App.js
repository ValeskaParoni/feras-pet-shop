import React from 'react';
import Button from './controls/Button';
import styles from './styles.css';

class App extends React.Component {
  constructor(props, context){
    super(props, context);  
  }
  
  onClick = () => {
    console.log('oie');
  }
  
  render(){
    return (
      <Button text='Bonito Botão' onClick={this.onClick}/>
    );
  }
}

export default App;