import React from 'react';
import Input from '../controls/Input'
import Button from '../controls/Button'



class RegisterProductForm extends React.Component{
  constructor (props, context){
    super(props, context);
  }

  render(){
    return (
      <div>
        <form>
          <b><h2>Cadastrar produto/serviço</h2></b>
          <span><b>Nome:</b> <Input type="text" name="product_name" value="" /></span><br/>
          <span><b>Descrição:</b> <textarea name="product_description" rows = "10" cols="40" ></textarea></span><br/>
          <span><b>Categoria:</b> <Input type="text" name="product_type" value="" /></span><br/>
          <span><b>Preço:</b> <Input type="number" min={0} step="any" name="product_price" value={0} /></span><br/><br/>
          <span><b>Tipo: </b>
            <Input type="radio" name="product" value="product" /> Produto 
            <Input type="radio" name="service" value="service" /> Serviço<br/>
          </span><br/>
          <span><b>Quantidade disponível</b> <Input type="number" min={0} name="" value={0} /></span><br/>
          <b>Foto: <input type="file" name="product_picture" /></b><br/>
          <Button name="cancelButton" onClick="" text="Cancelar"/>
          <Button name="saveButton" onClick="" text="Salvar"/>
        </form>
      </div>
    );
  }
}

export default RegisterProductForm;
