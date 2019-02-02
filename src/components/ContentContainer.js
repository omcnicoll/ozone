import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
};

class ContentContainer extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={1} sm={2} />
          <Grid item xs={10} sm={8}>
            <div className="body-container">
              <h1>This is a title!</h1>
              <p>I need to write down the things I do to get jobs.</p>
              <p>Here's where I'll do that.</p>
              <p>Here's where I'll do that.</p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ContentContainer);
