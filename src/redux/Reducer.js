let initstate = {
  // products: JSON.parse(localStorage.getItem("product")) || [],
  productsAll: JSON.parse(localStorage.getItem("pro")) || [],
};
export const Reducer = (state = initstate, action) => {
  switch (action.type) {
    case "NEW_PRODUCT":
      let res = action.payload;
      localStorage.setItem("pro ", JSON.stringify(res));
      return { ...state, productsAll: [...state.productsAll, res] };

    default:
      return state;
  }
};
