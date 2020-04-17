import React, { useState } from 'react';

const SmurfForm = props => {
    
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: "",
        id: Date.now()
    })


    return (
        <div>
            <form>
                <label htmlFor="smurf-form">
                    <input
                        name="name"
                        age="age"
                        height= "height"
                        id= ""
                    />

                    <button>Add a smurf!</button>
                </label>
            </form>
        </div>
    )
}

export default SmurfForm;

//finish handle changes
//finish form submit 
//redo input 