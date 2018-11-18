import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Transition from '../components/Transition';

const styles = theme => ({
    text: {
        paddingTop: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
    },
    paper: {
        paddingBottom: 50,
    },
});

const Layout = ({ classes, items, children, location }) => (
    <React.Fragment>
        <Helmet>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        </Helmet>
        <CssBaseline />
        <Paper square className={classes.paper}>
            <Typography className={classes.text} variant="h5" gutterBottom>
                What's Happening?
        </Typography>
            <Transition location={location}>{children}</Transition>
        </Paper>
    </React.Fragment>
);

export default withStyles(styles)(Layout);