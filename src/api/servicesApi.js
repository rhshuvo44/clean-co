import axios from "axios";

const servicesApi = axios.create({
  baseURL: "https://api.example.com",
});

export default servicesApi;
