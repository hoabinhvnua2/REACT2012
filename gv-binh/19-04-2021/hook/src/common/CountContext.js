import React, { useReducer } from "react";

const initialState = {
  count: 0,
  name: "react",
  age: 20,
};

const CounterContext = React.createContext(initialState);

const reducer = (state, action) => {
    const {type} =  action;
    switch (type) {
        case 'cong':
            return {...state, count: state.count + 1}
        case 'tru': 
            return {...state, count: state.count - 1}  
        default:
            return {...state}
    }
}

const CountProvide = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state)
    return (
        <CounterContext.Provider value={{state, dispatch}}>
            { children }
        </CounterContext.Provider>
    )
};
export {CounterContext, CountProvide}