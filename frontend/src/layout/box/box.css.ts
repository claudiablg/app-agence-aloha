import { style } from '@vanilla-extract/css';
import { vars } from "@aloha/default-theme";

export const center = style({
    textAlign: 'center',
    maxWidth: '763px',
})

export const left = style({
    maxWidth: '100%',
    textAlign: 'left',
    position: 'relative',
    overflow: 'hidden',
    // margin: `${vars.size.x7} 0`,
})

export const right = style({
    maxWidth: '100%',
    textAlign: 'right',
    position: 'relative',
    overflow: 'hidden',
    // margin: `${vars.size.x7} 0`,
})