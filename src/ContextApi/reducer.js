export const initialState = {
  basket: [
    {
      id: "3432432",
      title: "Tunay Uzbay YELCE",
      price: 599.95,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SX679_.jpg",
    },
  ],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // we cloned the Basket
      let newBasket = [...state.basket];

      // We checked
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id = ${action.id} as its not in basket!`
        );
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
