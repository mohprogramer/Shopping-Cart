import './App.css';
import {Routes , Route ,Navigate } from "react-router-dom"

//Context
import ProductContextProvider from './Context/ProductContextProvider';
import CartContexProvider from './Context/CartContexProvider';

//Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Shared/Navbar';
import ShopCart from './components/ShopCart';


function App() {
  return (
    <ProductContextProvider>
      <CartContexProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/carts' element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </CartContexProvider>
    </ProductContextProvider>
  );
}

export default App;
