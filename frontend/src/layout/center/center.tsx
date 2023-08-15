import React from 'react'
import * as styles from './center.css';

type Props = {
    maxWidth?: string;
    children: any,
}

export const Center: React.FC<Props> = ({
    maxWidth,
    children,
}) => {
  return (
    <div className={styles.wrapper}>
        {children}
    </div>
  )
}
