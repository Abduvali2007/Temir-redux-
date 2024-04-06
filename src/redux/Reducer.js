let initstate = {
  // products: JSON.parse(localStorage.getItem("product")) || [],
  productsAll: JSON.parse(localStorage.getItem("pro")) || [],
  temirCard: [],
  basket: [],
  InValue: [],
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
      let filterDel = state.basket.filter((el) => el.id !== action.payload.id);
      return {
        ...state,
        basket: filterDel,
      };
    case "CHANGE_VALUE":
      return {
        ...state,
        InValue: action.payload,
      };
    case "PLUS":
      return {
        ...state,
        basket: [
          ...state.basket.map((el) =>
            el.id === action.payload.id
              ? { ...el, quantity: el.quantity + 1 }
              : el
          ),
        ],
      };
    case "MINUS":
      return {
        ...state,
        basket: [
          ...state.basket.map((el) =>
            el.id === action.payload.id
              ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
              : el
          ),
        ],
      };
    default:
      return state;
  }
};
