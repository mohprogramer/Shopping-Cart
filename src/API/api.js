import axios from "axios"


const BASE_URL = "https://fakestoreapi.com/products";

const getProducts =async () => {
    const result = await axios.get(`${BASE_URL}`)
    return result.data;
}

export {getProducts}