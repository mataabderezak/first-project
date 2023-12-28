import { CATEGORY_FAILURE, CATEGORY_REQUEST, CATEGORY_SUCCESS } from "./categoryType";

const initialState = {
    loading: false,
    categories: [],
    error: ''
}

const categoriesReducer = (state=initialState,action) => { 
    switch (action.type) {
        case CATEGORY_REQUEST : return {...state,loading:true,}
        case CATEGORY_SUCCESS : return {
            error: '',
            loading: false,
            categories: action.payload
        }
        case CATEGORY_FAILURE : return {
            error: action.payload,
            loading: false,
            categories: []
        }
            break;
            default:
                return state
    }
 }

 export default categoriesReducer;