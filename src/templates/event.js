import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout';

const styles = theme => ({
  root: {
    paddingLeft: theme.spacing.unit * 2,
  },
});

const EventTemplate = ({ classes, data: { rssItem } }) => {
  console.log(rssItem.closures);
  return (
    <Layout>
      <div className={classes.root}>
        <button onClick={() => window.history.back()}>Back</button>
        <Typography variant="h2" gutterBottom>
          {rssItem.title}
        </Typography>
        <div>{rssItem.date} | {rssItem.mainDate}</div>
        <Typography variant="h3" gutterBottom>
          Closures
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: rssItem.closures }} />
      </div>
    </Layout>
  );
};

export default withStyles(styles)(EventTemplate);

export const pageQuery = graphql`
  query currentEventQuery($id: String!) {
  rssItem(id: {eq: $id}) {
    id
    date
    title
    mainDate
    closures
  }
}
`;