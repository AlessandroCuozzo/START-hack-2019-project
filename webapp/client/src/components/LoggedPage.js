import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { Button } from 'mdbreact';

class LinkedInPage extends Component {
    state = {
        userData: {
            firstName: '',
            lastName: '',
            headline: ''
        },
        readyForRecommendation: true
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

        this.setState({ userData: body, readyForRecommendation: true })
        return body;
    }


    fetchRecommendations = async () => {
        const response = await fetch('/api/recommendations');
        const body = await response.json();

        //remove in production, just log error
        if (response.status !== 200) throw Error(body.message);
        this.setState({ userRecommend: body})

        return body;
    };

    render() {
        return (
            <div>
                <Button color="green" onClick={this.fetchProfileData}>Load career data</Button>
                {this.state.readyForRecommendation && <Button color="green" onClick={this.fetchRecommendations}>Get personalized jobs</Button> } 
				
				<div> 
				
				{
				this.state.userRecommend&&
				this.state.userRecommend.map(r => <div> {r} </div>)
				}
				</div>
                <div>My name is: {this.state.userData.firstName}</div>

            </div>
        );
    }
}

export default withRouter(LinkedInPage);