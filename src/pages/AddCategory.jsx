import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/categories/categoryAction';



const AddCategory = () => {
  const categoriesData = useSelector(state=> state.categories)
  const isLoading = useSelector(state=> state.loading)
  const dispatch = useDispatch();  

 useEffect ( () => {
  dispatch(fetchCategories())
 },[]);


 
  console.log(categoriesData);

  return (
    <>
      <h2>Categories</h2>
      {isLoading ? (
        <div className="text-center mt-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading...</p>
        </div>
      ) : (
        <ul>
          {categoriesData.categories.map(category => (
            <li>{category.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default AddCategory;