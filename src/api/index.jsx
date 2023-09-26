import axios from "axios";

const api = axios.create({
  // set default api

  baseURL: "https://a.bayamdev.my.id/public",
});

export default api;
