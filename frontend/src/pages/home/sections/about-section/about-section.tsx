import React from 'react'
import { Center } from '@aloha/layout';
import * as styles from './about-section.css'
import { HeadingSize, ParagraphSize } from '@aloha/common';
import { Heading } from '@aloha/components';

export const AboutSection = ({}) => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.wrapper}>
          <Center maxWidth={'47rem'}>
              <Heading variant={HeadingSize.H3}>
                  Aloha signifie un mode de vie magnifique et en toute simplicité où pour être heureux, on accomplit les choses avec amour. Dans notre agence, la philosophie Aloha est dans notre ADN. On cultive les projets de manière optimiste et durable, dans le plaisir, le respect et l’harmonie.
              </Heading>
          </Center>
      </div>
    </div>
  )
}
