const ordersReducer = (state = {soldProducts: []}, action) => {

  switch(action.type) {
      case 'INSERT_ORDER':{

        const products = action.products.map(product => {
          return {
            ...product,
            date: new Date()
          }
        })

        return {
          ...state,
          soldProducts: [
            ...state.soldProducts,
            ...products
          ],
        }
      }
      default:
        return state;
    }
}

export default ordersReducer
