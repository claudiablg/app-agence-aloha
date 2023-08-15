import { ButtonHTMLAttributes } from "react";
import { ButtonProps } from '../../common/button.props';
import { Variant } from '../../common/components.props';
import { FC } from 'react';
import * as styles from './button.css';

type Props = ButtonHTMLAttributes<any> &
//  Pick<ButtonProps, 'icon' | 'size' | 'state' | 'variant'> & { 
    Pick<ButtonProps,'variant'> & { 
        as?: 'button' | 'a' | 'div'; 
    } & {     
    variant: Variant;
    // label: string,
    disabled?: boolean,
}


export const Button: FC<Props> = ({ 
    id,
    style, 
    className,
    children,
    variant,
    // size,
    // state,
    disabled,
    ...props
}) => {

    // const classNames = {
    //     className,
    //     styles
    // }

    return(
        <button 
            id={id}
            style={style}
            className={styles.primary}
            disabled={disabled}
            {...props}>
            {children}
        </button>
    )
}

export default Button;