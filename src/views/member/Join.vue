<template>
  <div
    style="width:50%; margin-top : 50px; margin-left : 350px;"
    id="joinTemplate"
  >
    <div style="margin-top : 50px;">
      <legend>세이퍼트 통합계정 정보 입력</legend>
      <!-- <div class="row">
          <div class="col-xs-6 col-md-6">
            <input style="width:100%;" type="text" class="form-control input-lg" placeholder="아이디" />  
          </div>          
          <b-button variant="success" v-on:click="fn_ok()" style="margin-left : 30px;" >중복확인</b-button>
        </div>
        <br>        
        <input type="password"  class="form-control input-lg" placeholder="패스워드" />
        <br>
        <input type="password" class="form-control input-lg" placeholder="패스워드 재입력" />
        <br> -->

      <b-row>
        <b-form-input
          style="margin-left:15px; width:50%"
          placeholder="이메일 주소 입력"
          :disabled="esi"
          v-model="email"
        ></b-form-input>
        <b-input-group-append>
          <b-button
            style="margin-left:15px;"
            variant="primary"
            @click="fn_emailCodeSend"
            id="emailSendButton"
            :disabled="esb"
            >{{ emailSendButtonText }}</b-button
          >
        </b-input-group-append>
      </b-row>
      <b-row>
        <b-input-group class="mt-3" style="margin-left:15px; width:50%">
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
      <b-row>
        <b-input-group class="mt-3" style="margin-left:15px; width:80%">
          <b-form-input
            placeholder="비밀번호 입력"
            v-model="passWord"
          ></b-form-input>
          <br />
          <b-form-input
            placeholder="비밀번호 재입력"
            v-model="re_passWord"
          ></b-form-input>
          <br />
        </b-input-group>
      </b-row>
      <br />
      <div class="row">
        <div class="col-xs-6 col-md-6">
          <input
            :disabled="true"
            v-model="phone"
            style="width:100%;"
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
          style="margin-left : 30px;"
          >본인인증필요</b-button
        >
      </div>
      <br />
      <b-row>
        <input
          :disabled="true"
          v-model="name"
          style="width:30%; margin-left: 15px;"
          type="text"
          class="form-control input-lg"
          placeholder="이름"
        />
        <span style="margin-top:5px; margin-right:10px; margin-left : 10px;"
          >생년월일 :
        </span>
        <b-form-select
          v-model="selected1"
          :options="options1"
          style="width:13%;"
        ></b-form-select>
        <span style="margin-top:5px; margin-right:10px; margin-left : 10px;"
          >년</span
        >
        <b-form-select
          v-model="selected2"
          :options="options2"
          style="width:10%;"
        ></b-form-select>
        <span style="margin-top:5px; margin-right:10px; margin-left : 10px;"
          >월</span
        >
        <b-form-select
          v-model="selected3"
          :options="options3"
          style="width:10%;"
        ></b-form-select>
        <span style="margin-top:5px; margin-right:10px; margin-left : 10px;"
          >일</span
        >
      </b-row>
      <br />

      <b-row>
        <input
          v-model="zonecode"
          :disabled="true"
          style="width:20%; margin-left: 15px;"
          type="text"
          class="form-control input-lg"
          placeholder="우편번호"
        />
        <input
          v-model="address"
          :disabled="true"
          style="width:50%; margin-left: 10px;"
          type="text"
          class="form-control input-lg"
          placeholder="상세주소"
        />
        <b-button
          variant="success"
          v-on:click="fn_daumPostcode()"
          style="margin-left : 30px;"
          >우편번호조회</b-button
        >
      </b-row>
      <br />
      <input
        type="text"
        class="form-control input-lg"
        placeholder="상세 주소"
      />
      <br />
      <b-form-select
        v-model="selected5"
        :options="options5"
        style="width:100%;"
      ></b-form-select>

      <br />
      <br />
      <br />
      <button
        class="btn btn-lg btn-primary btn-block signup-btn"
        v-on:click="fn_joinUser"
      >
        회원가입
      </button>
      <br />
      <br />

      <row>
        <modals-container @common="common" />
      </row>

      <input style="visibility:hidden" id="encrData" />
      <input style="visibility:hidden" id="phoneVeifyText" />
      <button
        id="phoneVerifySuccessButton"
        style="visibility:hidden"
        @click="fn_phoneVerify_result"
      />
    </div>
  </div>
</template>

<script>
import postCode from "./DaumPostCode"; // 다음 주소 API 컨포넌트
import util from "@/js/util"; // util 함수가 들어있는 js
import { emailCodeSend, emailVerify, phoneVerify } from "@/api/certification"; // 인증관련 API 를 정의한 js

export default {
  name: "joinTemplate",
  data() {
    return {
      //button disable controll
      esb: false, //이메일전송 버튼
      csb: true, //이메일코드전송 버튼
      pvb: true, //휴대폰인증 버튼
      //input disable controll
      esi: false, //이메일 입력창
      eci: true, //이메일 코드 입력 창

      //parameter
      email: "", // 이메일
      emailVerifyCode: "", // 이메일 인증 코드
      phoneVeifyText: "본인인증필요",
      emailSendButtonText: "이메일인증",
      encrData: "", // 핸드폰 인증 data
      name: "", // 이름
      phone: "", // 핸드폰 번호 01011112222
      address: "", // 주소
      zonecode: "", // 우편번호

      selected1: null,
      options1: [
        { value: null, text: "1985" },
        { value: "a", text: "1986" },
        { value: "a", text: "1987" }
      ],
      selected2: null,
      options2: [
        { value: null, text: "10" },
        { value: "a", text: "11" },
        { value: "a", text: "12" }
      ],
      selected3: null,
      options3: [
        { value: null, text: "10" },
        { value: "a", text: "11" },
        { value: "a", text: "21" }
      ],
      selected4: null,
      options4: [
        { value: null, text: "이메일을 선택해주세요." },
        { value: "a", text: "naver.com" },
        { value: "a", text: "daum.net" }
      ],
      selected5: null,
      options5: [
        { value: null, text: "회원 등급 선택" },
        { value: "a", text: "일반투자자" },
        { value: "a", text: "기업투자자" }
      ]
    };
  },
  methods: {
    fn_joinUser() {
      alert("축하합니다! 회원가입이 완료 되었습니다.");
      var delConfirm = confirm(
        "세이퍼트 계좌 조회 시, 계좌를 연동 할 수 있습니다. 연동을 진행 하시겠습니까?"
      );
      if (delConfirm) {
        this.$router.push("/member/myAccount");
      } else {
        this.$router.push("/login");
      }
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
        })
        .catch(error => {
          // alert(error.response.data.resultMsg);
          alert(
            "인증번호를 잘못 입력하였거나, 시간이 만료되었습니다. 다시 확인해주세요."
          );
        });
    },

    // 핸드폰 인증 시 Nice 본인인증 창을 띄우는 함수.
    fn_phoneVerify() {
      window.open(
        "/popup",
        "popupChk",
        "width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no"
      );
    },

    // 핸드폰 인증 후 본인인증이 완료 되었는지 체크 함수.
    fn_phoneVerify_result() {
      this.encrData = document.getElementById("encrData").value;

      // axios 내부에서의 this 는 윈도우 객체를 참조하기 때문에
      // this 를 vm 객체에 넣어두고 재사용한다.
      let vm = this;

      phoneVerify(this.encrData)
        .then(response => {
          if (response.data.result.iReturn === "0") {
            vm.name = response.data.result.sName;
            vm.phone = response.data.result.sMobileNo;
            vm.phoneVeifyText = "본인인증완료";
            vm.tosTrue = true;
          } else {
            alert(response.data.resultMsg);
          }
        })
        .catch(error => {
          alert(error.response.data.resultMsg);
          // console.log("failed", error);
        });
    },

    // 다음 주소검색 레이어팝업 호출 함수.
    fn_daumPostcode() {
      // vue modal js plugin
      this.$modal.show(
        postCode, // vue modal 컴포넌트 지정
        {
          hot_table: "data",
          modal: this.$modal
        },
        {
          name: "dynamic-modal",
          width: "500px",
          height: "500px",
          draggable: true
        }
      );
    },
    // 다음 주소 API 콜백 함수
    common(data) {
      //console.log(data)
      this.zipCode = data.zonecode;
      this.address = data.address;
    }
  }
};
</script>
