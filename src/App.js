import React from 'react';
import Button from './controls/Button';
import Image from './controls/Image';
import Link from './controls/Link';
import Header from './controls/Header';
import Footer from './footer/Footer';
import HomePage from './pages/home-page/HomePage';
import MyPets from './pages/my-pets/MyPets';
import RegisterUser from './pages/register-user/RegisterUser';
import RegisterProductForm from './product-form/RegisterProductForm';
import UserCreated from './pages/register-user/UserCreated';
import EditUser from './pages/edit-user/EditUser';
import DataUpdated from './pages/edit-user/DataUpdated';
import RegisterPet from './pages/register-pet/RegisterPet';
import Products from './pages/products/Products';
import RegisterProducts from './pages/register-products/RegisterProducts';
import Services from './pages/services/Services';
import RegisterServices from './pages/register-service/RegisterServices';
import Cart from './pages/cart/Cart';
import Payment from './pages/payment/Payment';
import PaymentSuccess from './pages/payment/PaymentSuccess';
import History from './pages/history/History';
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
          <Route path="/editUser" component={EditUser}/>
          <Route path="/dataUpdated" component={DataUpdated}/>
          <Route path="/registerPet" component={RegisterPet}/>
          <Route path="/products" component={Products}/>
          <Route path="/registerProducts" component={RegisterProducts}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/payment" component={Payment}/>
          <Route path="/paymentSuccess" component={PaymentSuccess}/>
          <Route path="/services" component={Services}/>
          <Route path="/registerServices" component={RegisterServices}/>
          <Route path="/history" component={History}/>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
