import React, { Children, useEffect, useState } from 'react'
import axios from "axios"
import AppContext from './AppContext'
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppState = (props) => {
    const [product, setProduct] = useState([])
    const [token, setToken] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [filterData, setFilterData] = useState([])
    const [user, setUser] = useState()
    const [cart, setCart] = useState([])
    const [reload, setReload] = useState(false)
    const [userAddress, setUserAddress] = useState([]);
    const [userOrder, setUserOrder] = useState([]);
    const [adminOrders, setAdminOrders] = useState([]);

    // const url = "http://localhost:5000/api"
    const url = "https://vastrahaat-2.onrender.com/api/product/all"

    useEffect(() => {
        const fetchProduct = async (req, res) => {
            const api = await axios.get(`${url}/product/all`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            console.log("skkk",api.data.product);
            setProduct(api.data.product)
            setFilterData(api.data.product)
            userProfile()
        }
        fetchProduct()
        userCart()
        getAddress()
        user_Order()
        fetchAdminOrders()
    }, [token, reload])

    useEffect(() => {
        let lstoken = localStorage.getItem("token")
        if (lstoken) {
            setToken(lstoken)
            setIsAuthenticated(true)
        }


    }, [])


    //register
    const register = async (name, password, email) => {
        const api = await axios.post(`${url}/user/register`, { name, password, email }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        })
        // console.log(api);
        toast(api.data.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

        return api.data;

    }

    //login
    const login = async (email, password) => {
        const api = await axios.post(`${url}/user/login`, { email, password }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        })
        toast(api.data.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        console.log("user login", api.data);
        setToken(api.data.token)
        setIsAuthenticated(true)
        localStorage.setItem("token", api.data.token)
        return api.data;

    }

    //logout
    const logout = () => {
        setIsAuthenticated(false)
        setToken(" ")
        localStorage.removeItem("token")
        toast("logout successfully ...!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    //userprofile
    const userProfile = async (req, res) => {
        const api = await axios.get(`${url}/user/profile`, {
            headers: {
                "Content-Type": "application/json",
                "Auth": token

            },
            withCredentials: true
        })
        // console.log("user",api.data.user);
        setUser(api.data.user)
    }

    //cart
    const addToCart = async (productId, title, price, qty, imgSrc) => {
        const api = await axios.post(`${url}/cart/add`, { productId, title, price, qty, imgSrc }, {
            headers: {
                "Content-Type": "application/json",
                Auth: token
            },
            withCredentials: true
        });
        setReload(!reload)
        toast.success(api.data.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    //user cart
    const userCart = async () => {
        const api = await axios.get(`${url}/cart/user`, {
            headers: {
                "Content-Type": "application/json",
                Auth: token
            },
            withCredentials: true
        })
        // console.log("user cart",api.data.cart);
        setCart(api.data.cart)
    }

    //remove qty
    const decreaseQty = async (productId, qty) => {
        const api = await axios.post(`${url}/cart/--qty`, { productId, qty }, {
            headers: {
                "Content-Type": "application/json",
                Auth: token
            },
            withCredentials: true
        })
        // console.log("user cart",api.data.cart);
        // setCart(api.data.cart)
        setReload(!reload)
        toast.success(api.data.message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    //add qty
    const removeFromCart = async (productId) => {
        const api = await axios.delete(`${url}/cart/remove/${productId}`, {
            headers: {
                "Content-Type": "application/json",
                Auth: token
            },
            withCredentials: true
        })
        // console.log("user cart",api.data.cart);
        // setCart(api.data.cart)
        setReload(!reload)
        toast.success(api.data.message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    // address
    const shippingAddress = async (fullName, address, city, state, country, pincode, phoneNumber ) => {
        const api = await axios.post(`${url}/address/add`,{fullName, address, city, state, country, pincode, phoneNumber },{
            headers: {
                "Content-Type": "application/json",
                Auth: token
            },
            withCredentials: true
        })
        setReload(!reload)
        // console.log("shipping",api);
        toast.success(api.data.message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        return api.data
    }

    //user address
    const getAddress = async (req,res) => {
        const api = await axios.get(`${url}/address/get`,{
            headers: {
                "Content-Type": "application/json",
                Auth: token
            },
            withCredentials: true
        })
        // console.log("shipping get",api.data.userAddress);
        setUserAddress(api.data.userAddress)
        return api.data
    }

    const clearCart = async () => {
        const api = await axios.delete(`${url}/cart/clear`, {
          headers: {
            "Content-Type": "application/json",
            Auth: token,
          },
          withCredentials: true,
        });
        setReload(!reload);
        // console.log("remove item from cart ",api);
        toast.success(api.data.message, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        //  setCart(api.data.cart);
        //  setUser("user cart ",api);
      };

    //clear cart
    const user_Order = async (req,res) => {
        const api = await axios.get(`${url}/payment/userorder`,{
            headers:{
                "Content-Type": "application/json",
                Auth: token
            },
            withCredentials:true
        })
        // console.log("userssssssssss",api.data);
        setUserOrder(api.data)
       }


       //admindashboard
       const fetchAdminOrders = async () => {
        try {
            const api = await axios.get(`${url}/admin/orders`, {
                headers: {
                    "Content-Type": "application/json",
                    Auth: token
                },
                withCredentials: true
            });
            setAdminOrders(api.data); // yahaan response me jo data aayega wo state me store hoga
        } catch (error) {
            console.error("Admin orders fetch error:", error);
        }
    };
    
   

    return (
        <AppContext.Provider value={{
            product,
            register,
            login,
            token,
            setIsAuthenticated,
            isAuthenticated,
            filterData,
            setFilterData,
            logout,
            user,
            addToCart,
            cart,
            decreaseQty,
            removeFromCart,
            shippingAddress,
            userAddress,
            userOrder,
            url,
            clearCart,
            fetchAdminOrders,
            adminOrders
                           

        }}>{props.children}</AppContext.Provider>
    )
}

export default AppState

