import { style } from '@vanilla-extract/css';
import { vars, defaultLayout } from "@aloha/default-theme";

export const nav = style({
    maxWidth: '100vw',
    zIndex: '1',
    display: 'flex',
    '@media': {
        [defaultLayout.media.desktopSmall]: {
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            minHeight: '120px',
        },
    },
})

export const wrapper = style({
    display: 'flex',
    '@media': {
        [defaultLayout.media.desktopSmall]: {
            gap: '2.8125rem',
            alignItems: 'center',
        },
    },
})