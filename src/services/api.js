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


    getProperties: async (responseHandler) => {
        try {
            let result = await api_instance.get('property');
            return responseHandler(result);            
        } catch (e) {
            console.log(e)
        }

    },
    addProperty: async (responseHandler,item) => {
        try {
            return responseHandler(await api_instance.post('property',item));
        } catch (e) {
            console.log(e)
        }
    },
    updateProperty: async (responseHandler,item) => {
        try {
            return responseHandler(await api_instance.put(`property/${item.id}`,item));
        } catch (e) {
            console.log(e)
        }
    },

    addLabel: async (responseHandler,item) => {
        try {
            return responseHandler(await api_instance.post('labels',item));
        } catch (e) {
            console.log(e)
        }
    },
    getLabels: async (responseHandler,item) => {
        try {
            return responseHandler(await api_instance.get('labels',item));
        } catch (e) {
            console.log(e)
        }
    }

}
