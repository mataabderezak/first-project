// src/context/AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const setProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <AppContext.Provider value={{ selectedProduct, setProduct }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };