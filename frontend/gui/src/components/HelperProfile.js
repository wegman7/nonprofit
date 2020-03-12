import React from 'react';
import { Link } from 'react-router-dom';

function HelperProfile(props) {
    return (
        <div>
            <div className="row">
                <div className="col-10">{props.profile.first_name} {props.profile.last_name}</div>
                <div>{props.profile.city}, {props.profile.state}</div>
            </div>
            Expert in {props.profile.area_of_expertise} <br />
            Interested in {props.profile.cause_of_interest} <br />
            {
                props.is_my_profile ?
                <Link to={`/update/${props.profile.id}`}>Update profile</Link>
                :
                null
            }
        </div>
    )
}

export default HelperProfile;