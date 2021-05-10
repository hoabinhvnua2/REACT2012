import { withStyles } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../redux/actions/User";
import style from "./style";

const User = ({ classes }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  return (
    <div>
      <button onClick={() => dispatch(userAction.getUser())}>
        Lấy danh sách User
      </button>
      {state?.isLoading && (
        <div className={classes.customSpin}>
          <div className={classes.dotSpin}></div>
        </div>
      )}
    </div>
  );
};

export default withStyles(style)(User);
