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

export const updateProduct = (updatedProduct) => {
	return {
		type: "EDIT_PRODUCT",
		updatedProduct
	}
}

export const deleteProduct = (productId) => {
	return {
		type: "DELETE_PRODUCT",
		productId
	}
}

export const addToCart = (product) => {
	return {
		type: 'ADD_TO_CART',
		product
	}
}
export const decreaseCartQuantity = (product) => {
	return {
		type: 'DECREASE_CART_QUANTITY',
		product
	}
}
export const decreaseCatalogQuantity = (product) => {
	return {
		type: 'DECREASE_CATALOG_QUANTITY',
		product
	}
}
export const increaseCatalogQuantity = (product) => {
	return {
		type: 'INCREASE_CATALOG_QUANTITY',
		product
	}
}

export const emptyCart = () =>{
	return {
		type: 'EMPTY_CART'
	}
}

export const addNewService = (newService) =>{
	return {
		type: "REGISTER_SERVICE",
		newService
	}
}

export const updateService = (updatedService) => {
	return {
		type: "EDIT_SERVICE",
		updatedService
	}
}

export const deleteService = (serviceId) => {
	return {
		type: "DELETE_SERVICE",
		serviceId
	}
}

export const scheduleService = (scheduledService) =>{
	return{
		type: "SCHEDULE_SERVICE",
		scheduledService
	}
}

export const removeScheduledService = (scheduleId) =>{
	return{
		type: "REMOVE_SCHEDULED_SERVICE",
		scheduleId
	}
}

export const updateSchedule = (updatedSchedule) =>{
	return(
		type: "EDIT_SCHEDULE",
		updatedSchedule
	)
}
