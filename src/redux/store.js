import { applyMiddleware, createStore } from "redux";
/**
 * Importer le root reducer
 */


import rootReducer from "./rootReducer"
import { thunk } from "redux-thunk";

/**
 * Créer le store en envoyant le root reducer
 * tout en assurant d'appliquer le middleware "thunk"
 * Redux Thunk est un middle qui permet à vos actions redux de retourner des fonctions au lieu d'objets d'actions
 * Cela est utile pour gérer des actions asynchrones
 */

const store = createStore(rootReducer, applyMiddleware (thunk))
/**
 * Exporter le store
 */

export default store;