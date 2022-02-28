const initialState = {
  isAddedToCart: false,
};
const addToCartReducer = (state = initialState, action) => {
  //es6 arrow function
  switch (action.type) {
    case "ADD_TO_CART_SUCCESS":
      return {
        ...state,
        isAddedToCart: !state.isAddedToCart,
      };
    default:
      return state;
  }
};
export default addToCartReducer;
