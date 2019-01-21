import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TemporaryDrawer from './TemporaryDrawer';

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
};

class NavBarPropBased extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  toggleDrawer = () => {
    this.setState({
      openDrawer: !this.state.openDrawer
    });
  };

  handleClose = () => {
    this.setState({
      openDrawer: false
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <div class="Center-content">
            <Toolbar class="Floater">
              <IconButton
                className={classes.menuButton}
                color="secondary"
                aria-label="Menu"
                label="Toggle Drawer"
                onClick={this.toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
            <img
              src={require('../assets/ozone-wide.ico')}
              alt="ozone"
              height="65px"
              class="Menu-offset"
            />
          </div>
        </AppBar>
        <TemporaryDrawer
          open={this.state.openDrawer}
          handleClose={this.handleClose}
          onToggleDrawer={this.toggleDrawer}
        />
      </div>
    );
  }
}

export default withStyles(styles)(NavBarPropBased);
