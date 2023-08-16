import React from 'react'
import { Center, SplitScreen, Box } from '@aloha/layout';
import * as styles from './agency-section.css'
import { HeadingSize, ParagraphSize } from '@aloha/common';
import { Heading, Image, Paragraph } from '@aloha/components';

export const AgencySection = ({}) => {
  return (
    <>
     <div className={styles.agencySection}>
      <SplitScreen 
        leftContent={
            <Image src={'./src/assets/image-agency.jpg'}></Image>
        }
        rightContent={
          <Box className={styles.text}>
            <Heading variant={HeadingSize.H2}> L'agence </Heading>
            <Paragraph size={ParagraphSize.Medium}>
              Aloha est une agence marketing qui se spécialise en création. Nous concevons des campagnes multiplateformes à haute valeur ajoutée pour des organisations qui souhaitent laisser une empreinte positive sur leurs audiences.
            </Paragraph>
          </Box>
        }/>
    </div>
    </>
   
  )
}
