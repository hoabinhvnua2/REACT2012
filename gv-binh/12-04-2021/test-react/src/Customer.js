import React, { Component } from "react";

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
    };
  }

  handleClickIn = () => {
    this.setState({
      sum: this.state.sum + 1,
    });
  };

  handleClickDe = () => {
    this.setState({
      sum: this.state.sum - 1,
    });
  };

  componentWillMount() {
    console.log('will mount đã chạy')
  }

  componentWillReceiveProps(netxProp, prevProp) {
    console.log('next', netxProp)
    console.log('prev', prevProp)
  }

  componentDidMount() {
    console.log('did mount đã chạy')
  }


  render() {
    console.log('render đã chạy')
    const { data } = this.props;
    return (
      <div>
        <p>Tôi là class component</p>
        {data}
      </div>
    );
  }
}

export default Customer;
