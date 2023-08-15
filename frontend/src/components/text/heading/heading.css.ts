import { styleVariants, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes'; 
import { defaultLayout, vars } from "@aloha/default-theme";

export const base = style({
    // color: vars.colors.greyscale[1000],
    fontFamily: vars.typography.now,
    letterSpacing: '0.03em',
    height: 'auto',
    selectors: {
        '&:not(first-child)': {
            padding: '0 0 0.5em 0',
        },
    },
    // padding: '1em 0 0.5em 0',
})


export const h1 = style([
    base, 
    style({
        zIndex: '100',
        fontWeight: '500',
        lineHeight: '4.1875rem',
        letterSpacing: '-0.5px',
        padding: '2rem 0',
        fontSize: vars.headings.mobile.h1,
        selectors: {
            '&:not(first-child)': {
                marginTop: '3rem',
            },
            '&:not(last-child)': {
                marginBottom: '1.5rem',
            },
        },
        '@media': {
            [defaultLayout.media.tablet]: {
               fontSize: vars.headings.tablet.h1,
            },
            [defaultLayout.media.desktopSmall]: {
                fontSize: vars.headings.desktop.h1,
            }
        }
    })
])


export const h2 = style([
    base, 
    style({
        fontWeight: '500',
        lineHeight: '3.125rem',
        letterSpacing: '-0.5px',
        fontSize: vars.headings.mobile.h2,
        selectors: {
            '&:not(first-child)': {
                marginTop: '2.5rem',
            },
            '&:not(last-child)': {
                marginBottom: '1.25rem',
            },
        },
        '@media': {
            [defaultLayout.media.tablet]: {
               fontSize: vars.headings.tablet.h2,
            },
            [defaultLayout.media.desktopSmall]: {
                fontSize: vars.headings.desktop.h2,
            }
        },
    })
])

export const h3 = style([
    base, 
    style({
        fontWeight: '500',
        lineHeight: '2.4375rem',
        letterSpacing: '-0.5px',
        fontSize: vars.headings.mobile.h3,
        '@media': {
            [defaultLayout.media.tablet]: {
                fontSize: vars.headings.tablet.h3,
            },
            [defaultLayout.media.desktopSmall]: {
                fontSize: vars.headings.desktop.h3, 
            }
        }
    })
])

export const h4 = style([
    base, 
    style({
        lineHeight: '1.75rem',
        padding: '2rem 0',
        fontWeight: '500',
        letterSpacing: '-0.5px',
        fontSize: vars.headings.mobile.h4,
        selectors: {
            '&:not(first-child)': {
                marginTop: '1.5rem',
            },
            '&:not(last-child)': {
                marginBottom: '1.25rem',
            },
        },
        '@media': {
            [defaultLayout.media.tablet]: {
                fontSize: vars.headings.tablet.h4,
            },
            [defaultLayout.media.desktopSmall]: {
                fontSize: vars.headings.desktop.h4, 
            }
        }
    })
])

export const h5 = style([
    base, 
    style({
        padding: '2rem 0',
        lineHeight: '1.375rem',
        textTransform: 'uppercase',
        fontSize: vars.headings.mobile.h5,
        '@media': {
            [defaultLayout.media.tablet]: {
            fontSize: vars.headings.tablet.h5,
            },
            [defaultLayout.media.desktopSmall]: {
              fontSize: vars.headings.desktop.h5, 
            }
        }
    })
])

export const h6 = style([
    base, 
    style({
        padding: '2rem 0',
        lineHeight: '31.3125rem',
        textTransform: 'uppercase',
        fontSize: vars.headings.mobile.h6,
        selectors: {
            '&:not(first-child)': {
                marginTop: '0.938rem',
            },
            '&:not(last-child)': {
                marginBottom: '0.469rem',
            },
        },
        '@media': {
            [defaultLayout.media.tablet]: {
            fontSize: vars.headings.tablet.h6,
            },
            [defaultLayout.media.desktopSmall]: {
              fontSize: vars.headings.desktop.h6, 
            }
        },
    })
])
