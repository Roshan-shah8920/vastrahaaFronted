import React, { useContext, useEffect, useState } from 'react';
import "./SearchProduct.css";
import AppContext from '../../Context/AppContext';
import { Link, useParams } from 'react-router-dom';

const SearchProduct = () => {
  const { product } = useContext(AppContext);
  const [searchProduct, setSearchProduct] = useState([]);
  const { term } = useParams();

  useEffect(() => {
    if (term) {
      setSearchProduct(
        product?.filter((data) =>
          data?.category?.toLowerCase().includes(term?.toLowerCase()) || 
          data?.title?.toLowerCase().includes(term?.toLowerCase()) // Added search for title as well
        )
      );
    }
  }, [term, product]);

  return (
    <>
      <div className="heading my-5">
        <h1>Search Product</h1>
      </div>
      <div className="container my-2">
        <div className="row" style={{ width: "700px" }}>
          {/* Display products */}
          {searchProduct.length > 0 ? (
            searchProduct.map((products) => (
              <div key={products?._id} className="col-md-4 d-flex justify-content-center align-items-center my-3">
                <div className="card" style={{ width: "18rem" }}>
                  <Link to={`/product/${products?._id}`} className="image">
                    <img src={products?.imgSrc} className="card-img-top" alt={products?.title} />
                  </Link>
                  <div className="card-body text-center">
                    <p className="card-title">{products?.title}</p>
                    <h5>₹ {products?.price}</h5>
                    <a href="#" className="btn btn-warning">Add To Cart</a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found for "{term}" category.</p> // If no products found
          )}
        </div>
      </div>
    </>
  );
};

export default SearchProduct;
