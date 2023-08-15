import react from 'react';
import { Button } from '@aloha/components';
import { Variant } from '../../common/components.props';
import { AboutSection, AgencySection, ExpertiseSection, HeroSection } from './sections';

export const Home = () => {

    return(
        <>
            <HeroSection title="Cultiver les marques pour créer des expériences inoubliables et générer des connexions humaines authentiques." />
            <AboutSection />
            <AgencySection />
            <ExpertiseSection />
        </>

    )
}

export default Home;