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

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <div className="d-flex justify-content-center my-5">
             
              <Switch>
                <Route exact path="/" render={(props) => <div className="text-center">
                  <h1 className="py-3">Discover the dream job you haven't known about.</h1>
                  <a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=779tep39zy800c&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth&state=987654321&scope=r_basicprofile">
                <Button className="main-color-background btn-lg mt-4">Login with LinkedIn</Button>
              </a>
                </div>} />
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
