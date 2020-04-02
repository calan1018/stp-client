<template>
  <div class="#nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/signUp">로그인</router-link> |
    <router-link to="signUp">회원가입</router-link> |
    <router-link to="/corpSignUp">Corp Sing Up Test</router-link>
  </div>
</template>

<script>
export default {
  name: "Top"
};
</script>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
