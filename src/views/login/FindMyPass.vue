<template>
  <div>
    <div
      v-if="chooiseSearch"
      style="width:50%; margin-top : 50px; margin-left : 350px;"
    >
      <h1>비밀번호 찾기</h1>
      <b-form-group label="비밀번호 찾기 유형을 선택해주세요.">
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

      <div class="row">
        <div class="col-xs-6 col-md-6">
          <input
            style="margin-left:115px;"
            :disabled="true"
            v-model="phone"
            type="text"
            class="form-control input-lg"
            placeholder="휴대폰 번호"
          />
        </div>
        <b-button
          variant="success"
          :disabled="pvb"
          v-model="phoneVeifyText"
          @click="fn_phoneVerify"
          style="margin-left : 110px;"
          >본인인증필요</b-button
        >
      </div>

      <b-row>
        <b-form-input
          style="margin-left:130px; margin-top: 15px;width:50%;"
          placeholder="이메일 주소 입력"
          :disabled="esi"
          v-model="email"
        ></b-form-input>
        <b-button
          style="margin-left:15px;margin-top: 15px"
          variant="primary"
          @click="fn_emailCodeSend"
          id="emailSendButton"
          :disabled="esb"
          >{{ emailSendButtonText }}</b-button
        >
      </b-row>

      <b-row>
        <b-input-group class="mt-3" style="margin-left:130px; width:50%">
          <b-form-input
            placeholder="인증코드 입력"
            :disabled="eci"
            v-model="emailVerifyCode"
          ></b-form-input>
          <b-input-group-append>
            <b-button variant="primary" @click="fn_emailVerify" :disabled="csb"
              >코드제출ㅤ</b-button
            >
          </b-input-group-append>
          <br />
        </b-input-group>
      </b-row>
    </div>

    <div v-if="resultSearch">당신의 이메일은 : {{ resultMyEmail }} 입니다.</div>

    <input style="visibility:hidden" id="encrData" />    
    <button
      id="phoneVerifySuccessButton"
      style="visibility:hidden"
      @click="fn_phoneVerify_result"
    />
  </div>
</template>

<script>
import util from "@/js/util"; // util 함수가 들어있는 js
import { emailCodeSend, emailVerify, phoneVerify } from "@/api/certification"; // 인증관련 API 를 정의한 js
import { findMyEmail, findMyPass } from "@/api/member"; // 사용자 관련 API 를 정의한 js

export default {
  data: function() {
    return {
      //button disable controll
      esb: true, //이메일전송 버튼
      csb: true, //이메일코드전송 버튼
      pvb: false, //휴대폰인증 버튼

      //input disable controll
      esi: true, //이메일 입력창
      eci: true, //이메일 코드 입력 창

      email: "", // 이메일
      emailVerifyCode: "", // 이메일 인증 코드
      phoneVeifyText: "본인인증필요",
      emailSendButtonText: "이메일인증",
      encrData: "", // 핸드폰 인증 data
      name: "", // 이름
      phone: "", // 핸드폰 번호 01011112222

      selected: "individual",
      chooiseSearch: true,
      resultSearch: false

      
      
    };
  },
  methods: {
    fn_phoneVerify() {
      if (this.selected == "individual") {
        // 핸드폰 인증 시 Nice 본인인증 창을 띄운다.
        // window.open(
        //   "/popup",
        //   "popupChk",
        //   "width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no"
        // );
        this.fn_phoneVerify_result();
      } else {
        alert("준비중 입니다.");
      }
    },
    // 핸드폰 인증 후 본인인증이 완료 되었는지 체크 함수.
    fn_phoneVerify_result() {
      // axios 내부에서의 this 는 윈도우 객체를 참조하기 때문에
      // this 를 vm 객체에 넣어두고 재사용한다.
      let vm = this;

      // 인증코드 Param
      // this.encrData = document.getElementById("encrData").value;
      console.log('1');
      this.encrData = "AgAFQlEzMDT0dIjT0QhlaRx8MjhG4gSGRxA/nkegFapFONUicqlsrDmCh807SSPerUQIKyyRE+vyVwuiu+b9E3HE6ZdtSRftdVuVwiosixlLJSuIwae7rtClNHKNtT1hKohVRrk4lNKd/wSqV5hqRnAG502JCTZZM3FUIXaRq50xmyzqvhrEr7A8PQMz/Qvgzl0h7IJPfsQeuazTadrW1g3m9m69jlxSbr8lECDmuYCjL5U19aPapKAJu4M8mjDXoEGoW68OYOK6hiX21PrL40zKWdpU0u4gPSxBGWN/71wJcJrJEVfd57fS85k6nZW2GktQ269+bhwbf3x/4kHgEZiKF4yb/fkNCJLAzlhozMOjq3xkZxkg2fv7Cf3YRsJVgzRGuC4M/Zr9ZJrhT91F9oSQkF2DuiQlkceG8/kKZQZ2S/NopFgI9pH7RhHBKjVFTE02gQpemigWZBdSqFc5IksD3DSiw6TyVGll7zu17+TKWhcU5dryd4Z8pCcX7A17yNG1FCrdzwwTDAKkmS/yvVak4u3Z4DN0dDRBquHPNA3drwx+ZWa346is12BaKZ2S+QChW1NZI/pVKn3EnziWvTVIcrvwJwaw0ZgCySvhyjZYT24EGA12B+aAcrefgHl7qgTRR6n1i0hSHhxyRB8VRDR0FOflzmIQT11nV4b+THXf5yX0JfCZxpvHHtNF3/ljrKJXm0WLH6cYUDk1Ks6FpH2MjFmhKjka";

      findMyEmail(this.encrData)
        .then(response => {
          if (response.data.result.iReturn === "0") {
            console.log('2');
            vm.phone = response.data.result.sMobileNo;
            vm.phoneVeifyText = "본인인증완료";
            vm.esi = false;
            vm.esb = false;

            vm.email = "calan@naver.com";

          } else {
            alert(response.data.resultMsg);
          }
        })
        .catch(error => {
          alert(error.response.data.resultMsg);
          // console.log("failed", error);
        });
    },    
    // 이메일 인증 코드를 요청하는 함수.
    fn_emailCodeSend: function() {
      // axios 내부에서의 this 는 윈도우 객체를 참조하기 때문에
      // this 를 vm 객체에 넣어두고 재사용한다.
      let vm = this;

      // verifyEmail 함수로 이메일 형식인지 체크.
      if (util.verifyEmail(this.email)) {
        emailCodeSend(this.email)
          .then(function(response) {
            vm.eci = false; //이메일코드 input
            vm.csb = false; //이메일코드전송 button
            if (response.data.code === "S001") {
              //alert(response.data.resultMsg);
              alert(
                "인증 메일을 발송 하였습니다. 메일 확인 후 인증 번호를 입력해주세요."
              );
              vm.emailSendButtonText = "전송완료"; //이메일인증버튼 텍스트.
            }
          })
          .catch(error => {
            //alert(error.response.data.resultMsg);
            alert("인증코드 발신에 실패 하였습니다. 관리자에게 문의 해주세요.");
          });
      } else {
        alert("이메일 형식을 다시 확인 해 주세요.");
      }
    },
    // 이메일 인증 번호를 보내서 확인하는 함수.
    fn_emailVerify() {
      // axios 내부에서의 this 는 윈도우 객체를 참조하기 때문에
      // this 를 vm 객체에 넣어두고 재사용한다.
      let vm = this;

      emailVerify(this.email, this.emailVerifyCode)
        .then(function(response) {
          vm.esi = true; //이메일 input
          vm.esb = true; //이메일전송 button
          vm.eci = true; //이메일코드 input
          vm.csb = true; //이메일코드전송 button
          vm.pvb = false; //휴대폰인증하기 버튼 활성화
          //alert(response.data.resultMsg);
          alert("인증 되었습니다.");
          this.fn_findMyPass();
        })
        .catch(error => {
          // alert(error.response.data.resultMsg);
          alert(
            "인증번호를 잘못 입력하였거나, 시간이 만료되었습니다. 다시 확인해주세요."
          );
        });
    },
    // 인증을 모두 끝낸 상태에서 이메일을 통해서 비밀번호를 초기화한다.
    fn_findMyPass(){

      // axios 내부에서의 this 는 윈도우 객체를 참조하기 때문에
      // this 를 vm 객체에 넣어두고 재사용한다.
      let vm = this;

      findMyPass(this.email)
        .then(function(response) {
          
          console.log(response.data)
          
        })
        .catch(error => {
          // alert(error.response.data.resultMsg);
          alert(
            "인증번호를 잘못 입력하였거나, 시간이 만료되었습니다. 다시 확인해주세요."
          );
        });

    }
  }
};
</script>
