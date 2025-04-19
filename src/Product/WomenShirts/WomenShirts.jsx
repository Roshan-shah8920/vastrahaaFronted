import React, { useState, useContext } from 'react';
import "./WomenShirts.css";
import AppContext from '../../Context/AppContext';

const WomenShirts = () => {
  const { product, addToCart } = useContext(AppContext);
  const womenShirtProducts = product?.filter(item => item.category?.toLowerCase() === "shirt women");
  const [addedToCart, setAddedToCart] = useState([]);

  const handleAddToCart = (item) => {
    addToCart(item._id, item.title, item.finalPrice, 1, item.imgSrc);
    setAddedToCart([...addedToCart, item._id]); // Track added items
  };

  return (
    <div className="container-fluid p-0">
      <div className="text-center my-5">
        <h2 className="fw-bold">All Women's Shirt Products</h2>
      </div>

      <div className="container">
        <div className="row justify-content-center" style={{ width: "100%" }}>
          {womenShirtProducts?.map((item) => (
            <div
              className={`col-12 col-sm-6 col-md-4 col-lg-3 mb-4 product-card ${addedToCart.includes(item._id) ? 'added-to-cart' : ''}`}
              key={item._id}
            >
              <div className="card h-100 shadow-sm">
                <img
                  src={item.imgSrc}
                  className={`card-img-top ${addedToCart.includes(item._id) ? 'added-to-cart' : ''}`}
                  alt={item.title}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <div className="mb-2">
                    <span className="text-success fw-bold">₹{item.finalPrice}</span>
                    {item.discount > 0 && (
                      <>
                        <span className="text-muted text-decoration-line-through ms-2">₹{item.price}</span>
                        <span className="badge bg-danger ms-2">-{item.discount}%</span>
                      </>
                    )}
                  </div>
                  <button
                    className="btn btn-warning mt-auto"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomenShirts;
