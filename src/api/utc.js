import http from "./http";

/*************************************************************
                          기타 API
**************************************************************/

// 서비스 약관 조회 API
export async function termsOfService() {
  const res = await http.get("/pwh/open/enum-data/terms-of-service");
  return res;
}
