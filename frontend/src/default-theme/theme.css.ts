import { createGlobalTheme, createGlobalThemeContract, createTheme, style, } from '@vanilla-extract/css';

export const vars = createGlobalThemeContract(
    
    {
        colors: {
        pink: {
            100: '--colors-pink-100',
            300: '--colors-pink-300',
            500: '--colors-pink-500',
            700: '--colors-pink-700',
            900: '--colors-pink-900',
        },
        purple: { 
            100: '--colors-purple-100',
            300: '--colors-purple-300',
            500: '--colors-purple-500',
            700: '--colors-purple-700',
            900: '--colors-purple-900',
        },
        orange: {
            100: '--colors-orange-100',
            300: '--colors-orange-300',
            500: '--colors-orange-500',
        },
        green: {
            100: '--colors-green-100',
            300: '--colors-green-300',
            500: '--colors-green-500',
            700: '--colors-green-700',
            900: '--colors-green-900',
        },
        blue: {
            100: '--colors-blue-100',
            300: '--colors-blue-300',
            500: '--colors-blue-500',
            700: '--colors-blue-700',
            900: '--colors-blue-900',
        },
        yellow: {
            100: '--colors-yellow-100',
            300: '--colors-yellow-300',
            500: '--colors-yellow-500',
            700: '--colors-yellow-700',
            900: '--colors-yellow-900',
        },
        transparent: '--colors-transparent',
        greyscale: {
            1000: '--colors-greyscale-1000',
            900: '--colors-greyscale-900',
            800: '--colors-greyscale-800',
            700: '--colors-greyscale-700',
            600: '--colors-greyscale-600',
            500: '--colors-greyscale-500',
            400: '--colors-greyscale-400',
            300: '--colors-greyscale-300',
            200: '--colors-greyscale-200',
            100: '--colors-greyscale-100',
            50: '--colors-greyscale-50',
            25: '--colors-greyscale-25',
            15: '--colors-greyscale-15',
            0: '--colors-greyscale-0',
        }
    },
    typography: {
        now: '--typography-now',
    },
    headings: {
        mobile: {
            h1: '--headings-mobile-h1',
            h2: '--headings-mobile-h2',
            h3: '--headings-mobile-h3',
            h4: '--headings-mobile-h4',
            h5: '--headings-mobile-h5',
            h6: '--headings-mobile-h6',
        },
        tablet: {
            h1: '--headings-tablet-h1',
            h2: '--headings-tablet-h2',
            h3: '--headings-tablet-h3',
            h4: '--headings-tablet-h4',
            h5: '--headings-tablet-h5',
            h6: '--headings-tablet-h6',
        },
        desktop: {
            h1: '--headings-desktop-h1',
            h2: '--headings-desktop-h2',
            h3: '--headings-desktop-h3',
            h4: '--headings-desktop-h4',
            h5: '--headings-desktop-h5',
            h6: '--headings-desktop-h6',
        }
    },
    size: {
        x0: '--size-x0',
        x1: '--size-x1',
        x2: '--size-x2',
        x3: '--size-x3',
        x4: '--size-x4',
        x5: '--size-x5',
        x6: '--size-x6',
        x7: '--size-x7',
        x8: '--size-x8',
        x9: '--size-x9',
    },
    paragraph: {
        mobile: {
            large: '--paragraph-mobile-large',
            medium: '--paragraph-mobile-medium',
            small: '--paragraph-mobile-small',
            xSmall: '--paragraph-mobile-xSmall',
            xxSmall: '--paragraph-mobile-xxSmall',
        },
        tablet: {
            large: '--paragraph-tablet-large',
            medium: '--paragraph-tablet-medium',
            small: '--paragraph-tablet-small',
            xSmall: '--paragraph-tablet-xSmall',
            xxSmall: '--paragraph-tablet-xxSmall',
        },
        desktop: {
            large: '--paragraph-desktop-large',
            medium: '--paragraph-desktop-medium',
            small: '--paragraph-desktop-small',
            xSmall: '--paragraph-desktop-xSmall',
            xxSmall: '--paragraph-desktop-xxSmall',
        }
    },
    link : {
        mobile: {
            large: '--link-mobile-large',
            medium: '--link-mobile-medium',
            small: '--link-mobile-small',
            xSmall: '--link-mobile-xSmall',
            xxSmall: '--link-mobile-xxSmall',
        },
        tablet: {
            large: '--link-tablet-large',
            medium: '--link-tablet-medium',
            small: '--link-tablet-small',
            xSmall: '--link-tablet-xSmall',
            xxSmall: '--link-tablet-xxSmall',
        },
        desktop: {
            large: '--link-desktop-large',
            medium: '--link-desktop-medium',
            small: '--link-desktop-small',
            xSmall: '--link-desktop-xSmall',
            xxSmall: '--link-desktop-xxSmall',
        }
    }
    },
    (value) => `${value}`
);

export const lightTheme = createGlobalTheme(':root', vars, {
    colors: {
        pink: {
            100: 'rgba(255, 245, 248, 1)',
            300: 'rgba(255, 206, 218, 1)',
            500: 'rgba(247, 164, 188, 1)',
            700: 'rgba(255, 89, 122, 1)',
            900: 'rgba(108, 0, 26, 1)',
        },
        purple: {
            100: 'rgba(242, 236, 249, 1)',
            300: 'rgba(204, 179, 230, 1)',
            500: 'rgba(153, 102, 204, 1)',
            700: 'rgba(96, 48, 143, 1)',
            900: 'rgba(38, 19, 57, 1)',
        },
        orange: {
            100: 'rgba(252, 232, 216, 1)',
            300: 'rgba(242, 133, 33, 1)',
            500: 'rgba(241, 88, 36, 1)',
        },
        green: {
            100: 'rgba(231, 246, 240, 1)',
            300: 'rgba(121, 203, 156, 1)',
            500: 'rgba(0, 160, 69, 1)',
            700: 'rgba(0, 100, 43, 1)',
            900: 'rgba(0, 100, 43, 1)',
        },
        blue: {
            100: 'rgba(236, 247, 253, 1)',
            300: 'rgba(203, 233, 250, 1)',
            500: 'rgba(100, 190, 240, 1)',
            700: 'rgba(100, 190, 240, 1)',
            900: 'rgba(100, 190, 240, 1)',
        },
        yellow: {
            100: 'rgba(255, 247, 222, 1)',
            300: 'rgba(255, 225, 128, 1)',
            500: 'rgba(255, 194, 0, 1)',
            700: 'rgba(159, 121, 0, 1)',
            900: 'rgba(255, 225, 128, 1)',
        },
        transparent: 'rgba(100,100,100,0)',
        greyscale: {
            1000: 'rgba(32, 33, 34, 1)',
            900: 'rgba(0, 0, 0, 1)',
            800: 'rgba(58, 58, 58, 1)',
            700: 'rgba(77, 77, 77, 1)',
            600: 'rgba(97, 97, 97, 1)',
            500: 'rgba(117, 117, 117, 1)',
            400: 'rgba(137, 137, 137, 1)',
            300: 'rgba(156, 156, 156, 1)',
            200: 'rgba(176, 176, 176, 1)',
            100: 'rgba(196, 196, 196, 1)',
            50: 'rgba(216, 216, 216, 1)',      
            25: 'rgba(235, 235, 235, 1)',
            15: 'rgba(246, 246, 246, 1)',
            0: 'rgba(255, 255, 255, 1)',
        } 
    }, 
    typography: {
        now: 'Now',
    },
    headings: {
        mobile: {
            h1: '3rem',
            h2: '2.5rem',
            h3: '1.75rem',
            h4: '1.5rem',
            h5: '1.125rem',
            h6: '0.9375rem',
        },
        tablet: {
            h1: '3rem',
            h2: '2rem',
            h3: '1.75rem',
            h4: '1.5rem',
            h5: '1.25rem',
            h6: '1rem',
        },
        desktop: {
            h1: '4.25rem',
            h2: '2.5rem',
            h3: '1.75rem',
            h4: '1.5rem',
            h5: '1.25rem',
            h6: '1rem',
        }
    },
    size: {
        //8px
        x0: '0.5rem',
        //16px
        x1: '1rem',
        //24px
        x2: '1.5rem',
        //32px
        x3: '2rem',
        //40px
        x4: '2.5rem',
        //48px
        x5: '3rem',
        //56px
        x6: '3.5rem',
        //64px
        x7: '4rem',
        //80px
        x8: '5rem',
        //96px
        x9: '6rem',
    },
    paragraph: {
        mobile: {
            large: '1.25rem',
            medium: '1.125rem',
            small: '1rem',
            xSmall: '0.875rem',
            xxSmall: '0.8125rem'
        },
        tablet: {
            large: '',
            medium: '',
            xSmall: '',
            small: '',
            xxSmall: ''
        },
        desktop: {
            large: '1.25rem',
            medium: '1.125rem',
            small: '1.0625rem',
            xSmall: '0.9375rem',
            xxSmall: '0.8125rem'
        }
    },
    link: {
        mobile: {
            large: '1.25rem',
            medium: '1.125rem',
            small: '1rem',
            xSmall: '0.875rem',
            xxSmall: '0.8125rem'
        },
        tablet: {
            large: '',
            medium: '',
            xSmall: '',
            small: '',
            xxSmall: ''
        },
        desktop: {
            large: '1.25rem',
            medium: '1.125rem',
            small: '1rem',
            xSmall: '0.875rem',
            xxSmall: '0.8125rem'
        }
    }
})
