import React, { Component } from "react";


export const Products = () => {
  return <div>Tôi là function component</div>;
};

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      data: {},
    };

    console.log(this.props);
  }

  handleClickCong = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleClickTru = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    const { userName, age } = this.props;
    return (
      <div>
        <p>Tôi là: {userName} và tôi {age} tuổi</p>
        <p>{count}</p>
        <button onClick={this.handleClickCong}>+</button>
        <button onClick={this.handleClickTru}>-</button>
      </div>
    );
  }
}

export default Product;
