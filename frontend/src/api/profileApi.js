import axiosClient from "./axiosClient";
import { axios } from 'axios';
class ProfileApi {
    getProfile = (params) => {
        const url = '/profile.php'
        return axiosClient.get(url, { params })
    };
}
const profileApi = new ProfileApi();
export default profileApi;