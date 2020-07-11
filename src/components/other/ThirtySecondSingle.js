import React, { Fragment, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { Link, useRouteMatch } from 'react-router-dom'

const ThirtySecondSingle = (props) => {
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
        width: '60%',
        height: '60vh',
        border: '1px solid #cfcfcf',
    }
    const aparatUrl =
        'https://www.aparat.com/video/video/embed/videohash/vWTyu/vt/frame'

    return (
        <Fragment>
            <Grid
                container
                justify="center"
                alignItems="flex-start"
                className={[
                    props.isTabletOrMobileDevice
                        ? 'plr10'
                        : 'h-100 plr30 mt0 bgDark',
                ]}
            >
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
                                            : 'h-100 plr30',
                                    ]}
                                >
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
                                            title="aparat video"
                                            style={iframeStyle}
                                            src={aparatUrl}
                                        ></iframe>
                                    </Grid>
                                </Grid>

                                <Link to=""></Link>
                            </Fragment>
                        )
                    }
                    return null
                })}
            </Grid>
        </Fragment>
    )
}

export default ThirtySecondSingle
