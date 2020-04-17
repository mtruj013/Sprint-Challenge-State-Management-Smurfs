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
        default:
            return state;
    }
}

