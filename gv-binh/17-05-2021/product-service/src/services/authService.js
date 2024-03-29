import httpClient from '../modules/core/http';

const signIn = async ({ username, password }) => {
  // httpClient.post('/users/authenticate', JSON.stringify({ username, password }))
  const request = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ username, password })
  }
  return fetch(`/users/authenticate`, request)
  .then(handleResponse)
  .then((user) => {
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  });
};

function signUp(formValues) {
    const request = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formValues)
      }
    
  return fetch(`/users/register`, request).then(handleResponse)
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
