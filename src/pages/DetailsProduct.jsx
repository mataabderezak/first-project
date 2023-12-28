import React, { useContext } from 'react';
import Products from './Products';


const DetailsProduct = (selectedProduct) => {

  if (!selectedProduct) {
    return (
      <div className="container">
        <p>Aucun produit sélectionné.</p>
      </div>
    );
  }

  return (
     <div className="container">
      <h2>Detail Product</h2>
      <div className="card">
        <img
          src={selectedProduct.images[0].src}
          className="card-img-top img-fluid"
          alt={selectedProduct.name}
        />
        <div className="card-body">
          <h5 className="card-title">{selectedProduct.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: ${selectedProduct.price}</li>
          {/* Ajoutez d'autres détails du produit ici */}
        </ul>

      </div>
    </div>
  );
};

export default DetailsProduct;