import { PRODUCT_REMOVED } from "./types";

export const productRemoved = (product) => {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_REMOVED,
      payload: product
    });
  };
};
