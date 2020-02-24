import React from 'react';
import { Link } from 'react-router-dom';

function Profiles(props) {

    const listItem = props.profiles.map(function(item, index) {
        return <li key={index}><Link to={`/${item.id}`}>{item.first_name} {item.last_name}</Link></li>
    })

    return(
        <div>
            <ul>
                {listItem}
            </ul>
        </div>
    )
}

export default Profiles;