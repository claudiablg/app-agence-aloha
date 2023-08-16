import { style } from '@vanilla-extract/css';
import { defaultLayout, vars } from "@aloha/default-theme";

export const splitScreen = style({
    display: 'flex',
    maxWidth: '100vw',
    alignContent: 'center',
    justifyContent: 'center',
    margin: '0 auto',
})

export const wrapper = style({
    display: 'flex',
    flexDirection: 'column',
    // padding: '',
    selectors: {
        'div &:not(first-of-type)': {
            flexDirection: 'column-reverse',
        },
    },
    '@media': {
        [defaultLayout.media.tablet]: {
            flexDirection: 'row',
            // maxWidth: '46.875rem',
            maxHeight: '23.438rem',
            overflow: 'hidden',
            // margin: '0 7rem',
            selectors: {
                'div &:not(first-of-type)': {
                    flexDirection: 'row',
                },
            },
        },
        [defaultLayout.media.desktopSmall]: {
            flexDirection: 'row',
            width: '100vw',
            maxWidth: '90rem',
            maxHeight: '67rem',
            // gap: `6.26rem`,
            // margin: '0 7rem',
        },
    },
})

export const leftContent = style({
    display: 'flex',
    alignItems: 'center',
    flex: '1 1 0',
    maxWidth: '100vw',
    width: '100vw',
    alignSelf: 'center',
    justifySelf: 'center',
    padding: `0 1.25em`,
    // order: '-1',
    '@media': {
        [defaultLayout.media.tablet]: {
            padding: `0 1.25em`,
            width: '50%',
            // height: '50%',
        },
        [defaultLayout.media.desktopSmall]: {
            padding: '0',
            width: '50%',
        },
    },
})

export const rightContent = style({
    display: 'flex',
    flex: '1 1 0',
    width: '100vw',
    alignItems: 'center',
    maxWidth: '100vw',
    alignSelf: 'center',
    padding: `1.25em`,
    // order: '2',
    '@media': {
        [defaultLayout.media.tablet]: {
            padding: '0',
            // maxWidth: '31.25rem',
            width: '50%',
        },
        [defaultLayout.media.desktopSmall]: {
            padding: '0',
            // maxWidth: '31.25rem',
            width: '50%',
        },
    },
})