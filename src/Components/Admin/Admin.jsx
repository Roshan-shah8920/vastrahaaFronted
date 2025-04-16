import React, { useEffect, useContext } from 'react';
import AppContext from '../../Context/AppContext';

const Admin = () => {
    const { fetchAdminOrders, adminOrders } = useContext(AppContext);
    console.log("rosskfdsjfksf", adminOrders);

    useEffect(() => {
        fetchAdminOrders();
    }, []);

    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Admin - All Orders</h2>
            {adminOrders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <div className="space-y-4">
                    {adminOrders.map((order, index) => (
                        <div key={index} className="border p-4 rounded shadow">
                            <h3 className="font-semibold">Order ID: {order._id}</h3>
                            <p>User: {order.name || 'N/A'}</p>
                            <p>Total Amount: ₹{order.totalPrice}</p>
                            <p>Status: {order.paymentStatus}</p>
                            <h4 className="font-medium mt-2">Items:</h4>
                            <ul className="list-disc ml-5">
                                {order.products?.map((item, idx) => (
                                    <li key={idx}>
                                        {item.title} - Qty: {item.qty || 1} - Price: ₹{item.price}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Admin;
