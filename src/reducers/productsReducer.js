const productsReducer = (state = {}, action) => {

	switch(action.type) {
		case 'SET_PRODUCT_CATALOG':
			return {
				...state,
				productCatalog: action.productCatalog,
			}

		case 'SET_PRODUCTS_CATEGORIES':
			return {
				...state,
				productsCategories: action.productsCategories,
			}
		default:
			return state
	}
}

export default productsReducer