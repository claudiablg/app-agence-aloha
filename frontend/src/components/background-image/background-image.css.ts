import { style } from '@vanilla-extract/css';
import { vars, defaultLayout } from '@aloha/default-theme';

export const backgroundImage = style({
    position: 'absolute',
    zIndex: '-1',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    minWidth: '100vw',
    '@media': {
        [defaultLayout.media.tablet]: {
            // minHeight: '50vw',
        },
        [defaultLayout.media.desktopSmall]: {
            // minHeight: '40vw',
        }
    },
})
