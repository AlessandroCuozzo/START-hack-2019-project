import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { Button } from 'mdbreact';

class LinkedInPage extends Component {
    state = {
        userData: {
            firstName: '',
            lastName: '',
            headline:''
        }
    };

    fetchProfileData = async () => {
        const queryUrl = this.props.location.search;
        let token = '';
        if (queryUrl) {
            token = queryUrl.replace('?token=', '')
        }
        console.log(token)

        const response = await fetch('/fetchProfileData?token=' + token);
        const body = await response.json();

        this.setState({userData: body})
        return body;

    }

    render() {
        return (
            <div>
                <Button onClick={this.fetchProfileData}>Get Profile</Button>
                <div>My name is: {this.state.userData.firstName}</div>
            </div>
        );
    }
}

export default withRouter(LinkedInPage);