import { withStyles } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../redux/actions/Product";
import style from "./style";

// const useStyle = () => ({
//     dotWindmill: {
//       position: "relative",
//       top: "-10px",
//       width: "10px",
//       height: "10px",
//       borderRadius: "5px",
//       backgroundColor: "#9880ff",
//       color: "#9880ff",
//       transformOrigin: `5px 15px`,
//       animation: `dotWindmill 2s infinite linear`,
//       "&:before": {
//         content: "",
//         display: "inline-block",
//         position: "absolute",
//         left: "-8.66px",
//         top: "15px",
//         width: "10px",
//         height: "10px",
//         borderRadius: "5px",
//         backgroundColor: "#9880ff",
//         color: "#9880ff",
//       },
//       "&:after": {
//         content: "",
//         display: "inline-block",
//         position: "absolute",
//         left: "8.66px",
//         top: "15px",
//         width: "10px",
//         height: "10px",
//         borderRadius: "5px",
//         backgroundColor: "#9880ff",
//         color: "#9880ff",
//       },
//     },
//     "@keyframes dotWindmill": {
//       "0%": {
//         transform: `rotateZ(0deg) translate3d(0, 0, 0)`,
//       },
//       "100%": {
//         transform: `rotateZ(720deg) translate3d(0, 0, 0)`,
//       },
//     },
//   });

const Product = ({ classes }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product);
  console.log(state);
  return (
    <div>
      <button onClick={() => dispatch(productAction.getProduct())}>
        Lấy danh sách product
      </button>
      {state?.loading && (
        <div className={classes.customSpin}>
          <div className={classes.dotSpin}></div>
        </div>
      )}
    </div>
  );
};

export default withStyles(style)(Product);
