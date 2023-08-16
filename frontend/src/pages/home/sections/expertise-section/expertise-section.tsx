import React from 'react'
import { Center, SplitScreen, Box } from '@aloha/layout';
import * as styles from './expertise-section.css'
import { HeadingSize, ParagraphSize } from '@aloha/common';
import { Heading, Image, Paragraph } from '@aloha/components';

export const ExpertiseSection = ({}) => {
  return (
    <>
     <div className={styles.expertiseSection}>
      <SplitScreen 
        leftContent={
          <Box className={styles.text}>
            <Heading variant={HeadingSize.H2}> Expertises </Heading>
            <Paragraph size={ParagraphSize.Medium}>
              Aloha est une agence marketing qui se spécialise en création. Nous concevons des campagnes multiplateformes à haute valeur ajoutée pour des organisations qui souhaitent laisser une empreinte positive sur leurs audiences.
            </Paragraph>
          </Box>
        }
        rightContent={
          <Image src={'./src/assets/image-strategy.jpg'}></Image>
         
        }/>
    </div>
    </>
   
  )
}
