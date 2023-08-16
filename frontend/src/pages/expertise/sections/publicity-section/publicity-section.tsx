import React from 'react';
import  { SplitScreen, Box } from '@aloha/layout';
import { Image, Heading, Paragraph } from '@aloha/components';
import { ParagraphSize, HeadingSize } from '@aloha/common'; 
import * as styles from './publicity-section.css';

export const PublicitySection = () => {
  return (
    <>
        <div className={styles.publicitySection}>
            <SplitScreen 
                leftContent={
                  <Box className={styles.text}>
                    <Heading variant={HeadingSize.H2}> Campagnes </Heading>
                    <Paragraph size={ParagraphSize.Medium}>
                    La planification, la production et la mise en ligne de contenus pertinents à haute valeur ajoutée, c’est bien notre tasse de thé. Jumelé à une stratégie appropriée, la création de contenu multiplateforme a le pouvoir de fidéliser vos audiences, et les transformer en clientèle loyale.
                    </Paragraph>
                </Box>
                }
                rightContent={
                  <Image src={'./src/assets/image-content.jpg'}></Image>
                }/>
        </div>
    </>
  )
}
