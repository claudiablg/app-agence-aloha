import { style } from '@vanilla-extract/css';
import { defaultLayout, vars } from '@aloha/default-theme';

export const wrapper = style({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '75vw',
    color: vars.colors.greyscale[0],
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    overflow: 'hidden',
    width: '100vw',
    maxWidth: '100vw',
    '@media': {
        [defaultLayout.media.tablet]: {
            minHeight: '50vw',
        },
        [defaultLayout.media.desktopSmall]: {
            minHeight: '40vw',
        }
    }
})