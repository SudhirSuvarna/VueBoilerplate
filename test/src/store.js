import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Router from './router';
import aData from '@/data/invoices.json';


Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    invoices: [],
    invoice: {},
  },
  actions: {
    loadInvoices({ commit }) {
      commit('SET_INVOICES', aData);
      /*  axios
                       .get('data/invoices.json')
                       .then(r => r.data)
                       .then((invoices) => {
                           commit('SET_INVOICES', invoices);
                       }); */
    },
    setInvoice({ commit }, [index]) {
      commit('SET_INVOICE', index);
    },
  },
  mutations: {
    SET_INVOICES(state, invoices) {
      state.invoices = invoices;
    },
    SET_INVOICE(state, index) {
      state.invoice = state.invoices[index];
      Router.replace({ name: 'invoice', hash: '#/' });
    },
  },
});
