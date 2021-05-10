import { productService } from "../../services/Product";

const getProduct = () => {
  return (dispatch) => {
    dispatch(request());
    productService
      .getAll()
      .then((x) => dispatch(success(x.data)))
      .catch((err) => console.log(err));
  };

  // eslint-disable-next-line no-unreachable
};
const request = () => ({ type: "GET_PRODUCT", payload: {} });
const success = (res) => ({ type: "GET_PRODUCT_SUCCESS", payload: res });
const errors = (err) => ({ type: "GET_PRODUCT_ERR", payload: err });

export const productAction = {
  getProduct,
};
