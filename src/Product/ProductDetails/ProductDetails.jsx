import React, { useContext, useEffect, useState } from 'react'
import "./ProductDetails.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import RelatedProduct from '../RelatedProduct/RelatedProduct'
import AppContext from '../../Context/AppContext'

const ProductDetails = () => {
  const { id } = useParams()
  const { addToCart } = useContext(AppContext)
  const [products, setProducts] = useState()
  const url = "http://localhost:5000/api"

  useEffect(() => {
    const fetchProduct = async () => {
      const api = await axios.get(`${url}/product/${id}`, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      console.log(api.data.product);
      setProducts(api.data.product)
    }
    fetchProduct()
  }, [id])

  return (
    <>
      <div className="container">
        <div className="left">
          <img className='imageProduct' src={products?.imgSrc} alt="" />
        </div>

        <div
  className="right"
  style={{
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)", // soft shadow
    borderRadius: "12px",
    padding: "20px",
    backgroundColor: "#fff"
  }}
>
  <h1>{products?.title}</h1>
  <p>{products?.description}</p>

  <div className="d-flex align-items-center mb-2">
    <h2 className='text-success me-3'>₹ {products?.finalPrice}</h2>
    {products?.discount > 0 && (
      <>
        <h4 className='text-muted' style={{ textDecoration: 'line-through', margin: 0 }}>
          ₹ {products?.price}
        </h4>
        <span className='badge bg-danger ms-3' style={{
          width: "120px",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontWeight: "70px"
        }}>-{products?.discount}% OFF</span>
      </>
    )}
  </div>

  <p>Inclusive of all taxes</p>

  <div className='button'>
    <button
      className='btn1 btn btn-warning p-3'
      onClick={() =>
        addToCart(
          products._id,
          products.title,
          products.finalPrice,
          1,
          products.imgSrc
        )
      }
    >
      Buy Now
    </button>
  </div>
</div>


      </div>
      <RelatedProduct category={products?.category} />
    </>
  )
}

export default ProductDetails
