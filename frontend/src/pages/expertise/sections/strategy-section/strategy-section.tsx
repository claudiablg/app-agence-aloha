import React from 'react';
import  { SplitScreen, Box } from '@aloha/layout';
import { Image, Heading, Paragraph } from '@aloha/components';
import { ParagraphSize, HeadingSize } from '@aloha/common'; 
import * as styles from './strategy-section.css';

export const StrategySection = () => {
  return (
    <>
        <div className={styles.strategySection}>
            <SplitScreen 
                leftContent={
                    <Image src={'./src/assets/image-strategy.jpg'}></Image>
                }
                rightContent={
                <Box className={styles.text}>
                    <Heading variant={HeadingSize.H2}> Stratégie et formation </Heading>
                    <Paragraph size={ParagraphSize.Medium}>
                    L’analyse de l’environnement, la planification stratégique et la collecte de données sont les piliers d’une création éloquente et persuasive. Partageurs de nature, on vous accompagne grâce à la formation pour démystifier les pratiques d'excellence en création pour faire rayonner vos projets.
                    </Paragraph>
                </Box>
                }/>
        </div>
    </>
  )
}
