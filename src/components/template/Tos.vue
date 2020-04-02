<template>
  <div>
    <H1>약관동의</H1>
    <b-card
      title="P2P플랫폼세이퍼트서비스 이용약관"
      style="max-width: 40rem;"
      class="mb-2"
    >
      <b-form-textarea
        readonly
        id="seyfert-tos"
        debounce="500"
        max-rows="5"
        size="sm"
        v-model="seyfertTos"
      ></b-form-textarea>
      <b-form-checkbox
        value="Y"
        unchecked-value="N"
        v-model="tosStatus.seyTosStatus"
      >
        모든 약관을 읽었으며 이에 동의합니다.
      </b-form-checkbox>
    </b-card>
    <b-card title="고객정보처리방침" style="max-width: 40rem;" class="mb-2">
      <b-form-textarea
        readonly
        id="person-info-tos"
        debounce="500"
        max-rows="5"
        size="sm"
        v-model="personInfoTos"
      ></b-form-textarea>
      <b-form-checkbox
        value="Y"
        unchecked-value="N"
        v-model="tosStatus.infoTosStatus"
      >
        모든 약관을 읽었으며 이에 동의합니다.
      </b-form-checkbox>
    </b-card>

    <b-button @click="fn_goto_register" variant="primary" v-if="checkStatus"
      >회원가입</b-button
    >
  </div>
</template>
<script>
import http from "@/api/http";

export default {
  data: function() {
    return {
      seyfertTos: "",
      personInfoTos: "",
      tosStatus: {
        seyTosStatus: "N",
        infoTosStatus: "N"
      },

      checkStatus: false,
      error: null
    };
  },
  created() {
    this.fn_get_init_data();
  },
  watch: {
    tosStatus: {
      handler: function() {
        if (
          this.tosStatus.infoTosStatus === "Y" &&
          this.tosStatus.seyTosStatus === "Y"
        ) {
          this.checkStatus = true;
        }
      },
      deep: true
    }
  },
  methods: {
    fn_get_init_data() {
      http
        .get("app/enumData/termsOfService")
        .then(response => {
          this.seyfertTos = response.data.result.seyfertTos;
          this.personInfoTos = response.data.result.personInfoTos;
        })
        .catch(error => {
          alert(error.response.data.resultMsg);
          // console.log("failed", error);
        });
    },
    fn_goto_register() {
      this.$emit("tosFinish", this.tosStatus);
    }
  }
};
</script>
