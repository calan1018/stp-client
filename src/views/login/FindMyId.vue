<template>
  <div>
    <div v-if="chooiseSearch">
      <h1 style="margin-top:100px; margin-bottom:10px;">아이디 찾기</h1>
      <b-form-group label="아이디 찾기 방법을 선택해주세요.">
        <b-form-radio
          v-model="selected"
          value="individual"
          name="some-radios"
          style="margin-top:50px;"
          >개인 투자 회원</b-form-radio
        >
        <b-form-radio
          v-model="selected"
          value="corporateBody"
          name="some-radios"
          >법인 가입 회원</b-form-radio
        >
      </b-form-group>

      <div>
        <b-button variant="outline-primary" v-on:click="fn_phoneVerify"
          >인증하기</b-button
        >
      </div>
    </div>

    <div v-if="resultSearch">당신의 이메일은 : {{ resultMyEmail }} 입니다.</div>

    <input style="visibility:hidden" id="encrData" />
    <!-- <button
      id="phoneVerifySuccessButton"
      style="visibility:hidden"
      @click="fn_phoneVerify_result"
    /> -->
  </div>
</template>

<script>
import util from "@/js/util"; // util 함수가 들어있는 js
import { emailCodeSend, emailVerify, phoneVerify } from "@/api/certification"; // 인증관련 API 를 정의한 js
import { searchMyEmail } from "@/api/member"; // 사용자 관련 API 를 정의한 js

export default {
  data: function() {
    return {
      selected: "individual",
      chooiseSearch: true,
      resultSearch: false
    };
  },
  methods: {
    fn_phoneVerify() {
      if (this.selected == "individual") {
        // 핸드폰 인증 시 Nice 본인인증 창을 띄운다.
        window.open(
          "/popup",
          "popupChk",
          "width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no"
        );        
      } else {
        alert("준비중 입니다.");
      }
    },
    // 핸드폰 인증 후 본인인증이 완료 되었는지 체크 함수.
    fn_phoneVerify_result() {
      this.encrData = document.getElementById("encrData").value;

      // axios 내부에서의 this 는 윈도우 객체를 참조하기 때문에
      // this 를 vm 객체에 넣어두고 재사용한다.
      let vm = this;

      if (!this.encrData) {
        findMyEmail(this.encrData)
          .then(response => {
            alert("본인 인증이 완료 되었습니다.");

            vm.resultMyEmail = response.data.result.email;
            vm.chooiseSearch = false;
            vm.resultSearch = true;
          })
          .catch(error => {
            alert("인증에 실패 했습니다. 다시 시도 해주세요.");
          });
      } else {
        alert("인증에 실패 했습니다. 다시 시도해주세요.");
      }
    }
  }
};
</script>
