import React from 'react';
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (

    <footer className=" bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-gray-900 text-sm border-t pt-10" style={{
      // backgroundColor:"#ccc"
    }}>

      <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10" style={{
        padding: "10px",
      }}>
        <hr className="border-gray-600" />
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">

          <div
            className="img mb-3"
            style={{ marginTop: "-100px" }}
          >
            <img
              src="image.png"
              alt="Profile"
              style={{
                width: "200px",
                height: "auto"
              }}
            />

            <div className="flex items-center justify-center space-x-4 text-xl text-gray-800 mt-4 flex-nowrap" style={{
              maxWidth: "200px" 
            }}>
              <FaFacebookF className="mx-2" />
              <FaXTwitter className="mx-2" />
              <FaInstagram className="mx-2" />
              <FaYoutube className="mx-2" />
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3" style={{
              marginLeft: "32px"
            }}>NEED HELP?</p>
            <ul className="li space-y-2 text-gray-700">
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Return And Cancellation Policy</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 2 - ABOUT US */}
          <div>
            <p className="font-semibold mb-3" style={{
              marginLeft: "32px"
            }}>NEED HELP?</p>
            <ul className="li space-y-2 text-gray-700">
             
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Return And Cancellation Policy</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 - Join + Socials */}
          <div>
            <h4 className="font-semibold mb-3">JOIN THE VASTRAHAAT COMMUNITY</h4>
            {/* <input
              type="email"
              className="w-full border-b border-black py-2 px-1 outline-none placeholder-gray-400"
              placeholder="youremail@example.com"
            /> */}
            <p className="mt-2 text-gray-700">
              Sign up for updates on the latest VastraHaat collection, campaigns and videos.
            </p>

            {/* <h5 className="font-semibold mt-6 mb-2">FIND US ON SOCIAL</h5>
            <div className="flex items-center space-x-4 text-xl text-gray-800">
              <FaFacebookF className="mx-2" />
              <FaXTwitter className="mx-2" />
              <FaInstagram className="mx-2" />
              <FaYoutube className="mx-2" />
              <FaLinkedinIn className="mx-2" />
            </div> */}
            <h6>Do you need support? Give us a call. +91 755-062-0981</h6>
          </div>
        </div>
      </div>

      {/* Horizontal Bottom Line */}
      <hr className="border-gray-300" />
      <div className="text-center py-4 text-xs text-gray-500">
        © Copyright 2025 Vastrahaat. All rights reserved. Design by Vastrahaat Distribution By Vastrahaat
      </div>
    </footer>
  );
};

export default Footer;
