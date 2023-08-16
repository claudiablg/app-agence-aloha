import { Breakpoint } from "@aloha/common"

export const defaultBreakpoints = {
    [Breakpoint.mobileXSmall]: 320,
    [Breakpoint.mobileSmall]: 375,
    [Breakpoint.mobileMedium]: 414,
    [Breakpoint.tabletPortrait]: 768,
    [Breakpoint.tabletLandscape]: 1024,
    [Breakpoint.desktopSmall]: 1280,
    [Breakpoint.desktopMedium]: 1440,
    [Breakpoint.desktopLarge]: 1600,
    [Breakpoint.desktopXLarge]: 1920
}


export const defaultLayout = {
    media: {
        tablet: `screen and (min-width: ${defaultBreakpoints.tabletPortrait}px)`,
        desktopSmall: `screen and (min-width: ${defaultBreakpoints.desktopSmall}px)`,
        desktopMedium: `screen and (min-width: ${defaultBreakpoints.desktopMedium}px)`
    }
}
