import React from 'react';
import { Link } from 'react-router-dom';

function OrganizationProfile(props) {
    return (
        <div>
            <div className="row">
                <div className="col-10">{props.profile.organization_name}</div>
                <div>{props.profile.city}, {props.profile.state}</div>
            </div>
            Seeking {props.profile.type_of_help_needed} <br />
            {props.profile.organization_info} <br />
            {
                props.is_my_profile ?
                <Link to={`/update/${props.profile.id}`}>Update profile</Link>
                :
                null
            }
        </div>
    )
}

export default OrganizationProfile;