import React from 'react';
import Button from './controls/Button';
import Logo from './controls/Logo';
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
      <div>
        <Logo src='./images/alternatelogo.png' id='logo_img' alt='Feras Pet Shop'/>
        <Button text='Bonito Botão' onClick={this.onClick}/>
      </div>
    );
  }
}

export default App;
