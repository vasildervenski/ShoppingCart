import { INCREASE_QUANTITY, DECREASE_QUANTITY } from "./types";

export const productQuantity = (action, product) => {
  return (dispatch) => {
    dispatch({
      type: action === "decrease" ? DECREASE_QUANTITY : INCREASE_QUANTITY,
      payload: product
    });
  };
};
