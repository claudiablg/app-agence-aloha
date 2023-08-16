

export enum InputType {
    text = 'text',
    number = 'number',
    select = 'select',
}

export enum InputSize {
    large = 'large',
    medium = 'medium',
    small = 'small',
}

export enum InputValidityState {
    neutral = 'neutral',
    valid = 'valid',
    warning = 'warning', 
    error = 'error',
}

/**
 * Position of the icon in the input field
 *
 * @default 'none'
 */
export enum InputIcon {
    none = 'none',
    icon = 'icon',
    left = 'left',
    right = 'right',
}

export type InputProps = InputStyleProps;

export interface InputStyleProps {
    /**
     * The visual importance of the component
     */
    // variant: Variant;
    /**
     * Icon placement
     */
    icon: InputIcon;
    /**
     * What icon to render
     */
    // Icon: IconName | `${IconName}`;
    /**
     * General size of the input
     */
    size: InputSize;
    /**
     * Validation state
     */
    validity: InputValidityState;
    /**
     * Loading state
     */
    loading: boolean;
    /**
     * Disabled state
     */
    disabled: boolean;
  }