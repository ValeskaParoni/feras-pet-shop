import React from 'react';
import Button from './controls/Button';
import Image from './controls/Image';
import Link from './controls/Link'
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
        <Image src='./images/alternatelogo.png' alt='Feras Pet Shop' id='logo_img'/>
        <Button text='Bonito Botão' onClick={this.onClick}/>
        <Link id='home_link' href='index.html' text='Home' />
      </div>
    );
  }
}

export default App;
