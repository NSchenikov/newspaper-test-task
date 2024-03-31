import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const getPosts = () => {
  const headers = {
    "Content-Type": "application/json",
  };

  return axios
    .get(`${baseUrl}/posts`, { headers: headers })
    .then((response) => {
    //   console.log(response);
      return response;
    });
};
