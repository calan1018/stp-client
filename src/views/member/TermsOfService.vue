<template>
  <div class="privavy">
    <h2 style="margin-top:50px; margin-bottom : 50px;">서비스 약관</h2>
    <b-form-textarea
      style="margin-left: 350px; width:50%; height: 300px;"
      placeholder="Tall textarea"
      rows="8"
      v-model="termsOfCompany"
    >
    </b-form-textarea>

    <b-form-textarea
      style="margin-left: 350px; width:50%; height: 300px; margin-top:10px;"
      placeholder="Tall textarea"
      rows="8"
      v-model="termsOfMember"
    >
    </b-form-textarea>

    <div style="margin-top:70px;">
      <b-button variant="danger" v-on:click="fn_fail()"
        >내용을 이해 하지 못했습니다.
      </b-button>
      <b-button
        variant="success"
        v-on:click="fn_ok()"
        style="margin-left : 30px;"
        >내용을 충분히 이해했습니다.</b-button
      >
    </div>
  </div>
</template>

<script>
import { termsOfService } from "../../api/utc";

export default {
  name: "privavy",
  data() {
    return {
      termsOfCompany: "",
      termsOfMember: "",
      checked1: false,
      checked2: false
    };
  },
  created() {
    this.fn_termsOfService();
  },
  methods: {
    fn_termsOfService() {
      let vm = this;
      termsOfService().then(function(response) {
        vm.termsOfCompany = response.data.result.seyfertTos;
        vm.termsOfMember = response.data.result.personInfoTos;
      });
    },
    fn_ok() {
      this.$router.push("/member/join");
    },
    fn_fail() {
      alert("약관에 동의 하셔야 회원 가입을 할 수 있습니다.");
    }
  }
};
</script>
