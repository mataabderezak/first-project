import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Products = () => {
    const [productListAll, setProductList] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const apiUrl = 'https://www.bahmedkamel.com/wp-json/wc/v3/products';
            const apiToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDM1OTY5OTAsImV4cCI6MTcwMzYwMDU5MCwiZW1haWwiOiJhZG1pbkBiYWhtZWRrYW1lbC5jb20iLCJpZCI6IjEiLCJzaXRlIjoiaHR0cHM6XC9cL3d3dy5iYWhtZWRrYW1lbC5jb20iLCJ1c2VybmFtZSI6ImFkbWluIiwiaXNzIjoiaHR0cHM6XC9cL3d3dy5iYWhtZWRrYW1lbC5jb20ifQ.CBpawJPJf4IaxPhbdrzH9CvBg-Om6Tpu1QXA-duACiA';
    
            const response = await axios.get(apiUrl, {
              headers: {
                Authorization: `Bearer ${apiToken}`,
              },
            });
    
            setProductList(response.data);
            setisLoading(false);

          } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des produits :', error);
            setisLoading(false);
        }
        };
    
        fetchProducts();
      }, []); // Le tableau vide [] assure que cet effet est exécuté une seule fois lors du montage
    
  
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
          {productListAll.map(product => (
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
                  {/* Ajoutez d'autres détails du produit ici */}
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