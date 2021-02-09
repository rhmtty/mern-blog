const initialState = {
    name: 'Rhmt'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'TY'
        }
    }
    return state;
}

export default globalReducer;