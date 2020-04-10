import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    myInfoTitle: "내정보",
    accountTitle: "계좌내역",
    investTitle: "투자내역",
    transactionTitle: "거래내역",
    customerTitle: "고객센터",
    //userInfo
    email: "",
    phone: "",
    token: "",
    count: 0
  },
  getters: {
    getMyInfoTitle(state) {
      return state.myInfoTitle;
    },
    getAccountTitle(state) {
      return state.accountTitle;
    },
    getInvestTitle(state) {
      return state.investTitle;
    },
    getTransactionTitle(state) {
      return state.transactionTitle;
    },
    getCustomerTitle(state) {
      return state.customerTitle;
    },
    getUserInfo(state) {
      let userInfoArr = [];
      userInfoArr.push(sessionStorage.getItem("userEmail"));
      userInfoArr.push(sessionStorage.getItem("userPhone"));
      return userInfoArr;
    }
  },
  mutations: {
    login: function(state, payload) {
      sessionStorage.setItem("isLogin", "Y");
      sessionStorage.setItem("userEmail", payload.userInfoArr[1]);
      sessionStorage.setItem("userPhone", payload.userInfoArr[2]);
    },
    logout: function(state) {
      sessionStorage.clear();
      alert("로그아웃 되었습니다.");
    }
  },
  actions: {}
});
