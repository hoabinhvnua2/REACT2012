import React from 'react'
import "./App.scss";
// import { useState } from "react";
// import Product, { Products } from "./component/Product";
import Products from './component/Products';
import SignIn11 from './component/SignIn';
import  Count from './component/Count';

export const CounterContext = React.createContext(0)

function App() {
  return (
    <div className="App">
      <CounterContext.Provider value={{count: 0, name: 'Ngoc'}}>
      {/* xin chao */}
      {/* <Product userName={'Ngoc'} age={20}/>
      <Products /> */}
      <Products />
     {/* <SignIn /> */}
      <Count />
     </CounterContext.Provider>
    </div>
  );
}

export default App;

// Class component: Từ bản 16.8 về trc thì nó dùng để khởi tạo component
// có chứa state

// Function compoent: từ 16.8 về trc thì nó dùng để khởi tạo component
// ko có state

// từ 16.8 trở về đây,cả function component và class component đều dùng để khơi tạo component
// có chứa state

// state: là trạng thái riêng của compoent, trạng thái thay đổi thì component
// se re-render

// props: cũng là trạng thái của component, nhưng dùng để truyền data từ cha vào con
// lifecycle: là vòng đời của 1 cái app

//
