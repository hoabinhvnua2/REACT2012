import React, { useState } from "react";

import './style.scss'
const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
   <div></div>
  );
};

export default Home;
