import { Variant } from './components.props';

export enum ButtonSize {
    large = 'large',
    medium = 'medium',
    small = 'small',
    xSmall = 'xSmall'
}

export enum ButtonState {
    default = 'default',
    pressed = 'pressed',
    focused = 'focused',
    loading = 'loading',
    disabled = 'disabled'
}

export type ButtonProps = ButtonStyleProps;

export interface ButtonStyleProps {
    variant: Variant,
    // icon: string,
    // size: ButtonSize,
    // state: ButtonState
}