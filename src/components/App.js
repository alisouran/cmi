import React, { Fragment, useEffect } from 'react'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    IconButton,
    makeStyles,
    Grid,
    BottomNavigationAction,
    BottomNavigation,
    Drawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core'
import Instagram from '@material-ui/icons/Instagram'

import Telegram from '@material-ui/icons/Telegram'
import Twitter from '@material-ui/icons/Twitter'
import Facebook from '@material-ui/icons/Facebook'
import EventNote from '@material-ui/icons/EventRounded'
import { Logo } from '../assets/img/Img'
import './../assets/style.css'
import { Link, Switch, Route, useHistory } from 'react-router-dom'
import Events from './Events'
import Home from './Home'
import Reg from './Reg'
import Join from './Join'
import Suggestion from './Suggestion'
import Contact from './Contact'
import { useMediaQuery } from 'react-responsive'
import Notes from '@material-ui/icons/NotesRounded'
import { FiHome, FiCalendar, FiZap, FiHelpCircle } from 'react-icons/fi'
import Deck from '@material-ui/icons/DeckRounded'
import Team from './Team'
import QuestionAnswer from './other/QuestionAnswer'

const useStyle = makeStyles({
    AppBar: {
        backgroundColor: 'white',
        minHeight: '74px !important',
        boxShadow: '0px -2px 3px gray !important',
        paddingBottom: '5px',
        paddingTop: '5px',
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
    zIndexTop: {
        zIndex: 9999999999,
    },
})

const App = (props) => {
    const match = useHistory()
    const [state, setState] = React.useState({
        right: false,
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return
        }

        setState({ ...state, [anchor]: open })
    }
    const classes = useStyle()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)',
    })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)',
    })
    const [value, setValue] = React.useState('home')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    useEffect(() => {
        const path = match.location.pathname

        const slug = path.substring(path.lastIndexOf('/') + 1)

        if (slug === 'events') {
            setValue('events')
        } else if (slug === 'home') {
            setValue('home')
        } else if (slug === 'reg') {
            setValue('reg')
        }
    }, [match.location])
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
                                <Link className={classes.navItem} to="/team">
                                    تیم خلاق ما
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
                        className={[classes.root, classes.zIndexTop].join(' ')}
                    >
                        <BottomNavigationAction
                            label="خانه"
                            value="home"
                            icon={<FiHome className="icon-size" />}
                            component={Link}
                            to="/"
                        />
                        <BottomNavigationAction
                            label="رویدادها"
                            value="events"
                            icon={<FiCalendar className="icon-size" />}
                            component={Link}
                            to="/events"
                        />
                        <BottomNavigationAction
                            label="ثبت‌نام"
                            value="reg"
                            icon={<FiZap className="icon-size" />}
                            component={Link}
                            to="/reg"
                        />
                        <BottomNavigationAction
                            label="منو"
                            value="other"
                            icon={<Notes />}
                            component={Link}
                            onClick={toggleDrawer('right', true)}
                        />
                    </BottomNavigation>
                    <div>
                        <React.Fragment>
                            <Drawer
                                anchor={'right'}
                                open={state['right']}
                                onClose={toggleDrawer('right', false)}
                            >
                                <List>
                                    <ListItem button component={Link} to="/q">
                                        <ListItemIcon>
                                            {
                                                <FiHelpCircle className="icon-size" />
                                            }
                                        </ListItemIcon>
                                        <ListItemText primary="پرسش و پاسخ" />
                                    </ListItem>
                                </List>
                            </Drawer>
                        </React.Fragment>
                    </div>
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
                    <Route path="/team">
                        {
                            <Team
                                isTabletOrMobileDevice={isTabletOrMobileDevice}
                            />
                        }
                    </Route>
                    <Route path="/contact">{<Contact />}</Route>
                    <Route path="/q">{<QuestionAnswer />}</Route>
                </Switch>
            </Fragment>
        </React.Fragment>
    )
}

export default App
