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
		default:
			return state;
	}
}

export default productsReducer
