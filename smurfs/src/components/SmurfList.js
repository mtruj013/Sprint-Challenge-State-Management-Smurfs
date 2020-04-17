import React from 'react';
import {fetchSmurfs } from '../store/actions/smurfActions';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';


const SmurfList = props => {
    return(
        <div>
            <h1>Click to get Smurf!</h1>

        </div>
    )
}

const mapStateToProps = state => {
    console.log("from map state", state)
    return{
        name: state.smurf.name,
        age: state.smurf.age,
        height: state.smurf.height,
        id: state.smurf.id,
        isLoading: state.smurf.isLoading,
        error: state.smurf.error
    }
}
export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(SmurfList);