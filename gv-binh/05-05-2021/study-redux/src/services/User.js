import axios from "axios";
const getUser = async () => {
  try {
    const resp = await axios.get(
      "https://6050aa4a5346090017670332.mockapi.io/user"
    );
    return resp;
  } catch (error) {
    return error;
  }
};

export const userService = {
    getUser
}