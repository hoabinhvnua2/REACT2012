import axios from "axios";
const getAll = async () => {
  try {
    const resp = await axios.get(
      "https://6050aa4a5346090017670332.mockapi.io/list-product"
    );
    return resp;
  } catch (error) {
    return error;
  }
};

export const productService = {
    getAll
}
