import http from 'axios'

export default http.create({
  baseURL: "http://localhost",
  headers: {
    "Content-Type": "application/json"
  },
  Accept: "application/json"
});
