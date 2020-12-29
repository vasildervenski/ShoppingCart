import {
  ADD_PRODUCT_TO_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  PRODUCT_REMOVED
} from "../actions/types";

const initialState = {
  basketCount: 0,
  cartCost: 0,
  products: {
    greyTshirt: {
      name: "Grey Tshirt",
      tagName: "greyTshirt",
      price: 12.0,
      numbers: 0,
      inCart: false
    },
    greyHoddie: {
      name: "Grey Hoddie",
      tagName: "greyHoddie",
      price: 35.0,
      numbers: 0,
      inCart: false
    },
    blackTshirt: {
      name: "Black Tshirt",
      tagName: "blackTshirt",
      price: 14.0,
      numbers: 0,
      inCart: false
    },
    blackHoddie: {
      name: "Black Hoddie",
      tagName: "blackHoddie",
      price: 35.0,
      numbers: 0,
      inCart: false
    }
  }
};
let productSelected = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET:
      console.log("State", state);
      productSelected = { ...state.products[action.payload] };
      //console.log(addQuantity);
      productSelected.numbers += 1;
      productSelected.inCart = true;
      return {
        ...state,
        basketCount: state.basketCount + 1,
        cartCost: state.cartCost + state.products[action.payload].price,

        products: {
          ...state.products,
          [action.payload]: productSelected
        }
      };
    // case GET_PRODUCT_COUNT_IN_BASKET:
    //   return {
    //     ...state
    //   };
    case INCREASE_QUANTITY:
      let productIncrease = { ...state.products[action.payload] };
      productIncrease.numbers += 1;
      return {
        ...state,
        basketCount: state.basketCount + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productIncrease
        }
      };

    case DECREASE_QUANTITY:
      let productDecrease = { ...state.products[action.payload] };

      productDecrease.numbers -= 1;

      return {
        ...state,
        basketCount: state.basketCount - 1,
        cartCost: state.cartCost - state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productDecrease
        }
      };

    case PRODUCT_REMOVED:
      let productRemove = { ...state.products[action.payload] };
      productRemove.numbers = 0;
      productRemove.inCart = false;
      return {
        ...state,
        basketCount: state.basketCount - state.products[action.payload].numbers,
        cartCost:
          state.cartCost -
          state.products[action.payload].price *
            state.products[action.payload].numbers,
        products: {
          ...state.products,
          [action.payload]: productRemove
        }
      };

    default:
      return state;
  }
};
