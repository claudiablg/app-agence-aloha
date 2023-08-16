import React from 'react'
import * as styles from './background-image.css';

type Props = {  
    url: string,
}

export const BackgroundImage: React.FC<Props> = ({
    url,
}) => {

    const imgStyle = {
        backgroundImage: `url('${url}')`,
        backgroundColor: `rgba(0,0,0.25)`,
    }
    console.log(url);
    console.log(imgStyle)
  return (
      <img style={imgStyle} className={styles.backgroundImage} />
  )
}
