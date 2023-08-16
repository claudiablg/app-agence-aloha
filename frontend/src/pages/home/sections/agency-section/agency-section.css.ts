import { style } from '@vanilla-extract/css';
import { vars, defaultLayout } from '@aloha/default-theme'

export const agencySection = style({
    maxWidth: '100vw',
    backgroundColor: vars.colors.orange[500],
    color: vars.colors.orange[100],
    padding: '4.375em 0',
    '@media': {
        [defaultLayout.media.tablet]: {
            padding: '4.375em 0',
        },
        [defaultLayout.media.desktopSmall]: {
            padding: '4.375em 0',
        }
    }

})

export const text = style({
    padding: '0 5.5em',
})