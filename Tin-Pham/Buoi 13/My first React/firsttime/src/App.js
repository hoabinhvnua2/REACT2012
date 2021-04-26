import logo from './logo.svg';
import './App.css';
import Product, { Products } from './Components/Product';

function App() {
  return (
    <div className="App">
    I am Tin
    <Product myName='Ngoc'/>
    <Products />
    </div>
  );
}

export default App;
