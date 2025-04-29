import React, { useContext } from 'react';
import "./OneProduct.css";
import AppContext from '../../Context/AppContext';
import { useNavigate } from 'react-router-dom';

const OneProduct = () => {
  const { product } = useContext(AppContext);
  console.log("x", product);
  
  const navigate = useNavigate();


  const getFirstProductByCategory = (category) => {
    return product?.filter(item => item.category?.toLowerCase() === category)?.slice(0, 1);
  };

  const getProductContainsCategory = (category) => {
    return product?.filter(item => item?.category?.toLowerCase().includes(category))?.[0];
  };


  const mensProduct = getFirstProductByCategory("jeans mens");
  const mensShirts = getProductContainsCategory("styling shirt mens");
  const womenProduct = getFirstProductByCategory("jeans women");
  const womenShirts = getFirstProductByCategory("shirt women");

  if (!product || product.length === 0) {
    return <div className="text-center my-5">Loading products or no products found.</div>;
  }

  return (
    <div>
      <div className="heading22 text-center mt-5">
        <h1>
          {"DISCOVER OUR ONLINE EXCLUSIVE COLLECTIONS".split(" ").map((word, index) => (
            <span key={index} className="animated-word" style={{ animationDelay: `${index * 0.25}s` }}>
              {word}&nbsp;
            </span>
          ))}
        </h1>
        <p>
          {"Elevate Your Style: Shop the Freshest Styles from our Online Exclusive Collections"
            .split(" ")
            .map((word, index) => (
              <span key={index} className="animated-word-light" style={{ animationDelay: `${index * 0.1}s` }}>
                {word}&nbsp;
              </span>
            ))}
        </p>
      </div>


      <div className="d-flex justify-content-center gap-4 flex-wrap">
        {/* Men's Jeans */}
        {mensProduct?.map(item => (
          <div key={item._id} onClick={() => navigate('/mens-products')}>
            <div className="card product-card">
              <img
                src={item?.imgSrc}
                className="card-img-top"
                alt={item?.title || "Men's Jeans"}
                style={{ height: "400px" }}
              />
              <div className="label-btn">MENS JEANS</div>
            </div>
          </div>
        ))}

        {/* Men's Shirts */}
        {mensShirts && (
          <div key={mensShirts._id} onClick={() => navigate('/mens-Shirt')}>
            <div className="card product-card">
              <img
                src={mensShirts?.imgSrc}
                className="card-img-top"
                alt={mensShirts?.title || "Men's Shirt"}
                style={{ height: "400px" }}
              />
              <div className="label-btn">MENS SHIRTS</div>
            </div>
          </div>
        )}

        {/* Women's Jeans */}
        {womenProduct?.map(item => (
          <div key={item._id} onClick={() => navigate('/womens-products')}>
            <div className="card product-card">
              <img
                src={item?.imgSrc}
                className="card-img-top"
                alt={item?.title || "Women's Jeans"}
                style={{ height: "400px" }}
              />
              <div className="label-btn">WOMEN JEANS</div>
            </div>
          </div>
        ))}

        {/* Women's Shirts */}
        {womenShirts?.map(item => (
          <div key={item._id} onClick={() => navigate('/womens-Shirt')}>
            <div className="card product-card">
              <img
                src={item?.imgSrc}
                className="card-img-top"
                alt={item?.title || "Women's Shirt"}
                style={{ height: "400px" }}
              />
              <div className="label-btn">WOMEN SHIRT</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OneProduct;
