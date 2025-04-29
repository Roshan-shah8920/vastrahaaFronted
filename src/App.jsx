import React, { useState, useEffect } from 'react';
import ShowProduct from './Product/Showproduct/ShowProduct';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';
import ProductDetails from './Product/ProductDetails/ProductDetails';
import SearchProduct from './Product/SearchProduct/SearchProduct';
import Register from './User/Register/Register';
import Login from './User/Login/Login';
import Profile from './User/Profile/Profile';
import Cart from './User/Cart/Cart';
import Address from './Components/Address/Address';
import OneProduct from './Product/oneProduct/OneProduct';
import MensProducts from './Product/MensProducts/MensProducts';
import WomenProducts from './Product/womenProducts/womenProducts';
import WomenShirts from './Product/WomenShirts/WomenShirts';
import MensShirts from './Product/MensShirts/MensShirts';
import Checkout from "./Components/Checkout/Checkout";
import OrderConfirmation from './Components/OrderConfirmation/OrderConfirmation';
import ShippingPolicy from './Components/ShippingPolicy/ShippingPolicy';
import ReturnsPolicy from './Components/ReturnsPolicy/ReturnsPolicy';
import ExpressDelivery from './Components/ExpressDelivery/ExpressDelivery';
import Admin from './Components/Admin/Admin';
import AdminOrders from './Components/AdminOrders/AdminOrders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoComponent from './Components/VideoComponent/VideoComponent';
import Contact from './User/Contact/Contact';

const App = () => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ToastContainer />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<ShowProduct />} />
            <Route path='/oneProduct' element={<OneProduct />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/product/search/:term' element={<SearchProduct />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/shipping' element={<Address />} />
            <Route path="/mens-products" element={<MensProducts />} />
            <Route path="/womens-products" element={<WomenProducts />} />
            <Route path="/womens-Shirt" element={<WomenShirts />} />
            <Route path="/mens-Shirt" element={<MensShirts />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orderconfirmation" element={<OrderConfirmation />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/return-policy" element={<ReturnsPolicy />} />
            <Route path="/express-delivery" element={<ExpressDelivery />} />
            <Route path="/admin/orders" element={<Admin />} />
            <Route path="/admin" element={<AdminOrders />} />
            <Route path="/video" element={<VideoComponent />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/left" element={</>} /> */}
            
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
