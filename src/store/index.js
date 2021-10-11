import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: '',
    },
    getters: {
        getUsername: (state) => state.username,
        isLogin: (state) => state.username.length > 0,
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
        clearUsername(state) {
            state.username = '';
        }
    }
});