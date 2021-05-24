import React, { useState } from "react";

import './style.scss'
const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
   <div>Tôi là trang chủ</div>
  );
};

export default Home;
