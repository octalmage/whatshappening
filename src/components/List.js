import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { default as MList } from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  list: {
    marginBottom: theme.spacing.unit * 2,
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper,
  },
});

const List = ({ classes, items }) => (
  <Fragment>
    <MList className={classes.list}>
      {items.map(({ node: { title, date, id, secondary, person } }) => (
        <Fragment key={id}>
          {id === 1 && <ListSubheader className={classes.subHeader}>Today</ListSubheader>}
          {id === 3 && <ListSubheader className={classes.subHeader}>Tomorrow</ListSubheader>}
          <ListItem button onClick={() => navigate(`/event/${id}`)}>
            <ListItemText primary={title} secondary={date} />
          </ListItem>
        </Fragment>
      ))}
    </MList>
  </Fragment>
);

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);
