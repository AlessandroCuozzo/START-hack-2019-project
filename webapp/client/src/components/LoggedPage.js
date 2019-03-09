import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { Button, Container, Row, Col, Card, CardBody, MDBTable, MDBTableBody, MDBTableHead, TableHead } from 'mdbreact';

class LinkedInPage extends Component {
    state = {
        userData: {
            formattedName: '',
            lastName: '',
            headline: '',
            industry: '',
            pictureUrl: '',
            positions: {
                values: []
            }
        },
        readyForRecommendation: false
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
        this.setState({ userRecommend: body })

        return body;
    };

    render() {
        return (
            <Container className="mt-3">
                <Row>
                    <Col className="col-6 text-center">
                        <Button className="my-5 main-color-background btn-lg" onClick={this.fetchProfileData}>Load career data</Button>
                        <Card>
                            <MDBTable hover>
                                <MDBTableBody>
                                    <tr>
                                        <td>Name</td>
                                        <td>{this.state.userData.formattedName}</td>
                                    </tr>
                                    <tr>
                                        <td>Industry</td>
                                        <td>{this.state.userData.industry}</td>
                                    </tr>
                                    <tr>
                                        <td>Location</td>
                                        <td>{this.state.userData.location && this.state.userData.location.name}</td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>
                        </Card>
                    </Col>
                    <Col className="col-6 text-center">
                        {<Button disabled={!this.state.readyForRecommendation} className="my-5 main-color-background btn-lg" onClick={this.fetchRecommendations}>Get personalized jobs</Button>}
                        <div>
                            {this.state.userRecommend && this.state.userRecommend.map(r => <div> {r} </div>)}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(LinkedInPage);