import React, { useContext, useRef } from 'react';
import AppContext from '../../Context/AppContext';
import { Link } from 'react-router-dom';
import OneProduct from '../oneProduct/OneProduct';
import FeatureSection from '../FeatureSection/FeatureSection';
import './ShowProduct.css';

const ShowProduct = () => {
  const { filterData } = useContext(AppContext);

  const mensScrollRef = useRef(null);
  const womensScrollRef = useRef(null);

  const scroll = (ref, scrollOffset) => {
    if (ref.current) {
      ref.current.scrollLeft += scrollOffset;
    }
  };

  // ✅ Loader Component
  const Loader = () => (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh"
    }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  // ✅ Show loader while data is not loaded
  if (!filterData || filterData.length === 0) {
    return <Loader />;
  }

  // Filter based on gender
  const mensProducts = filterData?.filter(p => p.gender?.toLowerCase() === "men's collection");
  const womensProducts = filterData?.filter(p => p.gender?.toLowerCase() === "women's collection");

  const renderProducts = (products) => (
    products?.map((product) => (
      <Link
        to={`/product/${product?._id}`}
        key={product?._id}
        className="product-card"
        style={{
          width: "18rem",
          minWidth: "18rem",
          textDecoration: "none",
          color: "inherit",
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}
      >
        <img
          src={product?.imgSrc}
          alt={product?.title}

        />

        <div className="card-content">
          <p style={{ fontWeight: "bold", textDecoration: "underline" }}>{product?.title}</p>
          <p style={{ fontSize: "0.9rem", color: "#555" }}>{product?.description}</p>
          <div style={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}>
            <h5 style={{ color: "green", margin: 0 }}>₹ {product?.finalPrice}</h5>
            {product?.discount > 0 && (
              <>
                <small style={{ textDecoration: "line-through", marginLeft: "8px", color: "#888" }}>
                  ₹ {product?.price}
                </small>
                <span style={{
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  marginLeft: "10px",
                  fontSize: "0.75rem"
                }}>
                  -{product?.discount}%
                </span>
              </>
            )}
          </div>
        </div>
      </Link>
    ))
  );

  return (
    <>
      <OneProduct />

      {/* Men's Section */}
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Men's Collection</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "0 1rem" }}>
        <button className="btn btn-outline-secondary" onClick={() => scroll(mensScrollRef, -300)}>←</button>
        <div
          ref={mensScrollRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            gap: '1rem',
            padding: '1rem',
            maxWidth: '100%'
          }}
        >
          {mensProducts.length === 0 ? <p>No products available in Men's Collection</p> : renderProducts(mensProducts)}
        </div>
        <button className="btn btn-outline-secondary" onClick={() => scroll(mensScrollRef, 300)}>→</button>
      </div>

      {/* Women's Section */}
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Women's Collection</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "0 1rem" }}>
        <button className="btn btn-outline-secondary" onClick={() => scroll(womensScrollRef, -300)}>←</button>
        <div
          ref={womensScrollRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            gap: '1rem',
            padding: '1rem',
            maxWidth: '100%'
          }}
        >
          {womensProducts.length === 0 ? <p>No products available in Women's Collection</p> : renderProducts(womensProducts)}
        </div>
        <button className="btn btn-outline-secondary" onClick={() => scroll(womensScrollRef, 300)}>→</button>
      </div>

      <FeatureSection />
    </>
  );
};

export default ShowProduct;
