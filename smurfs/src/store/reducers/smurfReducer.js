const initialState = {
    name: "",
    age: "",
    height: "",
    id: 1,
    isLoading: false,
    error: ''
}


export const smurfReducer = (state =initialState, action) => {
    switch(action.type){
        case 'FETCH_SMURF_START':
            return{
                ...state,
                isLoading: true
            };
        case 'FETCH_SMURF_SUCCESS':
            return{
                ...state,
                isLoading: false,
                name: action.payload,
                age: action.payload,
                height: action.payload,
                id: Date.now(),
                error: ''
            }
        default:
            return state;
    }
}

