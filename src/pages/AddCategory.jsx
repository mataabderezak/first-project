// src/AddCategory.js
import React, { useState } from 'react';

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState('');

  const handleInputChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleAddCategory = () => {
    // Ajoutez ici la logique pour traiter l'ajout de la catégorie
    alert(`Category "${categoryName}" added!`);
    setCategoryName(''); // Efface le champ après ajout
  };

  return (
    <div className="container">
      <h2>Add Category</h2>
      <div className="mb-3">
        <label htmlFor="categoryName" className="form-label">
          Category Name
        </label>
        <input
          type="text"
          className="form-control"
          id="categoryName"
          value={categoryName}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddCategory}>
        Add Category
      </button>
    </div>
  );
};

export default AddCategory;
