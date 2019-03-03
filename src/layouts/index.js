import React from 'react';
import Helmet from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../style.css';


const styles = theme => ({
    text: {
        padding: theme.spacing.unit / 2,
        color: 'white',
        // fontFamily: "'Roboto', sans-serif",
    },
    paper: {
        paddingBottom: 50,
    },
    head: {
        display: 'flex',
        backgroundColor: '#bf5700',
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
            <link rel="stylesheet" rel="preload" as="font" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
            <script type="text/javascript">{`
    window.doorbellOptions = {
        id: '10123',
        appKey: 'EtyyCdm1tiwNBlifivQOCvdYHoAULrZTnWrkW8a93pTFvEZErqxYhmkDq5XFFt25'
    };
    (function(w, d, t) {
        var hasLoaded = false;
        function l() { if (hasLoaded) { return; } hasLoaded = true; window.doorbellOptions.windowLoaded = true; var g = d.createElement(t);g.id = 'doorbellScript';g.type = 'text/javascript';g.async = true;g.src = 'https://embed.doorbell.io/button/'+window.doorbellOptions['id']+'?t='+(new Date().getTime());(d.getElementsByTagName('head')[0]||d.getElementsByTagName('body')[0]).appendChild(g); }
        if (w.attachEvent) { w.attachEvent('onload', l); } else if (w.addEventListener) { w.addEventListener('load', l, false); } else { l(); }
        if (d.readyState == 'complete') { l(); }
    }(window, document, 'script'));
    `}
            </script>
        </Helmet>
        <CssBaseline />
        <Paper square className={classes.paper}>
            <div className={classes.head}>
                <div className={classes.back}>
                    {location.pathname && (location.pathname !== '/' && location.pathname !== '/offline-plugin-app-shell-fallback/') &&
                        <Button
                            variant="outlined"
                            className={classes.button}
                            onClick={() => window.history.back()}
                        >
                            Back
                        </Button>
                    }
                </div>
                <h2 className={classes.text}>What's Happening?</h2>
                <div className={classes.right} />
            </div>
            <div>{children}</div>
        </Paper>
    </React.Fragment>
);

export default withStyles(styles)(Layout);