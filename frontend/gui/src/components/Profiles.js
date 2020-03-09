import React from 'react';
import { Link } from 'react-router-dom';

function Profiles(props) {

    const organization_profiles = props.profiles
        .filter(item => item.is_organization)
        .map((item, index) => <li key={index}><Link to={`profiles/${item.id}`}>{item.organization_name}</Link></li>
    );

    const helper_profiles = props.profiles
        .filter(item => !item.is_organization)
        .map((item, index) => <li key={index}><Link to={`profiles/${item.id}`}>{item.first_name} {item.last_name}</Link></li>
    );

    return(
        <div>
            <div>
                <h3>Organizations</h3>
                <ul>
                    {organization_profiles}
                </ul>
            </div>
            <div>
                <h3>Helpers</h3>
                <ul>
                    {helper_profiles}
                </ul>
            </div>
        </div>
    )
}

export default Profiles;