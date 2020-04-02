<template>
  <div>
    <form name="form_chk" method="post">
      <input type="hidden" name="m" value="checkplusSerivce" />
      <input type="hidden" name="EncodeData" value="" />
    </form>
  </div>
</template>

<script>
import http from "@/api/http";
export default {
  data() {
    return {};
  },
  created() {
    this.fn_phoneVerify();
  },
  methods: {
    async fn_phoneVerify() {
      await http
        .post("app/signUp/phoneVerifyInit")
        .then(response => {
          if (response.data.result.iReturn === "0") {
            document.form_chk.action =
            "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb";
            // document.form_chk.action =
            //   "http://localhost/app/signUp/phoneVerifySuccess";
            document.form_chk.EncodeData.value = response.data.result.sEncData;
            document.form_chk.target = "popupChk";
            document.form_chk.submit();
          } else {
            alert(response.data.resultMsg);
          }
        })
        .catch(error => {
          alert(error.response.data.resultMsg);
          self.close();
        });
    }
  }
};
</script>
