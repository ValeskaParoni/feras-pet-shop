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

		default:
			return state;
	}
}

export default productsReducer
