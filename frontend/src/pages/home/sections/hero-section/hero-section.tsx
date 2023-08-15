import React from 'react'
import { Center } from '@aloha/layout';
import { HeadingSize } from '@aloha/common';
import { BackgroundImage, Heading } from '@aloha/components'
import * as styles from './hero-section.css'

export type Props = {
    title: string,
}

export const HeroSection: React.FC<Props> = ({ title }) => {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.wrapper}>
            {/* <Center> */}
            <Heading variant={HeadingSize.H1}>{title}</Heading>
            {/* </Center> */}
            <BackgroundImage url={'./src/assets/image-sunset.jpg'}></BackgroundImage>
        </div>
      </div>
    </>
  )
}
