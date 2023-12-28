/**
 * Création du roote reducer qui a pour bute d'anglober tout les reducers de mon app sachant qu'un reducer retourne un objet 
 * où l'objet représente un state
 */

import { combineReducers } from "redux";
import productsReducer from "./products/productReducer";
import categoriesReducer from "./categories/categoryReducer";

const rootReducer = combineReducers({
    products:productsReducer,
    categories:categoriesReducer
})

export default rootReducer