<template>
  <div id="postcode">
    <DaumPostcode :on-complete="handleAddress" />
  </div>
</template>

<script>
import DaumPostcode from "vuejs-daum-postcode";

export default {
  name: "postcode",
  components: {
    DaumPostcode
  },
  methods: {
    handleAddress(data) {
      let fullAddress = data.address;
      let extraAddress = "";
      if (data.addressType === "R") {
        if (data.bname !== "") {
          extraAddress += data.bname;
        }
        if (data.buildingName !== "") {
          extraAddress +=
            extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
      }

      // 컨포넌트를 호출한 부모 함수를 호출하면서 data 를 넘겨준다.
      this.$emit("common", data);
      // 레이어 팝업을 스스로 닫는다.
      this.$emit("close");
    }
  }
};
</script>
