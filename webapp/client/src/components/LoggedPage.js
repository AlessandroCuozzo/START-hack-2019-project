import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { Button } from 'mdbreact';

class LinkedInPage extends Component {
    state = {
        code: '',
        errorMessage: '',
    };

    fetchProfileData = async () => {
        const queryUrl = this.props.location.search;
        let token = '';
        if (queryUrl) {
            token = queryUrl.replace('?token=','')
        }
        console.log(token)

    //  const response = await fetch('/oauth/linkedin');
    //  const body = await response.json();

  
//    return body;

    }

    render() {
        return (
            <div>
                <Button onClick={this.fetchProfileData}>Get Profile</Button>
            </div>
        );
    }
}

export default withRouter(LinkedInPage);