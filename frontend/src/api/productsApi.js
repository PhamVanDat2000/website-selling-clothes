import axiosClient from "./axiosClient";
import { axios } from 'axios';
class ProductApi {
    getAll = (params) => {
        const url = '/products.php';
        return axiosClient.get(url,{params});
    };
}
const productApi = new ProductApi();
export default productApi;