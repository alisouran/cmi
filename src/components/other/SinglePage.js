import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    LinearProgress,
    makeStyles,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@material-ui/core'
import Img from 'react-image'
import Skeleton from '@material-ui/lab/Skeleton'
import { useMediaQuery } from 'react-responsive'
import fetchSpeakers from '../../redux/speakers/fetchSpeakers'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import SpeakerSingle from './SpeakerSingle'
import fetchThirtysecond from '../../redux/thirtysecond/fetchThirtysecond'
import ThirtySecondSingle from './ThirtySecondSingle'
let content = ''

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}))
const ShowContent = (props) => {
    let o = []
    let s = 0
    let t = 0
    let r = []
    let loadThirty = false
    return (
        <Fragment>
            {/* Event Details */}
            <Grid
                container
                justify="center"
                alignItems="center"
                className={[
                    props.isTabletOrMobileDevice ? 'plr10' : 'h100vh plr30',
                ].join(' ')}
            >
                <Grid
                    className={[
                        props.isTabletOrMobileDevice ? 'pd0' : '',
                        'text-center',
                    ].join(' ')}
                    item
                    lg={6}
                    sm={12}
                >
                    <Img
                        src={[
                            'http://cmisfahan.ir/',
                            props.eveData.theme_picture,
                        ].join('')}
                        alt={props.eveData.theme}
                        className={[
                            'maxWidth100',
                            props.isTabletOrMobileDevice ? 'pt30' : 'plr50',
                        ].join(' ')}
                        loader={
                            <Skeleton
                                variant="rect"
                                className={[
                                    'maxWidth100',
                                    'h412',
                                    props.isTabletOrMobileDevice
                                        ? 'pt30'
                                        : 'plr50',
                                ].join(' ')}
                            />
                        }
                    />
                </Grid>
                <Grid
                    className={[
                        props.isTabletOrMobileDevice ? 'pd0' : '',
                        'rtl',
                    ].join(' ')}
                    item
                    lg={6}
                    sm={12}
                >
                    <h1
                        className={[
                            props.isTabletOrMobileDevice
                                ? 'text-center mt10'
                                : 'plr50',
                        ]}
                    >
                        {props.eveData.theme}
                    </h1>
                    <p
                        className={[
                            'text-justify',
                            'font17',
                            props.isTabletOrMobileDevice ? '' : 'plr50',
                        ].join(' ')}
                    >
                        {props.eveData.theme_details}
                    </p>
                </Grid>
            </Grid>
            {/* Speaker Details */}
            {props.speakers.map((sp) => {
                if (props.eveData.id === sp.id && s !== sp.id) {
                    s = sp.id
                    return (
                        <Grid
                            key={sp.id + 'spe' + sp.speaker_name}
                            container
                            justify="center"
                            alignItems="center"
                            className={['bgDark', 'pd50'].join(' ')}
                        >
                            <Grid
                                className={[
                                    props.isTabletOrMobileDevice ? 'pd0' : '',
                                    'rtl',
                                ].join(' ')}
                                item
                                lg={6}
                                sm={12}
                            >
                                <h1
                                    className={[
                                        props.isTabletOrMobileDevice
                                            ? 'text-center mt10'
                                            : 'plr50',
                                        'colorWhite',
                                    ].join(' ')}
                                >
                                    {sp.speaker_name}
                                </h1>
                                <p
                                    className={[
                                        'text-justify',
                                        'font17',
                                        'colorWhite',
                                        props.isTabletOrMobileDevice
                                            ? ''
                                            : 'plr50',
                                    ].join(' ')}
                                >
                                    {sp.speaker_details}
                                </p>
                            </Grid>
                            <Grid
                                className={[
                                    props.isTabletOrMobileDevice ? 'pd0' : '',
                                ].join(' ')}
                                item
                                lg={6}
                                sm={12}
                            >
                                <Img
                                    src={[
                                        'http://cmisfahan.ir/',
                                        sp.speaker_cover,
                                    ].join('')}
                                    alt={props.eveData.theme}
                                    className={[
                                        'maxWidth100',
                                        props.isTabletOrMobileDevice
                                            ? 'pt30'
                                            : 'plr50',
                                    ].join(' ')}
                                    loader={
                                        <Skeleton
                                            variant="rect"
                                            className={[
                                                'maxWidth100',
                                                'h412',
                                                props.isTabletOrMobileDevice
                                                    ? 'pt30'
                                                    : 'plr50',
                                            ].join(' ')}
                                        />
                                    }
                                />
                            </Grid>
                        </Grid>
                    )
                }
                return null
            })}
            {/* Speaker Videos */}
            <Grid container className={['bgDark', 'pd50', 'rtl'].join(' ')}>
                <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                    <h3
                        className={['rtl', 'colorWhite', 'text-right'].join(
                            ' '
                        )}
                    >
                        فیلم‌های سخنران:
                    </h3>
                </Grid>
                {props.speakers.map((speaker) => {
                    if (
                        props.eveData.id === speaker.id &&
                        o !== speaker.event_number
                    ) {
                        o = speaker.event_number
                        return (
                            <Grid
                                key={
                                    speaker.id +
                                    speaker.event_number +
                                    speaker.title
                                }
                                item
                                lg={2}
                                sm={12}
                                xs={12}
                                className={[
                                    'mlr10',
                                    props.isTabletOrMobileDevice ? 'mbt10' : '',
                                ].join(' ')}
                            >
                                <Card className={''}>
                                    <CardActionArea
                                        component={Link}
                                        to={`${props.match.url}/talks/${speaker.slug}`}
                                    >
                                        <CardMedia
                                            className={'h140'}
                                            image={[
                                                'https://cmisfahan.ir/',
                                                speaker.speaker_cover,
                                            ].join('')}
                                            title={speaker.title}
                                        />
                                        <CardContent>
                                            <Typography
                                                className={[
                                                    'speakerName',
                                                    'rtl',
                                                ].join(' ')}
                                                gutterBottom
                                                variant="h5"
                                                component="p"
                                            >
                                                {speaker.speaker_name}
                                            </Typography>
                                            <Typography
                                                className={[
                                                    'rtl',
                                                    'text-center',
                                                ].join(' ')}
                                                variant="body2"
                                                color="textSecondary"
                                                component="p"
                                            >
                                                {speaker.title}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    }
                    return null
                })}
            </Grid>
            {/* Thirty Second Details */}

            {props.thirtysecond.map((th) => {
                if (props.eveData.id === th.id && t !== th.id) {
                    t = th.id
                    loadThirty = true
                    return (
                        <Grid
                            key={th.id + 'ThirtySec'}
                            container
                            justify="center"
                            alignItems="center"
                            className={['pd50'].join(' ')}
                        >
                            <Grid
                                className={[
                                    props.isTabletOrMobileDevice ? 'pd0' : '',
                                ].join(' ')}
                                item
                                lg={6}
                                sm={12}
                            >
                                <Img
                                    src={[
                                        'http://cmisfahan.ir/',
                                        th.thirty_cover,
                                    ].join('')}
                                    alt={props.eveData.theme}
                                    className={[
                                        'maxWidth100',
                                        props.isTabletOrMobileDevice
                                            ? 'pt30'
                                            : 'plr50',
                                    ].join(' ')}
                                    loader={
                                        <Skeleton
                                            variant="rect"
                                            className={[
                                                'maxWidth100',
                                                'h412',
                                                props.isTabletOrMobileDevice
                                                    ? 'pt30'
                                                    : 'plr50',
                                            ].join(' ')}
                                        />
                                    }
                                />
                            </Grid>
                            <Grid
                                className={[
                                    props.isTabletOrMobileDevice ? 'pd0' : '',
                                    'rtl',
                                ].join(' ')}
                                item
                                lg={6}
                                sm={12}
                            >
                                <h1
                                    className={[
                                        props.isTabletOrMobileDevice
                                            ? 'text-center mt10'
                                            : 'plr50',
                                    ].join(' ')}
                                >
                                    سی‌ثانیه‌های رویداد
                                </h1>
                                <p
                                    className={[
                                        'text-justify',
                                        'font17',
                                        props.isTabletOrMobileDevice
                                            ? ''
                                            : 'plr50',
                                    ].join(' ')}
                                >
                                    {th.description}
                                </p>
                            </Grid>
                        </Grid>
                    )
                }
                return null
            })}
            {/* ThirtySecond Videos */}
            <Grid
                container
                className={['pd50', 'rtl', loadThirty ? '' : 'dNone'].join(' ')}
            >
                <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
                    <h3 className={['rtl', 'text-right'].join(' ')}>
                        سی‌ثانیه‌ها:
                    </h3>
                </Grid>
                {props.thirtysecond.map((thse) => {
                    if (props.eveData.id === thse.id && r !== thse.slug) {
                        r = thse.slug
                        return (
                            <Grid
                                key={thse.id + thse.slug + thse.title}
                                item
                                lg={2}
                                sm={12}
                                xs={12}
                                className={['mlr10'].join(' ')}
                            >
                                <Card className={''}>
                                    <CardActionArea
                                        component={Link}
                                        to={`${props.match.url}/30/${thse.slug}`}
                                    >
                                        <CardMedia
                                            className={'h140'}
                                            image={[
                                                'https://cmisfahan.ir/',
                                                thse.thirty_cover,
                                            ].join('')}
                                            title={thse.title}
                                        />
                                        <CardContent>
                                            <Typography
                                                className={[
                                                    'speakerName',
                                                    'rtl',
                                                ].join(' ')}
                                                gutterBottom
                                                variant="h5"
                                                component="p"
                                            >
                                                {thse.title}
                                            </Typography>
                                            <Typography
                                                className={[
                                                    'rtl',
                                                    'text-center',
                                                ].join(' ')}
                                                variant="body2"
                                                color="textSecondary"
                                                component="p"
                                            ></Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    }
                    return null
                })}
            </Grid>
        </Fragment>
    )
}

const SinglePage = (props) => {
    const path = window.document.location.pathname
    const speakers = useSelector((state) => state.speakers.speakersContent)
    const speakersLoading = useSelector((state) => state.speakers.loading)
    const thirtysecond = useSelector(
        (state) => state.thirtysecond.thirtysecondContent
    )
    const thirtysecondLoading = useSelector(
        (state) => state.thirtysecond.loading
    )
    const events = useSelector((state) => state.events.eventsContent)
    var slug = path.substring(path.lastIndexOf('/') + 1)
    let match = useRouteMatch()
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)',
    })

    const event = useSelector((state) => state.events)
    let isLoading = true
    if (speakersLoading === false && thirtysecondLoading === false) {
        if (props.title === 'events') {
            content = events.map((eve) => {
                if ('"' + eve.id + '"' === '"' + slug + '"') {
                    isLoading = false
                    return (
                        <ShowContent
                            key={eve.id + 'post'}
                            eveData={eve}
                            speakers={speakers}
                            thirtysecond={thirtysecond}
                            match={match}
                            isTabletOrMobileDevice={isTabletOrMobileDevice}
                        />
                    )
                }
            })
        } else if (props.title === 'post') {
            console.log('blog post')
        }
    }
    const dispatch = useDispatch()
    useEffect(() => {
        if (speakers.length === 0) {
            event.eventsContent.map((eve) => {
                dispatch(fetchSpeakers(eve.id, event.eventsContent.length))
            })
        }
        if (thirtysecond.length === 0) {
            event.eventsContent.map((eve) => {
                dispatch(fetchThirtysecond(eve.id, event.eventsContent.length))
            })
        }
    }, [event.eventsContent.length])

    const classes = useStyles()
    return (
        <Fragment>
            {speakersLoading && thirtysecondLoading ? (
                <div className={[classes.root, 'h100vh', 'mt10'].join(' ')}>
                    <LinearProgress className={classes.margin} />
                </div>
            ) : (
                <Switch>
                    <Route path={match.url + '/talks' + '/:slug'}>
                        <SpeakerSingle
                            data={speakers}
                            slug={slug}
                            isTabletOrMobileDevice={isTabletOrMobileDevice}
                        />
                    </Route>
                    <Route path={match.url + '/30' + '/:slug'}>
                        <ThirtySecondSingle
                            data={thirtysecond}
                            slug={slug}
                            isTabletOrMobileDevice={isTabletOrMobileDevice}
                        />
                    </Route>
                    <Route>
                        <Fragment>{content}</Fragment>
                    </Route>
                </Switch>
            )}
        </Fragment>
    )
}

export default SinglePage
