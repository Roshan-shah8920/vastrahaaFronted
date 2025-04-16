import React, { useContext, useEffect, useState } from 'react'
import "./RelatedProduct.css"
import AppContext from '../../Context/AppContext'
import { Link } from 'react-router-dom'

const RelatedProduct = ({ category }) => {
  const { product } = useContext(AppContext)
  const [relatedProduct, setRelatedProduct] = useState([])

  useEffect(() => {
    if (!category) return;
    const filtered = product.filter((data) =>
      data.category?.toLowerCase() === category?.toLowerCase()
    )
    setRelatedProduct(filtered)
  }, [category, product])

  return (
    <>
      <div className="heading my-5">
        <h1>Related Product</h1>
      </div>
      <div className="container my-2">
        <div className="row">
          {relatedProduct?.map((products) => (
            <div key={products?._id} className='col-md-4 d-flex justify-content-center align-items-center my-3'>
              <div className="card" style={{ width: "18rem" }}>
                <Link to={`/product/${products?._id}`} className='image'>
                  <img src={products?.imgSrc} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body text-center">
                  <p className="card-title">{products?.title}</p>

                  <div className='d-flex justify-content-center align-items-center mb-2'>
                    <h5 className='text-success me-2'>₹ {products?.finalPrice}</h5>
                    {products?.discount > 0 && (
                      <>
                        <span className='text-muted' style={{ textDecoration: "line-through" }}>
                          ₹ {products?.price}
                        </span>
                        <span className='badge item bg-danger ms-2'>-{products?.discount}%</span>
                      </>
                    )}
                  </div>

                  <a href="#" className="btn btn-warning">Add To Cart</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default RelatedProduct
