import React from 'react';
import * as styles from './image.css';

export type Props = {
    src: string,
}

export const Image: React.FC<Props> = ({
    src
}) => {

  return (
    <>
    <div className={styles.imgContainer}>
        <img src={src} className={styles.img}/>
    </div>
    </>
  )
}
