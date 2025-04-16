    import React, { useState, useEffect, useContext } from 'react';
    import axios from 'axios';
    import AppContext from '../../Context/AppContext';

    const AdminOrders = () => {
    const { url } = useContext(AppContext);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
        try {
            const response = await axios.get(`${url}/admin/orders`);
            setOrders(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError('Failed to load orders');
            console.log('Error fetching orders:', error);
        }
        };

        fetchOrders();
    }, [url]);

    if (loading) {
        return <div>Loading orders...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
        <h1>Admin Orders</h1>
        <table className="table">
            <thead>
            <tr>
                <th>Order ID</th>
                <th>User ID</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {orders.map((order) => (
                <tr key={order._id}>
                <td>{order.orderId}</td>
                <td>{order.userId}</td>
                <td>{order.amount}</td>
                <td>
                    <span 
                    className={order.payStatus === 'Success' ? 'text-success' : 'text-danger'}>
                    {order.payStatus}
                    </span>
                </td>
                <td>
                    <button className="btn btn-info">View Details</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };

    export default AdminOrders;
