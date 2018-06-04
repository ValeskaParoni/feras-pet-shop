import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions'
import Button from '../../controls/Button';

import productCatalog from '../../../resources/productCatalog.json'
import productsCategories from '../../../resources/productsCategories.json'
import servicesCatalog from '../../../resources/servicesCatalog.json'
import servicesCategories from '../../../resources/servicesCategories.json'

/* 
  Main page to website
  No props
*/

class HomePage extends React.Component{
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
      <h1>O Pet Shop</h1>
      <p> Aqui no <strong><span className="feras_pet_shop">Feras Pet Shop</span></strong>, nós temos tudo o que você precisa para você e seu bichinho.</p>
      <p> Nós providenciamos o serviço de melhor qualidade, com profissionais experientes e dedicados, e fornecemos produtos de alta qualidade de marcas
      reconhecidas pelo mercado.</p>
      <img src="images/dog-for-main-page.jpg" className="center_img" alt="A close up of a dog"/> <br/>
     
     
      <h2>Produtos oferecidos</h2>
      <p> Nossa grande seleção de produtos está aqui à espera de um clique, pronta para ser entregue a sua casa.</p>
      
      {this.props.productsReducer.productsCategories && 
      <div className="gallery_container">
        <a href="produtos.html">
          <img src={this.props.productsReducer.productsCategories[0].image} alt={this.props.productsReducer.productsCategories[0].name} className="gallery"/>
        </a>
        <div className="gallery_caption">
          {this.props.productsReducer.productsCategories[0].name} 
        </div>
      </div>
      }

      {this.props.productsReducer.productsCategories && 
      <div className="gallery_container">
        <a href="produtos.html">
          <img src={this.props.productsReducer.productsCategories[1].image} alt={this.props.productsReducer.productsCategories[1].name} className="gallery"/>
        </a>
        <div className="gallery_caption">
          {this.props.productsReducer.productsCategories[1].name} 
        </div>
       </div>
      }

      {this.props.productsReducer.productsCategories && 
       <div className="gallery_container">
        <a href="produtos.html">
          <img src={this.props.productsReducer.productsCategories[2].image} alt={this.props.productsReducer.productsCategories[2].name} className="gallery"/>
        </a>
        <div className="gallery_caption">
          {this.props.productsReducer.productsCategories[2].name}  
        </div>
       </div>
      }

      <div className="clearfix"></div>
      <p> Possuimos tudo o que é necessário para o conforto e saúde do seu pet. Aqui você também encontrará <b>roupas, comida e muito mais!</b></p>
      <br/>

      <h2>Serviços oferecidos</h2>
      <p> Nossos profissionais estão prontos para atendê-lo com atenção e qualidade. Agende seu serviço agora, aqui mesmo pelo site!</p>
       <img src="images/vet.jpg" alt="Filhote de cachorro com veterinário" className="float_right_img"/><br/>
      <p><b>Nós fornecemos:</b></p>
      <ul style={{marginLeft: 80+'px'}}>
      {
        this.props.servicesReducer.servicesCategories && this.props.servicesReducer.servicesCategories.map((category, index) => {
          return (<li key={index}>{category.name}</li>)
        })
      }
      </ul>
      <br/>


      <br/> <br/> <br/> <br/> <br/>
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
)(HomePage);