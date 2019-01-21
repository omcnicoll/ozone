import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  list: {
    width: 200
  },
  paper: {
    background: theme.palette.primary.main
  },
  selected: {
    color: 'green',
    background: 'red'
  },
  font: {
    orange: theme.palette.text.orange
  }
});

class NavigationDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleClose = () => {
    this.props.handleClose();
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Drawer
          classes={{ paper: classes.paper }}
          open={this.props.open}
          onClick={this.handleClose}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.handleClose}
            onKeyDown={this.handleClose}
          >
            <div className={classes.list}>
              <List>
                {['Sitecore'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      <FontAwesomeIcon icon="keyboard" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="h7"
                          style={{ color: classes.font.orange }}
                        >
                          {text}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {['MTB'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      <FontAwesomeIcon icon="bicycle" />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {['About'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      <FontAwesomeIcon icon="coffee" />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

NavigationDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavigationDrawer);
