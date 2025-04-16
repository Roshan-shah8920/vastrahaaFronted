import React, { useContext, useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import AppContext from "../../Context/AppContext";

const TableProduct = ({ cart = [] }) => {
    console.log("TableProduct Cart:", cart);
    const { decreaseQty, addToCart, removeFromCart, clearCart } = useContext(AppContext);
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);

    console.log("Cart Data:", cart);

    useEffect(() => {
        if (!cart || !Array.isArray(cart) || cart.length === 0) return;

        let qty = 0;
        let price = 0;

        cart[0]?.items?.forEach(item => {
            qty += item?.qty || 0;
            price += item?.price || 0;
        });

        setQty(qty);
        setPrice(price);
    }, [cart]);

    const cartItems = cart.length > 0 ? cart[0].items : [];

    return (
        <>
            <table className="table table-bordered border-primary bg-dark text-center">
                <thead>
                    <tr>
                        <th scope="col" className="bg-dark text-light">Product Img</th>
                        <th scope="col" className="bg-dark text-light">Title</th>
                        <th scope="col" className="bg-dark text-light">Price</th>
                        <th scope="col" className="bg-dark text-light">Qty</th>
                        <th scope="col" className="bg-dark text-light">Qty++</th>
                        <th scope="col" className="bg-dark text-light">Qty--</th>
                        <th scope="col" className="bg-dark text-light">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.length > 0 ? (
                        cartItems.map((product) => (
                            <tr key={product?._id} style={{
                                alignItems: "center",
                                textAlign: "center",
                                justifyContent: "center"

                            }}>
                                <th scope="row" className="bg-dark text-light item-center">
                                    <img src={product?.imgSrc} alt="" style={{
                                        width: "100px",
                                        border: "2px solid yellow",
                                        marginLeft: "20px"
                                    }} />
                                </th>



                                <td className="bg-dark text-light text-center align-middle">
                                    {product?.title || "N/A"}
                                </td>

                                <td className="bg-dark text-light text-center align-middle">
                                    {product?.price || "N/A"}
                                </td>

                                <td className="bg-dark text-light text-center align-middle">
                                    <button className="btn btn-success">{product?.qty}</button>
                                </td>

                                <td className="bg-dark text-light align-middle">
                                    <button className="btn btn-success" onClick={() => addToCart(product?.productId, product.title, product.price / product.qty, 1, product.imgSrc)} ><IoMdAddCircle /></button>
                                </td>
                                <td className="bg-dark text-light align-middle">
                                    <button className="btn btn-danger" onClick={() => decreaseQty(product.productId, 1)} >-</button>
                                </td>
                                <td className="bg-dark text-light align-middle">
                                    <button className="btn btn-warning " onClick={() => {
                                        if (confirm("Are You Sure,Want remove from cart")) {
                                            removeFromCart(product?.productId)

                                        }
                                    }} >Remove</button>
                                </td>



                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center text-light bg-dark">
                                Cart is Empty
                            </td>
                        </tr>
                    )}
                    <tr>
                        <th scope="row" className="bg-dark text-light"></th>
                        <td className="bg-dark text-light">
                            {" "}
                            <button
                                className="btn btn-primary"
                                style={{ fontWeight: "bold" }}
                            >
                                Total
                            </button>{" "}
                        </td>
                        <td className="bg-dark text-light">
                            {" "}
                            <button
                                className="btn btn-warning"
                                style={{ fontWeight: "bold" }}
                            >
                                {price}
                            </button>
                        </td>
                        <td className="bg-dark text-light">
                            <button className="btn btn-info" style={{ fontWeight: "bold" }}>
                                {qty}
                            </button>
                        </td>
                        <td className="bg-dark text-light"></td>
                        <td className="bg-dark text-light"></td>
                        <td className="bg-dark text-light"></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default TableProduct;