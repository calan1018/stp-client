import http from "./http";

/*************************************************************
                          사용자 관련 API
**************************************************************/

// 사용자 정보 조회 API
export async function userInfoApi(uid) {
  const res = await http.get("/pwh/member/get-seyfert-member-info-list", {
    params: {
      email: "",
      phoneNo: uid, //"01075888862,01065498765,01044544901"
      limit: "100"
    }
  });
  return res;
}
