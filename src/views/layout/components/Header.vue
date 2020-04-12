<template>
  <div>
    <div id="logo">
      <div id="menu" class="container">
        <ul>
          <li class="current_page_item">
            <a href="/" style="padding: 0px;">
              <img
                src="../../../images/logo.png"
                style="padding-right:500px;"
              />
            </a>
          </li>
          <li class="current_page_item">
            <a
              href="/login"
              accesskey="1"
              title
              style="color:gray; font-size:13px;"
              >로그인</a
            >
          </li>
          <li class="current_page_item" style="color:gray;">|</li>
          <li>
            <a
              href="/member"
              accesskey="1"
              title
              style="color:gray; font-size:13px;"
              >회원가입</a
            >
          </li>
          <li class="current_page_item" style="color:gray;">|</li>
          <li>
            <a
              href="/prototypePage"
              accesskey="1"
              title
              style="color:gray; font-size:13px;"
              >프로토타입</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div id="header">
      <div id="menu" class="container">
        <ul>
          <li class="current_page_item">
            <a href="/myInfo" accesskey="1" title>{{ getMyInfoTitle }}</a>
          </li>
          <li>
            <a href="/accountInfo" accesskey="1" title>{{ getAccountTitle }}</a>
          </li>
          <!-- <li>
            <a href="/invertInfo" accesskey="2" title>{{getInvestTitle}}</a>
          </li> -->
          <li>
            <a href="/transactionInfo" accesskey="3" title>{{
              getTransactionTitle
            }}</a>
          </li>
          <li>
            <a href="/customerCenter" accesskey="4" title>{{
              getCustomerTitle
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  computed: {
    getMyInfoTitle() {
      return this.$store.getters.getMyInfoTitle;
    },
    getAccountTitle() {
      return this.$store.getters.getAccountTitle;
    },
    getInvestTitle() {
      return this.$store.getters.getInvestTitle;
    },
    getTransactionTitle() {
      return this.$store.getters.getTransactionTitle;
    },
    getCustomerTitle() {
      return this.$store.getters.getCustomerTitle;
    }
  }
};
</script>
