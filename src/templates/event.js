import React from 'react';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
});

const EventTemplate = ({ classes, data: { rssItem } }) => {
  let i = 0;
  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        {rssItem.title}
      </Typography>
      <div>{rssItem.date} | {rssItem.mainDate}</div>
      <Typography variant="h4" gutterBottom>
        Closures
      </Typography>
      <Typography dangerouslySetInnerHTML={
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
      <Button 
        variant="outlined" 
        rel="noopener noreferrer" 
        href={rssItem.link} 
        className={classes.button}
        target="_blank"
        color="primary"
      >
        Learn More
      </Button>
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
    link
  }
}
`;