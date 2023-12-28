import axios from "axios";
import { CATEGORY_REQUEST, CATEGORY_SUCCESS, CATEGORY_FAILURE} from "./categoryType"


const categoryRequest = () => { return {type: CATEGORY_REQUEST} }
const categorySuccess = (categories) => { 
    return {
    type: CATEGORY_SUCCESS,
    payload: categories
    }
}

const categoryFailure = (errorMsg) => { 
    return {
    type: CATEGORY_FAILURE,
    payload: errorMsg
    }
}

export function fetchCategories() {
  return  (dispatch) => {
      dispatch(categoryRequest())
      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDM3NTQ0NzksImV4cCI6MTcwMzc1ODA3OSwiZW1haWwiOiJhZG1pbkBiYWhtZWRrYW1lbC5jb20iLCJpZCI6IjEiLCJzaXRlIjoiaHR0cHM6XC9cL3d3dy5iYWhtZWRrYW1lbC5jb20iLCJ1c2VybmFtZSI6ImFkbWluIiwiaXNzIjoiaHR0cHM6XC9cL3d3dy5iYWhtZWRrYW1lbC5jb20ifQ.6yq2JF3w6CqPcZKlFqTZjIAljCXuP8Ryx7AirUyiUhA"
      const config = {
          headers: { Authorization: 'Bearer ' + token }
      };
      axios.get('https://www.bahmedkamel.com/wp-json/wc/v3/products/categories', config)
          .then(response => {
              dispatch(categorySuccess(response.data))
             
          })
          .catch((error) => {
             
              dispatch(categoryFailure("veulliez vous connectez"))
            
          })
  }
}