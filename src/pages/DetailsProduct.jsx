import React from 'react';

const DetailProduct = () => {
  // Exemple de détail de produit
  const productDetail = {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    imageUrl: 'https://via.placeholder.com/400',
  };

  return (
     <div className="container">
      <h2>Detail Product</h2>
      <div className="card">
        <img
          src={productDetail.imageUrl}
          className="card-img-top img-fluid"
          alt={productDetail.name}
        />
        <div className="card-body">
          <h5 className="card-title">{productDetail.name}</h5>
          <p className="card-text">{productDetail.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: ${productDetail.price.toFixed(2)}</li>
          {/* Ajoutez d'autres détails du produit ici */}
        </ul>
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;