import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Link, Container } from '@material-ui/core'
import Img from 'react-image'
import { Reg1, Reg2, Reg3, Reg4 } from '../assets/img/Img'
import Skeleton from '@material-ui/lab/Skeleton'
import { Footer } from './other/Footer'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}))

function getSteps() {
    return ['بریم به سایت جهانی', 'شروع ثبت‌نام', 'تکمیل فرم ثبت‌نام']
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <Fragment>
                    <span className={['text-justify'].join(' ')}>
                        به پیوند رویداد صبح خلاق اصفهان در سایت جهانی رویداد
                        مراجعه نمایید.
                        <br />
                        <br />
                        دکمه <b>MORE INFO</b> را مانند تصویر زیر انتخاب کنید.
                        <br />
                    </span>
                    <Img
                        className={['w-100']}
                        src={Reg1}
                        loader={
                            <Skeleton
                                variant="rect"
                                className={['maxWidth100', 'h412'].join(' ')}
                            />
                        }
                    />
                </Fragment>
            )
        case 1:
            return (
                <Fragment>
                    <span className={['text-justify'].join(' ')}>
                        بر روی دکمه <b>REGISTER</b> مانند تصویر زیر کلیک کنید.{' '}
                    </span>
                    <Img
                        className={['w-100']}
                        src={Reg2}
                        loader={
                            <Skeleton
                                variant="rect"
                                className={['maxWidth100', 'h412'].join(' ')}
                            />
                        }
                    />
                    <span className={['text-justify'].join(' ')}>
                        توجه نمایید در صورتی که دکمه <b>REGISTER</b> مانند تصویر
                        زیر بود باید تا زمان شروع ثبت نام که در کنار تصویر وارد
                        شده صبر نمایید.{' '}
                    </span>
                    <Img
                        className={['w-100']}
                        src={Reg3}
                        loader={
                            <Skeleton
                                variant="rect"
                                className={['maxWidth100', 'h412'].join(' ')}
                            />
                        }
                    />
                </Fragment>
            )
        case 2:
            return (
                <Fragment>
                    <span className={['text-justify'].join(' ')}>
                        بعد از کلیک روی دکمه <b>REGISTER</b> دو فرم زیر برای شما
                        نمایش داده میشود.{' '}
                    </span>
                    <Img
                        className={['w-100']}
                        src={Reg4}
                        loader={
                            <Skeleton
                                variant="rect"
                                className={['maxWidth100', 'h412'].join(' ')}
                            />
                        }
                    />
                    <span className={['text-justify'].join(' ')}>
                        در صورتی که شما از قبل در سایت ثبت نام کرده باشید با
                        استفاده از فرم سمت راست وارد حساب کاربری خود شوید و در
                        صورتی که از قبل حساب کاربری ندارید از فرم سمت چپ حساب
                        کاربری خود را ایجاد کنید. <br />
                        به همین راحتی شما در رویداد این جمعه‌ی صبح خلاق ثبت نام
                        کردید. ^_^{' '}
                    </span>
                </Fragment>
            )
        default:
            return 'Unknown step'
    }
}

const Reg = () => {
    const classes = useStyles()
    const [activeStep, setActiveStep] = React.useState(0)
    const steps = getSteps()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleReset = () => {
        setActiveStep(0)
    }

    return (
        <Fragment>
            <Container>
                <div className={[classes.root, 'rtl', 'mb250'].join(' ')}>
                    <h2>آموزش سه‌گام ثبت‌نام در رویداد</h2>
                    <span className={['text-justify'].join(' ')}>
                        ثبت نام در رویداد صبح خلاق اصفهان به سادگی آب خوردنه،
                        فقط کافیه همین چندتا مرحله ای که به صورت تصویری براتون
                        گذاشتیم رو دنبال کنید.{' '}
                    </span>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    <Typography>
                                        {getStepContent(index)}
                                    </Typography>
                                    <div className={classes.actionsContainer}>
                                        <div>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                className={classes.button}
                                            >
                                                مرحله قبلی
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleNext}
                                                className={classes.button}
                                            >
                                                {activeStep === steps.length - 1
                                                    ? 'یادگرفتم'
                                                    : 'مرحله‌ی بعدی'}
                                            </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper
                            square
                            elevation={0}
                            className={classes.resetContainer}
                        >
                            <span>
                                خب تبریک میگم، الان یاد گرفتی که چطور ثبت‌نام
                                کنی، حالا باید روی لینک زیر بزنی تا وارد صفحه‌ی
                                ثبت‌نام بشی.
                                <div className={['mt10'].join(' ')}>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        component={Link}
                                        href="https://creativemornings.com/cities/isf"
                                        className={[
                                            'mlr10',
                                            'mt10',
                                            'dInlineBlock',
                                        ].join(' ')}
                                    >
                                        برو بریم به صفحه‌ی رویداد
                                    </Button>
                                    <br />
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleReset}
                                        className={[
                                            'mlr10',
                                            'mt10',
                                            'dInlineBlock',
                                        ].join(' ')}
                                    >
                                        دوباره میخوام آموزش ببینم.
                                    </Button>
                                </div>
                            </span>
                        </Paper>
                    )}
                </div>
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Reg
