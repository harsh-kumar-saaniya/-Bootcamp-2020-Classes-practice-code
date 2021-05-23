import React, { useState, useRef } from 'react';

const UserForm = () => {
    const name = useRef();
    const age = useRef();
    const [nameErr, setNameErr] = useState("");
    const [ageErr, setAgeErr] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('working')
        console.log(name.current.value)
        console.log(age.current.value)

        if (!name.current.value) {
            setNameErr('Name field is must required');
        }
        else if (name.current.value.length > 20) {
            setNameErr('Name field must be less than 20 character');
        }

    }

    return (
        <div>
            <div>User Form</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" ref={name} type="text" />
                    <div style={{ color:"red" }}>{nameErr}</div>
                </div>

                <div>
                    <label htmlFor="age">Age:</label>
                    <input id="age" ref={age} type="Number" />
                    <div>{ageErr}</div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>



    )
}

export default UserForm;