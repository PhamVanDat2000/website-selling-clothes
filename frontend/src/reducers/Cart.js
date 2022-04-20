
const Cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      var isSame = false;
      state.forEach(element => {
        if (element.id === action.payload.id) {
          element.qnt += 1;
          isSame = true;
        }
      });
      if (!isSame) {
        return [...state, action.payload];
      }
      return state;
    case "ADD_MUL_ITEMS":
      var isSame = false;
      state.forEach(element => {
        if (element.id === action.payload.id) {
          element.qnt += action.payload.qnt;
          isSame = true;
        }
      });
      if (!isSame) {
        return [...state, action.payload];
      }
      return state;
    case "INCREASE":
      state.forEach(element => {
        if (element.id === action.payload.id) {
          element.qnt += 1;
        }
      });
      return [...state]
    case "DECREASE":
      var isDel = false
      var newstate = state
      newstate.forEach(element => {
        if (element.id === action.payload.id) {
          element.qnt -= 1;
          if (element.qnt === 0) {
            isDel = true
          }
        }
      });
      if (isDel) {
        return state.filter(element => {
          return element.id !== action.payload.id
        })
      }
      return [...newstate]
    case "DELETE_ITEM":
      return state.filter(element => {
        return element.id !== action.payload.id
      })
    case "DELETE_CART":
      return []

    default:
      return state;
  }
};

export default Cart