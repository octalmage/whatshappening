import React from 'react';
import Helmet from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    text: {
        padding: theme.spacing.unit / 2,
    },
    paper: {
        paddingBottom: 50,
    },
    head: {
        display: 'flex',
        backgroundColor: 'white',
        borderBottom: '1px solid black',
        boxSizing: 'border-box',
        position: 'sticky',
        top: 0,
        zIndex: '10',
    },
    back: {
        padding: theme.spacing.unit,
        flex: 1,
    },
    right: {
        flex: 1,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

const Layout = ({ classes, items, children, location }) => (
    <React.Fragment>
        <Helmet>
            <title>What's Happening?</title>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        </Helmet>
        <CssBaseline />
        <Paper square className={classes.paper}>
            <div className={classes.head}>
                <div className={classes.back}>
                    {location.pathname && location.pathname !== '/' &&
                        <Button 
                            variant="outlined" 
                            className={classes.button} 
                            onClick={() => window.history.back()}
                        >
                            Back
                        </Button>
                    }
                </div>

                <Typography className={classes.text} variant="h4" gutterBottom>
                    <div className={classes.back}>What's Happening?</div>
                </Typography>
                <div className={classes.right} />
            </div>
            <div>{children}</div>
        </Paper>
    </React.Fragment>
);

export default withStyles(styles)(Layout);