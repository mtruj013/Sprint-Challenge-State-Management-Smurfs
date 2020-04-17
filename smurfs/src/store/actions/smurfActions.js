import axios from "axios";


export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({type: 'FETCH_SMURFS_START'})
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log("axios res", res)
            dispatch({type: 'FETCH_SMURFS_SUCCESS', payload: res.data})
        })
        .catch(err => {
            console.log("couldn't get data", err)
        })
    }
}

export const postSmurfs = (smurf) => dispatch => {
    dispatch({type: "SEND_SMURFS_START"})
    axios 
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
        dispatch({type: "SEND_SMURFS_SUCCESS", payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

export const deleteSmurfs = (smurfId) => dispatch => {
    dispatch({type: "DELETE_SMURFS_START"})
    axios
    .delete(`http://localhost:3333/${smurfId}`)
    .then(res => {
        dispatch({type: "DELETE_SMURFS_SUCCESS", payload: res.data})
    })
    .catch(err => [
        console.log(err)
    ])
}