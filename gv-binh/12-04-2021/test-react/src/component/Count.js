import React, { Component } from 'react';
import { CounterContext } from '../App';

class Count extends Component {
    // static contextType = CounterContext
    render() {
        // let value = this.context ? this.context : 0
        return (
            <div>
                <CounterContext.Consumer>
                    {value => (
                        <p>{value.count}</p>
                    )}
                </CounterContext.Consumer>
                {/* {value} */}
            </div>
        );
    }
}

export default Count;