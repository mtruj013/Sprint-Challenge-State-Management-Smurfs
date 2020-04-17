import axios from "axios";

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({type: 'FETCH_SMURF_START'})
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log("axios res", res)
            dispatch({type: 'FETCH_SMURF_SUCCESS', payload: res.data})
        })
        .catch(err => {
            console.log("couldn't get data", err)
        })
    }
}