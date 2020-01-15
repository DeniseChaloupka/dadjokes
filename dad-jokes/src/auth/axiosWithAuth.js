import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://the-joker-spa.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;