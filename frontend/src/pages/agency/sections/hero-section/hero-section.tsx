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
        <div className={styles.wrapper}>
            <Heading variant={HeadingSize.H1}>{title}</Heading>
            <BackgroundImage url={'./src/assets/image-agency.jpg'}></BackgroundImage>
        </div>
    </>
  )
}
