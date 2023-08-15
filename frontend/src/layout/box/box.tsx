import { getMergedClassname } from "@aloha/utilities";
import { Align } from '@aloha/common';
import * as styles from './box.css';

type Props = {
    className?: any,
    align?: Align,
    children: any,
}


export const Box: React.FC<Props> = ({  
    className,
    align,
    children,
    ...props
}) => {

    const classNames = getMergedClassname([
        className,
        styles[align ? align : Align.left],
        // styles[size ? size : ButtonSize.medium]
    ])

   
    return(
        <div className={classNames} {...props}>
            {children}
        </div>
    )
}

export default Box;

