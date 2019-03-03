import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import { default as MList } from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = theme => ({
  list: {
    marginBottom: theme.spacing.unit * 2,
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper,
  },
});

const List = ({ classes, items }) => {
  const printed = {
    today: false,
    tomorrow: false,
    future: false,
  };

  return (
    <Fragment>
      <MList className={classes.list}>
        {items.map(({ node: { title, date, id, secondary, person } }) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          const tomorrow = new Date(today);
          tomorrow.setDate(tomorrow.getDate() + 1);


          const event = new Date(Date.parse(date));
          event.setHours(0, 0, 0, 0);
          event.setFullYear(today.getFullYear());
          return (
            <Fragment key={id}>
              {event.getTime() === today.getTime() && !printed.today && (printed.today = true) && <ListSubheader className={classes.subHeader}>Today</ListSubheader>}
              {event.getTime() === tomorrow.getTime() && !printed.tomorrow && (printed.tomorrow = true) && <ListSubheader className={classes.subHeader}>Tomorrow</ListSubheader>}
              {event.getTime() > tomorrow.getTime() && !printed.future && (printed.future = true) && <ListSubheader className={classes.subHeader}>Future</ListSubheader>}
              <ListItem divider button onClick={() => navigate(`/event/${id}`)}>
                <ListItemText primary={title} secondary={date} />
              </ListItem>
            </Fragment>
          );
        })}
      </MList>
    </Fragment>
  )

};

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);
