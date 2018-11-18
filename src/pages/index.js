import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { graphql } from 'gatsby';

import List from '../components/List';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    flexGrow: 1,
  },
};

const Index = ({ classes, data: { allRssItem: { edges: events } } }) => {
  return (
    <div className={classes.root}>
      <List items={events} />
    </div>
  );
}


export default withStyles(styles)(Index);

export const pageQuery = graphql`
  query indexPageQuery {
    allRssItem {
      edges {
        node {
          title
          date
          id
        }
      }
    }
  }
`;
