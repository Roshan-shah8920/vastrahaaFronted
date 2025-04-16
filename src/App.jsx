import React, { useContext } from 'react'
import ShowProduct from './Product/Showproduct/ShowProduct'
import AppContext from './Context/AppContext'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ProductDetails from './Product/ProductDetails/ProductDetails'
import Navbar from './Components/Navbar/Navbar'
import SearchProduct from './Product/SearchProduct/SearchProduct'
import Register from './User/Register/Register'
import Login from './User/Login/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './User/Profile/Profile'
import Cart from './User/Cart/Cart'
import Address from './Components/Address/Address'
import Footer from './Components/Footer/Footer'
import OneProduct from './Product/oneProduct/OneProduct'
import MensProducts from './Product/MensProducts/MensProducts'
import WomenProducts from './Product/womenProducts/womenProducts'
import WomenShirts from './Product/WomenShirts/WomenShirts'
import MensShirts from './Product/MensShirts/MensShirts'
import Checkout from "./Components/Checkout/Checkout"
import OrderConfirmation from './Components/OrderConfirmation/OrderConfirmation'
import ShippingPolicy from './Components/ShippingPolicy/ShippingPolicy'
import ReturnsPolicy from './Components/ReturnsPolicy/ReturnsPolicy'
import ExpressDelivery from './Components/ExpressDelivery/ExpressDelivery'
import Admin from './Components/Admin/Admin'
import AdminOrders from './Components/AdminOrders/AdminOrders'


const App = () => {
 
  return (
  <Router>
    <ToastContainer />
    <Navbar/>
  <Routes>
    <Route path='/oneProduct' element={<OneProduct/>} />
    <Route path='/' element={<ShowProduct/>} />
    <Route path='/product/:id' element={<ProductDetails/>} />
    <Route path='/product/search/:term' element={<SearchProduct/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/shipping' element={<Address/>} />
    <Route path="/mens-products" element={<MensProducts />} />
    <Route path="/womens-products" element={<WomenProducts />} />
    <Route path="/womens-Shirt" element={<WomenShirts/>} />
    <Route path="/mens-Shirt" element={<MensShirts/>} />
    <Route path="/checkout" element={<Checkout/>} />
    <Route path="/orderconfirmation" element={<OrderConfirmation/>} />
    <Route path="/shipping-policy" element={<ShippingPolicy/>} />
    <Route path="/return-policy" element={<ReturnsPolicy/>} />
    <Route path="/express-delivery" element={<ExpressDelivery/>} />
    <Route path="/admin/orders" element={<Admin/>} />
    <Route path="/admin" element={<AdminOrders />} />
  </Routes>
  <Footer/>
  </Router>
  )
}

export default App