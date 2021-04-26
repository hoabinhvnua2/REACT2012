import React, {Component} from 'react';

export const Products = () => {
    return (
      <div>
        Toi la function component
      </div>
    )
  }


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        console.log(this.props);
    }

    componentWillUnmount() {
        console.log('toi la will mount');
    }

  
    handleClickCong = () => {
        this.setState({
          count: this.state.count + 1
        }) 

        console.log(this.state.count);
    }
  
    render() {
        const {count} = this.state;
        return (
            <div>
                <p>Toi la: {this.props.myName}</p>
                {count}
                <br></br>
                <button onClick={this.handleClickCong}>+</button>
                <button>-</button>
            </div>
        )
    }
}

export default Product;