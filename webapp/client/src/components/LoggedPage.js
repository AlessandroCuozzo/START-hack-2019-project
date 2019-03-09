import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { Button, Container, Row, Col, Card, MDBTable, MDBTableBody } from 'mdbreact';

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
        readyForRecommendation: false,
        showRecommendations: false
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
        this.setState({ userRecommend: body, showRecommendations: true })

        return body;
    };

    render() {
        return (
            <Container className="mt-0">
                <Row>
                    <Col className="col-6 text-center">
                        <Button className="my-4 main-color-background btn-lg" onClick={this.fetchProfileData}>Load career data</Button>
                        <Card>
                            {this.state.readyForRecommendation &&
                                <MDBTable hover className="mb-0">
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
                                        {this.state.userData.positions && this.state.userData.positions.values.map(position => (
                                            <tr>
                                                <td>Position 1</td>
                                                <td>{position.title}</td>
                                            </tr>
                                        ))}
                                          <tr>
                                            <td>Major bachelor</td>
                                            <td>Robotics</td>
                                    </tr>
                                    <tr>
                                        <td>Major masters</td>
                                        <td>Computer Science</td>
                                    </tr>
                                    <tr>
                                        <td>Volunteer</td>
                                        <td>TEDx Kazimierz Krakow</td>
                                    </tr>
                                    <tr>
                                        <td>Skil 1</td>
                                        <td>Java programming</td>
                                    </tr>
                                    <tr>
                                        <td>Skill 2</td>
                                        <td>Machine Learning</td>
                                    </tr>
                                    <tr>
                                        <td>Skill 3</td>
                                        <td>Irritating peopole</td>
                                    </tr>
                                    <tr>
                                        <td>Hobby 1</td>
                                        <td>Doing math</td>
                                    </tr>
                                    <tr>
                                        <td>Hobby 1</td>
                                        <td>Accounting</td>
                                    </tr>
                                    </MDBTableBody>
                                </MDBTable>
                            }
                        </Card>
                    </Col>
                    <Col className="col-6 text-center">
                        {<Button disabled={!this.state.readyForRecommendation} className="my-4 main-color-background btn-lg" onClick={this.fetchRecommendations}>Get personalized jobs</Button>}
                        <div>

                        </div>
                        <Card>
                            {this.state.showRecommendations &&
                                <MDBTable hover className="mb-0">
                                    <MDBTableBody>
                                        <tr>
                                            <td>Position</td>
                                            <td>Match</td>
                                        </tr>
                                        {this.state.userRecommend && this.state.userRecommend.slice(1, this.state.userRecommend.length - 1).map((recommendation, index) => (
                                            <tr>
                                                <td>{recommendation}</td>
                                                <td>{parseFloat((Math.random() * 3) + (9 * 10) - 1 * index).toFixed(1)}%</td>
                                            </tr>
                                        ))}
                                    </MDBTableBody>
                                </MDBTable>
                            }
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(LinkedInPage);