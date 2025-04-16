import React from 'react';
import { FaTruck, FaRegThumbsUp, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons
import './ExpressDelivery.css';

const ExpressDelivery = () => {
  return (
    <div className="express-delivery-container">
      <header className="express-header">
        <h1>Express Delivery</h1>
        <p>Fast, reliable, and on-time delivery right to your doorstep.</p>
      </header>

      <section className="delivery-info">
        <div className="info-item">
          <FaTruck size={80} color="#4CAF50" /> {/* Truck icon for Fast Delivery */}
          <h3>Fast Delivery</h3>
          <p>Get your orders delivered swiftly with our express delivery service.</p>
        </div>

        <div className="info-item">
          <FaRegThumbsUp size={80} color="#4CAF50" /> {/* Thumbs Up icon for Reliable Service */}
          <h3>Reliable Service</h3>
          <p>Your products will be delivered safely, and on time, every time.</p>
        </div>

        <div className="info-item">
          <FaMapMarkerAlt size={80} color="#4CAF50" /> {/* Map Marker icon for Wide Coverage */}
          <h3>Wide Coverage</h3>
          <p>Available in all major cities across the country.</p>
        </div>
      </section>

      <section className="delivery-details">
        <h2>Delivery Details</h2>
        <div className="details-list">
          <div className="detail-item">
            <h3>Next-Day Delivery</h3>
            <p>Available for most major cities across the country.</p>
          </div>

          <div className="detail-item">
            <h3>2-Day Delivery</h3>
            <p>For remote areas, expect delivery within two days.</p>
          </div>

          <div className="detail-item">
            <h3>Free Delivery</h3>
            <p>Free delivery on orders over $100.</p>
          </div>
        </div>
      </section>

      <footer className="express-footer">
        <p>For more information, contact our support team.</p>
      </footer>
    </div>
  );
}

export default ExpressDelivery;
