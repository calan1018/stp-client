<template>
  <div class="header">
    <div class="home">
      <img alt="Vue logo" src="../images/home.png" />
      <div>
        <b-button variant="primary" @click="fn_goto_page(1)" id="page_1"
          >{{ "sign up" }}
        </b-button>
        <b-button variant="primary" @click="fn_goto_page(2)" id="page_2"
          >{{ "sign up corp" }}
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    fn_goto_page(page_num) {
      if (page_num == 1) {
        this.$router.push("/signUp");
      } else if (page_num == 2) {
        this.$router.push("/corpSignUp");
      }
    }
  }
};
</script>
