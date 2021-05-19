import axios from "axios";

const signIn = async ({ username, password }) => {
  try {
    const resp = await axios.post();
    return resp;
  } catch (error) {
    console.log(error);
  }
};

function signUp(formValues) {
    console.log(formValues)
    const request = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formValues)
      }
    
    return fetch(`/users/register`, request).then(handleResponse)
//   return axios({
//     method: "post",
//     url: "/users/register",
//     body: JSON.stringify(formValues),
//     headers: {'Content-Type': 'application/json'}
//   });
};

function handleResponse(response) {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
        //   logout();
        }
  
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
  
      return data;
    });
  }

export const authApi = {
  signIn,
  signUp,
};
