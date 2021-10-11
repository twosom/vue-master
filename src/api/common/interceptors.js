import store from '@/store/index';

export function setInterceptors(instance) {
    instance.interceptors.request.use(config => {
        // request 보내기 전 설정
        console.log(config);
        config.headers.Authorization = store.state.token;
        return config
    }, error => {
        return Promise.reject(error);
    });

    instance.interceptors.response.use(response => {
        return response;
    }, error => {
        return Promise.reject(error);
    });
    return instance;
}