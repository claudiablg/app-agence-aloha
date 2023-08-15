import { style } from '@vanilla-extract/css';
import { vars } from "@aloha/default-theme";


export const navItemLink = style({
    position: 'relative',
    fontFamily: vars.typography.now,
    width: 'auto',
    minWidth: '96px',
    border: 'none',
    display: 'flex',
    justifyContent: 'stretch',
    lineHeight: '24px',
    // zIndex: '10',
    textAlign: 'center',
    selectors:{
        '&:nth-child(5)':{
            fill: vars.colors.green[500],
        },
    }
})

export const wrapper = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
})

export const a = style({
    color: vars.colors.greyscale[0],
    display: 'flex',
    padding: '0px 4px 0px 4px',
    alignItems: 'center',
    gap: '8px',
    selectors: {
        '&:hover': {
            color: vars.colors.greyscale[15],
        },
    }
})

export const line = style({
    paddingTop: '2px',
    flex: 'none',
    order: '1',
    width: '100%',
    flexGrow: '0',
    selectors: {
        '&:first-of-type': {
            fill: vars.colors.green[500],
        },
    } ,
})

export const black = style({
    selectors: {
        '&:hover': {
            color: vars.colors.greyscale[1000],
        },
    }
})


export const pink = style({
    selectors: {
        '&:hover': {
            color: vars.colors.pink[500],
        },
    }
})

export const purple = style({
    selectors: {
        '&:hover': {
            color: vars.colors.purple[500],
        },
    }
})

export const orange = style({
    selectors: {
        '&:hover': {
            color: vars.colors.orange[500],
        },
    }
})

export const yellow = style({
    selectors: {
        '&:hover': {
            color: vars.colors.yellow[500],
        },
    }
})

export const green = style({
    selectors: {
        '&:hover': {
            color: vars.colors.green[500],
        },
    }
})
