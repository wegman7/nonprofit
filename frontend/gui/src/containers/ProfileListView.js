import React from 'react';
import axios from 'axios';

import Profiles from '../components/Profiles';

class ProfileList extends React.Component {
    constructor() {
        super();
        this.state = {
            'profiles': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(response => {
                this.setState({
                    'profiles': response.data
                })
                // console.log(response.data);
            })
    }

    render() {
        return(
            <Profiles profiles={this.state.profiles} />
        )
    }
}

export default ProfileList;