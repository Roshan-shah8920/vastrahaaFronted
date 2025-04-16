import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../Context/AppContext";

const Address = () => {
  const { shippingAddress, userAddress } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    phoneNumber: "",
  });

  const onChangerHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const result = await shippingAddress(
        formData.fullName,
        formData.address,
        formData.city,
        formData.state,
        formData.country,
        formData.pincode,
        formData.phoneNumber
      );

      console.log("Address added:", result);

      if (result && result.success) {
        navigate("/checkout");
      } else {
        console.error("Error: API did not return success:", result);
      }

      // Reset Form Data
      setFormData({
        fullName: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        phoneNumber: "",
      });

    } catch (error) {
      console.error("Error submitting form:", error);
    }
    // console.log(formData);
    
  };

  return (
    <div
      className="my-3 p-4"
      style={{
        border: "2px solid yellow",
        borderRadius: "10px",
      }}
    >
      <h1 className="text-center">Shipping Address</h1>
      <form onSubmit={submitHandler} className="my-3">
        <div className="row">
          <div className="mb-3 col-md-4">
            <label className="form-label">Full Name</label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={onChangerHandler}
              type="text"
              className="form-control bg-dark text-light"
              required
            />
          </div>
          <div className="mb-3 col-md-4">
            <label className="form-label">Country</label>
            <input
              name="country"
              value={formData.country}
              onChange={onChangerHandler}
              type="text"
              className="form-control bg-dark text-light"
              required
            />
          </div>
          <div className="mb-3 col-md-4">
            <label className="form-label">State</label>
            <input
              name="state"
              value={formData.state}
              onChange={onChangerHandler}
              type="text"
              className="form-control bg-dark text-light"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="mb-3 col-md-4">
            <label className="form-label">City</label>
            <input
              name="city"
              value={formData.city}
              onChange={onChangerHandler}
              type="text"
              className="form-control bg-dark text-light"
              required
            />
          </div>
          <div className="mb-3 col-md-4">
            <label className="form-label">Pincode</label>
            <input
              name="pincode"
              value={formData.pincode}
              onChange={onChangerHandler}
              type="number"
              className="form-control bg-dark text-light"
              required
            />
          </div>
          <div className="mb-3 col-md-4">
            <label className="form-label">Phone Number</label>
            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={onChangerHandler}
              type="number"
              className="form-control bg-dark text-light"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="mb-3">
            <label className="form-label">Address/Nearby</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={onChangerHandler}
              className="form-control bg-dark text-light"
              required
            />
          </div>
        </div>

        <div className="d-grid col-6 mx-auto my-3">
          <button type="submit" className="btn btn-primary" style={{ fontWeight: "bold" }}>
            Submit
          </button>
        </div>
      </form>

      {userAddress && (
        <div className="d-grid col-6 mx-auto my-3">
          <button
            className="btn btn-warning"
            onClick={() => navigate("/checkout")}
            style={{ fontWeight: "bolder" }}
          >
            Use Old Address
          </button>
        </div>
      )}
    </div>
  );
};

export default Address;