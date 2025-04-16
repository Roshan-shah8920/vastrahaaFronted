import React, { useContext, useEffect, useState } from 'react';
import "./Cart.css";
import AppContext from '../../Context/AppContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, decreaseQty, addToCart, removeFromCart } = useContext(AppContext);
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);
    console.log("Cart Items:", cart);
    
    useEffect(() => {
        if (!cart || !Array.isArray(cart) || cart.length === 0) return;

        let totalQty = 0;
        let totalPrice = 0;

        // Loop through items in the cart to calculate the total quantity and total price
        cart[0]?.items?.forEach(item => {
            totalQty += item?.qty || 0;
            totalPrice += item?.finalPrice * item?.qty || item?.price * item?.qty || 0;  // Use finalPrice if available, and multiply by qty
        });

        setQty(totalQty);
        setPrice(totalPrice);
    }, [cart]);

    return (
        <>
            {cart?.[0]?.items?.length === 0 ? (
                <Link to={"/"} className='btn btn-primary' style={{
                    marginLeft: "80px",
                    fontWeight: "bold",
                    padding: "10px",
                    fontSize: "20px"
                }}>Continue Shopping</Link>
            ) : (
                <div className='my-5 text-center' style={{
                    fontWeight: "bolder"
                }}>
                    <button className='btn btn-info mx-3'>Total Qty: {qty}</button>
                    <button className='btn btn-warning mx-3'>Total Price: {price}</button>
                </div>
            )}

            {cart?.[0]?.items?.map((product) => (
                <div key={product._id} className='white-card container my-5 p-3'>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <div className="cart img mx-5">
                            <img src={product?.imgSrc} alt="Product" style={{
                                width: "200px",
                                borderRadius: "10px",
                                alignItems: 'center'
                            }} />
                        </div>
                        <div className="des-crip text-center">
                            <p style={{
                                fontWeight: "bold"
                            }}>{product?.title} </p>
                            <h3>{product?.finalPrice * product?.qty || product?.price * product?.qty} </h3> {/* Show total finalPrice or price based on qty */}
                            <h3>Qty: {product.qty} </h3>
                        </div>
                        <div className="cart_action">
                            <button className="btn btn-primary mx-3" style={{
                                fontWeight: "bolder"
                            }} onClick={() => decreaseQty(product.productId, 1)}>Qty--</button>

                            <button className="btn btn-info mx-3" style={{
                                fontWeight: "bolder"
                            }} onClick={() => addToCart(product?.productId, product.title, product.price / product.qty, 1, product.imgSrc)}>Qty++</button>

                            <button className="btn btn-danger mx-3" style={{
                                fontWeight: "bolder"
                            }} onClick={() => {
                                if (confirm("Are you sure you want to remove this item from cart?")) {
                                    removeFromCart(product?.productId)
                                }
                            }}>Remove</button>
                        </div>
                    </div>
                </div>
            ))}

            <div className="text-center" style={{
                marginBottom: "40px"
            }}>
                {cart?.[0]?.items?.length > 0 ? (
                    <Link to="/shipping" className="btn btn-danger mx-3" style={{
                        fontWeight: "bold",
                        width: "450px",
                        fontSize: "30px"
                    }}>
                        Checkout
                    </Link>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

export default Cart;
