import './App.css';
import Product from './Components/Product';
import User from './Components/User';


// const initialState = {
//   count: 0,
//   name: 'React'
// };

// const reduce = (state = initialState, actions) => {
//   switch (actions.type) {
//     case 'cong':
//       return { ...state, count: state.count + 1}
//     default:
//       return state
//   }
// }

function App() {

  // const store = createStore(reduce)

  // store.dispatch({ type: 'cong' })
  // console.log(store.getState())
  return (
    <div className="App">
      <Product />
      <User/>
    </div>
  );
}

export default App;
