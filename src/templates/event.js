import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    paddingLeft: theme.spacing.unit * 2,
  },
});

const EventTemplate = ({ classes, data: { rssItem } }) => {
  let i = 0;
  return (
    <div className={classes.root}>
      <button onClick={() => window.history.back()}>Back</button>
      <Typography variant="h2" gutterBottom>
        {rssItem.title}
      </Typography>
      <div>{rssItem.date} | {rssItem.mainDate}</div>
      <Typography variant="h3" gutterBottom>
        Closures
      </Typography>
      <p dangerouslySetInnerHTML={
        { 
          __html: rssItem.closures.replace(/(?:\r\n|\r|\n)/g, () => {
            let value = '';
            if (i % 2 === 0) {
              value = '<br />';
            } else {
              value = '<hr />';
            }
            i = i + 1;
            return value;
          }) 
        }
      } />
    </div>
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