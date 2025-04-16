import React from 'react';
import "./ReturnsPolicy.css";

const ReturnsPolicy = () => {
  return (
    <div className="returns-policy">
      <h1>Returns & Exchange Policy</h1>

      <section>
        <h2>Easy Returns</h2>
        <p>We offer hassle-free returns within <strong>15 days</strong> of receiving your order. Items must be unused, with tags and original packaging.</p>
      </section>

      <section>
        <h2>How to Initiate a Return</h2>
        <ol>
          <li>Go to <strong>My Orders</strong> section in your account.</li>
          <li>Select the item you want to return and click on "Return".</li>
          <li>Choose a reason and submit your return request.</li>
        </ol>
      </section>

      <section>
        <h2>Refund Process</h2>
        <p>Once your return is approved and picked up, we’ll process your refund to the original payment method within 5-7 working days.</p>
      </section>

      <section>
        <h2>Exchange Policy</h2>
        <p>Exchanges are allowed only for size issues, subject to availability.</p>
      </section>

      <section>
        <h2>Non-Returnable Items</h2>
        <p>Products like innerwear, socks, or clearance items cannot be returned or exchanged due to hygiene reasons.</p>
      </section>
    </div>
  );
};

export default ReturnsPolicy;
