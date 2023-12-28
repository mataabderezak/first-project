/** 1- Il faut créer un state initial
 *  2- Il faut retourner un state tout en manipulant le state initiale ou le prev state
 * Par défaut en retourne l'état initial biensur en créant une fonction reducer
 */

import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS, SET_SELECTED_PRODUCT } from "./productType";

const initialState = {
    loading: false,
    products: [],
    error: '',
    selectedProduct: null
}

const productsReducer = (state=initialState,action) => { 
    switch (action.type) {
        case PRODUCT_REQUEST : return {...state,loading: true,}
        case PRODUCT_SUCCESS : return {
            error: '',
            loading: false,
            products: action.payload
        }
        case PRODUCT_FAILURE : return {
            error: action.payload,
            loading: false,
            products: []
        }
        case SET_SELECTED_PRODUCT :  return {
            error : '',
            loading: false,
            products: action.payload
        }
            break;
            default:
                return state
    }
 }

 export default productsReducer;