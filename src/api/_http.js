import axios from 'axios'

const configs = {
  withCredentials: true,
}

if(!window.config){
  window.config = {server:''}
}

let router

function createSender(sender, validation) {

  // POST/PUT 에서만 data를 전달할 수 있고 Validation이 필요하다.
  if (validation)
    return async function (url, data, configs) {
      console.log(url)
      try {
        return await sender(url, data, configs)
      }
      catch (e) {
        switch (e.response.status) {
          // 로그인이 필요한 경우
          case 401:
            location.href = "#/login"
            break;
          // 권한이 없는 경우
          case 403:
            // alert( i18n.t("message.youNotHavePermission") )
            break;
          case 400:
            if (validation) fieldError.show(Object.assign(e.response.data, { form }))
            break;
          case 402:
            break;
          default:
            alert(e.response.data.message || e.message)
        }
        throw e
      }
    }
  else
    return async function (url, params) {

      console.log(url)
      try {
        let obj = {}
        if (params) obj.params = params
        return await sender(url, obj)
      }
      catch (e) {
        switch (e.response.status) {
          // 로그인이 필요한 경우
          case 401:
            // alert("로그인이 필요합니다.")
            location.href = "#/login"
            // router.push('/login')
            // router.replace('/login')
            break;
          // 권한이 없는 경우
          case 403:
            // alert( i18n.t("message.youNotHavePermission") )
            break;
          default:
            alert(e.response.data.message || e.message)
        }
        throw e
      }
    }
}

axios.defaults.withCredentials = true

const http = axios.create({
  baseURL: "http://localhost",
  headers: {
    "Content-Type": "application/json"
  },
  Accept: "application/json"  
  //  cache:false,
});  

export default {
  setRouter: r => router = r,
  get: createSender(http.get, true),
  post: createSender(http.post, true),
  put: createSender(http.put, true),
  delete: createSender(http.delete, true)
}
