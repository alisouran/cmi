import React, { Fragment } from 'react'
import {
    Button,
    Container,
    makeStyles,
    Grid,
    CardMedia,
    CardActions,
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { Speaker12, Basecamp, WordPress, MailChimp } from '../assets/img/Img'
import { Footer } from './other/Footer'

const useStyle = makeStyles({
    pr0: {
        paddingRight: '0 !important',
        paddingLeft: '0 !important',
    },
    Rtl: {
        direction: 'rtl',
    },
    speakerInfo: {
        textAlign: 'justify',
        textAlignLast: 'right',
        fontSize: '90% !important',
    },
    eventDate: {
        textAlign: 'left',
        fontSize: '95% !important',
    },
    eventBtn: {
        float: 'left',
    },
    MainContainer: {
        padding: '2% 9.7% 0% 10% !important',
    },
    mt5: {
        marginTop: '3rem !important',
    },
    bgGray: {
        backgroundColor: '#f2f2f2 !important',
    },
    spImg: {
        marginBottom: '-7px',
    },
    ptb10: {
        padding: '20px 0',
    },
    ptb20: {
        padding: '30px 0',
    },
    lastSp: {
        fontSize: 26,
    },
    maxwidth100: {
        maxWidth: '100%',
    },
    ml10: {
        margin: '0px 10px',
    },
    font15: {
        fontSize: 15,
    },
    font20: {
        fontSize: 20,
    },
})

const Home = () => {
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)',
    })
    const classes = useStyle()
    return (
        <Fragment>
            <Container
                maxWidth="xl"
                className={isTabletOrMobileDevice ? classes.pr0 : ''}
            >
                <div className="indexhead">
                    <div className="indexcontainer container-main h-100 intro-text">
                        <h1 className="text-center rtl text-center text-white text-mobile">
                            صبح‌خلاق اصفهان
                        </h1>
                        <p className="text-center rtl text-white text-mobile">
                            هر ماه یک صبح جمعه، یک صبحانه‌ی رایگان و یک سخنرانی
                            الهام‌بخش، همزمان با بیش از ۲۰۰ شهر دنیا.
                            <br />
                            <Button
                                className="aboutBtn"
                                component={Link}
                                to="/about"
                                variant="contained"
                                color="primary"
                            >
                                صبح خلاق چیست؟
                            </Button>
                        </p>
                    </div>
                </div>
            </Container>
            <Container className={classes.MainContainer} maxWidth="xl">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item sm={6} className={classes.Rtl}>
                        <h2>سخنران این ماه: سعید صدقی</h2>
                        <p className={classes.speakerInfo}>
                            این روانشناس دوست داشتنی، که چند سالی است در زمینه
                            عمومی سازی روانشناسی و مهارت‌های لازم برای خوب زیستن
                            به نوشتن و تدریس مشغول هست، جمعه، ۱۸ بهمن‌ماه در
                            تولد یک سالگی صبح خلاق با ما درباره پارادوکس سکوت
                            خواهد گفت و دو چهره متفاوت از سکوت رو به ما معرفی
                            خواهد کرد. سعید اعتقاد دارد که ما انسان‌ها برای
                            زندگی کردن به چیزهایی بیشتر از آنچه که در #مدرسه،
                            خانواده و دانشگاه یاد میگیریم نیاز داریم و می‌توانیم
                            از طریق فلسفه، علم و هنر به این مهارت‌های تکمیلی دست
                            پیدا کنیم. در همین راستا، سعید برای محقق کردن این
                            هدف طرح جذابی رو با عنوان «… برای زندگی» آغاز کرده و
                            آن را در قالب تدریس در مراکز فرهنگی و درمانی و
                            کلاس‌های فوق برنامه در دانشگاه به اجرا در آورده است.
                            در واقع در این طرح تلاش می‌کنیم تا میراث‌های فرهنگی،
                            هنری و فلسفی لازم برای خوب زیستن و زندگی کردن را
                            شناسایی و با قرار دادن آن‌ها در این سه نقطه، به
                            آن‌ها عمل کنیم.
                        </p>
                        <p className={classes.eventDate}>
                            ۱۸ بهمن ماه، خیابان فیض، روبروی باشگاه بانک ملی،
                            اتاق بازرگانی اصفهان، ساعت ۸:۳۰
                        </p>
                        <Button
                            className={'aboutBtn ' + classes.eventBtn}
                            component={Link}
                            to="/reg"
                            variant="contained"
                            color="primary"
                        >
                            آموزش ثبت‌نام در رویداد
                        </Button>
                    </Grid>
                    <Grid
                        item
                        className={
                            'text-center ' + classes.mt5 + ' ' + classes.spImg
                        }
                        sm={6}
                    >
                        <img src={Speaker12} alt="speaker" />
                    </Grid>
                </Grid>
            </Container>
            <Container
                className={classes.MainContainer + ' ' + classes.bgGray}
                maxWidth="xl"
            >
                <h2 className={'text-center ' + classes.lastSp}>
                    سخنرانی‌های پیشین
                </h2>
                <Grid className={classes.ptb10} container spacing={2}>
                    <Grid item sm={2}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        Lizard
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Lizards are a widespread group of
                                        squamate reptiles, with over 6,000
                                        species, ranging across all continents
                                        except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.MainContainer} maxWidth="lg">
                <h2 className={'text-center ' + classes.lastSp}>
                    حامیان جهانی صبح خلاق
                </h2>
                <Grid className={classes.ptb20} container spacing={2}>
                    <Grid item sm={4}>
                        <a
                            href="https://mailchimp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={MailChimp}
                                className={classes.maxwidth100}
                                alt="MailChimp"
                            />
                        </a>
                    </Grid>
                    <Grid item sm={4}>
                        <a
                            href="https://wordpress.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={WordPress}
                                className={classes.maxwidth100}
                                alt="WordPress"
                            />
                        </a>
                    </Grid>
                    <Grid item sm={4}>
                        <a
                            href="https://basecamp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={Basecamp}
                                className={classes.maxwidth100}
                                alt="Basecamp"
                            />
                        </a>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Home
