import http from './http'

export async function userInfoApi(uid) {    
    const res = await http.get("/app/member/getSeyfertMemberInfoList", {
        params: {
            email: '',
            phoneNo: uid, //"01075888862,01065498765,01044544901" 
            limit: '100'
        }
    });
    return res;
}

