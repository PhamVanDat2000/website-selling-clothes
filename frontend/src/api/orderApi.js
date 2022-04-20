import axiosClient from './axiosClient';
class OrderApi {
    PostOrder = (params) => {
        const url = '/order.php'
        return axiosClient.post(url, params);
    };
}
const orderApi = new OrderApi();
export default orderApi;