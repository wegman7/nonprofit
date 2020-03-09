import React from 'react';

function UpdateProfile(props) {
    const profileContent = () => {
        return (
            <div>
                {props.first_name} {props.last_name} <br />
                {
                    props.is_organization ?
                    props.organization_name
                    :
                    null
                }
                {props.username} <br />
            </div>
        )
    }
    const formContent = () => {
        if (props.my_form) {
            return (
                <div>
                    <form onSubmit={props.handleSubmit}>
                        <input type="text" name="added_first_name" placeholder="First name" onChange={props.handleChange} /><br />
                        <input type="text" name="added_last_name" placeholder="Last name" onChange={props.handleChange} /><br />
                        <input type="checkbox" name="added_is_organization" checked={props.added_is_organization} onChange={props.handleChange} /> Organization?<br />
                        {
                            props.added_is_organization ?
                            <div><input type="text" name="added_organization_name" placeholder="organization name" onChange={props.handleChange} /><br /></div>
                            :
                            null
                        }
                        <input type="submit" value="Update" />
                    </form>
                </div>
            );
        } else {
            return null;
        }
    }
    return (
        <div>
            {profileContent()}
            {formContent()}
        </div>
    )
}

export default UpdateProfile;