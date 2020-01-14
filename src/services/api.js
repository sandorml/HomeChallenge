import axios from 'axios';
import api from '../config';

const api_instance = axios.create({
    baseURL: api
});

api_instance.interceptors.response.use(
    response => {
        return response;
    }
)


export default {


    // getProperties: (responseHandler)=>{
    //     api_instance.get('property')
    //         .then(responseHandler)
    //         .catch(err => console.log(err));
    // }

    getProperties: async (responseHandler) => {
        try {
            return responseHandler(await api_instance.get('property'));
        } catch (e) {
            console.log(e)
        }

    }

}
