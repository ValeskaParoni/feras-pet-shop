import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import {withRouter} from 'react-router-dom';
import Button from '../../controls/Button';
import {
  NavLink
} from "react-router-dom";
//import styles from '../styles.css';
import InvalidAccessMessage from '../../controls/InvalidAccessMessage';

const ListItem = ({name, type, quantity, price}) => {
  return (
    <ui>
      <p> {name} {type} {quantity} {price} </p>
    </ui>
  )
}

class History extends React.Component{

  constructor (props, context){
    super(props, context);

    this.state = {}
  }



  render(){


    const productsList = []

    this.props.ordersReducer.soldProducts
    // .filter(soldProduct => soldProduct.date > lowerDate && soldProduct.date < higherDate)
    .forEach(soldProduct => {

      const search = productsList.find(product => product.id == soldProduct.id)

      if (search){
        search.count += soldProduct.count
      } else {
        productsList.push(soldProduct)
      }
    })

    // if (!this.props.loggedin || !this.props.isAdmin){
    //   return (
    //     <section className="content">
    //       <InvalidAccessMessage/>
    //     </section>
    //   )
    // }

    return (
      <section className="content">
        <h2>Histórico de vendas</h2>
        <br/>

        <div>
          <ul>
            {productsList.map(product => {
              return <ListItem name={product.productName} type='Produto' quantity={product.count} price={product.price}/>
            })}
          </ul>
        </div>

        <div className="clearfix"></div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    registeredProducts: state.productsReducer.registeredProducts,
    ordersReducer: state.ordersReducer,
  }
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(History));
