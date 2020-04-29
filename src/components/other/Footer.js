import React from 'react'
import { Grid, Link as MaterialLink } from '@material-ui/core'
import { LogoTransparent } from '../../assets/img/Img'

export const Footer = () => {
    return (
        <footer className="bgPrimary">
            <Grid container className={'MainContainer'}>
                <Grid className={'dirRtl text-left'} item sm={10}>
                    <MaterialLink
                        className={['text-white bold ', 'ml10', 'font15'].join(
                            ' '
                        )}
                        href="https://creativemornings.com/cities/isf"
                    >
                        {' '}
                        صفحه صبح خلاق در سایت جهانی
                    </MaterialLink>
                    <MaterialLink
                        className={['text-white bold ', 'ml10', 'font15'].join(
                            ' '
                        )}
                        href="https://www.aparat.com/CM_isfahan"
                    >
                        آپارات
                    </MaterialLink>
                    <MaterialLink
                        className={['text-white bold ', 'ml10', 'font15'].join(
                            ' '
                        )}
                        href="https://cmisfahan.ir/contact/"
                    >
                        تماس با ما
                    </MaterialLink>
                    <MaterialLink
                        className={['text-white bold ', 'ml10', 'font15'].join(
                            ' '
                        )}
                        href="https://creativemornings.com/cities/isf/about"
                    >
                        درباره ما
                    </MaterialLink>
                    <MaterialLink
                        className={['text-white bold ', 'ml10', 'font15'].join(
                            ' '
                        )}
                        href="https://fa.wikipedia.org/wiki/%D8%B5%D8%A8%D8%AD_%D8%AE%D9%84%D8%A7%D9%82"
                    >
                        صبح‌خلاق در ویکی‌پدیا
                    </MaterialLink>
                </Grid>
                <Grid item sm={2}>
                    <img
                        src={LogoTransparent}
                        className={'maxwidth100'}
                        alt="Basecamp"
                    />
                </Grid>
            </Grid>
            <Grid container className={'dirRtl text-center iranserverbg'}>
                <p
                    className={[
                        'margin-auto',
                        'text-white',
                        'bold',
                        'font20',
                    ].join(' ')}
                >
                    میزبانی شده با <span className="h-color">&hearts;</span>{' '}
                    توسط{' '}
                    <MaterialLink
                        className={'text-white'}
                        href="https://iranserver.com"
                    >
                        ایران سرور
                    </MaterialLink>
                </p>
            </Grid>
        </footer>
    )
}
