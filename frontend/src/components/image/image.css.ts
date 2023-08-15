import { style } from '@vanilla-extract/css';
import { defaultLayout } from '@aloha/default-theme';

export const imgContainer = style({
    width: '100vw',
    height: '100vw',
    position: 'relative',
    // padding: '0'
    '@media': {
        [defaultLayout.media.tablet]: {
            maxWidth: '37.32438rem',
            maxHeight: '42.00188rem',
            // width: '31.25rem',
            // height: '31.25rem',
        },
    } 
})

export const img = style({
    position: 'absolute',
    objectFit: 'cover',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    width: '100%',
    height: '100%',
})