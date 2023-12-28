import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchProducts, setSelectedProduct, setSelectedProductAndNavigate } from '../redux/products/productAction';
import { useNavigate } from 'react-router-dom';

const myContext = createContext();


const Products = () => {
  const productsData = useSelector(state=> state.products)
  const isLoading = useSelector(state=> state.loading)
  const dispatch = useDispatch();  
  const navigate = useNavigate(); 
  const selectedProduct = useSelector(state=> state.selectedProduct)

 useEffect ( () => {
  dispatch(fetchProducts())
 },[]);

 const handleProductClick = (product) => {
  dispatch(setSelectedProductAndNavigate(dispatch(setSelectedProduct(product)),navigate));

};

 
  console.log(productsData);

    return (
       <div className="container">
        <h2>Products</h2>
        {
            isLoading? (<div className="text-center mt-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p>Loading...</p>
          </div>) : (
        <div className="row">
          {productsData.products.map(product => (
            <div key={product.id} className="col-md-2 mb-4">
              <div className="card">
                <img
                  src={product.images.length > 0 ? product.images[0].src : 'https://via.placeholder.com/150'}
                  className="card-img-top img-fluid"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Description</p>
                  <p className="card-text">Price: ${product.price}</p>
                </div>
                <div className="card-body">
          <a  onClick={() => handleProductClick(product)} className="btn btn-primary">
            View Details
          
          </a>
        </div>
              </div>
            </div>
          ))}
        </div>
            )
        }
      </div>
      
    );
    
  }
  
export default Products