import axiosClient from './axiosClient';
class LoginApi {
    PostAll = (params) => {
        const url = '/signin.php'
        return axiosClient.post(url, params);
    };
    Logout = (params)=>{
        const url= '/signout.php'
        return axiosClient.post(url, params);
    }
}
const loginApi = new LoginApi();
export default loginApi;