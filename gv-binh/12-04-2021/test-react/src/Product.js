import React, { useState } from "react";
import Customer from "./Customer";

// Trong react tồn tại 2 loại component
// 1 là class component => nếu component có state thì sử dụng class (stateful component)
// 2 là function component => nếu ko có state thì sử dụng function (stateless component)

// từ bản 16.8 đổ về đây
// tạo ra hook và hướng người dùng sử dụng theo function component

const Product = (props) => {
  console.log("props", props);
  // props là gì? => dùng để truyền state từ cha sang con

  // state là trạng thái của component,
  const [result, setResult] = useState(0); //result là state

  const data = [
    {
      product_name: "Iphone",
    },
    {
      product_name: "Iphone1",
    },
    {
      product_name: "Iphone 2",
    },
    {
      product_name: "Iphone  3",
    },
    {
      product_name: "Iphone 4",
    },
    {
      product_name: "Iphone 5",
    },
  ];
  return (
    <div>
      <p>Xin chào {props.last}</p>
      <p>{result}</p>

      {result <= 0 ? (
        <button onClick={() => setResult(result + 1)}>+</button>
      ) : (
        <>
          <button onClick={() => setResult(result + 1)}>+</button>
          <button onClick={() => setResult(result - 1)}>-</button>
        </>
      )}

      {data.map((item, index) => (
        <p key={index.toString()}>{item.product_name}</p>
      ))}
    </div>
  );
};

export default Product;
