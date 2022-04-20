
import axiosClient from "./axiosClient";
class CategoriesApi {
    getAll = (params) => {
        // const url = '/products';
        // return axiosClient.get(url, { params });
        // return axios.get('https://js-post-api.herokuapp.com/api/products?');
        // return axios.get('http://localhost:3000/product');
        // return axios.get('http://localhost/BTL/assignment-web/backend/api/categories.php');
        const url='/categories.php'
        return axiosClient.get(url, {})
    };
}
const categoriesApi = new CategoriesApi();
export default categoriesApi;