import React from 'react';

function AddProfile(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="added_first_name" onChange={props.handleChange} />
                <input type="text" name="added_last_name" onChange={props.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default AddProfile;