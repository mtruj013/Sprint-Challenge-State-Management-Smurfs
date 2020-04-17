import React, { useEffect} from 'react';
import {fetchSmurfs, deleteSmurfs } from '../store/actions/smurfActions';
import { connect } from 'react-redux';



const SmurfList = props => {

    useEffect(() => {
        props.fetchSmurfs();
    }, [])

    // const deleteSmurf = e => {
    //     props.deleteSmurfs()
    // }

    return(
        <div>
            <h1>Smurfs </h1>
            {props.smurf && props.smurf.map(smurf => {
                return(
                    <div key={smurf.id}>
                        <h3 >{smurf.name}</h3>
                        <p>{smurf.age}</p>
                        <p>{smurf.height}</p>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    console.log("from map state", state)
    return{
      smurf: state.smurf,
      isLoading: state.isLoading,
      error: state.error
    }
}
export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(SmurfList);