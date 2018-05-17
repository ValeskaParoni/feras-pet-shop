import React from 'react';
import Button from './controls/Button';
import Image from './controls/Image';
import Link from './controls/Link';
import Header from './controls/Header';
import Footer from './footer/Footer'
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
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
