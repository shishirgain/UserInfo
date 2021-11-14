import Vue from 'vue'
import Vuex from 'vuex'

import {GET_PAGE, GET_ALL_CONTENTS} from "@/api";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        page: {},
        contents: []
    },
    mutations: {
        SET_PAGE: (state, payloads) => state.page = payloads,
        SET_CONTENTS: (state, payloads) => state.contents = payloads
    },
    actions: {
        init({dispatch}) {
            dispatch('fetchPage');
        },
        fetchPage({commit}) {
            GET_PAGE().then(res => {
                if(res.done){
                    commit('SET_PAGE', res.page)
                }
            })
        },
        fetchContent({commit}) {
            GET_ALL_CONTENTS().then(res => {
                if (res.done) {
                    commit('SET_CONTENTS', res.contents)
                }
            })
        }
    },
    getters: {
        page: state => state.page
    },
    modules: {}
})
