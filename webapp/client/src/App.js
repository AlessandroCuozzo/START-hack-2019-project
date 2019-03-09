import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Button } from 'mdbreact';
import LoggedPage from './components/LoggedPage';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  fetchRecommendations = async () => {
    const response = await fetch('/api/recommendations');
    const body = await response.json();

    //remove in production, just log error
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <div>
              <a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=779tep39zy800c&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth&state=987654321&scope=r_basicprofile">
                <Button >Clickme</Button>
              </a>
              <Switch>
                <Route exact path="/" render={(props) => <div>something</div>} />
                <Route exact path="/logged" render={(props) =>  <LoggedPage />} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
