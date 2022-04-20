import axiosClient from "./axiosClient";
class RegisterApi {
    PostAll = (params) => {
        const url = '/signup.php'
        return axiosClient.post(url, params);
    };
}
const registerApi = new RegisterApi();
export default registerApi;