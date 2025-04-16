import React from 'react';
import "./FeatureSection.css";
import { FaShippingFast } from "react-icons/fa";
import { IoMdReturnLeft } from "react-icons/io";
import { MdLocalShipping } from "react-icons/md"; // Material Design
import { useNavigate } from 'react-router-dom';

const FeatureSection = () => {
    const navigate = useNavigate(); // Using useNavigate hook to navigate programmatically

    const handleNavigate = (path) => {
        navigate(path); // Navigate to the specified path
    }

  return (
    <div className="feature" style={{ display: "flex" }}>
        <div 
            className="circle mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            onClick={() => handleNavigate("/shipping-policy")}
        >
            <FaShippingFast className='text-xl' />
            <h6 className='shipping'>FREE SHIPPING</h6>
        </div>

        <div 
            className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            onClick={() => handleNavigate("/return-policy")}
        >
            <IoMdReturnLeft className='text-xl' />
            <h6 className='shipping'>RETURN WITHIN 15 DAYS</h6>
        </div>

        <div 
            className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            onClick={() => handleNavigate("/express-delivery")}
        >
            <MdLocalShipping className='text-xl' />
            <h6 className='shipping'>EXPRESS DELIVERY IN STORE MODE</h6>
        </div>
    </div>
  );
}

export default FeatureSection;
