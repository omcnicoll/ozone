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
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  }
};

function NavBar(props) {
  const { classes } = props;
  this.drawerState = { open: false };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <div class="Center-content">
          <Toolbar class="Floater">
            <IconButton
              className={classes.menuButton}
              color="secondary"
              aria-label="Menu"
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
      <TemporaryDrawer />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerState: PropTypes.bool.isRequired
};

export default withStyles(styles)(NavBar);
