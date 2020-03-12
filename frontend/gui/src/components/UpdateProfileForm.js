import React from 'react';

function UpdateProfileForm(props) {
    const formContent = () => {
        // organization form
        if (props.my_form && props.added_is_organization) {
            return (
                <div>
                    <form onSubmit={props.handleSubmit}>
                        <input
                            type="checkbox"
                            name="added_is_organization"
                            checked={props.added_is_organization}
                            onChange={props.handleChange}
                        /> Organization?
                        <br />
                        <input 
                            type="text"
                            name="added_organization_name"
                            placeholder="Name of organization"
                            onChange={props.handleChange}
                        />
                        <br />
                        <input 
                            type="text"
                            name="added_organization_info"
                            placeholder="Info about organization"
                            onChange={props.handleChange}
                        />
                        <br />
                        <input 
                            type="text"
                            name="added_type_of_help_needed"
                            placeholder="Type of help needed"
                            onChange={props.handleChange}
                        />
                        <br />
                        <input 
                            type="text"
                            name="added_city"
                            placeholder="City"
                            onChange={props.handleChange}
                        />
                        <br />
                        <input 
                            type="text"
                            name="added_state"
                            placeholder="State"
                            onChange={props.handleChange}
                        />
                        <br />
                        <button onClick={props.handleSubmit}>Submit</button>
                    </form>
                </div>
            )
        // handler form
        } else if (props.my_form && !props.added_is_organization) {
            return (
                <div>
                    <form onSubmit={props.handleSubmit}>
                        <input
                            type="checkbox"
                            name="added_is_organization"
                            checked={props.added_is_organization}
                            onChange={props.handleChange}
                        /> Organization?
                        <br />
                        <input
                            type="text"
                            name="added_first_name"
                            placeholder="First name"
                            onChange={props.handleChange} 
                        />
                        <br />
                        <input 
                            type="text"
                            name="added_last_name"
                            placeholder="Last name"
                            onChange={props.handleChange}
                        />
                        <br />
                        <input 
                            type="text"
                            name="added_area_of_expertise"
                            placeholder="Area of expertise"
                            onChange={props.handleChange}
                        />
                        <br />
                        <input 
                            type="text"
                            name="added_cause_of_interest"
                            placeholder="Causes of interest"
                            onChange={props.handleChange}
                        />
                        <br />
                        <input 
                            type="text"
                            name="added_city"
                            placeholder="City"
                            onChange={props.handleChange}
                        />
                        <br />
                        <input 
                            type="text"
                            name="added_state"
                            placeholder="State"
                            onChange={props.handleChange}
                        />
                        <br />
                        <button onClick={props.handleSubmit}>Submit</button>
                        {/* <input type="submit" value="Update" /> */}
                    </form>
                </div>
            )
        }
    }

    return (
        <div>
            {formContent()}
        </div>
    )
}

export default UpdateProfileForm;