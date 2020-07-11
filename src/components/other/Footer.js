import React from 'react'
import { Grid, Link as MaterialLink } from '@material-ui/core'
import {
    LogoTransparent,
    CM,
    Aparat,
    Wikipedia,
    Telegram,
    InstagramLogo,
} from '../../assets/img/Img'
import { useMediaQuery } from 'react-responsive'

export const Footer = () => {
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)',
    })
    return (
        <footer
            className={['bgPrimary', isTabletOrMobileDevice ? 'mb55' : ''].join(
                ' '
            )}
        >
            <Grid container className={'MainContainer'}>
                <Grid
                    className={[
                        isTabletOrMobileDevice
                            ? 'dirRtl text-center'
                            : 'text-left rtl',
                    ].join(' ')}
                    item
                    lg={10}
                    xl={10}
                    md={8}
                    sm={12}
                    xs={12}
                >
                    <MaterialLink
                        className={[
                            'text-white bold ',
                            'ml10',
                            'font15',
                            isTabletOrMobileDevice ? 'text-right' : '',
                        ].join(' ')}
                        href="https://creativemornings.com/cities/isf"
                    >
                        {isTabletOrMobileDevice ? (
                            <img
                                src={CM}
                                alt={'CMIsfahan in CreativeMorning.com'}
                                className={['w-10']}
                            />
                        ) : (
                            <span>صفحه صبح خلاق در سایت جهانی</span>
                        )}
                    </MaterialLink>
                    <MaterialLink
                        className={[
                            'text-white bold ',
                            'ml10',
                            'font15',
                            isTabletOrMobileDevice ? 'text-right' : 'dNone',
                        ].join(' ')}
                        href="https://t.me/cm_isfahan/"
                    >
                        {isTabletOrMobileDevice ? (
                            <img
                                src={Telegram}
                                alt={'CMIsfahan in Telegram'}
                                className={['w-10']}
                            />
                        ) : (
                            ''
                        )}
                    </MaterialLink>
                    <MaterialLink
                        className={[
                            'text-white bold ',
                            'ml10',
                            'font15',
                            isTabletOrMobileDevice ? 'text-right' : 'dNone',
                        ].join(' ')}
                        href="https://instagram.com/cm_isfahan/"
                    >
                        {isTabletOrMobileDevice ? (
                            <img
                                src={InstagramLogo}
                                alt={'CMIsfahan in Instagram'}
                                className={['w-10']}
                            />
                        ) : (
                            ''
                        )}
                    </MaterialLink>
                    <MaterialLink
                        className={[
                            'text-white bold ',
                            'ml10',
                            'font15',
                            isTabletOrMobileDevice ? 'text-right' : '',
                        ].join(' ')}
                        href="https://www.aparat.com/CM_isfahan"
                    >
                        {isTabletOrMobileDevice ? (
                            <img
                                src={Aparat}
                                alt={'CMIsfahan in Aparat'}
                                className={['w-10']}
                            />
                        ) : (
                            <span>آپارات</span>
                        )}
                    </MaterialLink>
                    <div
                        className={[
                            isTabletOrMobileDevice ? 'dNone' : 'dInline',
                        ]}
                    >
                        <MaterialLink
                            className={[
                                'text-white bold ',
                                'ml10',
                                'font15',
                            ].join(' ')}
                            href="https://cmisfahan.ir/contact/"
                        >
                            تماس با ما
                        </MaterialLink>
                        <MaterialLink
                            className={[
                                'text-white bold ',
                                'ml10',
                                'font15',
                            ].join(' ')}
                            href="https://creativemornings.com/cities/isf/about"
                        >
                            درباره ما
                        </MaterialLink>
                    </div>
                    <MaterialLink
                        className={[
                            'text-white bold ',
                            'ml10',
                            'font15',
                            isTabletOrMobileDevice ? 'text-right' : '',
                        ].join(' ')}
                        href="https://fa.wikipedia.org/wiki/%D8%B5%D8%A8%D8%AD_%D8%AE%D9%84%D8%A7%D9%82"
                    >
                        {isTabletOrMobileDevice ? (
                            <img
                                src={Wikipedia}
                                alt={'Isfahan in CreativeMorning.com'}
                                className={['w-10']}
                            />
                        ) : (
                            <span>صبح‌خلاق در ویکی‌پدیا</span>
                        )}
                    </MaterialLink>
                </Grid>
                <Grid item lg={2} xl={2} md={4} sm={12} xs={12}>
                    <img
                        src={LogoTransparent}
                        className={'maxwidth100'}
                        alt="Basecamp"
                    />
                </Grid>
            </Grid>
            <Grid
                component={MaterialLink}
                href="https://iranserver.com"
                container
                className={'dirRtl text-center iranserverbg'}
            >
                <p
                    className={[
                        'margin-auto',
                        'text-white',
                        'bold',
                        'font20',
                    ].join(' ')}
                >
                    میزبانی شده با <span className="h-color">&hearts;</span>{' '}
                    توسط ایران سرور
                </p>
            </Grid>
        </footer>
    )
}
