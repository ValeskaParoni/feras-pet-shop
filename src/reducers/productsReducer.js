import registeredProducts from '../../resources/productCatalog.json'
const initialState = {
	"registeredProducts" : registeredProducts
}
const productsReducer = (state = initialState, action) => {

	switch(action.type) {
		case 'REGISTER_PRODUCT':
		console.log(state.registeredProducts)
		return (
						{
								...state,
								"registeredProducts": [
										...state.registeredProducts,
										action.newProduct
								]
						}
				);
		case 'EDIT_PRODUCT':
					 return {
								...state,
								products: state.registeredProducts.map(
									 (currentProduct, i) => {
												if(currentProduct.id === action.updatedProduct.id){
														return {...currentProduct, ...action.updatedProduct};
												}
												else {
														return currentProduct;
												}

										}
							 )
						}
		case 'DELETE_PRODUCT':
            return{
                ...state,
                products: state.registeredProducts.filter((product, i) => product.id !== action.productId)

            }
    case 'DECREASE_CATALOG_QUANTITY':{
      const idx = state.registeredProducts.findIndex(product => product.id == action.product.id)

      const newProducts = [...state.registeredProducts]
      if (idx>=0){
        newProducts[idx].productQuantity--
      }
      return {
        ...state,
        registeredProducts: newProducts,
      }
    }
    case 'INCREASE_CATALOG_QUANTITY':{
      const idx = state.registeredProducts.findIndex(product => product.id == action.product.id)

      const newProducts = [...state.registeredProducts]
      if (idx>=0){
        newProducts[idx].productQuantity++
      }
      return {
        ...state,
        registeredProducts: newProducts,
      }
    }


		default:
			return state;
	}
}

export default productsReducer
