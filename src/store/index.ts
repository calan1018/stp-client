import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({  
  state: {
    myInfoTitle: "내정보",
    accountTitle: "계좌내역",
    investTitle: "투자내역",
    transactionTitle: "거래내역",
    customerTitle: "고객센터"
  },
  getters: {
    getMyInfoTitle(state) {
      return state.myInfoTitle
    },
    getAccountTitle(state) {
      return state.accountTitle
    },
    getInvestTitle(state) {
      return state.investTitle
    },
    getTransactionTitle(state) {
      return state.transactionTitle
    },
    getCustomerTitle(state) {
      return state.customerTitle
    }
  },
  mutations: {
    /*
    setMyInfoTitle(state, changeValue) {
      state.myInfoTitle = changeValue;
    }
    */
  },
  actions: {

  }

});
