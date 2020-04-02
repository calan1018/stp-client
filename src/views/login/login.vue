<template>
  <div style="width:50%; margin-top : 50px; margin-left : 350px;">
    <div style="margin-top : 50px;">
      <form name="signUpForm" class="form" role="form" >
        <legend>세이퍼트 로그인</legend>                    
        <br>        
        <input type="password" name="login" class="form-control input-lg" placeholder="아이디" />
        <br>
        <input type="password" name="password" class="form-control input-lg" placeholder="패스워드" />
        <br>
        <br>
        <button class="btn btn-lg btn-primary btn-block signup-btn" v-on:click="fn_ok" >로그인</button>
        <br>
        <br>
      </form>
    </div>    
  </div>
</template>

<script>
  export default {
    data() {
      return {
       
      }
    },
    methods: {
        fn_ok() {
          alert("로그인 되었습니다.");
            this.$router.push('/');
        }
    }
  }
</script>
