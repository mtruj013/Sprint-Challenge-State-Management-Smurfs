import axios from "axios";

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({type: 'FETCH_SMURF_START'})
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log("couldn't get data", err)
        })
    }
}