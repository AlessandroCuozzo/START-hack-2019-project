import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Button } from 'mdbreact';

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
              <Button onClick={this.fetchRecommendations}>Click me</Button>
              <Switch>
                <Route exact path="/" render={(props) => <div>something</div>} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
