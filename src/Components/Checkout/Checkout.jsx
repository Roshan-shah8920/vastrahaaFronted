import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableProduct from '../TableProduct/TableProduct';
import axios from 'axios';
import AppContext from '../../Context/AppContext';

const Checkout = () => {
  const { cart, userAddress, url, user, clearCart } = useContext(AppContext);
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [orderId, setOrderId] = useState('');
  const navigate = useNavigate();

  // Calculate total quantity and price
  useEffect(() => {
    if (!cart || !Array.isArray(cart) || cart.length === 0 || !cart[0]?.items) return;

    let qty = 0;
    let price = 0;

    cart[0]?.items.forEach(item => {
      qty += item?.qty || 0;
      price += item?.price || 0;
    });

    setQty(qty);
    setPrice(price);
  }, [cart]);

  // Fetch order ID only when 'Proceed to Pay' is clicked
  const handlePayment = async () => {
    if (!cart || !cart[0]?.items || cart[0]?.items.length === 0) {
      alert('Cart items are not available');
      return;
    }

    const cartItems = cart[0]?.items;

    try {
      const response = await axios.post(`${url}/payment/checkout`, {
        amount: price * 100, // Amount is in paisa (INR)
        cartItems: cartItems,
        userShipping: userAddress,
      });

      setOrderId(response.data.orderId);
      loadRazorpayScript(response.data.orderId, price);
    } catch (error) {
      console.log('Error fetching order details:', error);
    }
  };

  // Load Razorpay script after payment button click
  const loadRazorpayScript = (orderId, amount) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      initiateRazorpayPayment(orderId, amount);
    };
    script.onerror = () => {
      alert('Razorpay script failed to load.');
    };
    document.body.appendChild(script);
  };

  // Initiate Razorpay payment
  const initiateRazorpayPayment = (orderId, amount) => {
    const options = {
      key: 'rzp_test_gHH711O4gcSjCq', // Enter your Razorpay Key ID here
      amount: amount * 100, // Amount in paisa
      currency: 'INR',
      name: 'Web Dev Mastery',
      description: 'Web Dev Mastery Payment',
      order_id: orderId,
      handler: async (response) => {
        const paymentData = {
          orderId: response.razorpay_order_id,
          paymentId: response.razorpay_payment_id,
          signature: response.razorpay_signature,
          amount: amount,
          orderItems: cart[0]?.items, // Send cart items
          userId: user._id,
          userShipping: userAddress,
        };

        try {
          const paymentResponse = await axios.post(`${url}/payment/verify-payment`, paymentData);
          if (paymentResponse.status === 200) {
            alert(`Payment Successful!\nOrder ID: ${response.razorpay_order_id}\nPayment ID: ${response.razorpay_payment_id}`);
            navigate('/orderconfirmation'); // Redirect to order confirmation page
            clearCart(); // Clear cart after payment success
          }
        } catch (error) {
          console.log('Payment processing failed', error);
        }
      },
      prefill: {
        name: user?.fullName,
        email: user?.email,
        contact: user?.phoneNumber,
      },
      theme: {
        color: '#F37254',
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <>
      <h1 className="text-center">Order Summary</h1>
      <div className="container my-3">
        <table className="table table-bordered border-primary bg-dark">
          <thead className="bg-dark">
            <tr>
              <th scope="col" className="bg-dark text-light text-center">Product Details</th>
              <th scope="col" className="bg-dark text-light text-center">Shipping Address</th>
            </tr>
          </thead>
          <tbody className="bg-dark">
            <tr>
              <td className="bg-dark text-light">
                <TableProduct cart={cart} />
              </td>
              <td className="bg-dark text-light">
                <ul style={{ fontWeight: 'bold' }}>
                  <li>Name: {userAddress?.fullName}</li>
                  <li>Phone: {userAddress?.phoneNumber}</li>
                  <li>Country: {userAddress?.country}</li>
                  <li>State: {userAddress?.state}</li>
                  <li>PinCode: {userAddress?.pincode}</li>
                  <li>Address: {userAddress?.address}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container text-center my-5">
        <button
          className="btn btn-secondary btn-lg mt-3"
          onClick={handlePayment} // Trigger the payment process on click
        >
          Proceed to Pay
        </button>
      </div>
    </>
  );
};

export default Checkout;
