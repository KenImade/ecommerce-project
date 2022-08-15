import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3500"
})

export const getProducts = async () => {
    const response = await axios.get("products")
    return response
}