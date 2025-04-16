import React from "react";
import "./ShippingPolicy.css";

const ShippingPolicy = () => {
  return (
    <div className="shipping-policy">
      <h1>Shipping Policy</h1>
      <section>
        <h2>Free Shipping</h2>
        <p>We offer free shipping on all orders above ₹999. For orders below ₹999, a nominal delivery charge will be applicable.</p>
      </section>

      <section>
        <h2>Delivery Timeline</h2>
        <p>Most orders are delivered within 5-7 working days depending on your location.</p>
      </section>

      <section>
        <h2>Order Tracking</h2>
        <p>Once your order is shipped, you will receive an email and SMS with the tracking details.</p>
      </section>

      <section>
        <h2>Serviceable Locations</h2>
        <p>We deliver across India. However, there might be some areas where our courier partners may not deliver.</p>
      </section>
    </div>
  );
};

export default ShippingPolicy;
