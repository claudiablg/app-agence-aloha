import { style } from '@vanilla-extract/css';
import { vars, defaultLayout } from '@aloha/default-theme'

export const expertiseSection = style({
    maxWidth: '100vw',
    backgroundColor: vars.colors.orange[300],
    padding: '4.375em 0',
    color: vars.colors.orange[100],
})

export const text = style({
    padding: '0 5.5em',
})