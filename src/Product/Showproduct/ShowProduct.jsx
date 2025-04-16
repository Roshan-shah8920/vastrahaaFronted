import React, { useContext, useRef } from 'react';
import "./ShowProduct.css";
import AppContext from '../../Context/AppContext';
import { Link } from 'react-router-dom';
import OneProduct from '../oneProduct/OneProduct';
import FeatureSection from '../FeatureSection/FeatureSection';

const ShowProduct = () => {
  const { filterData } = useContext(AppContext);

  const mensScrollRef = useRef(null);
  const womensScrollRef = useRef(null);

  const scroll = (ref, scrollOffset) => {
    if (ref.current) {
      ref.current.scrollLeft += scrollOffset;
    }
  };

  // Filter based on gender
  const mensProducts = filterData?.filter(p => p.gender?.toLowerCase() === "men's collection");
  const womensProducts = filterData?.filter(p => p.gender?.toLowerCase() === "women's collection");

  const renderProducts = (products) => (
    products?.map((product) => (
      <Link
        to={`/product/${product?._id}`}
        key={product?._id}
        className='card'
        style={{ width: "18rem", minWidth: "18rem" }}
      >
        <img
          src={product?.imgSrc}
          className="card22 card-img-top"
          alt={product?.title}
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            height: "250px",
            objectFit: "cover"
          }}
        />
        <div className="card-body">
          <p className="card-title" style={{ textDecoration: "underline" }}>
            {product?.title}
          </p>
          <p className="card-title">{product?.description}</p>
          <div className='d-flex align-items-center'>
            <h5 className='text-success'>₹ {product?.finalPrice}</h5>
            {product?.discount > 0 && (
              <>
                <small className='text-muted ms-2' style={{ textDecoration: "line-through" }}>
                  ₹ {product?.price}
                </small>
                <div className="badge item bg-danger mx-2">
                  -{product?.discount}%
                </div>
              </>
            )}
          </div>
        </div>
      </Link>
    ))
  );

  return (
    <>
    <OneProduct/>
      {/* Men's Section */}
      <h2 className=' text-center mt-5'>Men's Collection</h2>
      <div className='d-flex justify-content-between align-items-center px-3'>
        <button className="btn btn-outline-secondary" onClick={() => scroll(mensScrollRef, -300)}>←</button>
        <div
          className="horizontal-scroll-container"
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
      <h2 className='text-center mt-5'>Women's Collection</h2>
      <div className='d-flex justify-content-between align-items-center px-3'>
        <button className="btn btn-outline-secondary" onClick={() => scroll(womensScrollRef, -300)}>←</button>
        <div
          className="horizontal-scroll-container"
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
          {renderProducts(womensProducts)}
        </div>
        <button className="btn btn-outline-secondary" onClick={() => scroll(womensScrollRef, 300)}>→</button>
      </div>
      <FeatureSection/>
    </>
  );
};

export default ShowProduct;
