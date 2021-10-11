import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: '',
        token: '',
    },
    getters: {
        getUsername: (state) => state.username,
        isLogin: (state) => state.username.length > 0,
        getToken: (state) => state.token,
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
        clearUsername(state) {
            state.username = '';
        },
        setToken(state, token) {
            state.token = token;
        }
    }
});