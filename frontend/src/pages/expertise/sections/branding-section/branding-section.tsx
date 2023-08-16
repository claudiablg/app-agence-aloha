import React from 'react';
import  { SplitScreen, Box } from '@aloha/layout';
import { Image, Heading, Paragraph } from '@aloha/components';
import { ParagraphSize, HeadingSize } from '@aloha/common'; 
import * as styles from './branding-section.css';

export const BrandingSection = () => {
  return (
    <>
        <div className={styles.brandingSection}>
            <SplitScreen 
                leftContent={
                  <Box className={styles.text}>
                    <Heading variant={HeadingSize.H2}> Branding et design </Heading>
                    <Paragraph size={ParagraphSize.Medium}>
                    Le logo, la charte graphique, le style rédactionnel, tout est architecturé pour élaborer votre image de marque en créant un univers qui vous est propre et qui favorise une adhésion solide entre votre clientèle et vous.
                    </Paragraph>
                </Box>
                }
                rightContent={
                  <Image src={'./src/assets/image-branding.jpg'}></Image>
                }/>
        </div>
    </>
  )
}
