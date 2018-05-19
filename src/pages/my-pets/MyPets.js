import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions'
import Button from '../../controls/Button';

import productCatalog from '../../../resources/productCatalog.json'
import productsCategories from '../../../resources/productsCategories.json'
import servicesCatalog from '../../../resources/servicesCatalog.json'
import servicesCategories from '../../../resources/servicesCategories.json'

/* No props
  TODO: add onclick function to button!
*/

class MyPets extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  componentDidMount(){
    this.props.setProductCatalog(productCatalog)
    this.props.setProductsCategories(productsCategories)
    this.props.setServicesCatalog(servicesCatalog)
    this.props.setServicesCategories(servicesCategories)
  }
  
  render(){

    return (
      <section className="content">
      <p>Teste</p>
      <div className="clearfix"></div>

      
    </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsReducer: state.productsReducer,
    servicesReducer: state.servicesReducer,
  }
}

// export default HomePage;
export default connect(
  mapStateToProps,
  actions
)(MyPets);