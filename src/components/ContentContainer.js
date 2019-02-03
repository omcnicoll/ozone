import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
};

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class ContentContainer extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Grid container spacing={24}>
            <Grid item xs={1} sm={2} />
            <Grid item xs={10} sm={8}>
              <div className="body-container">
                <h1>This is a title!</h1>
                <p>I do cool things sometimes and should write them down.</p>
                <p>
                  I also want to actually keep track of cool trips or recipes
                </p>
                <p>Here's where I'll try and do that.</p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about/">About</Link>
                  </li>
                  <li>
                    <Link to="/users/">Users</Link>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(ContentContainer);
