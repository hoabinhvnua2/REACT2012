import axios from "axios";
import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { REAL_API } from "../constants/RealApi";
import Spinner from 'react-bootstrap/Spinner'
import "./Products.scss";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      isLoading: false
    };
  }

  handleAPi = async () => {
    try {
      const resp = await axios.get(`${REAL_API}list-product`);
      this.setState({ products: resp?.data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.setState({
        isLoading: true
    })
    //   sử dụng promise
    // axios
    //   .get(`${REAL_API}list-product`)
    //   .then((result) => this.setState({ products: result.data }))
    //   .then((err) => console.log(err));

    // sử async await
    this.handleAPi();
  }

  render() {
    const { products, isLoading } = this.state;
    console.log(products);
    return (
      <div>
        <p>Tôi là Products</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((item, index) => (
                <tr key={index.toString()}>
                  <td>{index + 1}</td>
                  <td>{item.product_name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        {isLoading && <Spinner animation="border" variant="primary" />}
      </div>
    );
  }
}

export default Products;
