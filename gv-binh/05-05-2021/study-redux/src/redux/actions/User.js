import { userService } from "../../services/User";

const getUser = () => {
  return (dispatch) => {
    dispatch(request());
    userService.getUser().then((x) => dispatch(success(x.data)))
      .catch((err) => console.log(err));
  };

  // eslint-disable-next-line no-unreachable
};
const request = () => ({ type: "GET_USER", payload: {} });
const success = (res) => ({ type: "GET_USER_SUCCESS", payload: res });
const errors = (err) => ({ type: "GET_USER_ERR", payload: err });

export const userAction = {
  getUser,
};
