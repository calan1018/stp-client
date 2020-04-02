<template>
  <div>
    <H1>가입정보 입력</H1>
    <b-card bg-variant="light">
      <b-form inline>
        <b-row style="padding-bottom: 10px;">
          <label class="mr-sm-5" for="input-name">이름 : </label>
          <b-input
            id="input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            :disabled="true"
            v-model="name"
          ></b-input>
        </b-row>
        <b-row style="padding-bottom: 10px;">
          <label class="mr-sm-3" for="input-phone">전화번호 : </label>
          <b-input
            id="input-phone"
            class="mb-2 mr-sm-2 mb-sm-0"
            :disabled="true"
            v-model="phone"
          ></b-input>
        </b-row>
        <b-row style="padding-bottom: 10px;">
          <label class="mr-sm-3" for="bank-type">은행종류 : </label>
          <b-col cols="3" style="padding-left:0px;">
            <b-form-select
              id="bank-type"
              v-model="bnkType"
              :options="selectBnkTp"
            ></b-form-select>
          </b-col>
          <b-col style="padding-left:0px;"
            ><b-form-select
              text-field="label"
              value-field="code"
              v-model="bnkCd"
              :options="selectBnkList"
            ></b-form-select>
          </b-col>
        </b-row>
        <b-row style="padding-bottom: 10px;">
          <label class="mr-sm-3" for="input-account">계좌번호 : </label>
          <b-input
            id="input-account"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="실계좌 입력"
            v-model="bnkAccnt"
            type="number"
          ></b-input>
          <b-button variant="primary" @click="fn_saveRealAccnt"
            >실계좌등록</b-button
          >
        </b-row>
        <b-row style="padding-bottom: 10px;">
          <label class="mr-sm-3" for="input-verify-code">인증코드 : </label>
          <b-input
            id="input-verify-code"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="인증코드입력"
            v-model="verificationCode"
            type="number"
          ></b-input>
          <b-button variant="primary" @click="fn_verifyRealAccnt"
            >인증코드확인</b-button
          >
        </b-row>
      </b-form>
    </b-card>
  </div>
</template>
<script>
import http from "@/api/http";

export default {
  data: function() {
    return {
      loading: false,
      selectBnkTp: [
        { value: 0, text: "은행" },
        { value: 1, text: "증권사" }
      ],
      bnkType: "",
      bnkCode: "",
      selectBnkList: [],
      bnkCd: "",
      bnkList: [],
      bnkSaved: false,
      securitiesCoList: [],
      bnkAccnt: "",
      verificationCode: "",
      error: null
    };
  },
  props: ["name", "phone"],
  components: {},
  created() {
    this.fn_get_bank_code();
  },
  watch: {
    bnkType: function() {
      this.fn_change_bnkType();
    }
  },
  methods: {
    fn_get_bank_code() {
      http
        .get("app/enumData/realAccountBnkCd")
        .then(response => {
          this.bnkList = response.data.result.bnkList;
          this.selectBnkList = response.data.result.bnkList;
          this.securitiesCoList = response.data.result.securitiesCo;
          this.bnkType = 0;
          this.bnkCd = this.selectBnkList[0].code;
        })
        .catch(error => {
          // console.log("failed", error);
        });
    },
    fn_change_bnkType() {
      if (this.bnkType == 0) {
        this.selectBnkList = this.bnkList;
      } else {
        this.selectBnkList = this.securitiesCoList;
      }
      this.bnkCd = this.selectBnkList[0].code;
    },
    fn_saveRealAccnt() {
      http
        .post("app/signUp/bnk", {
          bnkCd: this.bnkCd,
          bnkAccnt: this.bnkAccnt
        })
        .then(response => {
          if (response.data.code == "S008") {
            this.bnkSaved = true;
            alert(response.data.resultMsg);
          } else {
            alert("실패다!!이눔아");
          }
          console.log("response", JSON.stringify(response, null, 2));
        })
        .catch(error => {
          alert("error occurd from gabriel");
          console.log("failed", error);
        });
    },
    fn_verifyRealAccnt() {
      http
        .post("app/signUp/bnk", {
          bnkCd: this.bnkCd,
          bnkAccnt: this.bnkAccnt
        })
        .then(response => {
          if (response.data.code == "S008") {
            this.bnkSaved = true;
          } else {
            alert("실패다!!이눔아");
          }
          console.log("response", JSON.stringify(response, null, 2));
        })
        .catch(error => {
          alert("error occurd from gabriel");
          console.log("failed", error);
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
  vertical-align: left;
}
body {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
}
h1,
.muted {
  color: #2c3e5099;
}
h1 {
  font-size: 26px;
  font-weight: 600;
}
.ui-input-text {
  margin: 0.4em 0;
}
.ui-mini {
  font-size: 13px;
}
</style>
