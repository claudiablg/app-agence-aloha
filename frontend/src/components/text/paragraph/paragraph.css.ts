import { styleVariants, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes'; 
import { defaultLayout, vars } from "@aloha/default-theme";

export const base = style({
    fontFamily: 'Inter, sans-serif',
    letterSpacing: '0.03em',
    margin: '1em 0',
    textAlign: 'left',
    height: 'auto',
    lineHeight: '150%',
    selectors: {
        '&:first-of-type': {
            margin: '0 0 1em 0',
        }
    }
})

export const normal = style({
    fontWeight: '400',
})

export const bold = style({
    fontWeight: '600',
    letterSpacing: '0.03em',
})

export const italic = style({
    fontStyle: 'italic',
    fontWeight: '600',
    letterSpacing: '0.03em',
})

export const uppercase = style({
    textTransform: 'uppercase',
})

export const boldUppercase = style({
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
})

export const italicBold = style({
    color: vars.colors.pink[500],
    fontStyle: 'italic',
    fontWeight: '600',
    letterSpacing: '0.03em',
})

export const large = style([
    base, 
    style({
        padding: '2rem 0',
        fontSize:  vars.paragraph.mobile.large,
        '@media': {
            [defaultLayout.media.tablet]: {
                fontSize: vars.paragraph.tablet.large,
            },
            [defaultLayout.media.desktopSmall]: {
                fontSize: vars.paragraph.desktop.large, 
            }
        }
    })
])


export const medium = style([
    base, 
    style({
        fontSize:  vars.paragraph.mobile.medium,
        '@media': {
            [defaultLayout.media.tablet]: {
                fontSize: vars.paragraph.tablet.medium,
            },
            [defaultLayout.media.desktopSmall]: {
                fontSize: vars.paragraph.desktop.medium, 
            }
        }
    })
])

export const small = style([
    base, 
    style({
        fontSize:  vars.paragraph.mobile.small,
        '@media': {
            [defaultLayout.media.tablet]: {
                fontSize: vars.paragraph.tablet.small,
            },
            [defaultLayout.media.desktopSmall]: {
                fontSize: vars.paragraph.desktop.small, 
            }
        }
    })
])

export const xSmall = style([
    base, 
    style({
        fontSize:  vars.paragraph.mobile.xSmall,
        '@media': {
            [defaultLayout.media.tablet]: {
                fontSize: vars.paragraph.tablet.xSmall,
            },
            [defaultLayout.media.desktopSmall]: {
                fontSize: vars.paragraph.desktop.xSmall, 
            }
        }
    })
])

export const xxSmall = style([
    base, 
    style({
        fontSize:  vars.paragraph.mobile.xxSmall,
        '@media': {
            [defaultLayout.media.tablet]: {
                fontSize: vars.paragraph.tablet.xxSmall,
            },
            [defaultLayout.media.desktopSmall]: {
                fontSize: vars.paragraph.desktop.xxSmall, 
            }
        }
    })
])
