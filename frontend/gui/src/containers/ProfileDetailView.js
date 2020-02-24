import React from 'react';
import axios from 'axios';

// should i creat separate component to render??
// import Profiles from '../components/Profiles';

class ProfileDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            'profile': []
        }
    }

    componentDidMount() {
        const profileID = this.props.match.params.profileID;
        axios.get(`http://127.0.0.1:8000/api/${profileID}`)
            .then(response => {
                this.setState({
                    'profile': response.data
                })
            })
    }

    render() {
        return(
            <div>{this.state.profile.first_name} {this.state.profile.last_name}</div>
        )
    }
}

export default ProfileDetail;