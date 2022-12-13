import React, {useState} from "react";
import Overlay from "./components/Overlay";
import Header from "./components/Header";
import Product from "./components/Product";
import "./styles/style.css";


function App() {
  const [counter, setCounter] = useState(0);
  const [addedCart, setAddedCart] = useState(false);

  function increaseCount() {
    setCounter(counter + 1);
  }

  function decreaseCount() {
    if (counter !== 0) {
      setCounter(counter - 1);      
    }
  }

  function addCart() {
    setAddedCart(true);
  }

  function removeCart() {
    setCounter(0);
    setAddedCart(false);
  }

  return (
    <div className="App">
      <Overlay />
      <Header counter={counter} remove={removeCart} cart={addedCart} />
      <Product increase={increaseCount} decrease={decreaseCount} add={addCart} counter={counter} /> 
    </div>
  );
}

export default App;
