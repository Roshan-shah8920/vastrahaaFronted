import React from 'react';
import "./Footer.css";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer bg-white text-dark border-top pt-4">
      <div className="">

        <div className="row gx-5 gy-4 py-4 px-3 px-md-5">
          {/* Column 1: Logo and Social */}
          <div className="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
            <img
              src="image.png"
              alt="Logo"
              style={{ width: "200px", height: "auto" }}
              className="mb-4"
            />
            <div className="d-flex gap-3 fs-5">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>

          {/* Column 2: Help Links */}
          <div className="col-12 col-md-4 text-center text-md-start" style={{ marginLeft: "80px" }}>
            <h5 className="mb-3 fw-semibold">NEED HELP?</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="/return-policy" className="text-dark text-decoration-none">Returns</a></li>
              <li><a href="/shipping-policy" className="text-dark text-decoration-none">Shipping Policy</a></li>
              <li><a href="/express-delivery" className="text-dark text-decoration-none">Delivery</a></li>
              <li><a href="/Contact" className="text-dark text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Join Community */}
          <div className="col-12 col-md-4 text-center text-md-start" style={{ marginLeft: "80px" }}>
            <h5 className="mb-3 fw-semibold">JOIN THE VASTRAHAAT COMMUNITY</h5>
            <p className="small mb-2">
              Sign up for updates on the latest VastraHaat collection, campaigns, and videos.
            </p>
            <p className="small fw-bold mb-0">Need support? Call us at</p>
            <p className="small">+91 755-062-0981</p>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <hr />
        <div className="text-center text-muted small py-2">
          © 2025 Vastrahaat. All rights reserved. Design & Distribution by Vastrahaat.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
