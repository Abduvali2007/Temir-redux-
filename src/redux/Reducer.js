let initstate = {
  // products: JSON.parse(localStorage.getItem("product")) || [],
  productsAll: JSON.parse(localStorage.getItem("pro")) || [],
  temirCard: [],
  basket: [],
};
export const Reducer = (state = initstate, action) => {
  switch (action.type) {
    case "NEW_PRODUCT":
      let res = action.payload;
      localStorage.setItem("pro ", JSON.stringify(res));
      return { ...state, productsAll: [...state.productsAll, res] };
    case "TEMIR_CARD":
      return {
        ...state,
        temirCard: [...state.temirCard, action.payload],
      };
    case "ADD_TO_BASKET":
      // let findBasket = state.basket.find((el) => el.id === action.payload.id)
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "DELETE":
      let filterDel = state.basket.filter((el) => el.id !== action.payload.id)
      return {
        ...state,
        basket: filterDel,
      };
    default:
      return state;
  }
};
