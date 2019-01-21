import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavigationDrawer from './NavigationDrawer';

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
          <div className="Center-content">
            <Toolbar className="Floater">
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
            <div className="Header-img-div">
              <img
                src={require('../assets/ozone.svg')}
                alt="ozone"
                height="65px"
                className="Header-logo-offset"
              />
              <h3 className="Header-first-name">Olivier</h3>
              <h3 className="Header-last-name">McNicoll</h3>
            </div>
          </div>
        </AppBar>
        <NavigationDrawer
          open={this.state.openDrawer}
          handleClose={this.handleClose}
          onToggleDrawer={this.toggleDrawer}
        />
      </div>
    );
  }
}

export default withStyles(styles)(NavBarPropBased);
