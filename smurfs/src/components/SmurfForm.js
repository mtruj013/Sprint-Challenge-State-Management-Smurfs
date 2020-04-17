import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../store/actions/smurfActions'


const initialValue = {
    name: "",
    age: "",
    height: "",
}

const SmurfForm = props => {

    const [newSmurf, setNewSmurf] = useState(initialValue)



    const handleChanges = e => {
        e.preventDefault();
        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
    }

    const submitForm = e => {
        e.preventDefault();
        props.postSmurfs(newSmurf)
        setNewSmurf({
            name: "",
            age: "",
            height: ""
        })
    }


    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="name">
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={newSmurf.name}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor="age">
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={newSmurf.age}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor="height">
                    Height:
                    <input
                        type="text"
                        name="height"
                        value={newSmurf.height}
                        onChange={handleChanges}
                    />
                </label>
                <button type="submit" onCLick={() => props.postSmurf}>Add a smurf!</button>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {
       smurf: state.smurf 
    }
}

export default connect(
    mapStateToProps,
    { postSmurfs }
)(SmurfForm);

//finish handle changes
//finish form submit 
//redo input 