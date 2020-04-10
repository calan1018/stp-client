<template>
  <div style="width:50%; margin-top : 50px; margin-left : 350px;">
    <div style="margin-top : 50px;">
      <form name="signUpForm" class="form" role="form">
        <legend>세이퍼트 로그인</legend>
        <br />
        <input
          type="password"
          name="login"
          class="form-control input-lg"
          placeholder="아이디"
        />
        <br />
        <input
          type="password"
          name="password"
          class="form-control input-lg"
          placeholder="패스워드"
        />
        <br />
        <br />
        <button
          class="btn btn-lg btn-primary btn-block signup-btn"
          v-on:click="fn_login"
        >
          로그인
        </button>
        <button
          class="btn btn-lg btn-primary btn-block signup-btn"
          v-on:click="fn_logout"
          style="margin-top:10px;"
        >
          로그아웃
        </button>
        <br />
        <br />

        <b-row>
          <button
            class="btn btn-lg btn-primary btn-block signup-btn"
            v-on:click="fn_myEmail"
            style="width:40%;"
          >
            아이디 찾기
          </button>

          <button
            class="btn btn-lg btn-primary btn-block signup-btn"
            v-on:click="fn_myPass"
            style="width:40%; margin-left:10px;"
          >
            비밀번호 찾기
          </button>
        </b-row>
      </form>
    </div>        
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    fn_login() {
      this.$store.commit("login", {
        userInfoArr: ["calan@naver.com", "01041425997"]
      });
      alert("로그인 되었습니다.");
      this.$router.push("/");
    },
    fn_logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    },
    fn_myEmail() {
      this.$router.push("/login/findMyId");
    },
    fn_myPass() {
      this.$router.push("/login/findMyPass");
    }
  }
};
</script>
