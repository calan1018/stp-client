<template>
  <div class="header">
    <div class="CorpSignUp" style="text-align: center;">
      <h1>세이퍼트 가입 이력조회(법인 테스트)</h1>
      <div style="margin:0 auto; width: 480px; border:1px">
        <b-row>
          <b-input-group class="mt-3">
            <b-form-input
              placeholder="이메일 주소 입력"
              :disabled="esi"
              v-model="email"
            ></b-form-input>
            <b-input-group-append>
              <b-button
                variant="primary"
                @click="fn_emailCodeSend"
                id="emailSendButton"
                :disabled="esb"
                >{{ emailSendButtonText }}</b-button
              >
            </b-input-group-append>
          </b-input-group>
        </b-row>
        <b-row>
          <b-input-group class="mt-3">
            <b-form-input
              placeholder="인증코드 입력"
              :disabled="eci"
              v-model="emailVerifyCode"
            ></b-form-input>
            <b-input-group-append>
              <b-button
                variant="primary"
                @click="fn_emailVerify"
                :disabled="csb"
                >코드제출ㅤ</b-button
              >
            </b-input-group-append>
          </b-input-group>
        </b-row>
        <b-row>
          <b-input-group class="mt-3">
            <b-form-input
              v-model="phoneVeifyText"
              :disabled="true"
            ></b-form-input>
            <b-input-group-append>
              <b-button
                :disabled="pvb"
                variant="primary"
                @click="fn_phoneVerify"
                >인증하기ㅤ</b-button
              >
            </b-input-group-append>
          </b-input-group>
        </b-row>
        <br /><br />
        <Tos v-if="tosTrue" @tosFinish="fn_tos_finish" />
        <Register v-if="registerTrue" :name="name" :phone="phone" />
      </div>
      <div>
        <input style="visibility:hidden" id="encrData" />
        <input style="visibility:hidden" id="phoneVeifyText" />
        <button
          id="phoneVerifySuccessButton"
          style="visibility:hidden"
          @click="fn_register"
        />
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/api/http";
import Register from "@/views/login/Register.vue";
import Tos from "@/components/template/Tos.vue";

export default {
  name: "CorpSignUp",
  components: {
    Register,
    Tos
  },
  data: function() {
    return {
      //button disable controll
      esb: false, //이메일전송 버튼
      csb: true, //이메일코드전송 버튼
      pvb: true, //휴대폰인증 버튼
      //input disable controll
      esi: false, //이메일 입력창
      eci: true, //이메일 코드 입력 창
      //components v-if controll
      registerTrue: false,
      tosTrue: false,
      //parameter
      //parameter//email verify
      email: "",
      emailVerifyCode: "",
      //parameter//phone verify
      phoneVeifyText: "본인인증필요",
      emailSendButtonText: "이메일인증",
      encrData: "",
      name: "",
      phone: "",
      //parameter//terms of service
      seyfertTos: "",
      personInfoTos: ""
    };
  },
  methods: {
    async fn_emailCodeSend() {
      await http
        .post("app/corpSignUp/emailCodeSend", {
          value: this.email
        })
        .then(response => {
          this.eci = false; //이메일코드 input
          this.csb = false; //이메일코드전송 button
          if (response.data.code === "S001") {
            alert(response.data.resultMsg);
            this.emailSendButtonText = "전송완료ㅤ";
          }
          // console.log("response", JSON.stringify(response, null, 2));
        })
        .catch(error => {
          alert(error.response.data.resultMsg);
          // console.log("failed", error);
        });
    },
    fn_emailVerify() {
      http
        .post("app/corpSignUp/emailVerify", {
          email: this.email,
          emailVerifyCode: this.emailVerifyCode
        })
        .then(response => {
          this.esi = true; //이메일 input
          this.esb = true; //이메일전송 button
          this.eci = true; //이메일코드 input
          this.csb = true; //이메일코드전송 button
          this.pvb = false; //휴대폰인증하기 버튼 활성화
          alert(response.data.resultMsg);
          // console.log("response", JSON.stringify(response, null, 2));
        })
        .catch(error => {
          alert(error.response.data.resultMsg);
          // console.log("failed", error);
        });
    },
    fn_phoneVerify() {
      window.open(
        "/popup",
        "popupChk",
        "width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no"
      );
    },
    fn_register() {
      this.encrData = document.getElementById("encrData").value;
      http
        .post("app/corpSignUp/phoneVerifySuccessSave", {
          encrData: this.encrData
        })
        .then(response => {
          if (response.data.result.iReturn === "0") {
            this.name = response.data.result.sName;
            this.phone = response.data.result.sMobileNo;
            this.phoneVeifyText = "본인인증완료";
            this.tosTrue = true;
          } else {
            alert(response.data.resultMsg);
          }
        })
        .catch(error => {
          alert(error.response.data.resultMsg);
          // console.log("failed", error);
        });
    },
    fn_tos_finish(tosStatus) {
      this.seyfertTos = tosStatus.infoTosStatus;
      this.personInfoTos = tosStatus.seyTosStatus;
      http
        .post("app/corpSignUp/tempSignUp", {
          seyfertTos: this.seyfertTos,
          personInfoTos: this.personInfoTos
        })
        .then(response => {
          this.registerTrue = true;
          this.tosTrue = false;
        })
        .catch(error => {
          alert(error.response.data.resultMsg);
          // console.log("failed", error);
        });
    }
  }
};
</script>

<style scope>
.header {
  text-align: right;
}
.SignUp {
  text-align: center;
}
</style>
