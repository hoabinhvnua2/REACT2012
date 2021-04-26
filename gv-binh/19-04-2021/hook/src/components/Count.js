import React, { useContext, useState } from "react";
import { CounterContext } from "../common/CountContext";

const Count = () => {
  const {state, dispatch} = useContext(CounterContext);
  return (
    <div>
      <p>xin chào</p>
      <p>{state.count}</p>
      <button onClick={() => dispatch({type: 'cong'})}>+</button>
      <button onClick={() => dispatch({type: 'tru'})}>-</button>
      {/* <p>{users}</p>
            <p>{ count }</p>
            <button onClick={handleCong}>+</button>
            <button onClick={handleTru}>-</button> */}
    </div>
  );
};

export default Count;
