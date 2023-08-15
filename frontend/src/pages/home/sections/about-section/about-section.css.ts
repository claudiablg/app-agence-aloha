import { style } from '@vanilla-extract/css';
import { defaultLayout } from '@aloha/default-theme';

export const aboutSection = style({
    maxWidth: '100vw',
    display: 'flex',
    alignItems: 'center',
    padding: '4.375em 1.25em',
    '@media': {
        [defaultLayout.media.tablet]: {
        },
        [defaultLayout.media.desktopSmall]: {
            minHeight: '24.8125rem',
        }
    }
})

export const wrapper = style({
    margin: '0 auto',
    textAlign: 'center',
    width: '100vw',
    '@media': {
        [defaultLayout.media.tablet]: {
            maxWidth: '47.75rem',
        },
        [defaultLayout.media.desktopSmall]: {

        },
    }
})