import React from 'react';
import Button from './controls/Button';
import Image from './controls/Image';
import Link from './controls/Link';
import Header from './controls/Header';
import Footer from './footer/Footer'
import HomePage from './pages/home-page/HomePage'
import MyPets from './pages/my-pets/MyPets'
import RegisterUser from './pages/register-user/RegisterUser'
import RegisterProductForm from './product-form/RegisterProductForm'
import UserCreated from './pages/register-user/UserCreated';
import Products from './pages/products/Products';
import RegisterProducts from './pages/register-products/RegisterProducts';
import styles from './styles.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


/**Update route paths as needed!*/

class App extends React.Component {
  constructor(props, context){
    super(props, context);
  }



  render(){
    return (
      <HashRouter>
        <div>
          <Header />
          <Route exact path="/" component={HomePage}/>
          <Route path="/mypets" component={MyPets}/>
          <Route path="/registerUser" component={RegisterUser}/>
          <Route path="/userSuccess" component={UserCreated}/>
          <Route path="/products" component={Products}/>
          <Route path="/registerProducts" component={RegisterProducts}/>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
