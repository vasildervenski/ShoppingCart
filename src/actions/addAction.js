import { ADD_PRODUCT_TO_BASKET } from "./types";

export const addToBasket = (productName) => {
  return (dispatch) => {
    // console.log("addAction.js");
    dispatch({
      type: ADD_PRODUCT_TO_BASKET,
      payload: productName
    });
  };
};
