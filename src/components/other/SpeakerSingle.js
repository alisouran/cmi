import React, { Fragment, useEffect } from 'react'
import { Grid, Button } from '@material-ui/core'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { ArrowBack } from '@material-ui/icons'
const SpeakerSingle = (props) => {
    const match = useRouteMatch()

    useEffect(() => {
        const script = document.createElement('script')
        script.src =
            'https://www.aparat.com/embed/vWTyu?data[rnddiv]=1815182303&data[responsive]=yes'
        script.async = true
        document.body.appendChild(script)
    })

    const iframeStyle = {
        margin: '0 auto',
        maxWidth: '100%',
        width: props.isTabletOrMobileDevice ? '100%' : '60%',
        height: '60vh',
        border: '1px solid #cfcfcf',
    }
    const aparatUrl =
        'https://www.aparat.com/video/video/embed/videohash/vWTyu/vt/frame'
    let history = useHistory()
    const handleClick = () => {
        history.goBack()
    }
    return (
        <Fragment>
            <Grid
                container
                justify="center"
                alignItems="flex-start"
                className={[
                    props.isTabletOrMobileDevice ? 'plr10' : 'h-100 plr30 mt0',
                ]}
            >
                <Grid item className={['h-100 pt15 bgWhite w-100']} lg={12}>
                    <Button onClick={handleClick}>
                        <ArrowBack />
                        <h4 className={'dInline'}>صفحه‌ی قبل</h4>
                    </Button>
                </Grid>
                {props.data.map((speaker) => {
                    if (speaker.slug === match.params.slug) {
                        return (
                            <Fragment>
                                <Grid
                                    container
                                    justify="center"
                                    alignItems="center"
                                    className={[
                                        props.isTabletOrMobileDevice
                                            ? 'plr10'
                                            : 'h100vh plr30',
                                    ]}
                                >
                                    <Grid
                                        item
                                        lg={12}
                                        className={[
                                            'text-center',
                                            props.isTabletOrMobileDevice
                                                ? ''
                                                : '',
                                            'pt10',
                                        ].join(' ')}
                                    >
                                        <h2>{speaker.title}</h2>
                                    </Grid>
                                    <Grid
                                        className={[
                                            'text-center',
                                            'h-100',
                                            'pt20',
                                        ].join(' ')}
                                        item
                                        lg={12}
                                    >
                                        <iframe
                                            title="aparat speakers"
                                            style={iframeStyle}
                                            src={aparatUrl}
                                        ></iframe>
                                    </Grid>
                                </Grid>
                            </Fragment>
                        )
                    }
                    return null
                })}
            </Grid>
        </Fragment>
    )
}

export default SpeakerSingle
