import Vue from "vue";
import Router from "vue-router";

import Popup from "../components/popup/PhoneVerify.vue";
import DaumPostCode from "../components/popup/DaumPostCode.vue";

import MyInfo from "../views/myInfo/MyInfo.vue";
import AccountInfo from "../views/account/AccountInfo.vue";
import InvertInfo from "../views/invest/InvestInfo.vue";
import TransactionInfo from "../views/transaction/TransactionInfo.vue";
import CustomerCenter from "../views/customer/CustomerCenter.vue";
import PrototypePage from "../views/prototype/PrototypePage.vue";

import Member from "../views/member/TermsOfService.vue";
import MemberJoin from "../views/member/Join.vue";
import MyAccount from "../views/member/MyAccount.vue";

import FindMyId from "../views/login/FindMyId.vue";
import FindMyPass from "../views/login/FindMyPass.vue";
import Layout from "../views/layout/Layout.vue";
import SignUp from "../views/login/SignUp.vue";
import Login from "../views/login/Login.vue";
import CorpSignUp from "../views/login/CorpSignUp.vue";



Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout
    },
    {
      path: "/signUp",
      name: "signUp",
      component: SignUp
    },
    {
      path: "/popup",
      name: "popup",
      component: Popup
    },
    {
      path: "/corpSignUp",
      name: "corpSignUp",
      component: CorpSignUp
    },
    {
      path: "/myInfo",
      name: "myInfo",
      component: MyInfo
    },
    {
      path: "/accountInfo",
      name: "accountInfo",
      component: AccountInfo
    },
    {
      path: "/invertInfo",
      name: "invertInfo",
      component: InvertInfo
    },
    {
      path: "/transactionInfo",
      name: "transactionInfo",
      component: TransactionInfo
    },
    {
      path: "/customerCenter",
      name: "customerCenter",
      component: CustomerCenter
    },
    {
      path: "/prototypePage",
      name: "prototypePage",
      component: PrototypePage
    },
    {
      path: "/member",
      name: "member",
      component: Member
    },
    {
      path: "/member/join",
      name: "join",
      component: MemberJoin
    },
    {
      path: "/member/myAccount",
      name: "myAccount",
      component: MyAccount
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/components/popup",
      name: "daumPostCode",
      component: DaumPostCode
    },
    {
      path: "/login/findMyId",
      name: "findMyId",
      component: FindMyId
    },
    {
      path: "/login/findMyPass",
      name: "findMyPass",
      component: FindMyPass
    }
  ]
});
export default router;
