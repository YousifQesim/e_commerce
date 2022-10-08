
import './App.css';
import { Route, Routes } from "react-router-dom";
import About from '../src/pages/About';
import Cart from '../src/pages/Cart';
import Catagories from '../src/pages/Catagories';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Product from '../src/pages/Product';
import Products from '../src/pages/Products';
import Register from '../src/pages/Register';
function App() {
  return (
    <div>
      
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<cart/>}/>
    <Route path="/catagories" element={<Catagories/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/product/:id" element={<Product/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/register" element={<Register/>}/>
  </Routes>
    </div>
  
  );
}

export default App;
