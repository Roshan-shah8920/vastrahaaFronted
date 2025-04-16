import React, { useContext } from 'react';
import "./OneProduct.css";
import AppContext from '../../Context/AppContext';
import { useNavigate } from 'react-router-dom';

const OneProduct = () => {
  const { product } = useContext(AppContext);
  const navigate = useNavigate();

  console.log("Product:", product);

  // Men's Jeans Product
  const mensProduct = product
    ?.filter(item => item.category?.toLowerCase() === "jeans mens")
    ?.slice(0, 1);

  // Men's Shirts Product (category "styling Shirt Mens")
  const mensShirts = product?.filter(item => item?.category?.toLowerCase().includes("styling shirt mens"))?.[0];

  // Women's Jeans Product
  const womenProduct = product
    ?.filter(item => item.category?.toLowerCase() === "jeans women")
    ?.slice(0, 1);

  // Women's Shirts Product
  const womenShirts = product
    ?.filter(item => item.category?.toLowerCase().trim() === "shirt women")
    ?.slice(0, 1);

  console.log("Women's Shirts:", womenShirts);

  const handleImageClick = () => {
    navigate('/mens-products');
  };

  return (
    <div>
      <div className="heading22 text-center mt-5">
        <h1>
          {"DISCOVER OUR ONLINE EXCLUSIVE COLLECTIONS".split(" ").map((word, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.3}s` }}>
              {word}&nbsp;
            </span>
          ))}
        </h1>
        <p>
          {"Elevate Your Style: Shop the Freshest Styles from our Online Exclusive Collections"
            .split(" ")
            .map((word, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                {word}&nbsp;
              </span>
            ))}
        </p>

      </div>

      <div className="d-flex justify-content-center gap-4 flex-wrap">
        {/* Men's Product */}
        {mensProduct?.map(item => (
          <div key={item._id} onClick={() => navigate('/mens-products')}>
            <div className="card position-relative" style={{ width: "300px", cursor: "pointer" }}>
              <img
                src={item?.imgSrc}
                className="card-img-top"
                alt="Men's Jeans"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div
                className="btn position-absolute"
                style={{
                  bottom: "15px",
                  left: "20px",
                  backgroundColor: "white",
                  fontWeight: "bold",
                  color: "#007bff "
                }}
              >
                MENS JEANS
              </div>
            </div>
          </div>
        ))}

        {/* Men's Shirts Product */}
        {mensShirts && (
          <div key={mensShirts._id} onClick={() => navigate('/mens-Shirt')}>
            <div className="card position-relative" style={{ width: "300px", cursor: "pointer" }}>
              <img
                src={mensShirts?.imgSrc}
                className="card-img-top"
                alt="Men's Shirt"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div
                className="btn position-absolute"
                style={{
                  bottom: "15px",
                  left: "20px",
                  backgroundColor: "white",
                  fontWeight: "bold",
                  color: "#007bff "
                }}
              >
                MENS SHIRTS
              </div>
            </div>
          </div>
        )}

        {/* Women's Product */}
        {womenProduct?.map(item => (
          <div key={item._id} onClick={() => navigate('/womens-products')}>
            <div className="card" style={{ width: "300px", cursor: "pointer" }}>
              <img
                src={item?.imgSrc}
                className="card-img-top"
                alt="Women's Jeans"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div
                className="btn position-absolute"
                style={{
                  bottom: "15px",
                  left: "20px",
                  backgroundColor: "white",
                  fontWeight: "bold",
                  color: "#007bff "
                }}
              >
                WOMEN JEANS
              </div>
            </div>
          </div>
        ))}

        {/* Women's Shirts */}
        {womenShirts?.map(item => (
          <div key={item._id} onClick={() => navigate('/womens-Shirt')}>
            <div className="card position-relative" style={{ width: "300px", cursor: "pointer" }}>
              <img
                src={item?.imgSrc}
                className="card-img-top"
                alt="Women's Shirt"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div
                className="btn position-absolute"
                style={{
                  bottom: "15px",
                  left: "20px",
                  backgroundColor: "white",
                  fontWeight: "bold",
                  color: "#007bff"
                }}
              >
                WOMEN SHIRT
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OneProduct;
