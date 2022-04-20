import axiosClient from "./axiosClient";
class HistoryOrderApi {
    getHistoryOrder = (params) => {
        const url = '/order.php'
        return axiosClient.get(url, { params })
    };
}
const historyOrderApi = new HistoryOrderApi();
export default historyOrderApi;