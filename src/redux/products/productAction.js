/** Liste des actions
 * Pour chaque acton je dois retourner un type
 * chaque action est une fonction / */
 import { Link, Route, Routes } from 'react-router-dom';
import axios from "axios";
import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./productType"
import DetailProduct from '../../pages/DetailsProduct';

export const setSelectedProduct = (product) => ({
    type: 'SET_SELECTED_PRODUCT',
    payload: product,
  });
  
  export const setProductList = (products) => ({
    type: 'SET_PRODUCT_LIST',
    payload: products,
  });
  
  export const setSelectedProductAndNavigate = (product, history) => {
    return (dispatch) => {
      dispatch(setSelectedProduct(product));
      <Route path="detail-product" element={ <DetailProduct></DetailProduct>}/>
    };
  };

const productRequest = () => { return {type: PRODUCT_REQUEST} }
const productSuccess = (products) => { 
    return {
    type: PRODUCT_SUCCESS,
    payload: products
    }
}

const productFailure = (errorMsg) => { 
    return {
    type: PRODUCT_FAILURE,
    payload: errorMsg
    }
}


export function fetchProducts() {
  return  (dispatch) => {
      dispatch(productRequest())
      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDM3NTQwMjcsImV4cCI6MTcwMzc1NzYyNywiZW1haWwiOiJhZG1pbkBiYWhtZWRrYW1lbC5jb20iLCJpZCI6IjEiLCJzaXRlIjoiaHR0cHM6XC9cL3d3dy5iYWhtZWRrYW1lbC5jb20iLCJ1c2VybmFtZSI6ImFkbWluIiwiaXNzIjoiaHR0cHM6XC9cL3d3dy5iYWhtZWRrYW1lbC5jb20ifQ.S-CdKWNbNAvjRVLO1w7y5AJEK3gHRpVcjTDm2U4TAiw"
      const config = {
          headers: { Authorization: 'Bearer ' + token }
      };
      axios.get('https://www.bahmedkamel.com/wp-json/wc/v3/products', config)
          .then(response => {
              dispatch(productSuccess(response.data))
             
          })
          .catch((error) => {
             
              dispatch(productFailure("veulliez vous connectez"))
            
          })
  }
}