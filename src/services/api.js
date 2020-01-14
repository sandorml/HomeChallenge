import axios from 'axios';
import api from '../config';

const api_instance = axios.create({
    baseURL: api
});

api_instance.interceptors.response.use(
    response => {
        console.log(response.config.url);
        console.log(response);
        return response;
    }
)


export default {

    
    getProperties: (responseHandler)=>{
        api_instance.get('property')
            .then(responseHandler)
            .catch(err => console.log(err));
    }
    
}
