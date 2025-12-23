import React from 'react';
import Banner from '../Banner/Banner';
import ServiceCard from '../ServiceCard/ServiceCard';
import ImpactSection from '../ImpactSection/ImpactSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceCard></ServiceCard>
            <ImpactSection></ImpactSection>
        </div>
    );
};

export default Home;