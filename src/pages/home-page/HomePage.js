import React from 'react';
import Button from '../../controls/Button';

/* No props

  TODO: add onclick function to button!
*/
class HomePage extends React.Component{
  constructor (props, context){
    super(props, context);
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
        
      <div className="gallery_container">
        <a href="produtos.html">
          <img src="images/cats-toy.jpg" alt="Gatos brincando com brinquedo rosa" className="gallery"/>
        </a>
        <div className="gallery_caption">
          Brinquedos
        </div>
      </div>
      
      <div className="gallery_container">
        <a href="produtos.html">
          <img src="images/hamster2.jpg" alt="Hamster em sua casinha de plástico" className="gallery"/>
        </a>
        <div className="gallery_caption">
          Casas, gaiolas e aquários
        </div>
       </div>

       <div className="gallery_container">
        <a href="produtos.html">
          <img src="images/dog-leash.jpg" alt="Filhote de cachorro com coleira" className="gallery"/>
        </a>
        <div className="gallery_caption">
          Coleiras e acessórios 
        </div>
       </div>

      <div className="clearfix"></div>
      <p> Possuimos tudo o que é necessário para o conforto e saúde do seu pet. Aqui você também encontrará <b>roupas, comida e muito mais!</b></p>
      <br/>

      <h2>Serviços oferecidos</h2>
      <p> Nossos profissionais estão prontos para atendê-lo com atenção e qualidade. Agende seu serviço agora, aqui mesmo pelo site!</p>
       <img src="images/vet.jpg" alt="Filhote de cachorro com veterinário" className="float_right_img"/><br/>
      <p><b>Nós fornecemos:</b></p>
      <ul style={{marginLeft: 80+'px'}}><li>Banho e tosa</li>
      <li>Consulta veterinária</li>
      <li>Exames</li>
      <li>Vacinas</li></ul>
      <br/>

      <p><Button text="Saiba mais..."/></p>

      <br/> <br/> <br/> <br/> <br/>
      <div className="clearfix"></div>

      
    </section>
    );
  }
}

export default HomePage;