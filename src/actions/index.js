export const setProductCatalog = (productCatalog) => {
	return {
		type: 'SET_PRODUCT_CATALOG',
		productCatalog,
	}
}

export const setProductsCategories = (productsCategories) => {
	return {
		type: 'SET_PRODUCTS_CATEGORIES',
		productsCategories
	}
}

export const setServicesCatalog = (servicesCatalog) => {
	return {
		type: 'SET_SERVICES_CATALOG',
		servicesCatalog
	}
}
export const setServicesCategories = (servicesCategories) => {
	return {
		type: 'SET_SERVICES_CATEGORIES',
		servicesCategories
	}
}

export const setActiveUser = (activeUser) => {
	return {
		type:'SET_ACTIVE_USER',
		activeUser
	}
}

export const logoff = () => {
	return {
		type:'LOG_OFF'
	}
}