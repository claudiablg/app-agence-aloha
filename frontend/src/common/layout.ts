
/**
 * Viewport names.
 */
export enum Viewport {
    mobile = 'mobile',
    tablet = 'tablet',
    desktop = 'desktop',
  }
  
/**
 * Breakpoint names
 */
export enum Breakpoint {
  //
  // mobile
  //
  mobileXSmall = 'mobileXSmall',
  mobileSmall = 'mobileSmall',
  mobileMedium = 'mobileMedium',
  //
  // tablet
  //
  tabletPortrait = 'tabletPortrait',
  tabletLandscape = 'tabletLandscape',
  //
  // desktop
  //
  desktopSmall = 'desktopSmall',
  desktopMedium = 'desktopMedium',
  desktopLarge = 'desktopLarge',
  desktopXLarge = 'desktopXLarge',
}

/**
 * Representation of a breakpoint in px
 */
export type Breakpoints = object;


/**
 * Alignement names.
 */

export enum Align {
    center = 'center',
    left = 'left',
    right = 'right',
}
