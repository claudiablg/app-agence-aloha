import React, { forwardRef, HTMLAttributes, ElementType, useRef } from 'react';
import { ParagraphSize, TextStyle } from '@aloha/common';
import { getMergedClassname } from '@aloha/utilities';
import * as styles from './paragraph.css';

type Props = {
    as?: ElementType,
    size: ParagraphSize,
    textStyle?: TextStyle,
    style?: any,
    children: any,
    className?: string,
}

export const Paragraph: React.FC<Props> = ({ 
    as: Paragraph = 'p', 
    size = ParagraphSize.Medium, 
    textStyle = TextStyle.Normal,
    className, 
    children, 
    ...props 
}) => {

    /**
     * Styles
     */
    const classNames = getMergedClassname([
        className || 
        styles[size ? size : ParagraphSize.Medium],
        styles[textStyle ? textStyle : TextStyle.Bold]
    ]);

    return <Paragraph size={size} className={classNames} style={{
        //@ts-config
        // fontSize: ''
    }} {...props}>{children}</Paragraph>
}

export default Paragraph;
