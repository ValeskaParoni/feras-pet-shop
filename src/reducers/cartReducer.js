
const initialState = {
  cart: []
}

const cartReducer = (state = initialState, action) => {

    switch(action.type) {
      case 'ADD_TO_CART':{
        const idx = state.cart.findIndex(product => product.id == action.product.id)

        const newCart = [...state.cart]
        if (idx==-1){
          newCart.push({
            ...action.product,
            count: 1,
          })
        } else {
          newCart[idx].count++
        }

        return {
          ...state,
          cart: newCart,
        }
      }

      case 'DECREASE_CART_QUANTITY':{
        const idx = state.cart.findIndex(product => product.id == action.product.id)

        const newCart = [...state.cart]
        if (idx>=0){
          if (newCart[idx].count > 1){
            newCart[idx].count--
          } else {
            newCart.splice(idx, 1)
          }
        }

        return {
          ...state,
          cart: newCart,
        }
      }

      case 'EMPTY_CART': {
        return {
          cart: []
        }
      }

      default:
          return state;
    }
}

export default cartReducer