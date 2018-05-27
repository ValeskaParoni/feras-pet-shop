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

export const addNewUser = (newUser) => {
	return {
		type: "ADD_NEW_USER",
		newUser
	}
}

export const updateUser = (updatedUser) => {
	return {
		type: "EDIT_USER",
		updatedUser
	}
}

export const updatePet = (updatedPet) => {
	return {
		type: "EDIT_PET",
		updatedPet
	}
}

export const deletePet = (petId) => {
	return {
		type: "DELETE_PET",
		petId
	}
}

export const addPet = (newPet) => {
	return {
		type: "ADD_PET",
		newPet
	}
}
export const addNewProduct = (newProduct) =>{
	return {
		type: "REGISTER_PRODUCT",
		newProduct
	}
}
