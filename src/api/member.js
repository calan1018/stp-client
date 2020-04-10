import http from "./http";

/*************************************************************
                          사용자 관련 API
**************************************************************/

// 회원 구분, 등급 코드 테이블을 조회하는 API
export async function memGubunGradeCdSet() {
  const res = await http.get("/pwh/open/enum-data/mem-gubun-grade-cd");
  return res;
}

// 회원가입 API
export async function signUpFinish(formData) {
  const res = await http.post("/pwh/open/sign-up/sign-up-finish", formData);
  return res;
}

// 회원가입 API
export async function findMyEmail(encrData) {  
  const res = await http.post("/pwh/open/sign-in/phone-verify-success-save", {
    encrData: encrData
  });
  return res;
}

// 회원가입 API
export async function findMyPass(email) {  
  const res = await http.post("/pwh/open/sign-in/reset-password", {
    email: email
  });
  return res;
}