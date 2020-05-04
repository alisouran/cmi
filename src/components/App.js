import React, { Fragment } from 'react'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    IconButton,
    makeStyles,
    Grid,
    BottomNavigationAction,
    BottomNavigation,
} from '@material-ui/core'
import Instagram from '@material-ui/icons/Instagram'
import Telegram from '@material-ui/icons/Telegram'
import Twitter from '@material-ui/icons/Twitter'
import Facebook from '@material-ui/icons/Facebook'
import { Logo } from '../assets/img/Img'
import './../assets/style.css'
import { Link, Switch, Route } from 'react-router-dom'
import Events from './Events'
import Home from './Home'
import Reg from './Reg'
import Join from './Join'
import Suggestion from './Suggestion'
import Contact from './Contact'
import { useMediaQuery } from 'react-responsive'
import FolderIcon from '@material-ui/icons/Folder'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

const useStyle = makeStyles({
    AppBar: {
        backgroundColor: 'white',
        minHeight: '74px !important',
        boxShadow: '0px -2px 3px gray !important',
    },
    toolbar: {
        minHeight: '74px !important',
    },
    SocialSize: {
        color: 'black',
        fontSize: 40,
        transition: '.4s',
    },
    Instagram: {
        '&:hover': {
            color: 'rgba(255,23,68 ,1) !important',
            transition: '.2s',
        },
    },
    Telegram: {
        '&:hover': {
            color: 'rgba(30,136,229 ,1) !important',
            transition: '.2s',
        },
    },
    Twitter: {
        '&:hover': {
            color: 'rgba(79,195,247 ,1) !important',
            transition: '.2s',
        },
    },
    Facebook: {
        '&:hover': {
            color: 'rgba(13,71,161 ,1) !important',
            transition: '.2s',
        },
    },
    dirRtl: {
        direction: 'rtl',
    },
    logo: {
        float: 'right',
        width: '200px',
        height: '41px',
        overflow: 'hidden',
        textIndent: '-99999px',
        marginLeft: '20px',
    },
    navItem: {
        marginLeft: '8px',
        marginRight: '8px',
        color: '#000',
        transition: '.4s',
        '&:hover': {
            color: '#1E88E5',
            transition: '.4s',
        },
        '&:focus': {
            color: '#1E88E5',
        },
    },
    root: {
        width: '100%',
        overflow: 'hidden',
        position: 'fixed',
        bottom: 0,
    },
})

const App = (props) => {
    const classes = useStyle()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)',
    })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)',
    })
    const [value, setValue] = React.useState('recents')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <React.Fragment>
            {isDesktopOrLaptop && (
                <Fragment>
                    <CssBaseline />
                    <AppBar className={classes.AppBar}>
                        <Toolbar className={classes.toolbar}>
                            <Grid item xs={4}>
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-haspopup="true"
                                    color="inherit"
                                    component="a"
                                >
                                    <Instagram
                                        className={
                                            classes.SocialSize +
                                            ' ' +
                                            classes.Instagram
                                        }
                                    />
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-haspopup="true"
                                    color="inherit"
                                    component="a"
                                >
                                    <Telegram
                                        className={
                                            classes.SocialSize +
                                            ' ' +
                                            classes.Telegram
                                        }
                                    />
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-haspopup="true"
                                    color="inherit"
                                    component="a"
                                >
                                    <Twitter
                                        className={
                                            classes.SocialSize +
                                            ' ' +
                                            classes.Twitter
                                        }
                                    />
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-haspopup="true"
                                    color="inherit"
                                    component="a"
                                >
                                    <Facebook
                                        className={
                                            classes.SocialSize +
                                            ' ' +
                                            classes.Facebook
                                        }
                                    />
                                </IconButton>
                            </Grid>
                            <Grid className={classes.dirRtl} item xs={8}>
                                <Link className={classes.navItem} to={'/'}>
                                    خانه
                                </Link>
                                <Link className={classes.navItem} to="/events">
                                    رویداد‌های پیشین
                                </Link>
                                <Link className={classes.navItem} to="/reg">
                                    ثبت‌نام در رویداد
                                </Link>
                                <Link className={classes.navItem} to="/join">
                                    همکاری با صبح‌خلاق
                                </Link>
                                <Link
                                    className={classes.navItem}
                                    to="/suggestion"
                                >
                                    معرفی سخنران
                                </Link>
                                <Link className={classes.navItem} to="/contact">
                                    تماس با ما
                                </Link>
                            </Grid>
                            <Link to="/">
                                <img
                                    className={classes.logo}
                                    src={Logo}
                                    alt="Logo"
                                />
                            </Link>
                        </Toolbar>
                    </AppBar>
                    <Toolbar className={classes.toolbar} />
                </Fragment>
            )}
            {isTabletOrMobileDevice && (
                <Fragment>
                    <BottomNavigation
                        value={value}
                        onChange={handleChange}
                        className={classes.root}
                    >
                        <BottomNavigationAction
                            label="Recents"
                            value="recents"
                            icon={<RestoreIcon />}
                            component={Link}
                            to="/"
                        />
                        <BottomNavigationAction
                            label="Favorites"
                            value="favorites"
                            icon={<FavoriteIcon />}
                            component={Link}
                            to="/events"
                        />
                        <BottomNavigationAction
                            label="Nearby"
                            value="nearby"
                            icon={<LocationOnIcon />}
                            component={Link}
                            to="/reg"
                        />
                        <BottomNavigationAction
                            label="Folder"
                            value="folder"
                            icon={<FolderIcon />}
                            component={Link}
                            to="/other"
                        />
                    </BottomNavigation>
                </Fragment>
            )}
            <Fragment>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/events">{<Events />}</Route>
                    <Route path="/reg">{<Reg />}</Route>
                    <Route path="/join">{<Join />}</Route>
                    <Route path="/suggestion">{<Suggestion />}</Route>
                    <Route path="/contact">{<Contact />}</Route>
                </Switch>
            </Fragment>
        </React.Fragment>
    )
}

export default App
