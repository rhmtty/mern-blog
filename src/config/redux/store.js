import { createStore } from "redux";

const initialState = {
    dataBlogs: [],
    name: 'Rhmt'
}

const reducer = (state = initialState, action) => {
    if(action.type === 'UPADATE_DATA_BLOG') {
        return {
            ...state,
            dataBlogs: action.payload
        }
    }
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'TY'
        }
    }
    return state;
}

const store = createStore(reducer);

export default store;