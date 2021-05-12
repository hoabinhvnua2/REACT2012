import axios from "axios";


const REAL_API = 'https://6050aa4a5346090017670332.mockapi.io/list-product';

const getProducts = async () => {
    const resp = await axios.get(REAL_API)
    return resp
}

export const productService = {
    getProducts
}

