import React, { Fragment, useEffect, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {
    TelegramIcon,
    TelegramShareButton,
    EmailShareButton,
    EmailIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from 'react-share'
import {
    Grid,
    CardActionArea,
    Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@material-ui/core'
import { Footer } from './other/Footer'
import { useSelector, useDispatch } from 'react-redux'
import Skeleton from '@material-ui/lab/Skeleton'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import SinglePage from './other/SinglePage'
import fetchSpeakers from '../redux/speakers/fetchSpeakers'
import ScrollToTop from './other/ScrollToTop'
let list = ''
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
}))

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props

    const handleClose = () => {
        onClose(selectedValue)
    }

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={open}
        >
            <DialogTitle id="simple-dialog-title" className={'text-center'}>
                به اشتراک بگذار
            </DialogTitle>
            <List>
                <ListItem autoFocus button>
                    <TelegramShareButton
                        className={'d-contents'}
                        url={'https://google.com'}
                        title={'Description like google com and another'}
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <TelegramIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="تلگرام" />
                    </TelegramShareButton>
                </ListItem>
                <ListItem autoFocus button>
                    <EmailShareButton
                        className={'d-contents'}
                        url={'https://google.com'}
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <EmailIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="ایمیل" />
                    </EmailShareButton>
                </ListItem>
                <ListItem autoFocus button>
                    <TwitterShareButton
                        className={'d-contents'}
                        url={'https://google.com'}
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <TwitterIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="توییتر" />
                    </TwitterShareButton>
                </ListItem>
                <ListItem autoFocus button>
                    <WhatsappShareButton
                        className={'d-contents'}
                        url={'https://google.com'}
                        title={'Description like google com and another'}
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <WhatsappIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="واتس‌اپ" />
                    </WhatsappShareButton>
                </ListItem>
            </List>
        </Dialog>
    )
}

const Events = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [selectedValue, setSelectedValue] = React.useState()
    const handleClickOpen = () => {
        setOpen(true)
    }
    const event = useSelector((state) => state.events)
    const speakers = useSelector((state) => state.speakers.speakersContent)
    const dispatch = useDispatch()
    useEffect(() => {
        if (speakers.length === 0) {
            event.eventsContent.map((eve) => {
                dispatch(fetchSpeakers(eve.id, event.eventsContent.length))
                return null
            })
        }
    }, [event.eventsContent.length])

    const handleClose = (value) => {
        setOpen(false)
        setSelectedValue(value)
    }
    const events = useSelector((state) => state.events.eventsContent)
    const speakersLoading = useSelector((state) => state.speakers.loading)
    let o = 0
    let match = useRouteMatch()
    if (speakersLoading === false) {
        list = events.map((event) => {
            return (
                <Fragment key={event.id + 'eve'}>
                    {speakers.map((speaker) => {
                        if (speaker.id === event.id && o !== speaker.id) {
                            o = speaker.id
                            return (
                                <Grid
                                    key={speaker.id + 'speve'}
                                    item
                                    xl={4}
                                    lg={4}
                                    xs={12}
                                >
                                    <Card className={classes.root}>
                                        <CardHeader
                                            className={[
                                                'rtl',
                                                'SpekaerTitle',
                                            ].join(' ')}
                                            avatar={
                                                <Avatar
                                                    aria-label="recipe"
                                                    src={[
                                                        'http://cmisfahan.ir/',
                                                        speaker.speaker_cover,
                                                    ].join('')}
                                                    className={classes.avatar}
                                                >
                                                    فـ
                                                </Avatar>
                                            }
                                            action={
                                                <IconButton aria-label="settings">
                                                    <MoreVertIcon />
                                                </IconButton>
                                            }
                                            title={speaker.speaker_name}
                                            subheader={event.event_date}
                                        />
                                        <CardActionArea
                                            component={Link}
                                            to={`${match.url}/${event.id}`}
                                        >
                                            <CardMedia
                                                className={classes.media}
                                                image={[
                                                    'http://cmisfahan.ir/',
                                                    event.theme_picture,
                                                ].join('')}
                                                title={event.theme}
                                            />
                                            <CardContent>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                    component="p"
                                                    className={[
                                                        'rtl',
                                                        'text-justify',
                                                    ].join(' ')}
                                                >
                                                    {event.theme_details.slice(
                                                        0,
                                                        400
                                                    )}
                                                    ...
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions disableSpacing>
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteIcon />
                                            </IconButton>
                                            <IconButton
                                                aria-label="share"
                                                onClick={handleClickOpen}
                                            >
                                                <ShareIcon />
                                            </IconButton>
                                            <SimpleDialog
                                                selectedValue={selectedValue}
                                                open={open}
                                                onClose={handleClose}
                                            />
                                            <IconButton aria-label="show more">
                                                <MoreHoriz />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        }
                        return null
                    })}
                </Fragment>
            )
        })
    } else if (speakersLoading === true) {
        const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

        list = number.map((nmb) => (
            <Grid key={nmb + 'eveLoading'} item xl={4} lg={4} xs={12}>
                <Card className={classes.root}>
                    <CardHeader
                        className={['rtl', 'SpekaerTitle'].join(' ')}
                        avatar={
                            <Skeleton
                                animation="wave"
                                variant="circle"
                                width={40}
                                height={40}
                            />
                        }
                        title={
                            <Skeleton
                                animation="wave"
                                height={10}
                                width="80%"
                                style={{ marginBottom: 6 }}
                            />
                        }
                        subheader={
                            <Skeleton
                                animation="wave"
                                height={10}
                                width="40%"
                            />
                        }
                    />
                    <CardActionArea>
                        <Skeleton
                            animation="wave"
                            variant="rect"
                            height={267}
                            style={{ marginBottom: 6 }}
                        />
                        <React.Fragment>
                            <Skeleton
                                animation="wave"
                                height={10}
                                style={{ marginBottom: 6 }}
                            />
                            <Skeleton
                                animation="wave"
                                height={10}
                                width="90%"
                                style={{ marginBottom: 6 }}
                            />
                            <Skeleton
                                animation="wave"
                                height={10}
                                width="80%"
                            />
                        </React.Fragment>
                    </CardActionArea>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton
                            aria-label="share"
                            onClick={handleClickOpen}
                        >
                            <ShareIcon />
                        </IconButton>
                        <SimpleDialog
                            selectedValue={selectedValue}
                            open={open}
                            onClose={handleClose}
                        />
                        <IconButton aria-label="show more">
                            <MoreHoriz />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        ))
    }
    return (
        <Fragment>
            <ScrollToTop />
            <Switch>
                <Route path={match.path + '/:id'}>
                    <SinglePage title={'events'} />
                </Route>
                <Route>
                    <div
                        className={[classes.root, 'MainContainer', 'mb50'].join(
                            ' '
                        )}
                    >
                        <Grid container spacing={3}>
                            {list}
                        </Grid>
                    </div>
                </Route>
            </Switch>
            <Footer />
        </Fragment>
    )
}

export default Events
