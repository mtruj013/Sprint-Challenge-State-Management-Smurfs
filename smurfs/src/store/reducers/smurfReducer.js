const initialState = {
    
   smurf: null,
   isLoading: false,
   error: ''
}


export const smurfReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_SMURFS_START':
            return {
                ...state,
                isLoading: true,
                error: action.payload
            };
        case 'FETCH_SMURFS_SUCCESS':
            return {
                ...state,
                smurf: action.payload,
                isLoading: false,
                error: ''
            }
        case 'FETCH_SMURFS_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case 'SEND_SMURFS_SUCCESS': 
            return {
                ...state,
                isLoading: false,
                error: '',
                smurf: action.payload
            }
        default:
            return state;
    }
}

