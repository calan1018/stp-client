import http from './http'

// 이메일 인증 코드를 요청하는 API
export async function emailCodeSend(email) {       
    const res = await http.post("app/signUp/emailCodeSend", {
        value: email
    });    
    return res;
}

// 이메일 인증 번호를 보내서 확인하는 API
export async function emailVerify(email, emailVerifyCode) {
    const res = await http.post("app/signUp/emailVerify", {
        email: email,
        emailVerifyCode: emailVerifyCode
    });
    return res;
}

// 핸드폰 인증 encrData 를 전송 하는 API
export async function phoneVerify(encrData) {
    const res = await http.post("app/signUp/phoneVerifySuccessSave", {
      encrData: encrData
    })
    return res;
}
