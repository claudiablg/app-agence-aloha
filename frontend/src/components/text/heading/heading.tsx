import React, { forwardRef, HTMLAttributes, ElementType, useRef } from 'react';
import { HeadingSize } from '@aloha/common';
import { getMergedClassname } from '@aloha/utilities';
import * as styles from './heading.css';

type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';

type HeadingProps = {
    as?: ElementType,
    variant?: HeadingSize,
    style?: any,
    children: any,
    className?: string,
}

export const Heading: React.FC<HeadingProps> = ({ as: Tag = 'div', variant = HeadingSize.H1, className, children, ...props }) => {

    /**
     * Styles
     */
    const classNames = getMergedClassname([
        className || 
        styles[variant ? variant : HeadingSize.H1],
    ]);

    return <Tag variant={variant} className={classNames} style={{
        //@ts-config
        // fontSize: ''
    }} {...props}>{children}</Tag>
}

export default Heading;
