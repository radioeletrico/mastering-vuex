//json-server --watch db.json
import axios from 'axios';
import NProgress from 'nprogress'

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

apiClient.interceptors.request.use(config => {
    NProgress.start();

    return config;
});

apiClient.interceptors.response.use(response => {
    NProgress.done();

    return response;
});

export default {
    getEvents(page, perPage) {
        return apiClient.get(`/events?_page=${page}&_limit=${perPage}`);
    },
    getEvent(id) {
        return apiClient.get(`/events/${id}`);
    },
    postEvent(event) {
        return apiClient.post(`/events`, event);
    }
}