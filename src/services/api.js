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
            return responseHandler((await api_instance.get('property')).data);            
        } catch (e) {
            console.log(e)
        }

    },
    addProperty: async (responseHandler,item) => {
        try {
            return responseHandler((await api_instance.post('property',item)).data);
        } catch (e) {
            console.log(e)
        }
    },
    updateProperty: async (responseHandler,item) => {
        try {
            return responseHandler((await api_instance.put(`property/${item.id}`,item)).data);
        } catch (e) {
            console.log(e)
        }
    },

    addLabel: async (responseHandler,item) => {
        try {
            return responseHandler((await api_instance.post('labels',item)).data);
        } catch (e) {
            console.log(e)
        }
    },
    getLabels: async (responseHandler,item) => {
        try {
            return responseHandler((await api_instance.get('labels',item)).data);
        } catch (e) {
            console.log(e)
        }
    }

}
