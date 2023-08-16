import React, { } from 'react'
import { InputHTMLAttributes } from "react";
import { InputIcon, InputSize, InputValidityState, InputProps } from '@aloha/common';
import { classnames } from '@aloha/utilities';
import * as styles from './input-text.css';

// type Props = React.InputHTMLAttributes & {
//     className?: string,
//     icon: InputIcon,
//     size: InputSize,
//     validity: InputValidityState,
//     loading: boolean,
//     disabled: boolean,
//     value?: string,
//     onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
// };

type Props = InputHTMLAttributes<any> &
//  Pick<ButtonProps, 'icon' | 'size' | 'state' | 'variant'> & { 
    Pick<InputProps,'size'> & { 
        as?: 'div'; 
    } & {     
    // variant: Variant;
    // label: string,
    size: InputSize,
    placeholder: string,
    value: string,
    disabled?: boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

// type Props = InputProps & {
//     placeholder: string,
//     value: string,
//     onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

    

// export const InputText = React.memo(
//   React.forwardRef<HTMLInputElement, Props>(function InputText(
//     {
//       type = 'text',
//       ...props
//     }
//   )
//     {

//     }
//   )
// )

export const InputText: React.FC<Props> = ({
    // className,
    // icon,
    // validity = InputValidityState.neutral,
    // loading = false,
    // disabled = false,
    placeholder,
    value,
    onChange,
}) => {

    // const classNames = classnames([className]);
  return (
    <>
    <div className={styles.wrapper}>
        <input type={'text'} value={value} placeholder={placeholder} onChange={onChange}>
        </input>
    </div>
    </>
  )
}
